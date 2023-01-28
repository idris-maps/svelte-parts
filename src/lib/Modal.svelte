<script lang="ts">
  import { fade } from 'svelte/transition'
  export let open = false
  export let onClose = () => {}
  export let backgroundOpacity = 0.8

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
      'background-color: rgb(0, 0, 0, ' + backgroundOpacity + ')',
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

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      close()
    }
  }
  const stopPropagation = (e: Event) => {
    e.stopPropagation()
  }
</script>

{#if open}
  <div style={style.background} on:click={close} on:keyup={onKeyUp} transition:fade="{{ duration: 300 }}">
    <div style={style.center}>
      <div on:click={stopPropagation} on:keydown={stopPropagation}>
        <slot></slot>
      </div>
    </div>
  </div>
{/if}
