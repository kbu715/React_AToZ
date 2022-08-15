import { RecoilRoot } from "recoil";
import TodoList from "./components/todo/TodoList";
// import CharacterCounter from "./components/CharacterCounter";

function App() {
  return (
    <RecoilRoot>
      {/* <CharacterCounter /> */}
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
