# Available elements

> **_ Libraries concerned _**  
> [@digipair-xr/core](https://www.npmjs.com/package/@digipair-xr/core)  
> [@digipair-xr/mesh](https://www.npmjs.com/package/@digipair-xr/mesh)  
> [@digipair-xr/teleport](https://www.npmjs.com/package/@digipair-xr/teleport)  
> [@digipair-xr/design-system](https://www.npmjs.com/package/@digipair-xr/design-system)  
> [@digipair-xr/screen-shared](https://www.npmjs.com/package/@digipair-xr/screen-shared)  
> [@digipair-xr/info](https://www.npmjs.com/package/@digipair-xr/info)

## @digipair-xr/spline

Display a [spline](https://spline.design) scene

```html
<meta-spline scene="SPLINECODE_URL"></meta-spline>
```

## @digipair-xr/spline

Manage a mesh in a GLTF or a Spline object

```html
<meta-mesh object="OBJECT_NAME"></meta-mesh>
```

### Example

```html
<a-gltf-model src="/assets/scene.glb">
  <meta-mesh object="Emoji" animation="property: position; to: -20 -10 0; dur: 2000; easing: linear; dir: alternate; loop: true;"></meta-mesh>
</a-gltf-model>
```

## @digipair-xr/teleport

Display a ring where the user is teleported if he selects it.

```html
<meta-teleport></meta-teleport>
```

## @digipair-xr/design-system

### Button

Display a button with icon and/or text

```html
<meta-button content="TEXT_CONTENT" icon="ICON" width="WIDTH"></meta-button>
```

### icon

Display an icon

```html
<meta-icon icon="ICON"></meta-icon>
```

> see the list [here](https://fonts.google.com/icons)  
> see the real name [here](https://github.com/digipair/digipair-xr/blob/master/libs/design-system/src/lib/const/icons.const.ts)

### bubble

Display an icon in a circle

```html
<meta-bubble icon="ICON"></meta-bubble>
```

### dialog

Display an dia&log box

```html
<meta-dialog color="COLOR" icon="ICON" width="WIDTH" height="HEIGHT"></meta-dialog>
```

## @digipair-xr/screen-shared

Screen used to shared user webcam or user screen.

```html
<meta-screen-shared></meta-screen-shared>
```

## @digipair-xr/info

Display an oinformation icon.  
When the user is behind this icon, a dialog box is displayed with elements inner the template element.

```html
<meta-info color="COLOR" icon="ICON" width="WIDTH" height="HEIGHT">
  <template slot="content"></template>
</meta-info>
```

## AFrame primitives

All [AFrame](https://aframe.io) primitives are usable in a [digipair-xr](https://opensource.digipair.ai) project.  
[Go here](https://aframe.io/docs/) to find the full primitive list.

## Example

<iframe src="https://codesandbox.io/embed/github/pinser-metaverse/pinser-metaverse-examples/tree/available-elements-example/?fontsize=10&hidenavigation=1&theme=dark&view=preview&module=/apps/metaverse/src/lib/metaverse.space.ts"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Pinser available elements example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

> Don't hesitate to improve this documentation, any help will be amazing !  
> [![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/digipair/digipair-xr/blob/master/docs/available-elements.md)
