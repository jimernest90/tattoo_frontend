import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import '../styles/skintone.css'

const options = [
  { key: 1, text: <div className='one'/>, value: 1 },
  { key: 2, text: <div className='two'/>, value: 2 },
  { key: 3, text: <div className='three'/>, value: 3 },
  { key: 4, text: <div className='four'/>, value: 4 },
  { key: 5, text: <div className='five'/>, value: 5 },
]

const SkinTone = () => (
  <Dropdown clearable options={options} selection />
)

export default SkinTone