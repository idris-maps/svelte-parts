---
title: "@svelte-parts/drop-file"
description: Drop files(s) or click to browse file system
layout: layout.njk
---

# @svelte-parts/drop-file

A component to upload files. Drop files or click it to browse the file system. Add the behavior to an exiting element or use the default component.

## Install

```
npm install @svelte-parts/drop-file
```

## Usage

```html
<script lang="ts">
  import DropFile from '@svelte-parts/drop-file'

  const onDrop = (files: File[]) =>
    alert(`Files: ${files.map(d => d.name).join(', ')}`) 
</script>

<DropFile onDrop={onDrop} />
```

```comp
name: drop-file
```

### With custom drop zone

```html
<script lang="ts">
  import DropFile from '@svelte-parts/drop-file'

  let fileOver = false

  const onDrop = (files: File[]) => {
    alert(`Files: ${files.map(d => d.name).join(', ')}`)
    fileOver = false
  }
</script>

<DropFile
  onDrop={onDrop}
  onEnter={() => fileOver = true}
  onLeave={() => fileOver = false}
>
  <div class={`drop-zone ${fileOver ? 'over' : ''}`}>
    {#if fileOver}
      <p>Drop it!</p>
    {:else}
      <p>Upload file</p>
    {/if}
  </div>
</DropFile>

<style>
  .drop-zone {
    display: grid;
    align-items: center;
    margin: auto;
    width: 200px;
    height: 100px;
    background-color: #ff3e00;
    color: white;
  }
  .over {
    background-color: white;
    color: #ff3e00;
    border: #ff3e00 solid 2px;
  }
  .drop-zone p {
    text-align: center;
  }
</style>
```

```comp
name: drop-file-custom
```

### Attributes

* `onDrop` returns an array of [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File)
* `onEnter` (optional) triggered when a file is over the drop zone
* `onLeave` (optional) triggered when no file is over the drop zone