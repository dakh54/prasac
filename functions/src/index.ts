import * as Storage from '@google-cloud/storage';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as fs from 'fs-extra';
import { tmpdir } from 'os';
import { dirname, join } from 'path';
import * as sharp from 'sharp';

import { environment } from './../../src/environments/environment';

// const projectId = 'prasac-a8e2a';

// const gcs = new Storage({
//     keyFilename: 'c:\\users\\chenda.lengh\\documents\\prasac-23f6771d6c18.json'
// });

// const gcs = new Storage({
//     projectId: projectId
// });

const gcs = new Storage();

// admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// const leadCollections = environment.leadCollections;

// export const onCreateCustomerLead = functions.firestore
//     .document(`${leadCollections}/{leadId}`)
//     .onCreate((snap, context) => {
//         console.log('snap', snap);
//         console.log('snap.data()', snap.data());

//         console.log('context', context);
//     });

export const generateThumbs = functions.storage
    .object()
    .onFinalize(async object => {
        const filePrefix = `thumb@`;

        const bucket = gcs.bucket(object.bucket);
        // const bucket = admin.storage().bucket(object.bucket);

        const filePath = object.name;
        const fileName = filePath.split('/').pop();
        const bucketDir = dirname(filePath);


        const workingDir = join(tmpdir(), 'thumbs');
        const tmpFilePath = join(workingDir, 'source.png');

        console.log('object', object);
        console.log('bucket', bucket);
        console.log('filePath', filePath);
        console.log('fileName', fileName);
        console.log('bucketDir', bucketDir);
        console.log('workingDir', workingDir);
        console.log('tmpFilePath', tmpFilePath);


        if (fileName.startsWith(filePrefix)
            || !object.contentType.includes('image')) {
                console.log('excitin function');
                return false;
            }

        // 1. Ensuer thumbnail directory exists
        await fs.ensureDir(workingDir);

        // 2. Download source file
        await bucket.file(filePath).download({
            destination: tmpFilePath
        });

        // 3. Resize the images and define an array of upload promises
        const sizes = [32, 64, 128, 256];

        console.log('sizes', sizes);


        // const uploadPromises = sizes.map(async size => {
        //     const thumbName = `${filePrefix}${size}_${fileName}`;
        //     const thumbPath =  join(workingDir, thumbName);

        //     // resize image
        //     await sharp(tmpFilePath)
        //         .resize(size, size)
        //         .toFile(thumbPath);

        //     // upload to gcs
        //     return bucket.upload(thumbPath, {
        //         destination: join(bucketDir, thumbName)
        //     });
        // });

        // // 4. Run upload operation
        // await Promise.all(uploadPromises);

        // 5. Clean up temporary working directory
        return fs.remove(workingDir);
    });
