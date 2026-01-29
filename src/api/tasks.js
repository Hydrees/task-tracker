let mockTasks = [
  {
    _id: "1",
    title: "Learn React",
    description: "Hooks & components",
    status: "pending",
    priority: "medium",
  },
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const getTasks = async () => {
  await delay(500);
  return mockTasks;
};

export const createTask = async (task) => {
  await delay(500);
  const newTask = { ...task, _id: Date.now().toString() };
  mockTasks.push(newTask);
  return newTask;
};

export const updateTask = async (id, updates) => {
  await delay(500);
  mockTasks = mockTasks.map((t) =>
    t._id === id ? { ...t, ...updates } : t
  );
};

export const deleteTask = async (id) => {
  await delay(500);
  mockTasks = mockTasks.filter((t) => t._id !== id);
};
