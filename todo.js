const todoList = () => {
  const all = [];

  let today = new Date().toLocaleDateString("en-CA");
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((todoitem) => todoitem.dueDate < today);
  };

  const dueToday = () => {
    return all.filter((todoitem) => todoitem.dueDate === today);
  };

  const dueLater = () => {
    return all.filter((todoitem) => todoitem.dueDate > today);
  };

  const toDisplayableList = (list) => {
    return list
      .map(
        (todoitem) =>
          `${todoitem.completed ? `[x]` : `[ ]`} ${todoitem.title} ${
            todoitem.dueDate != today ? todoitem.dueDate : " "
          }`
      )
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
  };
};

module.exports = todoList;
