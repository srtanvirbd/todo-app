/* eslint-disable react/prop-types */
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <section>
      {props.todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </section>
  );
};

export default Todos;
