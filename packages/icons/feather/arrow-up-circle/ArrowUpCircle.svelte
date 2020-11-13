<script>
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
  <circle cx="12" cy="12" r="10" />
  <polyline points="16 12 12 8 8 12" />
  <line x1="12" y1="16" x2="12" y2="8" />
</svg>