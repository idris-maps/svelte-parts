# `@svelte-parts/form-builder`

UI to create form descriptions for [@svelte-parts/form](https://github.com/idris-maps/svelte-parts/tree/master/packages/form#svelte-partsform).

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

* `onChange` a function taking an array of [`Fields`]() triggered on every change
* `onSubmit` a function taking an array of [`Fields`]() triggered when the user clicks on "Create form" (the button is only shown if this function is defined)
* `ignoreFields` fields that should not be proposed to the user. Depending on the context, you may not want to encourage creating a password field, for example.

