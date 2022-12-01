import * as HyperbeamPromise from '@hyperbeam/web';
import { THREE } from '@pinser-metaverse/core';

declare const AFRAME: any;

AFRAME.registerComponent('hyperbeam', {
  async init() {
    // Manipulate and set the mesh
    const geometry = this.el.getObject3D('mesh').geometry;
    const { width, height } = geometry.parameters;
    // Need to offset for Three.js left-handed coordinate system
    // https://stackoverflow.com/questions/1263072/changing-a-matrix-from-right-handed-to-left-handed-coordinate-system
    // Apparently this isn't needed for Firefox, but it's need for Firefox if using Three.js directly without AFrame?
    if (!navigator.userAgent.includes('Firefox')) {
      geometry.rotateZ(Math.PI);
      geometry.rotateY(Math.PI);
    }
    const texture = new THREE.Texture();
    const renderer = this.el.sceneEl.renderer;
    const material = new THREE.MeshBasicMaterial({ map: texture }); // Can we re-use the mesh's material?
    material.side = THREE.DoubleSide;
    const plane = new THREE.Mesh(geometry, material);
    this.el.setObject3D('mesh', plane);

    // Create a Hyperbeam computer
    const embedURL =
      'https://1aa2bnwfuuv7hod22dmbiqxql.hyperbeam.com/leDwl_X5Sx6wdT8-4kEprQ?token=iGrg60bOaLW6TJrfvK1Sl3J477Kv41GSKh9M4rV90tg'; // Running locally and you have an embed URL? Set it here

    // Render the Hyperbeam computer
    const Hyperbeam = (await HyperbeamPromise).default;
    const hb = await Hyperbeam(
      document.getElementById('hbcontainer') as any,
      embedURL,
      {
        frameCb: (frame) => {
          if (!texture.image) {
            if (frame.constructor === HTMLVideoElement) {
              // hack: three.js internal methods check for .width and .height
              // need to set manually for video so that three.js handles it correctly
              frame.width = frame.videoWidth;
              frame.height = frame.videoHeight;
            }
            texture.image = frame;
            texture.needsUpdate = true;
          } else {
            renderer.copyTextureToTexture(
              new THREE.Vector2(0, 0),
              new THREE.Texture(frame as any),
              texture
            );
          }
        },
        audioTrackCb: (track) => {
          (document.getElementById('audio') as any).srcObject = new MediaStream(
            [track]
          );
          // This function never fire: it seems AFrame only supports static audio
          this.el.addEventListener('sound-loaded', () => {
            this.el.components.sound.playSound();
          });
        },
      }
    );

    // Handle mouse inputs
    const handlePointer = (e) => {
      const vector = new THREE.Vector3().copy(e.detail.intersection.point);
      plane.worldToLocal(vector);
      hb.sendEvent({
        type: e.type,
        x: vector.x / width + 0.5,
        y: -vector.y / height + 0.5,
        // AFrame v1.13.0 does not expose the original mouse event:
        // https://github.com/aframevr/aframe/pull/5088
        button: 0,
      });
    };
    // At the moment there's no "mousemove" event
    // https://aframe.io/docs/1.3.0/components/cursor.html#events
    this.el.addEventListener('mousedown', handlePointer);
    this.el.addEventListener('mouseup', handlePointer);
    window.addEventListener('wheel', (e) => {
      if (this.el.is('cursor-hovered')) {
        hb.sendEvent({
          type: 'wheel' as any,
          deltaY: e.deltaY,
        });
      }
    });
  },
});
