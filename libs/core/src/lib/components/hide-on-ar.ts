import { Scene } from 'aframe';

AFRAME.registerComponent('hide-on-ar', {
  init: function () {
    const sceneEl = this.el.sceneEl as Scene;

    if (sceneEl.is('ar-mode')) {
      this.el.object3D.visible = false;
    }

    sceneEl.addEventListener('enter-vr', () => {
      if (sceneEl.is('ar-mode')) {
        this.el.object3D.visible = false;
      }
    });
    sceneEl.addEventListener('exit-vr', () => {
      this.el.object3D.visible = true;
    });
  },
});
