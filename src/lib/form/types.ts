export interface Checkbox {
  type: 'checkbox'
  property: string
  label?: string
  value?: boolean
}

export interface Color {
  type: 'color'
  property: string
  label?: string
  value?: string
  notRequired?: boolean
}

export interface Date {
  type: 'date'
  property: string
  label?: string
  min?: string
  max?: string
  value?: string
  notRequired?: boolean
}

export interface Email {
  type: 'email'
  property: string
  label?: string
  pattern?: string
  maxLength?: number
  minLength?: number
  value?: string
  notRequired?: boolean
  placeholder?: string
}

export interface Number {
  type: 'number'
  property: string
  label?: string
  min?: number
  max?: number
  step?: number
  value?: number
  notRequired?: boolean
}

export interface Password {
  type: 'password'
  property: string
  label?: string
  maxLength?: number
  minLength?: number
  pattern?: string
  value?: string
  notRequired?: boolean
  placeholder?: string
}

export interface Radio {
  type: 'radio'
  property: string
  label?: string
  options: string[] | SelectOption[]
  value?: string
}

export interface Range {
  type: 'range'
  property: string
  label?: string
  min: number
  max: number
  step: number
  value?: number
  notRequired?: boolean
}

export interface Tel {
  type: 'tel'
  property: string
  label?: string
  maxLength?: number
  minLength?: number
  pattern?: string
  value?: string
  notRequired?: boolean
  placeholder?: string
}

export interface Text {
  type: 'text'
  property: string
  label?: string
  maxLength?: number
  minLength?: number
  pattern?: string
  value?: string
  notRequired?: boolean
  placeholder?: string
}

export interface Textarea {
  type: 'textarea'
  property: string
  label?: string
  value?: string
  notRequired?: boolean
}

export interface SelectOption {
  label: string
  value: string
}

export interface Select {
  type: 'select'
  property: string
  label?: string
  options: SelectOption[] | string[]
  value?: string
}

export type TextField = Email | Password | Tel | Text

export type Field = Checkbox
  | Color
  | Date
  | Number
  | Radio
  | Range
  | TextField
  | Textarea
  | Select

export type Data = Record<string, string | boolean | number>
