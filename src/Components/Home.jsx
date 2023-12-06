import Todos from "./ToDos";

const dummyTodos = [
  {
    id: 1,
    tittle: "todo tittle 1",
    desc: " todo1 desc here",
  },
  {
    id: 1,
    tittle: "todo tittle 1",
    desc: " todo1 desc here",
  },
];

const Home = () => {
  return (
    <div>
      <h2>hfygujhgy</h2>
      <Todos todos={dummyTodos}></Todos>
    </div>
  );
};

export default Home;
