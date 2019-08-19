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
