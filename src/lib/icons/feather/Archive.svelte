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
  <polyline points="21 8 21 21 3 21 3 8" />
  <rect x="1" y="3" width="22" height="5" />
  <line x1="10" y1="12" x2="14" y2="12" />
</svg>