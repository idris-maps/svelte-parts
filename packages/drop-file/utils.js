export const isCheckbox = d => d.type === 'checkbox' 
export const isColor = d => d.type === 'color' 
export const isDate = d => d.type === 'date' 
export const isEmail = d => d.type === 'email' 
export const isNumber = d => d.type === 'number' 
export const isPassword = d => d.type === 'password' 
export const isRadio = d => d.type === 'radio' 
export const isRange = d => d.type === 'range' 
export const isTel = d => d.type === 'tel' 
export const isText = d => d.type === 'text' 
export const isTextarea = d => d.type === 'textarea' 
export const isSelect = d => d.type === 'select'
export const isTextField = d =>
  isEmail(d) || isPassword(d) || isTel(d) || isText(d)


export const isSelectOption = d =>
  d && !(typeof d === 'string')
export const isSelectOptions = d =>
  d && d.every(isSelectOption)

