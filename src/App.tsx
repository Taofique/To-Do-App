import { useState } from 'react';
import TaskView from './components/TaskView';
import type { Task } from './types/Ttask';
import './index.css';
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id: string, title: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, title } : task)),
    );
  };

  const toggleComplete = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1>To-Do App</h1>
      <TaskView
        tasks={tasks}
        onAdd={addTask}
        onEdit={setTaskToEdit}
        onUpdate={updateTask}
        taskToEdit={taskToEdit}
        onToggleComplete={toggleComplete}
        onDelete={deleteTask}
        onCancelEdit={() => setTaskToEdit(null)}
      />
    </div>
  );
}

export default App;
