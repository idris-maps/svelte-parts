import {
  isCheckbox,
  isRadio,
  isSelectOptions,
  isSelect,
  isRange,
} from './utils'

export default fields =>
  fields.reduce(
    (result, field) => {
      if (isCheckbox(field)) {
        return {
          ...result,
          [field.property]: Boolean(field.value)
        }
      }
      if (isRadio(field) || isSelect(field)) {
        return {
          ...result,
          [field.property]: field.value
            ? field.value
            : isSelectOptions(field.options)
              ? field.options[0].value
              : field.options[0]
        }
      }
      if (isRange(field) && !field.notRequired) {
        return {
          ...result,
          [field.property]: field.value || field.min,
        }
      }
      if (field.value) {
        return {
          ...result,
          [field.property]: field.value
        }
      }
      return result
    },
    {},
  )
