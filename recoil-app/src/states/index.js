import { atom, selector } from "recoil";
import {
  todoListState,
  todoListFilterState,
  filteredTodoListState,
  todoListStatsState,
} from "./todos";

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

export {
  textState,
  charCountState,
  todoListState,
  todoListFilterState,
  filteredTodoListState,
  todoListStatsState,
};
