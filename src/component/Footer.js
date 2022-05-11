import React from 'react'

function Footer(props) {
  return (
    <div>
      <span className="todo-count">
                <strong>{props.count}</strong>
                <span> </span>
                <span>{props.count > 1 ? 'items' : 'item'}</span>
                <span> left</span>
      </span>
      <ul>
        <li>
          <a>All</a>
        </li>
        <li>
          <a>Active</a>
        </li>
        <li>
          <a>Complete</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
