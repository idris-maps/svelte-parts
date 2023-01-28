<script lang="ts">
  import DropFile from 'svelte-parts/DropFile.svelte'

  const onDrop = (files: File[]) =>
    alert(`Files: ${files.map(d => d.name).join(', ')}`) 
</script>

<DropFile onDrop={onDrop} />
