# `@svelte-parts/modal`

A simple modal for svelte

[Demo](https://svelte-parts.surge.sh/modal)

Try it out in the [svelte REPL](https://svelte.dev/repl/9dc23be3526643d3ac99babe9c617b6b?version=3.46.6)

## Install

```
npm install @svelte-parts/modal
```

## Usage

```html
<script>
  import Modal from '@svelte-parts/modal'
  let open = false
</script>

<button on:click={() => open = true}>Demo</button>

<Modal open={open} onClose={() => open = false}>
  <div class="modal">
    <h1>Hello</h1>
    <p>from a modal</p>
    <p>Click outside of me to close</p>
  </div>
</Modal>

<style>
  .modal {
    background-color: white;
    padding: 2em;
    border-radius: 0.5em;
    min-width: 30vw;
  }
</style>
```