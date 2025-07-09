import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from service-dialog-a!' });
});

app.listen(PORT, () => {
  console.log(`✅ service-dialog-a is running on http://localhost:${PORT}`);
});
