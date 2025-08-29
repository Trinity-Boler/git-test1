const app = require('express')();

app.get('/', (req, res) => {
  const timestamp = new Date().toLocaleString();
  res.json({ 
    message: 'Docker is easy 🐳 is a lie, but I did it. Good job me!', 
    servedAt: timestamp 
  });
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`));
