import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'small (2-6 inches)', value: 1 },
  { key: 2, text: 'medium (6-12 inches)', value: 2 },
  { key: 3, text: 'large (more than 12 inches)', value: 3 },
]

const ClearDrop = () => (
  <Dropdown placeholder='small (2-6 inches)' clearable options={options} selection />
)

export default ClearDrop