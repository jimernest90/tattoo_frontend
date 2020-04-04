import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'phone', value: 1 },
  { key: 2, text: 'email', value: 2 },
  { key: 3, text: 'text', value: 3 },
]

const ClearDrop = () => (
  <Dropdown placeholder='phone' clearable options={options} selection />
)

export default ClearDrop