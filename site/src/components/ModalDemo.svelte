<script>
  import Modal from 'svelte-parts/Modal.svelte'
  let open = false
</script>

<button on:click={() => open = true}>Demo</button>

<Modal open={open} onClose={() => open = false}>
  <div class="modal">
    <h2>Hello from a modal</h2>
    <p>Click outside of me to close</p>
  </div>
</Modal>

<style>
  .modal {
    background-color: white;
    padding: 2em;
    border-radius: 0.5em;
  }

  h2 {
    margin-top: 0;
  }
</style>
