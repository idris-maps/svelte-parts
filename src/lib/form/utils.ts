import type {
  Checkbox,
  Color,
  Date as DateF,
  Email,
  Field,
  Number as NumberF,
  Password,
  Radio,
  Range,
  Select,
  SelectOption,
  Tel,
  Text,
  TextField,
  Textarea,
} from './types'

export const isCheckbox = (d: Field): d is Checkbox => d.type === 'checkbox' 
export const isColor = (d: Field): d is Color => d.type === 'color' 
export const isDate = (d: Field): d is DateF => d.type === 'date' 
export const isEmail = (d: Field): d is Email => d.type === 'email' 
export const isNumber = (d: Field): d is NumberF => d.type === 'number' 
export const isPassword = (d: Field): d is Password => d.type === 'password' 
export const isRadio = (d: Field): d is Radio => d.type === 'radio' 
export const isRange = (d: Field): d is Range => d.type === 'range' 
export const isTel = (d: Field): d is Tel => d.type === 'tel' 
export const isText = (d: Field): d is Text => d.type === 'text' 
export const isTextarea = (d: Field): d is Textarea => d.type === 'textarea' 
export const isSelect = (d: Field): d is Select => d.type === 'select'
export const isTextField = (d: Field): d is TextField =>
  isEmail(d) || isPassword(d) || isTel(d) || isText(d)


export const isSelectOption = (d: any): d is SelectOption =>
  d && !(typeof d === 'string')
export const isSelectOptions = (d: any): d is SelectOption[] =>
  d && Array.isArray(d) && d.every(isSelectOption)

