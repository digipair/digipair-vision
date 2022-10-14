import { Entity as _Entity } from 'aframe';
import { TemplateResult as _TemplateResult } from 'lit';

export const { THREE } = AFRAME;
export { html, LitElement, noChange, nothing } from 'lit';
export {
  customElement as customLitElement,
  property as propertyLit,
  state as stateLit,
} from 'lit/decorators.js';
export { unsafeHTML } from 'lit/directives/unsafe-html.js';
export { MetaElement } from './lib/classes/meta-element';
export { MetaProvider } from './lib/classes/meta-provider';
export { customElement } from './lib/decorators/custom-element';
export { inject } from './lib/decorators/inject';
export { injectable } from './lib/decorators/injectable';
export { state } from './lib/decorators/state';
export { property } from './lib/decorators/property';

export type TemplateResult = _TemplateResult;
export type Entity = _Entity;
