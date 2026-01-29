export default function TaskItem({ task, onUpdate, onDelete }) {
    return (
        <li className="border rounded-md p-3 flex flex-col gap-2">
            <strong>{task.title}</strong>

            <select
                value={task.status}
                onChange={(e) =>
                    onUpdate(task._id, { status: e.target.value })
                }
            >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
            </select>

            <select
                value={task.priority}
                onChange={(e) =>
                    onUpdate(task._id, { priority: e.target.value })
                }
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>


            <button onClick={() => onDelete(task._id)}>Delete</button>
        </li>
    );
}
