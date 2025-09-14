import React, { useState } from "react";

export default function Form({ tasks, setTasks }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const [date, setDate] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (task.length === 0) {
      setError("Enter your task");
      return;
    } else {
      setError("");
    }

    setTasks([
      ...tasks,
      { task, date: date || new Date().toLocaleDateString() },
    ]);

    setDate("");
    setTask("");
  };

  return (
    <div className="container mt-4">
      <form onSubmit={submit} className="p-3 border rounded shadow-sm bg-light">
        <div className="row g-2">
          {/* Task Input */}
          <div className="col-md-5">
            <input
              type="text"
              id="task"
              className="form-control"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter your task"
            />
            {error && <div className="text-danger small mt-1">{error}</div>}
          </div>

          {/* Date Input */}
          <div className="col-md-4">
            <input
              type="date"
              id="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="dd-mm-yyyy"
            />
          </div>

          {/* Button */}
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary w-100">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
