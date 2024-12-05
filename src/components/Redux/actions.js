export const addTodo = (data) => ({
  type: "todoList/addTodo",
  payload: data,
});

export const search = (text) => ({
  type: "filters/search",
  payload: text,
});

export const changeStatus = (status) => ({
  type: "filters/radio",
  payload: status,
});

export const filterBySelect = (priorities) => ({
  type: "filters/select",
  payload: priorities,
});

export const toogleStatus = (id) => ({
  type: "todoList/toogle",
  payload: id,
});
