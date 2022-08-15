import { useRecoilValue } from "recoil";
import { charCountState } from "../states";

export default function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
