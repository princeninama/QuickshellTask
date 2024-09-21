import React, { useState } from 'react'
import display from '../assets/icons_FEtask/Display.svg'

export default function DisplayOptions({ grouping, ordering, setGrouping, setOrdering }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="header">
      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="display-button">
      <img src={display} alt="Display" />
        <span>Display</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 10L4 6H12L8 10Z" fill="#374151"/>
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="dropdown">
          <div className="dropdown-item">
            <label>Grouping</label>
            <select
              value={grouping}
              onChange={(e) => setGrouping(e.target.value)}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <label>Ordering</label>
            <select
              value={ordering}
              onChange={(e) => setOrdering(e.target.value)}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
      <style jsx>{`
        .header {
          margin-bottom: 1rem;
          position: relative;
        }
        .display-button {
          background-color: white;
          border: 1px solid #E2E8F0;
          border-radius: 0.25rem;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          cursor: pointer;
          font-size: 0.875rem;
          color: #374151;
        }
        .display-button span {
          margin: 0 0.5rem;
        }
        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          border: 1px solid #E2E8F0;
          border-radius: 0.25rem;
          padding: 0.5rem;
          z-index: 10;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .dropdown-item {
          margin-bottom: 0.5rem;
          display: flex;
        }
        .dropdown-item label {
          display: block;
          margin-bottom: 0.25rem;
          font-size: 0.75rem;
          color: #6B7280;
        }
        .dropdown-item select {
          width: 100%;
          margin-left: 8rem;
          border: 1px solid #E2E8F0;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  )
}