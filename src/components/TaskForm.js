import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Захист від порожніх рядків
    
    onAddTask(text); // Передаємо текст в батьківський компонент
    setText(''); // Очищаємо input
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input 
        type="text"
        placeholder="Введіть назву задачі..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ flex: '1', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '8px 16px', background: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Додати
      </button>
    </form>
  );
}

export default TaskForm;
