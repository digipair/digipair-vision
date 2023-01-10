import { Entity, THREE } from '@pinser-metaverse/core';

AFRAME.registerComponent('selectable', {
  schema: {
    pressDistance: { default: 0.06 },
  },

  init: function () {
    this.worldPosition = new THREE.Vector3();
    this.handEls = document.querySelectorAll('[hand-tracking-controls]');
    this.pressed = false;
    this.step = 0;
  },

  tick: function () {
    this.step = (this.step + 1) % 10;

    if (this.step > 0) {
      return;
    }

    const handEls = this.handEls;
    let handEl: Entity;
    let distance: number;
    for (let i = 0; i < handEls.length; i++) {
      handEl = handEls[i];
      distance = this.calculateFingerDistance(handEl);
      if (distance < this.data.pressDistance) {
        // if (!this.pressed) { this.el.emit('pressedstarted'); }
        this.pressed = true;
        return;
      }
    }
    if (this.pressed) {
      this.el.emit('click');
    }
    this.pressed = false;
  },

  calculateFingerDistance: function (handEl: any) {
    const el = this.el;
    const worldPosition = this.worldPosition;
    const fingerPosition = new THREE.Vector3();

    fingerPosition.copy(
      (handEl.components['hand-tracking-controls'] as any).indexTipPosition
    );
    handEl.object3D.parent.updateMatrixWorld();
    handEl.object3D.parent.localToWorld(fingerPosition);

    worldPosition.copy(el.object3D.position);
    el.object3D.parent.updateMatrixWorld();
    el.object3D.parent.localToWorld(worldPosition);

    return worldPosition.distanceTo(fingerPosition);
  },
} as any);
