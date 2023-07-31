import React from 'react';
/*   const TodoList = () => {
    return (
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
        
      </ul>
    ); 
  }; */

  function TodoList() {

    const main = {
    task1: 'Professional Tasks',
    task2: {
      section1: 'Personal Tasks',
      section2: 'Health and Fitness'
    },
    task3: 'Learning and Growth',
    task4: 'Social and Family'
  };

  return (
    <div>
        <h1>{main.task1}</h1>
        <h2>{main.task2.section1}</h2>
        <h2>{main.task2.section2}</h2>
        <h1>{main.task3}</h1>
        <h1>{main.task4}</h1>
    </div>
);
}

  //const { task1, task2: {section1, section2}, task3, task4} =  main;
  //console.log (main);


  export default TodoList;