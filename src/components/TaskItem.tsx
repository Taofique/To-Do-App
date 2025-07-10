import type { Task } from '../types/Ttask';
import styles from './TaskItem.module.css';

type Props = {
  task: Task;
  onToggleComplete: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
};

function TaskItem({ task, onToggleComplete, onEdit, onDelete }: Props) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.title} ${task.completed ? styles.completed : styles.incomplete}`}
        onClick={() => onToggleComplete(task.id)}
      >
        {task.title}
      </div>
      <div>
        <button
          onClick={() => onEdit(task)}
          title="Edit"
          className={styles.button}
        >
          ✏️
        </button>
        <button onClick={() => onDelete(task.id)} title="Completed">
          ✔
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
