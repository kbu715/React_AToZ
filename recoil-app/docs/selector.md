# selector와 관련된 것들

- 컴포넌트 관점에서 보면 selector는 atom을 읽을 때 사용하는 같은 훅을 사용해서 읽을 수 있다. 그러나 특정한 훅은 쓰기 가능 상태 (즉, useRecoilState())에서만 작동하는 점을 유의해야 한다. 모든 atom은 쓰기 가능 상태지만 selector는 일부만 쓰기 가능한 상태(get과 set 속성을 둘 다 가지고 있는 selector)로 간주된다.

- useRecoilState : 쓰기 기능 포함
- useRecoilValue : 보통 읽기만 할 때