# Element creation

> **_ Libraries concerned _**  
> [@pinser-metaverse/core](https://www.npmjs.com/package/@pinser-metaverse/core)  
> [@pinser-metaverse/observe](https://www.npmjs.com/package/@pinser-metaverse/observe)

## Pin's creation

On [pinser-metaverse](https://www.pinser-metaverse.com), a library who expose an autonomous 3d webcomponents is named a pin's.  
In this section, we will create our first pin's !

### Generate a new Pin's

To generate a Pin's, we will use a nx generator embedded in the [metaverse-bootstrap](https://github.com/pinser-metaverse/metaverse-boostrap) project.

On a bash / DOS terminal, execute the following command **in your project directory**:

```bash
yarn nx workspace-generator pins {pins-name} {pins-domain}
```

> `pins-name` is the name of your webcomponent
> `pins-domain`is a directory who group several pin's

This command generate a new directory in `libs/{pins-domain}/{pins-name}`.  
The pin's source code is available in the file `libs/{pins-domain}/{pins-name}/src/lib/{pins-name}.element.ts

**example for a pins `hello-world` in the domain `example`**

```bash
yarn nx workspace-generator pins hello-world example
```

<iframe src="https://codesandbox.io/embed/github/pinser-metaverse/pinser-metaverse-examples/tree/element-creation-generate-pins/?fontsize=10&hidenavigation=1&theme=dark&view=split&module=/libs/example/hello-world/src/lib/hello-world.element.ts"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Pinser element-creation Pin's generation"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### Display a Pin's

A generated Pin's can be served to develop it without the full context of your metaverse.

On a bash / DOS terminal, execute the following command **in your project directory**:

```bash
yarn nx serve {pins-domain}-{pins-name}
```

> a new port is opened to see the preview on your browser. The default port is `3000` if it is available.

### Use variable in the template

[pinser-metaverse](https://www.pinser-metaverse.com) use [lit-html](https://lit.dev) to menage the template. Your can read more information on [lit documentation](https://lit.dev/docs/templates/overview/).

```typescript
import {
  customElement,
  html,
  MetaElement,
  TemplateResult,
} from '@pinser-metaverse/core';

@customElement('example-hello-world')
export class HelloWorldElement extends MetaElement {
  override render(): TemplateResult {
    const text = 'Hello world !';
    return html`<a-entity text="value: ${text};"></a-entity>`;
  }
}
```

### Add parameters to your Pin's

To keep the compatibility with [AFrame](), [pinser-metaverse](https://www.pinser-metaverse.com) use a similar interface that [lit](https://lit.dev) to manage the properties, but don't use [lit](https://lit.dev). So, there are some little differencies with the behavior and the interface.

```typescript
import {
  customElement,
  html,
  MetaElement,
  TemplateResult,
} from '@pinser-metaverse/core';

@customElement('example-hello-world')
export class HelloWorldElement extends MetaElement {
  @property()
  text: string;

  override render(): TemplateResult {
    return html`<a-entity text="value: ${this.text};"></a-entity>`;
  }
}
```

```html
<meta-scene>
  <template slot="scene">
    <example-hello-world text="Hello World"></example-hello-world>
  </template>
</meta-scene>
```

### With an aframe hook

```typescript
import {
  customElement,
  html,
  MetaElement,
  TemplateResult,
} from '@pinser-metaverse/core';

@customElement('example-hello-world')
export class HelloWorldElement extends MetaElement {
  override init(): void {
    console.log('example-hello-world element is initialized');
  }

  override render(): TemplateResult {
    return html`<a-box></a-box>`;
  }
}
```

> Don't hesitate to improve this documentation, any help will be amazing !  
> [![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/pinser-metaverse/pinser-metaverse/blob/master/docs/element-creation.md)
