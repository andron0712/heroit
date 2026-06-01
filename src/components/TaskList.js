import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p style={{ color: '#7f8c8d', textAlign: 'center' }}>Список задач порожній.</p>;
  }

  return (
    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
      {tasks.map(task => (
        <TaskItem 
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
