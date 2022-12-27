import AssetManager from './assetManager';
import './components/renderer';

export default class AframeContext {
  constructor(settings) {
    this.inVR = false;
    // settings pointer
    this.settings = settings;
    this.createScene();
    // create asset manager
    this.assetManager = new AssetManager(this.scene);
  }

  createScene() {
    // find scene if exists else create scene
    const scene = document.getElementsByTagName('a-scene');
    if (scene.length > 0) this.scene = scene[0];
    else {
      this.scene = document.createElement('a-scene');
      document.body.appendChild(this.scene);
      this.newScene = true;
    }

    // add stats to scene if debug
    if (this.settings.debug) this.scene.setAttribute('stats', '');

    //custom renderer params like local clipping
    this.scene.setAttribute('vr-renderer', '');

    // check if in VR
    this.scene.addEventListener(
      'enter-vr',
      (() => {
        this.inVR = true;
      }).bind(this)
    );
    this.scene.addEventListener(
      'exit-vr',
      (() => {
        this.inVR = false;
      }).bind(this)
    );
  }

  createContainer(web2vr) {
    // conttainer for all aframe elements
    this.container = document.createElement('a-entity');
    this.container.classList.add('vr-container');
    this.container.setAttribute(this.settings.interactiveTag, '');

    // position container
    const width =
      parseFloat(window.getComputedStyle(web2vr.container).width) *
      (1 / this.settings.scale);
    let x = this.settings.position.x;
    // if x=0 then then we want to be in center for testing and showcase
    if (x == 0) x = x - width / 2;
    this.container.object3D.position.set(
      x,
      this.settings.position.y,
      this.settings.position.z
    );
    // update rotation from aframe(1.0.4) because there is bug(rotation x will be wrong) if you update with three.js
    this.container.setAttribute('rotation', {
      x: this.settings.rotation.x,
      y: this.settings.rotation.y,
      z: this.settings.rotation.z,
    });

    const parentElement = this.settings.parentElement;
    if (parentElement) parentElement.appendChild(this.container);
    else {
      this.scene.appendChild(this.container);
    }

    // pointer for grabRotateStatic
    this.container.web2vr = web2vr;
  }

  createControllers() {
    // keyboard
    this.keyboard = document.getElementById('vr-keyboard');
    if (!this.keyboard) {
      this.keyboard = document.createElement('a-entity');
      this.keyboard.id = 'vr-keyboard';
      this.keyboard.setAttribute('a-keyboard', '');
      this.keyboard.setAttribute('grabbable', '');
      this.scene.appendChild(this.keyboard);
      this.keyboard.object3D.visible = false;

      // current active input
      this.keyboard.activeInput = null;
      // event listener for the keyboard key press
      document.addEventListener('a-keyboard-update', (e) => {
        if (this.keyboard.activeInput) {
          const code = parseInt(e.detail.code);
          let value = this.keyboard.activeInput.value;

          // backspace
          if (code == 8) value = value.slice(0, -1);
          // submit or cancel
          else if (code == 6 || code == 24) {
            this.keyboard.object3D.visible = false;
            this.keyboard.object3D.position.y = 10000; // because raycasting still collides with invisible objects
            this.keyboard.activeInput.element.active = false;
            this.keyboard.activeInput.element.update();
            this.keyboard.activeInput = null;
            return;
          }
          // ignore arrow keys
          else if (![37, 38, 39, 40].includes(code)) value += e.detail.value;

          this.keyboard.activeInput.value = value;
          this.keyboard.activeInput.element.update();
        }
      });
    }
  }
}
