# Prefetch

- adds data to cache
- automatically stale (configurable)
- 구성할 수 있지만 기본값으로 만료 상태입니다.
- shows while `re-fetching`
    - as long as cache hasn't expired!

- 추후 사용자가 사용할 법한 모든 데이터에 pre-fetching을 사용합니다.

- 통계적으로 특정 탭을 누를 확률이 높다면 해당 데이터를 미리 가져오는게 좋겠죠?

[https://tanstack.com/query/v4/docs/reference/QueryClient?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/QueryClient#queryclientprefetchquery](https://tanstack.com/query/v4/docs/reference/QueryClient?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/QueryClient#queryclientprefetchquery)