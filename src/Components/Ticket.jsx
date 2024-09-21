import React from 'react';
import { StatusIcon, PriorityIcon } from './Icons';
import { Circle } from 'lucide-react';

export default function TicketComponent({ ticket, users, grouping }) {
  const user = users.find(u => u.id === ticket.userId); // Find user once

  return (
    <div className="ticket">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        {grouping !== 'user' && (
          <div className={`user-avatar ${user?.available ? 'available' : ''}`}>
            {user?.name[0]}
          </div>
        )}
      </div>
      <h3 className="ticket-title">
        {grouping !== 'status' && <StatusIcon status={ticket.status} />}
        {ticket.title}
      </h3>
      <div className="ticket-footer">
        {grouping !== 'priority' && <PriorityIcon priority={ticket.priority} />}
        {ticket.tag.map((tag, index) => (
          <span key={index} className="tag">
            <Circle size={8} fill="#BEE3F8" />
            {tag}
          </span>
        ))}
      </div>
      <style jsx>{`
  .ticket {
    background-color: white;
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    padding: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .ticket-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .ticket-id {
    color: #6B7280;
    font-size: 0.75rem;
  }
  .ticket-title {
    font-weight: 500;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: #111827;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  .ticket-footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .tag {
    border: 1px solid #E2E8F0;
    border-radius: 0.25rem;
    padding: 0.125rem 0.25rem;
    font-size: 0.75rem;
    color: #4B5563;
    display: flex;
    align-items: center;
    gap: 0.25rem;
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

  /* Responsive Styles */
  @media (max-width: 768px) {
    .ticket {
      padding: 0.5rem;
    }
    .ticket-title {
      font-size: 0.75rem;
    }
    .ticket-id {
      font-size: 0.65rem;
    }
    .tag {
      font-size: 0.65rem;
    }
    .user-avatar {
      width: 1.25rem;
      height: 1.25rem;
      font-size: 0.625rem;
    }
  }

  @media (max-width: 480px) {
    .ticket {
      padding: 0.5rem;
      margin-bottom: 0.5rem;
    }
    .ticket-title {
      font-size: 0.75rem;
      flex-direction: column;
      align-items: flex-start;
    }
    .ticket-footer {
      gap: 0.25rem;
      flex-wrap: wrap;
    }
    .tag {
      font-size: 0.6rem;
    }
    .user-avatar {
      width: 1rem;
      height: 1rem;
      font-size: 0.5rem;
    }
  }
`}</style>

    </div>
  );
}
