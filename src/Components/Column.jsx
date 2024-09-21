import React from 'react';
import { StatusIcon, PriorityIcon } from './Icons';
import TicketComponent from './Ticket';
import add from '../assets/icons_FEtask/add.svg';
import t_dot from '../assets/icons_FEtask/3 dot menu.svg';

const allStatuses = ['Backlog', 'Todo', 'In progress', 'Done', 'Canceled'];

export default function Column({ groupName, tickets, users, grouping }) {
  return (
    <div className="column">
      <div className="column-header">
        {grouping === 'status' && <StatusIcon status={groupName} />}
        {grouping === 'priority' && tickets[0] && <PriorityIcon priority={tickets[0].priority} />}
        {grouping === 'user' && (
          <div className={`user-avatar ${users.find(u => u.name === groupName)?.available ? 'available' : ''}`}>
            {groupName[0]}
          </div>
        )}
        <span>{groupName}</span>
        <span className="ticket-count">{tickets.length}</span>
        <div className="header-icons">
          <img src={add} alt="Add" />
          <img src={t_dot} alt="Three Dot" />
        </div>
      </div>
      {tickets.length > 0 ? (
        tickets.map(ticket => (
          <TicketComponent key={ticket.id} ticket={ticket} users={users} grouping={grouping} />
        ))
      ) : (
        <div className="no-tickets">No tickets</div>
      )}
      <style jsx>{`
        .column {
          flex: 0 0 20rem;
          margin-right: 1rem;
          background-color: #f9fafb;
          border-radius: 0.375rem;
          padding: 1rem;
        }
        .column-header {
          font-weight: 500;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          color: #374151;
        }
        .column-header > *:not(:last-child) {
          margin-right: 0.5rem;
        }
        .ticket-count {
          color: #6B7280;
          font-size: 0.875rem;
        }
        .header-icons {
          margin-left: auto;
          display: flex;
          gap: 0.5rem;
        }
        .user-avatar {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          background-color: #F3F4F6;
          color: #4B5563;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 500;
        }
        .user-avatar.available::after {
          content: '';
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0.5rem;
          height: 0.5rem;
          background-color: #10B981;
          border-radius: 50%;
          border: 2px solid white;
        }

        .no-tickets {
          font-size: 0.875rem;
          color: #9CA3AF;
          text-align: center;
          padding: 1rem;
        }

        @media (max-width: 1024px) {
          .column {
            flex: 0 0 100%; /* Full width on smaller screens */
            margin-bottom: 1rem;
          }
          .header-icons img {
            width: 20px;
            height: 20px;
          }
        }

        @media (max-width: 768px) {
          .column {
            flex: 0 0 100%;
            padding: 0.5rem;
            margin-right: 0;
          }
          .column-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .header-icons {
            margin-left: 0;
            margin-top: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .column {
            flex: 0 0 100%;
          }
          .user-avatar {
            width: 1rem;
            height: 1rem;
            font-size: 0.625rem;
          }
          .ticket-count {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}