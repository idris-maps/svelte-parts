<script lang="ts">
  export let inline = true
  const inlineStyle = 'width:1em;position:relative;top:0.15em;'
</script>

<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  style={inline ? inlineStyle : undefined}
>
  <line x1="21" y1="10" x2="7" y2="10" />
  <line x1="21" y1="6" x2="3" y2="6" />
  <line x1="21" y1="14" x2="3" y2="14" />
  <line x1="21" y1="18" x2="7" y2="18" />
</svg>