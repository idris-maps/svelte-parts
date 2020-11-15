<script>
  import Icon from './MakiIcon.svelte'
  import icons from './icons'
  export let term = ''
  $: list = term.trim() === '' ? icons.maki : icons.maki.filter(d => d.includes(term))

</script>

{#if list.length !== 0}
  <details class="icon-collection" open>
    <summary>Maki ({list.length})</summary>
    <div class="icon-list">
      {#each icons.maki as d}
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