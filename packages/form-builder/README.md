# `@svelte-parts/form-builder`

UI to create form descriptions for [@svelte-parts/form](https://github.com/idris-maps/svelte-parts/tree/master/packages/form#svelte-partsform).

Try it out in the [svelte REPL](https://svelte.dev/repl/6bfa95a44ad74779851556f3e909b57e?version=3.46.6)

## Install

```
npm install @svelte-parts/form-builder
```

## Usage

```jsx
<script>
  import FormBuilder from '@svelte-parts/form-builder'
</script>

<FormBuilder
  onChange={d => console.log('CHANGED', d)}
  onSubmit={d => console.log('SUBMITTED', d)}
  ignoreFields={['password', 'color']}
/>
```

### Properties

* `onChange` a function taking an array of [`Fields`](https://github.com/idris-maps/svelte-parts/blob/master/packages/form/index.d.ts) triggered on every change
* `onSubmit` a function taking an array of [`Fields`](https://github.com/idris-maps/svelte-parts/blob/master/packages/form/index.d.ts) triggered when the user clicks on "Create form" (the button is only shown if this function is defined)
* `ignoreFields` fields that should not be proposed to the user. Depending on the context, you may not want to encourage creating a password field, for example.
