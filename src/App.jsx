import React, { useState, useEffect } from 'react'
import { API_URL } from './API/api.js'
import { groupAndOrderTickets } from './Utils/utils.js'
import DisplayOptions from './Components/Display.jsx'
import Column from './Components/Column.jsx'

export default function KanbanBoard() {
  const [tickets, setTickets] = useState([])
  const [users, setUsers] = useState([])
  const [grouping, setGrouping] = useState('status')
  const [ordering, setOrdering] = useState('priority')

  useEffect(() => {
    fetchData()
    loadSavedState()
  }, [])

  useEffect(() => {
    saveState()
  }, [grouping, ordering])

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      console.log(data.tickets)
      setTickets(data.tickets)
      setUsers(data.users)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  const loadSavedState = () => {
    const savedGrouping = localStorage.getItem('grouping')
    const savedOrdering = localStorage.getItem('ordering')
    if (savedGrouping) setGrouping(savedGrouping)
    if (savedOrdering) setOrdering(savedOrdering)
  }

  const saveState = () => {
    localStorage.setItem('grouping', grouping)
    localStorage.setItem('ordering', ordering)
  }

  const groupedTickets = groupAndOrderTickets(tickets, users, grouping, ordering)

  return (
    <div className="kanban-board">
      <DisplayOptions
        grouping={grouping}
        ordering={ordering}
        setGrouping={setGrouping}
        setOrdering={setOrdering}
      />
      <div className="board">
        {Object.entries(groupedTickets).map(([groupName, groupTickets]) => (
          <Column
            key={groupName}
            groupName={groupName}
            tickets={groupTickets}
            users={users}
            grouping={grouping}
          />
        ))}
      </div>
      <style jsx>{`
  .kanban-board {
    font-family: 'Inter', sans-serif;
    background-color: #F4F5F8;
    min-height: 100vh;
    padding: 1rem;
    width: 100%;
  }
  .board {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr)); 
    gap: 0.3rem; 
    overflow-x: hidden; 
  }

  /* Responsive Styles */
  @media (max-width: 720px) {
    .board {
      grid-template-columns: 1fr;
    }
  }
`}</style>

    </div>
  )
}