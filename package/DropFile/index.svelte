<script>import FallbackSvg from "./FallbackSvg.svelte";
export let multiple = false;
export let onDrop;
export let onEnter = () => {
};
export let onLeave = () => {
};
let isOver = false;
let input;
const handleEnter = () => {
  isOver = true;
  if (onEnter) {
    onEnter();
  }
};
const handleLeave = () => {
  isOver = false;
  if (onLeave) {
    onLeave();
  }
};
const handleDrop = (e) => {
  e.preventDefault();
  console.log(e.dataTransfer);
  const items = Array.from(e.dataTransfer.items);
  onDrop(multiple ? items.map((d) => d.getAsFile()) : [items[0].getAsFile()]);
  isOver = false;
};
const handleDragOver = (e) => {
  e.preventDefault();
};
const handleChange = (e) => {
  e.preventDefault();
  if (e.target && e.target.files) {
    onDrop(Array.from(e.target.files));
  }
};
const onClick = () => {
  input.click();
};
const onKeyDown = (e) => {
  if (e.key === "Enter") {
    input.click();
  }
};
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
