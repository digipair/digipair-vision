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
      appUuid: v4(),
      roomUuid: v4(),
    }
  );

  addDependenciesToPackageJson(
    tree,
    {},
    {
      '@types/aframe': '^1.2.0',
      '@pinser-metaverse/core': '0.2.0',
      'npm-run-all': '^4.1.5',
      serve: '^14.0.1',
    }
  );

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}
