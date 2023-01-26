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
  <circle cx="12" cy="12" r="4" />
  <line x1="1.05" y1="12" x2="7" y2="12" />
  <line x1="17.01" y1="12" x2="22.96" y2="12" />
</svg>