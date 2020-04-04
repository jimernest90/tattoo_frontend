import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'No Preference', value: 1 },
  { key: 2, text: 'Male', value: 2 },
  { key: 3, text: 'Female', value: 3 }
]

const GenderPreference = () => (
  <Dropdown placeholder='gender' clearable options={options} selection />
)

export default GenderPreference