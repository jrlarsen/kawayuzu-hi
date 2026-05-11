#!/usr/bin/env node
import welcome from 'cli-welcome';
import pkgJSON from './package.json' with { type: "json" };

welcome({
   title: pkgJSON.name,
   tagLine: 'A friendly app',
   description: pkgJSON.description,
   version: pkgJSON.version,
   bgColor: '#fadc00',
   color: '#000000',
   bold: true,
   clear: true,
});

console.log(`
Hi

`);
