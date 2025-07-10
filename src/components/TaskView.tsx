// import type { ChangeEvent, FormEvent } from 'react';
// import { useState, useEffect } from 'react';
// import Input from './Input';
// import Button from './Button';
// import TaskItem from './TaskItem';
// import type { Task } from '../types/Ttask';
// import styles from './TaskView.module.css';

// type Props = {
//   tasks: Task[];
//   onAdd: (title: string) => void;
//   onUpdate: (id: string, title: string) => void;
//   onToggleComplete: (id: string) => void;
//   onEdit: (task: Task) => void;
//   onDelete: (id: string) => void;
//   taskToEdit: Task | null;
//   onCancelEdit: () => void;
// };

// function TaskView({
//   tasks,
//   onAdd,
//   onUpdate,
//   onToggleComplete,
//   onEdit,
//   onDelete,
//   taskToEdit,
//   onCancelEdit,
// }: Props) {
//   const [input, setInput] = useState('');

//   useEffect(() => {
//     if (taskToEdit) {
//       setInput(taskToEdit.title);
//     } else {
//       setInput('');
//     }
//   }, [taskToEdit]);

//   const isEditing = !!taskToEdit;

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     if (isEditing) {
//       onUpdate(taskToEdit!.id, input);
//       onCancelEdit();
//     } else {
//       onAdd(input);
//     }
//     setInput('');
//   };

//   return (
//     <div className={styles.container}>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <Input
//           value={input}
//           onChange={(e: ChangeEvent<HTMLInputElement>) =>
//             setInput(e.target.value)
//           }
//           placeholder="Add a new task..."
//         />
//         <button type="submit" className={`${styles.button} ${styles.primary}`}>
//           {isEditing ? 'Update' : 'Add'}
//         </button>

//         {isEditing && (
//           <Button
//             label="Cancel"
//             type="secondary"
//             onClick={() => {
//               onCancelEdit();
//               setInput('');
//             }}
//           />
//         )}
//       </form>

//       <div className={styles.list}>
//         {tasks.length === 0 ? (
//           <p className={styles.empty}>No tasks yet!</p>
//         ) : (
//           tasks.map((task) => (
//             <TaskItem
//               key={task.id}
//               task={task}
//               onToggleComplete={onToggleComplete}
//               onEdit={onEdit}
//               onDelete={onDelete}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default TaskView;

import type { ChangeEvent, FormEvent } from 'react';
import { useState, useEffect } from 'react';
import Input from './Input';
import Button from './Button';
import TaskItem from './TaskItem';
import type { Task } from '../types/Ttask';
import styles from './TaskView.module.css';

type Props = {
  tasks: Task[];
  onAdd: (title: string) => void;
  onUpdate: (id: string, title: string) => void;
  onToggleComplete: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  taskToEdit: Task | null;
  onCancelEdit: () => void;
};

function TaskView({
  tasks,
  onAdd,
  onUpdate,
  onToggleComplete,
  onEdit,
  onDelete,
  taskToEdit,
  onCancelEdit,
}: Props) {
  const [input, setInput] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setInput(taskToEdit.title);
    } else {
      setInput('');
    }
  }, [taskToEdit]);

  const isEditing = !!taskToEdit;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (isEditing) {
      onUpdate(taskToEdit!.id, input);
      onCancelEdit();
    } else {
      onAdd(input);
    }
    setInput('');
  };

  // Handle cancel logic

  const handleCancel = () => {
    setInput(''); // Clear input FIRST
    onCancelEdit(); // Then notify parent
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          placeholder="Add a new task..."
        />

        {/* Add/Update button using custom Button component */}
        <Button
          label={isEditing ? 'Update' : 'Add'}
          type="primary"
          buttonType="submit" // crucial for form submit
        />

        {isEditing && (
          <Button
            label="Cancel"
            type="secondary"
            buttonType="button"
            onClick={handleCancel} // Just change this line
          />
        )}
      </form>

      <div className={styles.list}>
        {tasks.length === 0 ? (
          <p className={styles.empty}>No tasks yet!</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={onToggleComplete}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskView;
