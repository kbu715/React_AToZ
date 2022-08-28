# stale data (데이터 만료)

- Why does it matter if the data is stale?

- Data refetch only triggers for stale data
    - For example, component remount, window refocus
    - **단, 만료된 데이터일 경우만 리페칭이 실행됩니다.**
    - staleTime translates to "max-age"
    - staleTime은 데이터를 허용하는 '최대 나이' 라고 할 수 있습니다.
    - 데이터가 만료됐다고 판단하기 전까지 허용하는 시간이 staleTime
    - 웹사이트에 보여지는 데이터가 10초까지 그대로라도 괜찮다면 staleTime을 10초로 설정합니다.

    - staleTime 기본값은 0
    - 항상 만료되어있기에 클라이언트에게 최신의 데이터를 가져올 수 있는 기회가 열려있습니다.


## staleTime vs. cacheTime

- staleTime is for **re-fetching**

- Cache is for data that might be re-used later
- 나중에 다시 필요할 수도 있는 데이터용 입니다.

    - query goes into "cold-storage" if there's no active useQuery
    - 특정 쿼리에 대한 활성 useQuery가 없는 경우 해당 데이터는 콜드 스토리지로 이동합니다.

    - cache data expires after cacheTime (default: 5min)
    - 구성된 cacheTime이 지나면 캐시의 데이터가 만료되며 기본값은 5분
    - cacheTime: how long it's been since the last active `useQuery`
    - 특정 쿼리에 대한 `useQuery`가 활성화된 후 경과한 시간입니다.

    - After the cache expires, the data is garbage collected

    - 캐시가 만료되면 가비지 컬렉션이 실행되고 클라이언트는 데이터를 사용할 수 없습니다.

- Cache is backup data to display while fetching
- 새로운 데이터를 수집하는 동안 (fetching) 약간 오래된 데이터를 표시하는 편이 빈 페이지보다 낫습니다.

- 만료된 데이터가 위험하다고 판단되는 앱이라면 cacheTime을 0으로 설정합니다.