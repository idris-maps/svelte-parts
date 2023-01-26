### Properties

* `onChange` a function taking an array of [`Fields`](https://github.com/idris-maps/svelte-parts/blob/master/packages/form/index.d.ts) triggered on every change
* `onSubmit` a function taking an array of [`Fields`](https://github.com/idris-maps/svelte-parts/blob/master/packages/form/index.d.ts) triggered when the user clicks on "Create form" (the button is only shown if this function is defined)
* `ignoreFields` fields that should not be proposed to the user. Depending on the context, you may not want to encourage creating a password field, for example.
