# Lazy Days Spa Client

### A React client for the "Lazy Days Spa" app in the Udemy course "React Query: Server State Management for React"

## Installing

Run `npm install`

## Starting the client

Run `npm start`. The app will be found at [http://localhost:3000]. You will probably want to make sure the server is running as well.


### Note

`useAppointments`

- all users
- only for display month

`useUserAppointments`

- only logged-in user
- all time



`onSuccess` 콜백은 useAuth 함수 작업시 사용하는 queryClient.setQueryData 실행 이후나
쿼리 함수가 반환된 후에 실행됩니다.