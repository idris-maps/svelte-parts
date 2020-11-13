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
  <polyline points="12 16 16 12 12 8" />
  <line x1="8" y1="12" x2="16" y2="12" />
</svg>