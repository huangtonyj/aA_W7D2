export const fetchTodos = () => {
  return $.ajax({
    url: "/api/todos",
    method: "GET"
  });
};

export const createTodo = (todo) => {
  return $.ajax({
    url: "/api/todos",
    method: "POST",
    data: todo
  });
};

export const removeTodo = (todo) => {
  // console.log(todo);
  // console.log(todo.id);
  return $.ajax({
    url: `/api/todos/${todo.id}`,
    method: "DELETE"
  });
};

export const updateTodo = (myTodo) => {
  
  return $.ajax({
    url: `/api/todos/${myTodo.id}`,
    method: "PATCH",
    data: {todo: myTodo}
  });
};

// $.ajax({
//   url: `/api/todos/1`,
//   method: "PATCH",
//   data: {todo: {
//     title: "Ton",
//     body: "hi",
//     done: true
//   }}
// });
