# Test Project

## Команды
### Установка зависимостей
```shell
npm i
```
### Запуск проекта
```shell
npm run dev
```

### Бандл
```shell
npm run build
```

## Пояснение работы компонента `FormFieldGenerator`

```typescript
interface IFormFieldGeneratorProps {
  /**
   *
   * объект с описанием полей формы (label, атрибуты и другие необходимые параметры)
   */
  data: IFormFieldGeneratorData[]
  /**
   *
   * объект для хранения значений полей формы, реализованный через v-model
   */
  formValues: FormData
}

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
   * Кол-во колонок в контейнере
   */
  col?: number
  /**
   *
   * Кол-во колонок, которых занимает контейнер
   */
  col_span?: number
  /**
   *
   * Заголовок контейнера
   */
  title?: string
  /**
   *
   * Имя для формирования названия слота : смотреть компонент - FormFieldGenerator -> <slot :name="`${item.grid.name}_${field.name}`" />
   */
  name: string
}
```

### Пример
```typescript
const form_data = reactive({
  guest_name: '',
  room_type: '',
  check_in: '',
  check_out: '',
  has_breakfast: false
})

const data = reactive<IFormFieldGeneratorData[]>([
  {
    grid: { col: 4, name: 'reservation-info', col_span: 3 },
    fields: [
      { name: 'guest_name', label: 'Имя гостя', placeholder: 'Введите имя', type: 'input' },
      {
        name: 'room_type',
        label: 'Тип номера',
        placeholder: 'Выберите тип',
        type: 'select',
        options: ['Стандарт', 'Люкс', 'Семейный']
      },
      { name: 'check_in', label: 'Дата заезда', placeholder: 'Выберите дату', type: 'date' },
      { name: 'check_out', label: 'Дата выезда', placeholder: 'Выберите дату', type: 'date' },
      { name: 'has_breakfast', label: 'Завтрак включен?', type: 'checkbox' }
    ]
  },
  {
    grid: { col: 2, col_span: 3, name: 'payment-info', title: 'Оплата' },
    fields: []
  }
])
```

### Пример кастомизации слота
```typescript jsx
<FormFieldGenerator :data="data" v-model:formValues="form_data">
  <template #reservation-info_guest_name="{ value, field, updateData }">
    <PskInput :placeholder="field.placeholder" :model-value="value" @update:model-value="updateData" />
  </template>
</FormFieldGenerator>
```