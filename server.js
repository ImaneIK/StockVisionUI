const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const path = require('path'); // Import the 'path' module


const app = express();
const port = 5000;

// app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests only from this origin
}));

app.use(bodyParser.json());

// Serve static files from the 'build' directory
// app.use(express.static('build'));

// Handle other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
// });

// Your existing route handling
app.post('/', async (req, res) => {
  console.log('Received POST request:', req.body);

  const inputData = req.body.input;
  const result = `Received input: ${inputData}`;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


