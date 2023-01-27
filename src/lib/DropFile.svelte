<script lang="ts">
  import FallbackSvg from './DropFileFallbackSvg.svelte'

  export let multiple: boolean = false
  export let onDrop: (files: File[]) => void
  export let onEnter: () => void = () => {}
  export let onLeave: () => void = () => {}

  let isOver: boolean = false
  let input: HTMLInputElement

  const handleEnter = () => {
    isOver = true
    if (onEnter) { onEnter() }
  }

  const handleLeave = () => {
    isOver = false
    if (onLeave) { onLeave() }
  }

  const handleDrop = (e: Event) => {
    e.preventDefault()
    // @ts-ignore
    console.log(e.dataTransfer)
    // @ts-ignore
    const items = Array.from(e.dataTransfer.items)
    // @ts-ignore
    onDrop(items.map(d => d.getAsFile()))
    isOver = false
  }

  const handleDragOver = (e: Event) => {
    e.preventDefault()
  }

  const handleChange = (e: Event) => {
    e.preventDefault()
    // @ts-ignore
    if (e.target && e.target.files) {
      // @ts-ignore
      onDrop(Array.from(e.target.files))
    }
  }

  const onClick = () => {
    input.click()
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      input.click()
    }
  }
</script>

<div
  id="zone"
  on:drop={handleDrop}
  on:dragover={handleDragOver}
  on:dragenter={handleEnter}
  on:dragleave={handleLeave}
  on:click={onClick}
  on:keydown={onKeyDown}
  tabIndex={0}
>
  <slot>
    <div id="fallback">
      <FallbackSvg over={isOver} />
    </div>
  </slot>
</div>
<input
  id="hidden-input"
  type="file"
  on:change={handleChange}
  bind:this={input}
  {multiple}
/>

<style>
  #zone {
    width: 100%;
    height: 100%;
  }
  #hidden-input {
    display: none;
  }
  #fallback {
    display: grid;
	  align-items: center;
    width: 100%;
    height: 200px;
    border: black solid 1px;
    border-radius: 10px;
    border-style: dashed;
    border-color: inherit;
  }
  #fallback :global(svg) {
    margin: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
