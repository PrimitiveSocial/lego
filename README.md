# Lego
Handcrafted Vue components to help you create amazing uis.

## Local development flow
package directory: run `npm link`
project directory using the package: `npm link lego`

This will create a symlink between the package, and the project using it.`
Every time you want to test a new feature of the package, just run `npm link` again in your package directory, 
it will update the build inside your project's `node_modules`