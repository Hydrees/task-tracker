import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onUpdate, onDelete }) {
    return (
        <ul className="space-y-3">
            {tasks.map((task) => (
                <TaskItem
                    key={task._id}
                    task={task}
                    onUpdate={onUpdate}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}
