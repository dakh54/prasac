import * as Storage from '@google-cloud/storage';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as fs from 'fs-extra';
import { tmpdir } from 'os';
import { dirname, join } from 'path';
import * as sharp from 'sharp';

// const gsc = Storage();



// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
