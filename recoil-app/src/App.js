import { Suspense } from "react";
import { RecoilRoot } from "recoil";
import GithubUserInfo from "./components/GithubUserInfo";
import TodoList from "./components/todo/TodoList";
// import CharacterCounter from "./components/CharacterCounter";

function App() {
  return (
    <RecoilRoot>
      {/* <CharacterCounter /> */}
      <TodoList />
      <Suspense fallback={<div>Loading...</div>}>
        <GithubUserInfo userId="kbu715" />
        <GithubUserInfo userId="velopert" />
        <GithubUserInfo userId="ZeroCho" />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
