import React from 'react';

const TaskItem = ({ task, status, delayInfo }) => {
  const statusTextMap = {
    completed: 'Completado',
    current: 'En Curso',
    delayed: 'Retrasado',
    future: 'Pendiente',
  };

  const statusText = statusTextMap[status] || 'Pendiente';

  return (
    <li className={`task-item task-${status}`}>
      <div className="task-time">
        {task.actualStart} ({task.duration}min)
      </div>
      <strong>{task.name}</strong>
      <span className={`task-status status-${status}`}>{statusText}</span>
      <div style={{ marginTop: '5px', fontSize: '0.9em', color: '#aaa' }}>{task.description}</div>
      {delayInfo && <div className="task-delay">{delayInfo}</div>}
    </li>
  );
};

export default TaskItem;