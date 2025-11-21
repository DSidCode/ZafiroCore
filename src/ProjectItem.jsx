import React from 'react';

const ProjectItem = ({ project, onToggleSubTask }) => {
  const { name, status, description, subTasks = [], id } = project;

  const statusClassMap = {
    'Completado': 'completed',
    'Parcial': 'partial',
    'Activo': 'progress',
    'En Desarrollo': 'progress',
    'En Revisión': 'progress',
    'Pendiente': 'pending',
    'Planificación': 'pending',
    'Ideación': 'pending',
    'Planificado': 'pending',
    'Agendado': 'pending',
    'Importante': 'urgent',
  };

  const statusClass = statusClassMap[status] || 'pending';

  return (
    <div className={`project-item project-${statusClass}`}>
      <div className="project-header">
        <span className="project-title">{name}</span>
        <span className={`project-status status-${statusClass}`}>{status}</span>
      </div>
      <p className="project-description">{description}</p>
      {subTasks.length > 0 && (
        <ul className="subtask-list">
          {subTasks.map((task, index) => (
            <li key={index} className={`subtask-item ${task.completed ? 'task-completed' : ''}`} onClick={() => onToggleSubTask(id, index)}>
              <input type="checkbox" checked={task.completed} readOnly />
              <span className="checkbox-icon">{task.completed ? '■' : '□'}</span>
              <span>{task.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectItem;