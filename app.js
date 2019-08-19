// Sum Drill
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('common'));

app.get('/sum', (req, res) => {
  const stringa = req.query.stringa;
  const stringb = req.query.stringb;

  if (!stringa) {
    return res.status(400).send('Please provide a number');
  }

  if (!stringb) {
    return res.status(400).send('Please provide a second number');
  }

  const numa = parseFloat(stringa);
  const numb = parseFloat(stringb);

  const numc = numa + numb;

  const answer = `The sum of ${numa} + ${numb} is ${numc}`;

  res.status(200).send(answer);
});

app.listen(8000, () => {
  console.log('Express server is listening on port 8000');
});
/////////////////////////
// Caesar Cipher
app.get('/caesar', (req, res) => {
  const text = req.query.text;
  const shift = req.query.shift;

  if (!text) {
    return res.status(400).send('Please provide text');
  }

  if (!shift) {
    return res.status(400).send('Please provide a number');
  }

  const shiftNum = parseFloat(shift);

  const base = 'A'.charCodeAt(0);

  const cipher = text.toUpperCase().split('').map(char => {
    const code = char.charCodeAt(0);
    let difference = code - base;
    difference = difference + shiftNum;
    difference = difference % 26;
    const shiftedLetter = String.fromCharCode(base + difference);
    return shiftedLetter;
  })
  .join('');

  res.status(200).send(cipher);
});