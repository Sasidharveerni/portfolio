const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors({
  origin: 'https://portfolio-472i.vercel.app'
}));

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.post('/', (req, res) => {
    if (req.is('application/x-www-form-urlencoded')) {
        console.log('Received URL-encoded form data:');
        console.log(req.body);
      } else if (req.is('multipart/form-data')) {
        console.log('Received multipart/form-data:');
        // Process the FormData object here
      }
    
      res.send('Form data received!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
