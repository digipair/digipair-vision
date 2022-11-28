import { Scene } from 'aframe';

AFRAME.registerComponent('hide-on-ar', {
  enterVr: null as any,
  exitVr: null as any,

  init: function () {
    const sceneEl = this.el.sceneEl as Scene;

    if (sceneEl.is('ar-mode')) {
      this.el.object3D.visible = false;
    }

    this.enterVr = () => {
      if (sceneEl.is('ar-mode')) {
        this.el.object3D.visible = false;
      }
    };
    this.exitVr = () => {
      this.el.object3D.visible = true;
    };
    sceneEl.addEventListener('enter-vr', this.enterVr);
    sceneEl.addEventListener('exit-vr', this.exitVr);
  },

  remove: function () {
    const sceneEl = this.el.sceneEl as Scene;

    sceneEl.removeEventListener('enter-vr', this.enterVr);
    sceneEl.removeEventListener('exit-vr', this.exitVr);
  },
});
