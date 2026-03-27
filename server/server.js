import express from 'express'
import cors from 'cors'
import { connectDb } from './db/db.js';
import router from './routes/user.js';

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

connectDb();

app.use('/api/user', router)
app.get('/',(req,res)=>{
  res.send("api running")
})


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
