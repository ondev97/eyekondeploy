// Load dependencies
const aws = require('aws-sdk');
const express = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const cors = require('cors')
//const path = require('path');
const app = express();

// Set S3 endpoint to DigitalOcean Spaces
const endpoint = 'fra1';
const spacesEndpoint = new aws.Endpoint('https://'+endpoint+'.digitaloceanspaces.com');
const mySpace = 'elearn-storage';
const s3 = new aws.S3({
    endpoint: spacesEndpoint,
});
var imageName = '';
app.use(cors());
// Change bucket property to your Space name
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: mySpace,
        acl: 'public-read',
        key: function (request, file, cb) {
            imageName=file.originalname;
            cb(null, 'ckeditor/'+file.originalname);
        }
    })
}).array('upload', 1);

app.use(express.static('public'));

// app.use(express.static(path.join(__dirname, 'build')));
//
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.post('/uploads', function (request, response, next) {
    upload(request, response, function (error) {
        if(error){
            return console.log(error)
        }
        response.status(200).json({
            uploaded: true,
            url: `https://${mySpace}.${endpoint}.digitaloceanspaces.com/ckeditor/${imageName}`
        });
    });
});

app.listen(8080);
