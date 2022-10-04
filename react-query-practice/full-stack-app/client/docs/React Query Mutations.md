# React Query Mutations

- Here, use in a more realistic way (Server will update!)
    - Invalidate query on mutation so data is purged from the cache
    - Update cache with data returned from the server after mutation
    - Optimistic update (assume mutation will succeed, rollback if not)

- useMutation

    - very similar to useQuery!
    - Differences
        - no cache data
        - no retries
        - no refetch
        - no isLoading, only isFetching
        - returns `mutate` function which actually runs animation
        - `onMutate` callback (useful for optimistic queries!)
        - (mutation이 실패할 때를 대비해 복원할 수 있도록 이전상태를 저장하는데 사용됩니다)

- invalidateQueries

    - Invalidate appointments cache data on mutation
        - **so user doesn't have to refresh the page**

    - invalidateQueries effects:
        - marks query as stale (쿼리를 만료상태로 표시)
        - triggers re-fetch if query currently being rendered

    - mutate ---> onSuccess ---> invalidateQueries ---> re-fetch


[https://react-query.tanstack.com/guides/query-invalidation](https://react-query.tanstack.com/guides/query-invalidation)