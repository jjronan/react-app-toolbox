import React from 'react'

export default function Button(props) {
  return (
    <button className="App-button" onClick={props.handleClick}>{props.name}</button>
  )
}
