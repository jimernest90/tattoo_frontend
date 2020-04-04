import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Biceps', value: 1 },
  { key: 2, text: 'Legs', value: 2 },
  { key: 3, text: 'Back', value: 3 },
  { key: 1, text: '(Other)', value: 4 },
]

const BodyLocation = () => (
  <Dropdown placeholder='Biceps' clearable options={options} selection />
)

export default BodyLocation