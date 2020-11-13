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
  <line x1="8" y1="12" x2="16" y2="12" />
  <line x1="12" y1="16" x2="12" y2="16" />
  <line x1="12" y1="8" x2="12" y2="8" />
  <circle cx="12" cy="12" r="10" />
</svg>