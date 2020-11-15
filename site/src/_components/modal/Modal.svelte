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
