import Todo from "../interfaces/Todo";
import Routine from "../interfaces/Routine";

const routines: Routine[] = [
  { id: 123, title: "morning routine", numberOfTodos: 1 },
];

const todos: Todo[] = [
  {
    id: 1,
    title: "mock todo",
    routineId: 123,
    icon: "Activity",
    color: "bg-alpha",
    updatedAt: new Date(),
  },
];

const queries = {
  getRoutineByid: (id: string) => {
    console.log(id);
    return routines[0];
  },
};

export default () => {
  const query = (name: string, query: string, variables?: Object) => {
    return queries[name](variables);
  };

  return { query };
};
