<script lang="ts">
  import DropFile from '@svelte-parts/drop-file'

  const onDrop = (files: File[]) =>
    alert(`Files: ${files.map(d => d.name).join(', ')}`) 
</script>

<DropFile onDrop={onDrop} />
