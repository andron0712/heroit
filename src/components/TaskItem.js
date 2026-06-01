import React from 'react';

function TaskItem({ task, onToggleTask, onDeleteTask }) {
  return (
    <li style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '10px', 
      borderBottom: '1px solid #eee',
      background: task.completed ? '#f9f9f9' : 'white'
    }}>
      <span style={{ 
        textDecoration: task.completed ? 'line-through' : 'none',
        color: task.completed ? '#7f8c8d' : '#2c3e50'
      }}>
        {task.title}
      </span>
      <div style={{ display: 'flex', gap: '5px' }}>
        <button 
          onClick={() => onToggleTask(task.id)}
          style={{ padding: '5px 10px', background: '#3498db', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
        >
          {task.completed ? 'Відновити' : 'Виконано'}
        </button>
        <button 
          onClick={() => onDeleteTask(task.id)}
          style={{ padding: '5px 10px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
        >
          Видалити
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
