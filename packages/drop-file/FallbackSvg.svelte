<script>
  export let over = false
</script>

<svg viewBox="0 0 80 80">
  <title>Drop files(s) or click to browse the file system</title>
  <g
    transform="translate(28, 15)"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    {#if over}
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    {:else}
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
      <polyline points="13 2 13 9 20 9"/>
    {/if}
  </g>
  <g
    transform="translate(40, 55)"
    text-anchor="middle"
    fill="currentColor"
    font-size="7"
  >
    {#if over}
      <text transform="translate(0, 5)">Drop it!</text>
    {:else}
      <text>Drop file(s) or click to</text>
      <text transform="translate(0, 10)">browse the file system</text>
    {/if}
  </g>
</svg>
