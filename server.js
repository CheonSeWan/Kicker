// 필요한 모듈 불러오기
const express = require('express');
const path = require('path');

// express 앱 생성
const app = express();
const port = 80; // 사용할 포트 번호

// 정적 파일 서비스를 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, 'web')));

// 루트 경로에 대한 요청 처리
app.get('/', (req, res) => {
  // profile.html 파일을 읽어서 클라이언트에게 전송
  res.sendFile(path.join(__dirname, 'web', 'profile.html'));
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
