<script lang="ts">
  import DropFile from 'svelte-parts/DropFile.svelte'

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