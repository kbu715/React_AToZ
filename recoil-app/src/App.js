import { Suspense } from "react";
import { RecoilRoot } from "recoil";
// import GithubUserInfo from "./components/GithubUserInfo";
// import TodoList from "./components/todo/TodoList";
// import CharacterCounter from "./components/CharacterCounter";
import GlobalModal from "./components/modal/GlobalModal";
import Modal from "./components/modal";
import "./App.css";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        {/* <CharacterCounter /> */}
        {/* <TodoList /> */}
        <Modal />
        <GlobalModal />
        <Suspense fallback={<div>Loading...</div>}>
          {/* <GithubUserInfo userId="kbu715" />
        <GithubUserInfo userId="velopert" />
        <GithubUserInfo userId="ZeroCho" /> */}
        </Suspense>
      </div>
    </RecoilRoot>
  );
}

export default App;
