import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api/tasks";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
    } catch {
      setError("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreate = async (task) => {
    await createTask(task);
    fetchTasks();
  };

  const handleUpdate = async (id, updates) => {
    await updateTask(id, updates);
    fetchTasks();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this task?")) {
      await deleteTask(id);
      fetchTasks();
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center gap-10">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">TASK TRACKER</h2>

        <TaskForm onCreate={handleCreate} />

        {loading && <p>Loading tasks...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <TaskList
          tasks={tasks}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
        <footer className="text-center text-sm mt-5">c 2026 Abdulsalam Idris</footer>
      </div>
    </div>
  );
}

export default App;
