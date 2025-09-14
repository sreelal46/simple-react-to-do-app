import React from "react";

export default function TableContent({ tasks, setTasks }) {
  const markAsDone = (indexOfDone) => {
    const updateTask = tasks.map((element, index) =>
      indexOfDone === index ? { ...element, done: true } : element
    );
    setTasks(updateTask);
  };

  const markAsUndo = (indexOfDone) => {
    const updateTask = tasks.map((element, index) =>
      indexOfDone === index ? { ...element, done: false } : element
    );
    setTasks(updateTask);
  };

  return (
    <div className="container mt-4">
      <table className="table table-bordered table-striped text-center align-middle shadow-sm">
        <thead className="table-info">
          <tr>
            <th>Task</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-muted">
                No tasks added yet
              </td>
            </tr>
          ) : (
            tasks.map((value, index) => (
              <tr key={index}>
                <td
                  style={{
                    textDecoration: value.done ? "line-through" : "none",
                  }}
                >
                  {value.task}
                </td>
                <td
                  style={{
                    textDecoration: value.done ? "line-through" : "none",
                  }}
                >
                  {value.date}
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() =>
                      setTasks(tasks.filter((_, indexd) => indexd !== index))
                    }
                  >
                    Delete
                  </button>
                  {value.done ? (
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => markAsUndo(index)}
                    >
                      Undo
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => markAsDone(index)}
                    >
                      Done
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
