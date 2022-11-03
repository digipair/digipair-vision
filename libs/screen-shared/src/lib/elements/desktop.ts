import {
  customElement,
  html,
  MetaElement,
  property,
  TemplateResult,
} from '@pinser-metaverse/core';

@customElement('meta-screen-shared-desktop')
export class ScreenSharedDesktopElement extends MetaElement {
  @property()
  screenid!: string;

  @property()
  streamid!: string;

  @property()
  curved!: boolean;

  override render(): TemplateResult {
    return html`
      <a-entity
        material=${`src: #screen-shared-${this.screenid};`}
        material=${this.curved
          ? `side: back; repeat: -1 1; src: #screen-shared-${this.screenid};`
          : `side: front; src: #screen-shared-${this.screenid};`}
        geometry=${this.curved
          ? `primitive: cylinder; openEnded: true; thetaLength: 46; thetaStart: 157; radius: 2; height: 0.9;`
          : `primitive: plane; width: 1.6; height: 0.9;`}
        position=${this.curved ? `0 0 2` : `0 0 0`}
        networked-video-source=${`streamName: ${this.streamid}`}
      ></a-entity>
    `;
  }
}
