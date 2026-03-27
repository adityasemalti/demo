import express from 'express'
import cors from 'cors'
import { connectDb } from './db/db.js';
import router from './routes/user.js';

const app = express();
app.use(express.json());

app.use(cors({
  origin: [
    "https://demo-yj8n.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
connectDb();

app.use('/api/user', router)
app.get('/',(req,res)=>{
  res.send("api running")
})


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
