import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  // Додаткове завдання: useEffect для консолі
  useEffect(() => {
    console.log(`Кількість задач у списку: ${tasks.length}`);
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(), // Унікальний id
      title: title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', borderRadius: '8px', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff' }}>
      <Header />
      <TaskForm onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onToggleTask={toggleTask} 
        onDeleteTask={deleteTask} 
      />
    </div>
  );
}

export default App;
