# QueryClient default `onError` option

- **No** useError analogy for useIsFetching
- (왜 useIsFetching 같이 useError 훅이 존재하지 않을까?)
    - 사용자에게 오류를 표시하려면 각 오류에 대한 문자열이 필요한데 각기 다른 문자열을 가진 오류가 시시각각 팝업 하도록 구현하는 것은 쉽지 않은 일입니다. (useIsFetching은 현재 fetching중인 쿼리의 수를 리턴합니다.)

    - need more than integer; unclear how to implement

- **Instead, set default** onError **handler for QueryClient**


## Alternative to onError: `Error Boundary`

- Alternative: handle errors with [React Error Boundary](https://reactjs.org/docs/error-boundaries.html)

- useErrorBoundary for useQuery
    - reference: [https://react-query.tanstack.com/reference/useQuery](https://react-query.tanstack.com/reference/useQuery)


- option to useQuery / useMutation

    - or in **defaultOptions** when creating **QueryClient**

- Set to true to propagate errors to the nearest error boundary