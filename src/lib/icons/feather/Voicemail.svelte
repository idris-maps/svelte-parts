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
  <circle cx="5.5" cy="11.5" r="4.5" />
  <circle cx="18.5" cy="11.5" r="4.5" />
  <line x1="5.5" y1="16" x2="18.5" y2="16" />
</svg>