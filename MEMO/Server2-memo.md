# Router

### 모듈 라우터 분할

- 게시글, 유저 정보별, 이미지 업로드 로 라우터를 분할시키려 한다.
- `/api/post` / `/api/user` / `/image`
- `app.use("/api/post", require("./Router/post.js"))` 처럼 라우터 파일을 가져와서 사용 가능하게 하였다.

<br/>

# MongoDB Collection Methods

### exec

- 전 명령어를 수행하고 난 후를 실행함
- 유사 promise 같은 느낌이다.
- exec()를 사용 하던 안하던 기능은 다르지 않지만 오류가 났을 경우 오류 발생한 코드 위치를 잡아준다고 한다!

### findOne

- 지정된 쿼리 기준을 충족하는 문서 하나를 반환한다.
- 반환할 필드를 지정할 수도 있다.

```js
Counter.findOne({ name: "counter" });
```

### updateOne

- 필터를 기반으로 컬렉션 내의 단일 문서를 업데이트한다. => 쿼리 두개 받음
- ({어떤 doc을 업데이트 할 것 인지}, {어떻게 업데이트 할 것 인지})

```js
Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } });
```

### populate

- 문서의 경로를 다른 컬렉션의 실제 문서로 자동으로 바꾸는 방법
- 스키마에 ref를 정의한다.
```js
{ 
  ...,
  author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
}
```

```js
 .populate("author") // author에 해당하는 데이터가 채워지게 된다 
```
- user와 post의 관계를 연결할 수 있다.

### deleteOne
- 컬렉션에서 단일 문서를 제거한다.
- `  Post.deleteOne({ postNum: Number(req.body.postNum) })` 만족하는 문서를 제거한다.


