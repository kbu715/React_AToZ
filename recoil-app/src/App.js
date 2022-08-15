import { RecoilRoot } from "recoil";
import TodoList from "./components/TodoList";
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
