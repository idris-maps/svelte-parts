<script>
  import { fade } from 'svelte/transition'
  export let open = false
  export let onClose = () => {}

  const style = {
    background: [
      'display: block',
      'position: fixed',
      'z-index: 10',
      'left: 0',
      'top: 0',
      'width: 100vw',
      'height: 100vh',
      'overflow: auto',
      'background-color: rgb(0, 0, 0, 0.8)',
    ].join(';'),
    center: [
      'width: 100%',
      'height: 100%',
      'display: flex',
      'justify-content: center',
      'align-items: center',
    ].join(';'),
  }

  const close = () => {
    open = false
    if (onClose) { onClose() }
  }
</script>

{#if open}
  <div style={style.background} on:click={close} transition:fade="{{ duration: 300 }}">
    <div style={style.center}>
      <div on:click={e => e.stopPropagation()}>
        <slot></slot>
      </div>
    </div>
  </div>
{/if}
