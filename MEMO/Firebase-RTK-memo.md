# Firebase

### Authentication - 회원가입
- Firebase SDK 인증 : 이메일 및 비밀번호 기반 인증을 사용하였다!
- `firebaseConfig` 를 설정할때 .env에 따로 보관해두었다.
- `createUserWithEmailAndPassword` 메서드를 통해 이메일과 비밀번호를 받을 수 있다.
- 메서드를 통해 저장하고 값을 확인할 수 있는데 `createdUser.user.multiFactor.user.___` 로 확인할 수 있었다.
```js
 const createdUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(userID, userPW);

  ... createdUser.user.multiFactor.user.email
```
- 아이디, 패스워드 외에 다른 데이터를 받고싶다면 `updateProfile` 로 추가할 수 있다.
```js
await createdUser.user.updateProfile({
      displayName: userName,
    });
```

<br/>

### Authentication - 로그인
- `signInWithEmailAndPassword` 메서드를 통해 이메일과 비밀번호를 보낼 수 있었다.
- 에러 코드를 확인할 수 있었다. 
- `auth/user-not-found` : 존재하지 않는 이메일
- `auth/worng-password` : 일치하지 않는 비밀번호
- 로그아웃 : `signOut` 메서드를 사용하면 된다.


<br/>

### Error
- `Uncaught (in promise) FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).`
- 파이어베이스 인증에 기본적인 유효성 검사 부분이다. 비밀번호가 6자리 이상이어야 한다.
- `* Uncaught (in promise) FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email).`
- 이것도 기본 유효성 검사 부분, 이메일 형식에 맞게 입력되어야 한다.
=> https://firebase.google.com/docs/auth/admin/errors?hl=ko

<br/>

# Redux-Toolkit

### 기본 사용
- `index.js` 파일에서 `app.js` 파일을 <Provider> 로 감싸 store에 접근 가능하게 한다.
- `configureStore` 를 통해 store를 만들어준다.
- `createSlice` 로 slice를 만들어 준다. 이때 name, initialState, reducers는 필수 요소이다.
- `useSelector` 는 저장소의 값을 가져오기 위해 사용된다. 
- `dispatch` 는 내부 메서드에 접근이 가능하다 
- `action` 은 마치 useState에서 setState느낌으로 변화하게 하는 이벤트이다.

<br/>

### Error
- `A non-serializable value was detected in an action, in the path: `payload`. Value:`
- 직렬화에 대한 에러가 발생했다.,
- 해결방법 : 
```js
export const store = configureStore({
 ...,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
```


