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
  <line x1="19" y1="5" x2="5" y2="19" />
  <circle cx="6.5" cy="6.5" r="2.5" />
  <circle cx="17.5" cy="17.5" r="2.5" />
</svg>