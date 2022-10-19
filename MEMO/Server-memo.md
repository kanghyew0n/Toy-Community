# Express

- Node.js 웹 애플리케이션 프레임워크이다. 
- 최소한의 기능만 탑재되어있지만 호환성 있는 미들웨어 패키지이다!

<br/>

# Axios & Cors

- CORS policy 오류는 proxy를 설정하여 해결할 수 있다.
- proxy ? 클라이언트가 자신을 통해서 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해 주는 컴퓨터 시스템이나 응용 프로그램을 가리킨다고 한다.
- 설정 방법 1. package.json에 "proxy"를 설정해준다.
- 설정 방법 2. http-proxy-middleware로 설정해준다.

<br/>

Q. package.json 설정 VS http-proxy-middleware 차이점 ? <br/>
**A. http-proxy-middleware 은 멀티 설정이 가능하다는 점이다. '/api'를 포함하는 요청만 혹은 '/api/v1'와 '/api/v2' 이런식으로 멀티 설정이 가능하다.**

<br/>

# Mongoose Model

- Mongoose는 애플리케이션 데이터를 모델링하기 위한 간단한 스키마 기반 솔루션을 제공하고, 기본 제공 유형 캐스팅, 유효성 검사, 쿼리 작성, 비즈니스 로직 후크 등을 즉시 사용할 수 있다고 한다.
- 스키마 ? 데이터의 구조나 표현 방법을 형식 언어로 정의한 구조이다!
- 스키마 생성방법 (아래참고)

```js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
  },
  { collection: "posts" }
); // DataBase의 Collection 이름이 된다.

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
```

<br/>

- 구조를 만들었다면 사용해주자! (아래참고)

```js
const { Post } = require("./Model/Post.js"); // 위에서 만들어준 모델을 가져오고

// 모델의 구조에 맞게 데이터를 받아준다! (POST Data)
const CommunityPost = new Post({ title: "test", content: "테스트입니다" });
CommunityPost.save().then(() => {
  res.status(200).json({ success: "성콩", text: "hihi" }); // 성공하면 응답을 보내준다!
});
```

<br/>

### env 환경변수 설정하기

- server 폴더로 이동 후 `npm install dotenv`

```js
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
```

- 후에 process.env.SERVER_DB_PW 으로 사용하면 된다!

<br/>

Q. React 환경에서는 필요 없는 이유는? <br/>
**A. create-react-app은 dotenv가 내장되어있어서 별도의 설치 없이 바로 사용 가능했다!**

<br/>
<br/>
