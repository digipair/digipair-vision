import {
  addDependenciesToPackageJson,
  formatFiles,
  generateFiles,
  getWorkspaceLayout,
  installPackagesTask,
  names,
  Tree,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import * as path from 'path';
import { v4 } from 'uuid';

export default async function (tree: Tree, schema: any) {
  const { npmScope } = getWorkspaceLayout(tree);
  const { className } = names(schema.name);

  await libraryGenerator(tree, {
    name: schema.name,
    skipBabelrc: true,
    directory: schema.domain,
  });
  tree.delete(
    `./libs/${schema.domain}/${schema.name}/src/lib/${schema.domain}-${schema.name}.ts`
  );
  tree.delete(
    `./libs/${schema.domain}/${schema.name}/src/lib/${schema.domain}-${schema.name}.spec.ts`
  );

  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    `./libs/${schema.domain}/${schema.name}`,
    {
      name: schema.name,
      domain: schema.domain,
      npmScope,
      className,
      sessionUuid: v4(),
    }
  );

  addDependenciesToPackageJson(
    tree,
    { '@swc/helpers': '0.3.13' },
    {
      '@types/aframe': '^1.2.0',
      '@pinser-metaverse/core': '0.7.3',
      'npm-run-all': '^4.1.5',
      serve: '^14.0.1',
      '@swc/core': '1.2.185',
      'rollup-plugin-terser': '^7.0.2',
    }
  );

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}
