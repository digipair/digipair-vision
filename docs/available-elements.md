# Available elements

> **_ Libraries concerned _**  
> [@digipair-vision/core](https://www.npmjs.com/package/@digipair-vision/core)  
> [@digipair-vision/mesh](https://www.npmjs.com/package/@digipair-vision/mesh)  
> [@digipair-vision/teleport](https://www.npmjs.com/package/@digipair-vision/teleport)  
> [@digipair-vision/design-system](https://www.npmjs.com/package/@digipair-vision/design-system)  
> [@digipair-vision/screen-shared](https://www.npmjs.com/package/@digipair-vision/screen-shared)  
> [@digipair-vision/info](https://www.npmjs.com/package/@digipair-vision/info)

## @digipair-vision/spline

Display a [spline](https://spline.design) scene

```html
<meta-spline scene="SPLINECODE_URL"></meta-spline>
```

## @digipair-vision/spline

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

## @digipair-vision/teleport

Display a ring where the user is teleported if he selects it.

```html
<meta-teleport></meta-teleport>
```

## @digipair-vision/design-system

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
> see the real name [here](https://github.com/digipair-vision/digipair-vision/blob/master/libs/design-system/src/lib/const/icons.const.ts)

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

## @digipair-vision/screen-shared

Screen used to shared user webcam or user screen.

```html
<meta-screen-shared></meta-screen-shared>
```

## @digipair-vision/info

Display an oinformation icon.  
When the user is behind this icon, a dialog box is displayed with elements inner the template element.

```html
<meta-info color="COLOR" icon="ICON" width="WIDTH" height="HEIGHT">
  <template slot="content"></template>
</meta-info>
```

## AFrame primitives

All [AFrame](https://aframe.io) primitives are usable in a [digipair-vision](https://www.digipair-vision.com) project.  
[Go here](https://aframe.io/docs/) to find the full primitive list.

## Example

<iframe src="https://codesandbox.io/embed/github/digipair-vision/digipair-vision-examples/tree/available-elements-example/?fontsize=10&hidenavigation=1&theme=dark&view=preview&module=/apps/metaverse/src/lib/metaverse.space.ts"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Pinser available elements example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

> Don't hesitate to improve this documentation, any help will be amazing !  
> [![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/digipair-vision/digipair-vision/blob/master/docs/available-elements.md)
