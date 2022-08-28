# useMutation

- Similar to useQuery, but:
    - returns mutate function
    - doesn't need query key
    - `isLoading` but no `isFetching`
    - 캐시된 항목이 없으므로 `isFetching`은 성립하지 않습니다
    - **by default, no retries (configurable!)**

    - `useQuery`는 기본값으로 3회 재시도한다는 것

    [https://tanstack.com/query/v4/docs/guides/mutations?from=reactQueryV3&original=https://react-query-v3.tanstack.com/guides/mutations](https://tanstack.com/query/v4/docs/guides/mutations?from=reactQueryV3&original=https://react-query-v3.tanstack.com/guides/mutations)