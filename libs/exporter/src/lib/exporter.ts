import { Entity } from '@pinser-metaverse/core';
import { GLTFExporter } from './GLTFExporter';

export function exporter(object3D: Entity['object3D'], filename: string): void {
  const gltfExporter = new GLTFExporter();

  gltfExporter.parse(
    object3D,
    (result: any) => {
      console.log(result);
      if (result instanceof ArrayBuffer) {
        saveArrayBuffer(result, `${filename}.glb`);
      } else {
        const output = JSON.stringify(result, null, 2);
        saveString(output, `${filename}.gltf`);
      }
    },
    (error: any) => {
      console.log('An error happened during parsing', error);
    }
  );
}

function saveString(text: string, filename: string) {
  save(new Blob([text], { type: 'text/plain' }), filename);
}

function saveArrayBuffer(buffer: any, filename: string) {
  save(new Blob([buffer], { type: 'application/octet-stream' }), filename);
}

function save(blob: any, filename: string) {
  const link = document.createElement('a') as any;
  link.style.display = 'none';
  document.body.appendChild(link); // Firefox workaround, see #6594

  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();

  link.remove();

  // URL.revokeObjectURL( url ); breaks Firefox...
}
