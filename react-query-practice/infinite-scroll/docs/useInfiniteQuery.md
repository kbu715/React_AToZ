# useInfiniteQuery

## Shape of `useInfiniteQuery` Data

- Shape of data different than `useQuery`
- Object with two properties:
    - pages: 데이터 페이지 객체의 배열
    - pageParams: 각 페이지의 매개변수가 기록되어 있습니다 (실제 많이 사용되지는 않음)
- Every query has its own element in the pages array
- 모든 쿼리는 페이지 배열에 고유한 요소를 가지고 있습니다
- 그 요소는 해당 쿼리에 대한 데이터에 해당합니다
- pageParams tracks the keys of queries that have been retrieved
- pageParams는 검색된 쿼리의 키를 추적합니다


## useInfiniteQuery Syntax

- pageParam is a parameter passed to the queryFn
- 쿼리 함수에 전달되는 매개변수입니다

```jsx
useInfiniteQuery("sw-people", ({ pageParam = defaultUrl }) 
=> fetchUrl(pageParam))
```

- 첫번째 Url로 정의한 Url을 기본값으로 설정합니다

- React Query가 pageParam의 현재 값을 유지합니다 (컴포넌트 상태값의 일부가 아닙니다)

- useInfiniteQuery **options**
    - getNextPageParam: (lastPage, allPages)
        - Updates pageParam
        - Might use all of the pages of data (allPages)
        - we will use just the lastPage of data (specifically the next property)


## useInfiniteQuery Return Object Properties

- fetchNextPage
    - function to call when the user needs more data
    - 더보기를 누르거나 스크린에서 데이터가 소진되는 지점을 누르는 경우

- hasNextPage
    - Based on return value of `getNextPageParam`
    - if undefined, **no more data**

- isFetchingNextPage
    - **For displaying a loading spinner**
    

## Flow

1. Component mounts
2. Fetch first page
3. getNextPageParam -> Update pageParam
4. haxNextPage? 
5. YES -> user scrolls / click button -> fetchNextPage -> Move to Number 3
6. NO -> done!