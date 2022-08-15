import { atom, selector, selectorFamily } from "recoil";
import {
  todoListState,
  todoListFilterState,
  filteredTodoListState,
  todoListStatsState,
} from "./todos";
import axios from "axios";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

const API_URL = "https://api.github.com/users/";
// Queries with Parameters (매개변수가 있는 쿼리)
// 가끔 파생된 상태만이 아닌 매개변수를 기반으로 쿼리를 하고싶을 때가 있을 수 있습니다.
// 예를 들어 컴포넌트 props를 기반으로 쿼리를 하고 싶다고 해봅시다. 이 때 selectorFamily helper를 사용할 수 있습니다:
const githubUsernameQuery = selectorFamily({
  key: "githubUsername",
  get: (userId) => async () => {
    const response = await axios.get(`${API_URL}${userId}`);

    return response.data;
  },
});

export {
  textState,
  charCountState,
  todoListState,
  todoListFilterState,
  filteredTodoListState,
  todoListStatsState,
  githubUsernameQuery,
};
