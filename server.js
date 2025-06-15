const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/kirim', (req, res) => {
  const { nama, telepon, pesan } = req.body;
  console.log(`Pesan masuk dari ${nama} (${telepon}): ${pesan}`);
  res.send(`<h1>Terima kasih, ${nama}!</h1><p>Pesan Anda telah diterima.</p><a href='/'>Kembali</a>`);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
