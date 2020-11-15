<script>
  import Icon from './FeatherIcon.svelte'
  import icons from './icons'
  export let term = ''
  $: list = term.trim() === '' ? icons.feather : icons.feather.filter(d => d.includes(term))

</script>

{#if list.length !== 0}
  <details class="icon-collection" open>
    <summary>Feather ({list.length})</summary>
    <div class="icon-list">
      {#each icons.feather as d}
        <div class={`icon-container ${d.includes(term) ? '' : 'icon-hidden'}`}>
          <div class="icon-img">
            <Icon name={d} />
          </div>
          <div class="icon-name">
            {d}
          </div>
        </div>
      {/each}
    </div>
  </details>
{/if}