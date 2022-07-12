import React from 'react'

export const Button = ({ color, bgColor, size, text, borderRadius }) => {
  return (
    <button type="button" style={{ backgroundColor: bgColor, borderRadius, color }} className={`text-${size} p-3 hover:drop-shadow-xl`} >
      {text}
    </button>
  )
}