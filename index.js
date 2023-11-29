// multer와 multer-google-storage 추가
const multer = require('multer');
const multerGoogleStorage = require('multer-google-storage');


// multer와 multer-google-storage를 사용하여 업로드 객체 생성
// multer의 storage로 multer-google-storage를 사용하여 GCP Cloud Storage 사용
//   - bucket: Cloud Storage버킷 이름
//   - projectId: Cloud Storage버킷이 포함된 프로젝트 ID
//   - keyFilename: 위에서 작업한 키파일 경로와 이름
//   - filename: Cloud Storage에 저장될 파일 경로 및 이름
//      “quizimage” 폴더에 저장하고 중복 방지를 위해 현재 시간을 prefix로 추가함.
//   - 업로드 파일 제한 용량: 5MB
const upload = multer({
    storage: multerGoogleStorage.storageEngine({
        bucket: '<Cloud Storage Bucket Name>',
        projectId: 'mygcpfirstsample',
        keyFilename: '<secure 폴더에 저장된 비밀키>',
        filename: (req, file, cb) => {
            cb(null, `quizimage/${Date.now()}_${file.originalname}`);
        },
    }),
    limits: { fileSize: 5*1024*1024},
});



// 이미지 업로드 POST가 오면 “upload”를 사용해 이미지를 업로드하고 결과를 받은 후
// 결과가 성공이면 이미지가 저장된 위치를 json 포맷으로 프론트에 전달
router.post('/upload/image', upload.single('file'), (req, res) => {
    console.log('[POST] /upload/image file: ' + JSON.stringify(req.file));
    res.json({filename: req.file.filename});
});