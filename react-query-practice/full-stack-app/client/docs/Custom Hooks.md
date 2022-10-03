# Custom Hooks

- in larger apps, **make custom hook for each type of data!**
    - can access from multiple components
    - no risk of mixing up keys
    - (다수의 `useQuery` 호출을 사용했다면 사용 중인 키의 종류가 헷갈릴 수 있습니다)

    - query function `encapsulated` in custom hook
    - (사용하길 원하는 쿼리 함수를 혼동하는 위험도 없습니다. custom hook에 넣어주면 다수의 컴포넌트에 굳이 불러올 필요가 없습니다)

    - abstracts implementation from display layer
    - (일반적으로 디스플레이 레이어에서 데이터를 어떻게 가져오는가에 대한 구현을 추상화합니다)
        - update hook if you change implementation
        - no need to update components