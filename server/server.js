import express from 'express'
import cors from 'cors'
import { connectDb } from './db/db.js';
import router from './routes/user.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/user', router)


connectDb();
app.listen(5000, () => {
  console.log("Server running on port 5000");
});