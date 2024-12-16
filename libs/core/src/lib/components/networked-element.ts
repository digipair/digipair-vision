// @ts-ignore
declare const NAF: any;

function getPathTo(element: Element, root: Element): string {
  if (element.id !== '') return 'id("' + element.id + '")';
  if (element === root) return element.tagName;

  let ix = 0;
  const siblings = (element.parentNode as Element).childNodes;
  for (let i = 0; i < siblings.length; i++) {
    const sibling = siblings[i] as Element;
    if (sibling === element)
      return (
        getPathTo(element.parentNode as Element, root) +
        '/' +
        element.tagName +
        '[' +
        (ix + 1) +
        ']'
      );
    if (sibling.nodeType === 1 && sibling.tagName === element.tagName) ix++;
  }

  return '';
}

function kebabCase(text: string) {
  return text
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

AFRAME.registerComponent('networked-element', {
  schema: {
    element: {
      type: 'string',
    },
    providers: {
      type: 'array',
    },
    networkedElements: {
      type: 'array',
    },
  },
  init() {
    let assets = this.el.sceneEl?.querySelector(':scope > a-assets');
    if (!assets) {
      assets = document.createElement('a-assets');
      this.el.sceneEl?.appendChild(assets);
    }

    const templateId = this.data.element;
    if (!assets.querySelector(`:scope > #${templateId}`)) {
      const template = document.createElement('template');
      template.setAttribute('id', templateId);

      const element = document.createElement('a-entity');
      element.setAttribute(this.data.element, {});
      for (const provider of this.data.providers) {
        element.setAttribute(provider, {});
      }

      (template as unknown as { content: Element }).content.appendChild(
        element
      );
      assets.appendChild(template);

      NAF?.schemas.add({
        template: `#${templateId}`,
        components: [
          'position',
          'rotation',
          'scale',
          ...this.data.networkedElements,
        ],
      });
    }

    this.el.setAttribute('networked', {
      template: `#${templateId}`,
      persistent: true,
      owner: 'scene',
      networkId: kebabCase(getPathTo(this.el, this.el.sceneEl as Element)),
    });
  },
});
