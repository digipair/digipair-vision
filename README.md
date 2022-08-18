# @pinser-metaverse

pinser-metaverse is a library inspired from the very nice library [Polymer lit](https://lit.dev/) to map [A-Frame](https://aframe.io/) AR / VR / 3D elements on typescript classes like Angular/React/Lit.  
You can create simple, fast and reactive WebXR 3D / AR and VR scenes with all modern web development good practices.

**[Get started !](./docs/get-started.md)**

## Installation

Use the package manager [npm](https://www.npmjs.com/package/@pinser-metaverse/core) to install aframe-element.

```bash
npm install @pinser-metaverse/core @pinser-metaverse/scene @pinser-metaverse/player
```

## Usage

### By component

```typescript
import { customElement, MetaElement, html } from '@pinser-metaverse/core';

@customElement('my-3d-element')
exports My3dElement extends MetaElement {
  render() {
    return html`
      <a-entity text="value: Hello World;"></a-entity>
    `;
  }
}
```

```html
<meta-scene>
  <template slot="scene">
    <my-3d-element></my-3d-element>
  </template>
</meta-scene>
```

### With parameters

```typescript
import { customElement, MetaElement, html } from '@pinser-metaverse/core';

@customElement('my-text-element')
exports MyTextElement extends MetaElement {
  @property()
  text: string;

  render() {
    return html`
      <a-entity text="value: ${this.text};"></a-entity>
    `;
  }
}
```

```html
<meta-scene>
  <template slot="scene">
    <my-text-element text="Hello World"></my-text-element>
  </template>
</meta-scene>
```

### By attribute

```typescript
import { customElement, MetaElement, html } from '@pinser-metaverse/core';

@customElement('my-text-element')
exports MyTextElement extends MetaElement {
  @property()
  text: string;

  render() {
    return html`
      <a-entity text="value: ${this.data.text};"></a-entity>
    `;
  }
}
```

```html
<meta-scene>
  <template slot="scene">
    <a-entity my-text-element="text: Hello World;"></a-entity>
  </template>
</meta-scene>
```

### With an aframe hook

```typescript
import { customElement, MetaElement, html } from '@pinser-metaverse/core';

@customElement('my-3d-element')
exports My3dElement extends MetaElement {
  init() {
    console.log('component initilized', this.el);
  }

  render() {
    return html`
      <a-entity text="value: Hello World;"></a-entity>
    `;
  }
}
```

```html
<meta-scene>
  <template slot="scene">
    <my-3d-element></my-3d-element>
  </template>
</meta-scene>
```

## Documentation

- [Get started](./docs/get-started.md)

## Example

### Tictactoe

- Demo: https://pinser-metaverse-demo.onrender.com
- Source code: https://github.com/pinserworld/pinser-metaverse/blob/master/apps/demo/src/app/app.element.ts

_Tips: You can open 2 tabs on the same browser to test multiplayer mode._

![pinser-metaverse example tictactoe](./docs/assets/example-tictactoe.png)

### Pinser storybook

- Demo: https://pinser-widgets-storybook.onrender.com/

The owner of the multiplayer game is the first to open the link (player yellow). Next users to open the demo are red.

![Pinser storybook examples](./docs/assets/pinser-storybook.png)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
