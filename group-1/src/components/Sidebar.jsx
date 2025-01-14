import React from 'react'

const Sidebar = () => {
  return (
    <ul className="menu bg-base-200 rounded-box w-56">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
  <li><a>Item 3</a></li>
  <li><a>Item 4</a></li>
  <li><a>Item 5</a></li>
  <li><a>Item 6</a></li>
  <li>
    <details open>
      <summary>Parent</summary>
      <ul>
        <li><a>Submenu 1</a></li>
        <li><a>Submenu 2</a></li>
      </ul>
    </details>
  </li>
</ul>
  )
}

export default Sidebar
