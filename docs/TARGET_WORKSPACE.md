# Generated target workspace

Repository transpilation never edits the source repository in place.

The generator materializes a separate target workspace. Preserved assets may be copied; translatable files begin as `pending-translation` until an adapter emits target content. A `transpiler.manifest.json` binds the output to the analysed source plan and records artifact dispositions and proposed substitutions.

A generated workspace is **partial** until every required translation is emitted and every proposed runtime/build substitution is resolved. It is not **validated** until deterministic build/test/invariant checks pass.

Target paths are normalized and path traversal is rejected.
