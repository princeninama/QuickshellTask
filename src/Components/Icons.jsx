import React from 'react'
import { Circle, CheckCircle2, Clock, AlertTriangle } from 'lucide-react'
import urgent from '../assets/icons_FEtask/SVG - Urgent Priority grey.svg'
import high from '../assets/icons_FEtask/Img - High Priority.svg'
import low from '../assets/icons_FEtask/Img - Low Priority.svg'
import mid from '../assets/icons_FEtask/Img - Medium Priority.svg'
import no from '../assets/icons_FEtask/No-priority.svg'
import backlog from '../assets/icons_FEtask/Backlog.svg'
import todo from '../assets/icons_FEtask/To-do.svg'
import in_Pro from '../assets/icons_FEtask/in-progress.svg'
import done from '../assets/icons_FEtask/Done.svg'
import cancel from '../assets/icons_FEtask/Cancelled.svg'
export const PriorityIcon = ({ priority }) => {
  switch (priority) {
    case 4: return <img src={urgent} alt="Urgent Priority" />;
    case 3: return <img src={high} alt="High Priority" />;
    case 2: return <img src={mid} alt="Mid Priority" />;
    case 1: return <img src={low} alt="Low Priority" />;
    default: return <img src={no} alt="No Priority"/>;
  }
}

export const StatusIcon = ({ status }) => {
  switch (status) {
    case 'Backlog': return <img src={backlog} alt="Backlog" />
    case 'Todo': return <img src={todo} alt="todo" />
    case 'In progress': return <img src={in_Pro} alt="In Progress" />
    case 'Done': return <img src={done} alt="Done" />
    default: return <img src={cancel} alt="Canceled" />
  }
}