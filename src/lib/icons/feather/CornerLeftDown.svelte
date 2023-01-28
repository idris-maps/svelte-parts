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
  <polyline points="14 15 9 20 4 15" />
  <path d="M20 4h-7a4 4 0 0 0-4 4v12" />
</svg>