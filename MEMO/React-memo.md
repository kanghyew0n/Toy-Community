# Component

### 📝 Component 사용 규칙

- 컴포넌트 이름은 영어 대문자로 시작
- 컴포넌트는 다른 컴포넌트가 사용할 수 있도록 export 해야함
- 컴포넌트가 다른 컴포넌트를 사용하려면 import 해야함
- Fragment

<br/>

# JSX

### 📝 JSX 문법

- camelCase 원칙
- return 문 안에서 js 사용 : {}
- css, style : {{}} => style={{color : 'red', fontSize : '16px'}}

<br/>

# useState

### ✨ useState(1)

`const [temp, setTemp] = useState("")`

- 첫번째 인자 (temp) : 변수의 이름
- 두번째 인자 (setTemp) : state를 바꿔주는 함수
- useState 함수 인자 : state 의 초기 type 값

<br/>

### ✨ useState(2) : 사용 원칙

Q. 값을 직접 바꾸지 않고 state를 사용하는 이유는?** <br/>
**A. state 값이 바뀌어도 화면을 재랜더링(새로고침) 시킬 필요가 없기 때문이다!**

- 값을 직업 바꾸지 않고 setState 사용
- setState를 html태그의 on 속성 호출 : function(){}

<br/>

# useEffect

```js
useEffect(() => {
  // 마운트 될때
  return () => {
    // 언마운트 될때
  };
}, [state]); // state를 넣는다면 바뀔때마다 실행됨
```

<br/>
<br/>
