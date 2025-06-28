const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Hello from micro service-B!');
});

app.listen(PORT, () => {
  console.log(`service-dialog-b running on port ${PORT}`);
});
