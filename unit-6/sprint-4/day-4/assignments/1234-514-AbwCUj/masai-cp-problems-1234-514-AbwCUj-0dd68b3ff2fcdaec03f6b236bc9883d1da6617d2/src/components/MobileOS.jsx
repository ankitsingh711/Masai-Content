import React from 'react'

const MobileOS = () => {
  return (
    <div>
      <li>
        <h1>Mobile Operating System</h1>
        <ul data-testid="os-list">
            <li>Android</li>
            <li>Blackberry</li>
            <li>iPhone</li>
            <li>Windows Phone</li>
        </ul>
      </li>
      <li>
        <h1>Mobile Manufacturers</h1>
        <ul data-testid="manufacturers-list">
            <li>Samsung</li>
            <li>HTC</li>
            <li>Micromax</li>
            <li>Apple</li>
        </ul>
      </li>
    </div>
  )
}

export default MobileOS
