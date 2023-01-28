# DropFile

A component to upload files. Drop files or click it to browse the file system. Add the behavior to an exiting element or use the default component.

## Usage

```html
<script lang="ts">
  import DropFile from 'svelte-parts/DropFile.svelte'

  const onDrop = (files: File[]) =>
    alert(`Files: ${files.map(d => d.name).join(', ')}`) 
</script>

<DropFile onDrop={onDrop} />
```