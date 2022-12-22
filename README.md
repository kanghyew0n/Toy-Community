# Toy-Community 📸


**✅ 1차 배포 : https://toy-community.herokuapp.com/**
<br/>

**✅ 2차 배포 : https://toy-community.fly.dev/**
 <br/>
 
**✅ JavaScript → TypeScript 마이그레이션 진행**

<br/>

### ⚠️ fly.io 배포 에러
https://fly.io/docs/getting-started/troubleshooting/
* Port Checking
    * 서버 port가 3001 || env.port 해놨었는데 3001포트 사용이 안됐었다..!
* env 설정
    * mongoDB가 불러지지 않아 서버가 켜지지 않았다.
    * env 설정을 바꾸거나 비밀번호를 새로 발급받아야 했지만 코드를 올린게 아니라서 그냥 env 없이 진행했다 (DB만) 
* 로그 확인
    * `flyctl logs` 로 로그 확인하기!

<br/>
<br/>
