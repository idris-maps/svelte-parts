# svelte-parts

docs: https://svelte-parts.surge.sh

## install

```
npm install svelte-parts
```

## components

* [DropFile](https://svelte-parts.surge.sh/drop-file) - Drop files(s) or click to browse file system 
* [Form](https://svelte-parts.surge.sh/form) - Yet another form component 
* [FormBuilder](https://svelte-parts.surge.sh/form-builder) - UI to create form descriptions for [Form](https://svelte-parts.surge.sh/form) 
* [Icons](https://svelte-parts.surge.sh/icons) - SVG icons from feather icons, maki icons and octicons 
* [Map](https://svelte-parts.surge.sh/map) - Mapping components using leaflet 
* [Markdown](https://svelte-parts.surge.sh/markdown) - Use markdown blocks in your svelte app 
* [Modal](https://svelte-parts.surge.sh/modal) - Just a modal 
* [Zoom](https://svelte-parts.surge.sh/zoom) - Allow pan and zoom on images

---

## update 2023-01-28

Now using [svelte-kit](https://kit.svelte.dev/) to package the components. It fixes typescript errors in svelte@3. All components are now available under the same npm library: `svelte-parts`. The old `@svelte-parts/...` libraries are deprecated but still available.

The `@svelte-parts/editor` was using an older version of [codemirror](https://codemirror.net/) and is not ported to `svelte-parts`.
