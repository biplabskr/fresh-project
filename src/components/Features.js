import React from 'react'
import "../css/Features.css"

export default function Features({ title, text }) {
  return (
    <div className="features-container-feature">
    <div className="features-container-feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="features-container-feature-text">
      <p>{text}</p>
    </div>
  </div>
  )
}
