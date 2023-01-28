If you want to make it fit the container like SVG, set `inline` to `false`

```html
<script>
  import Icon from 'svelte-parts/icons/feather/Activity.svg'
</script>

<div style="width:100%;max-width:300px;color:#ff3e00">
  <Icon inline={false} />
</div>
```
