export const fieldTypes = [
  'checkbox',
  'color',
  'date',
  'email',
  'number',
  'password',
  'radio',
  'range',
  'tel',
  'text',
  'textarea',
  'select',
]

export const fixProperty = label =>
  Array.from(label.toLowerCase())
    .map(d => d === ' ' ? '_' : d)
    .join('')

export const formField = {
  label: {
    type: 'text',
    property: 'label',
    label: 'Field name',
    minLength: 1,
  },
  required: {
    type: 'select',
    property: 'required',
    label: 'Required',
    options: ['Yes', 'No'],
    value: 'Yes',
  },
  placeholder: {
    type: 'text',
    property: 'placeholder',
    label: 'Placeholder (optional)',
    notRequired: true,
  },
  min: {
    type: 'number',
    property: 'min',
    label: 'Minimum value (optional)',
    notRequired: true,
  },
  max: {
    type: 'number',
    property: 'max',
    label: 'Maximum value (optional)',
    notRequired: true,
  },
  step: {
    type: 'number',
    property: 'step',
    label: 'Step (optional)',
    notRequired: true,
  },
  minLength: {
    type: 'number',
    property: 'minLength',
    label: 'Minimum length (optional)',
    notRequired: true,
  },
  maxLength: {
    type: 'number',
    property: 'maxLength',
    label: 'Maximum length (optional)',
    notRequired: true,
  },
  pattern: {
    type: 'text',
    property: 'pattern',
    label: 'Pattern (optional)',
    notRequired: true,
  }
}

export const removeEmptyKeys = d =>
  Object.keys(d)
    .reduce((r, key) => {
      if (key === 'required') {
        return r
      }
      if (d[key] === '' || !d[key]) {
        return r
      }
      return {...r, [key]: d[key] }
    }, {})

export const addExistingValues = (formFields, field) => {
  if (!field) { return formFields }
  return formFields.map(d => {
    if (field[d.property]) {
      return { ...d, value: field[d.property] }
    }
    return d
  })
}
