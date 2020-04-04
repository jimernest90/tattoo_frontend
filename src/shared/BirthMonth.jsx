import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: '01', value: 1 },
  { key: 2, text: '02', value: 2 },
  { key: 3, text: '03', value: 3 },
  { key: 4, text: '04', value: 4 },
  { key: 5, text: '05', value: 5 },
  { key: 6, text: '06', value: 6 },
  { key: 7, text: '07', value: 7 },
  { key: 8, text: '08', value: 8 },
  { key: 9, text: '09', value: 9 },
  { key: 10, text: '10', value: 10 },
  { key: 11, text: '11', value: 11 },
  { key: 12, text: '12', value: 12 },
]

const BirthMonth = () => (
  <Dropdown placeholder='MM'clearable options={options} selection />
)

export default BirthMonth