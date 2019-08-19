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
/////////////////
//Lotto 
app.get('/lotto', (req, res) => {
  const { numbers } = req.query;

  if (!numbers) {
    return res.status(400).send('Please provide numbers');
  }
  if (!Array.isArray(numbers)) {
    return res.status(400).send('Please provide an array');
  }

  const picks = numbers.map(n => parseInt(n)).filter(n => {
    !Number.isNaN(n) && (n >= 1 && n <= 20)});
  
  if(picks.length != 6) {
    return res
    .status(400)
    .send('pick must have six numbers')
  }

  const stockNumbers = Array(20).fill(1).map((_, i) => i + 1);

  const winningNumbers = [];
  for(let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * stockNumbers.length);
    winningNumbers.push(stockNumbers[random]);
    stockNumbers.splice(random, 1);
  }

  let difference = winningNumbers.filter(n => !guesses.includes(n));

  let responseText;

  switch(difference.length){
    case 0:
      responseText = "$1,000,000";
      break;
    case 1:
      responseText = "$100";
      break;
    case 2:
      responseText = "Free Ticket";
      break;
    default:
      responseText = "Sorry, play again";
  }

    res.json({
    guesses,
    winningNumbers,
    diff,
    responseText
  });
  
  
  res.send(responseText);
  });

  app.listen(8000, () => {
    console.log('Express server is listening on port 8000');
  });