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
  <polyline points="4 7 4 4 20 4 20 7" />
  <line x1="9" y1="20" x2="15" y2="20" />
  <line x1="12" y1="4" x2="12" y2="20" />
</svg>