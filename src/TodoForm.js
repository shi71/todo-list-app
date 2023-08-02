import React from "react";

const TodoForm = (props) => {
  const { onTaskAdded } = props;

  const onFormSubmitted = (event) => {
    event.preventDefault();

    const value = event.target.task.value;
    
    onTaskAdded(value);
  };

  return (
    <form onSubmit={onFormSubmitted}>
      <input type="text" name="task" id="task" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
