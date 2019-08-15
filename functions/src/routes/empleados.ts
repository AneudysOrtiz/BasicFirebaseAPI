import * as express from 'express';
import * as admin from 'firebase-admin';
export let empresasRouter = express.Router();

admin.initializeApp({
    credential: admin.credential.applicationDefault()
});
const db = admin.firestore();

empresasRouter.get('/', async (req, res) => {
    const snapshot = await db.collection('empresas').get();
    const records: any = [];
    snapshot.forEach((doc) => {
        records.push({
            id: doc.id,
            data: doc.data()
        });
    });
    res.send(records)
})