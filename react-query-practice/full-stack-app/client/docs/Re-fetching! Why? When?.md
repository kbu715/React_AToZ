# Re fetching! Why and When?

- Re-fetch ensures stale data gets updated from server
    - Seen when we leave the page and refocus

- Stale queries are re-fetched automatically in the background when: 
    - New instances of the query mount (쿼리 키가 처음으로 호출되는 경우)
    - Every time a react component (that has a useQuery call) mounts
    - The window is refocused
    - The network is reconnected
    - configured `refetchInterval` has expired
        - Automatic polling

# Refetching! How?

- Control with global or query-specific options:

    - `refetchOnMount` (default: true), `refetchOnWindowFocus` (default: true), `refetchOnReconnect` (default: true)
    - `refetchInterval`

- Or, imperatively: refetch function in useQuery return object

# Suppressing Re-Fetch

- How?

    - Increase `stale time`

    - turn off `refetchOnMount` / `refetchOnWindowFocus` / `refetchOnReconnect`

- Only for very rarely changed, not mission-critical data
(변동이 잦지 않은 데이터에 적용해야 합니다.)

- 데이터가 왜 이렇게 자주 업데이트 됩니까? 보다 데이터가 왜 업데이트가 안됩니까? 가 훨씬 무섭다.
항상 유념하자.