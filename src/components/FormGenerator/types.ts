export interface FormField {
  name: string
  label: string
  type: 'input' | 'select' | 'checkbox' | 'textarea' | 'date' | 'string-list'
  placeholder?: string
  options?: Array<string | Record<string, any>>
}

export interface FormData {
  [key: string]: any
}

export interface IFormFieldGeneratorData {
  grid: IFormFieldGeneratorDataGrid
  fields: (FormField | Record<string, any>)[]
  children?: IFormFieldGeneratorData[]
}

export interface IFormFieldGeneratorDataGrid {
  /**
   *
   *
   * Кол-во колонок в контейнере
   */
  col?: number
  /**
   *
   *
   * Кол-во колонок, которых занимает контейнер
   */
  col_span?: number
  /**
   *
   *
   * Заголовок контейнера
   */
  title?: string
  /**
   *
   *
   * Имя для формирования названия слота : смотреть компонент - FormFieldGenerator -> <slot :name="`${item.grid.name}_${field.name}`" />
   */
  name: string
}
