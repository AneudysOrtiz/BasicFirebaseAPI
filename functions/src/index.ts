import * as functions from 'firebase-functions';
import * as express from 'express';
import { mainRouter } from './routes/main';

const app = express();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

app.use('/api', mainRouter);
exports.app = functions.https.onRequest(app);