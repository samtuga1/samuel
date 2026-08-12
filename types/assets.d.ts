// Next handles stylesheet imports through its bundler, but TypeScript needs a
// declaration for them once side-effect imports are checked.
declare module "*.css";
