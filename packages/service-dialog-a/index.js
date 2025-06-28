const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello from micro service--A!');
});

app.listen(PORT, () => {
  console.log(`service-dialog-a running on port ${PORT}`);
});
