## Properties

Uses [marked](https://github.com/markedjs/marked) to convert to HTML and is sanitized with [dompurify](https://github.com/cure53/DOMPurify). Both can be configured with the optional attributes:

* `dompurifyConfig` (type: `DOMPurify.Config`)
* `markedExtensions` (type: `MarkedExtension[]`)
* `markedOptions` (type: `MarkedOptions`)