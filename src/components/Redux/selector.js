import { createSelector } from "reselect";

const todoListSelector = (state) => state.todoList;
const searchTextSelector = (state) => state.filters.search;
const statusSelector = (state) => state.filters.status;
const prioritySelector = (state) => state.filters.priority;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  statusSelector,
  searchTextSelector,
  prioritySelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((i) => {
      if (status === "All") {
        return priorities.length
          ? i.name.includes(searchText) && priorities.includes(i.priority)
          : i.name.includes(searchText);
      } else {
        console.log(status);
        return (
          i.name.includes(searchText) &&
          (status === "Completed" ? i.completed : !i.completed) &&
          (priorities.length ? priorities.includes(i.priority) : true)
        );
      }
    });
  }
);
