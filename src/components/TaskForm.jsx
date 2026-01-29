import { useState } from "react";

export default function TaskForm({ onCreate }) {
    const [form, setForm] = useState({
        title: "",
        description: "",
        status: "pending",
        priority: "low",
    });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.title) return;

        setSubmitting(true);
        await onCreate(form);
        setSubmitting(false);

        setForm({
            title: "",
            description: "",
            status: "pending",
            priority: "low",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3 mb-6" >
            <input
                placeholder="Title"
                value={form.title}
                onChange={(e) =>
                    setForm({ ...form, title: e.target.value })
                }
                className="w-full border rounded-md px-3 py-2 text-sm"
            />

            <input
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                }
                className="w-full border rounded-md px-3 py-2 text-sm"
            />

            <div className="flex gap-3">
                <select
                    value={form.status}
                    onChange={(e) =>
                        setForm({ ...form, status: e.target.value })
                    }
                    className="flex-1 border rounded-md px-2 py-2 text-sm"
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="done">Done</option>
                </select>

                <select
                    value={form.priority}
                    onChange={(e) =>
                        setForm({ ...form, priority: e.target.value })
                    }
                    className="flex-1 border rounded-md px-2 py-2 text-sm"
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>

            <button
                disabled={submitting}
                className="w-full bg-gray-700 text-white py-2 rounded-md text-sm hover:bg-gray-600 disabled:opacity-50">
                {submitting ? "Adding..." : "Add Task"}
            </button>
        </form>
    );
}
