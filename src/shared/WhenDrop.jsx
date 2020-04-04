import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'ASAP (within a week)', value: 1 },
  { key: 2, text: 'This Month', value: 2 },
  { key: 3, text: 'The next few months', value: 3 },
]

const ClearDrop = () => (
  <Dropdown placeholder='ASAP (within a week)' clearable options={options} selection />
)

export default ClearDrop