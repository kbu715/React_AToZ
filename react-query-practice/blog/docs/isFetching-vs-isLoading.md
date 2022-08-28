# isFetching vs isLoading

## isFetching

- 비동기 쿼리가 `resolve` 되지 않았음을 의미

## isLoading

- isFetching의 하위 집합
- 가져오는 상태에 있음을 의미
- no cache data + isFetching (never made this before!)
- 쉽게 말해 데이터를 가져오는 중이고, 표시할 캐시 데이터도 없다는 것