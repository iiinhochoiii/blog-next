# 프로젝트 소개

이 프로젝트는, 개발하면서 얻은 지식 또는 기술 등을 공유를 하고, 댓글 등을 통하여 서로 질의 응답을 통해 개발자들끼리 양질의 지식을 얻기 위한 블로그 입니다.

---

## 배포 주소

URL: https://c-tech.vercel.app

---

## 프로젝트 환경

### Back-end

- Language & Library: Javascript, Node.js (Express)
- DB: Mysql
- infra: heroku (배포)

백엔드 프로젝트는, 데이터베이스 등 개인 정보 등의 이유로 인하여 코드를 공개 하지 않았습니다.

### Front-end

- Language & Library: Typescript, React (Next.js)
- State: Mobx
- Design: Styled-Components, material-ui, React-modal
- Editor: toast-ui editor, prism, highlight.js
- ETC: React-hook-form, Babel, EsLint, Prettier 등
- infra: Vercel (배포)

---

## 화면 구성

### 1. 메인 화면

> URL : https://c-tech.vercel.app

![image](./public/images/README/home.png)

### 설명

메인 화면에는, 최근에 등록된 게시글에 대해서 3개가 보이도록 구성 되어 있습니다.

또한, 하단에 더보기 버튼을 클릭 했을 경우에, 블로그 링크로 이동 되어, 모든 게시글을 볼 수 있습니다.

### 2. 로그인

> URL : https://c-tech.vercel.app/login

![image](./public/images/README/login.png)

### 설명

이미지와 같이 이메일 및 패스워드를 입력하여, 로그인을 할 수 있습니다. 로그인을 성공하면, 백엔드에서 Response 값으로 JWT Token 값을 전달 해 주는데, 해당 토큰은 쿠키에 저장됩니다.

또한, 해당 페이지에서는, 비밀번호 찾기(Modal) 또는 회원가입 (라우팅)이 되도록 추가되어 있습니다.

![image](./public/images/README/login_find_password.png)

비밀번호 찾기는, 앞서 설명과 같이 모달로 동작하도록 구현 되어 있으며, 이메일 유효성 검사 및, 백엔드 쪽에서 인증번호를 생성해서, 등록된 메일로 메일 전송 그리고 인증번호가 일치 할 때 비밀번호를 변경하도록 구현 되어 있습니다.

### 3. 회원가입

> URL : https://c-tech.vercel.app/join

![image](./public/images/README/signup.png)

### 설명

회원가입 화면에서는 이메일 형식에 맞게 정규식과 중복 확인을 통한 유효성 검사가 수행 됩니다.

이메일 뿐만 아니라, 특수문자를 포함한 패스워드를 입력하도록 정규식이 구현 되어있습니다.

