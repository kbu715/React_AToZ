import { useRecoilValue } from "recoil";
import { githubUsernameQuery } from "../states";

export default function GithubUserInfo({ userId }) {
  const { name: userName } = useRecoilValue(githubUsernameQuery(userId));

  return <h4>{userName}</h4>;
}

// function CurrentUserInfo() {
//   const userName = useRecoilValue(currentUserNameQuery);
//   return <div>{userName}</div>;
// }
