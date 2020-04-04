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
  { key: 13, text: '13', value: 13 },
  { key: 14, text: '14', value: 14 },
  { key: 15, text: '15', value: 15 },
  { key: 16, text: '16', value: 16 },
  { key: 17, text: '17', value: 17 },
  { key: 18, text: '18', value: 18 },
  { key: 19, text: '19', value: 19 },
  { key: 20, text: '20', value: 20 },
  { key: 21, text: '21', value: 21 },
  { key: 22, text: '22', value: 22 },
  { key: 23, text: '23', value: 23 },
  { key: 24, text: '24', value: 24 },
  { key: 25, text: '25', value: 25 },
  { key: 26, text: '26', value: 26 },
  { key: 27, text: '27', value: 27 },
  { key: 28, text: '28', value: 28 },
  { key: 29, text: '29', value: 29 },
  { key: 30, text: '30', value: 30 },
]

const BirthDate = () => (
  <Dropdown placeholder='DD' clearable options={options} selection />
)

export default BirthDate