//import * as React from 'react'
import React, {useState} from 'react'

export default function Hello() {
  const [name, setName] = useState('');
  return [
    <h1>Hello {name}</h1>,
    <input type='text' value={name} onChange={event => setName(event.target.value)}/>,
  ]
};
