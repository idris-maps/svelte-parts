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
  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
  <line x1="6" y1="6" x2="6.01" y2="6" />
  <line x1="6" y1="18" x2="6.01" y2="18" />
</svg>