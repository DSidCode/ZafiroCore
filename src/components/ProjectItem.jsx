import React from 'react';

const ProjectItem = ({ project, onToggleSubTask }) => {
  const { name, status, description, subTasks = [] } = project;

  const statusClassMap = {
    Completado: 'completed',
    Parcial: 'partial',
    Activo: 'progress',
    Pendiente: 'pending',
    Planificación: 'pending',
    Ideación: 'pending',
    Planificado: 'pending',
    Agendados: 'pending',
  };

  const statusClass = statusClassMap[status] || 'pending';

  return (
    <div className={`project-item project-${statusClass}`}>
      <div className="project-header">
        <strong>{name}</strong>
        <span className={`project-status status-${statusClass}`}>{status}</span>
      </div>
      <div>{description}</div>
      <div className="task-list">
        {subTasks.map((task, index) => (
          <div 
            key={index} 
            className={`task-item ${task.completed ? 'task-completed' : ''}`} 
            onClick={() => onToggleSubTask(project.id, index)}
            dangerouslySetInnerHTML={{ __html: task.text }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;