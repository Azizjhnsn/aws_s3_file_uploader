const {S3Client,PutObjectcommand} = require('@aws-sdk/client-s3');

const S3Client = new S3Client({
    region: '',
    endpoint: '',
    credentials: {
        accessKeyId: '',
        secretAccessKey:'' 
    }
});