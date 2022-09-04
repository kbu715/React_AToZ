# Alternative to onError: **Error Boundary**

- Alternative: handle errors with __React Error Boundary__

    - [https://reactjs.org/docs/error-boundaries.html](https://reactjs.org/docs/error-boundaries.html)

- `useErrorBoundary` for useQuery
    - reference: [https://tanstack.com/query/v4/docs/reference/useQuery](https://tanstack.com/query/v4/docs/reference/useQuery)

- option to useQuery / useMutation
    - or in `defaultOptions` when creating `QueryClient`

- Set to true to propagate errors to the nearest error boundary
    - useErrorBoundary 옵션을 true로 설정하면 React Query 내에서 에러를 처리하지 않고 가장 가까운 에러 경계로 에러를 전파합니다.