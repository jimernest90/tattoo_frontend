import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'New York', value: 1 },
]

const LocationDropDown = () => (
  <Dropdown placeholder='City' clearable options={options} selection />
)

export default LocationDropDown