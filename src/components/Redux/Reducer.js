const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "filters/search":
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    case "filters/radio":
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action.payload,
        },
      };
    case "filters/select":
      return {
        ...state,
        filters: {
          ...state.filters,
          priority: state.priority + action.payload,
        },
      };
    case "todoList/toogle":
      return {
        ...state,
        todoList: state.todoList.map((it) =>
          it.id === action.payload ? { ...it, completed: !it.completed } : it
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
