export const groupAndOrderTickets = (tickets, users, grouping, ordering) => {
  const allStatuses = ['Backlog', 'Todo', 'In progress', 'Done', 'Canceled'];
  let groups = {};

  if (grouping === 'status') {
    allStatuses.forEach(status => {
      groups[status] = [];
    });
  } else if (grouping === 'user') {
    users.forEach(user => {
      groups[user.name] = []; 
    });
    groups['Unassigned'] = []; 
  } else if (grouping === 'priority') {
    const priorities = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    priorities.forEach(priority => {
      groups[priority] = []; 
    });
  }


  tickets.forEach(ticket => {
    let key = '';
    if (grouping === 'status') key = ticket.status;
    else if (grouping === 'user') key = users.find(u => u.id === ticket.userId)?.name || 'Unassigned';
    else if (grouping === 'priority') key = getPriorityName(ticket.priority);


    if (groups[key]) {
      groups[key].push(ticket);
    }
  });

  Object.keys(groups).forEach(key => {
    groups[key].sort((a, b) => {
      if (ordering === 'priority') return b.priority - a.priority;
      return a.title.localeCompare(b.title);
    });
  });

  return groups;
};

export const getPriorityName = (priority) => {
  switch (priority) {
    case 4: return 'Urgent';
    case 3: return 'High';
    case 2: return 'Medium';
    case 1: return 'Low';
    default: return 'No priority';
  }
};
