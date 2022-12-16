const express = require('express');
const path = require('path');
const app = express();

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static('public'));
const port = process.env.PORT || 4400;

app.get('/getThings', function (req, res) {
  res.send('works');
});

app.get('/getFlightCo2e', function (req, res) {
  let { distance, unit } = req.query;

  if (distance > 0) {
    if (unit === 'miles') {
      distance = distance * 1.609; //convert to metric
    }
    //90 grams per km - 115 grams per km
    // 90 * 1000 km = 90,000 grams = 90Kg = 0.09 Mertic tons
    const gramsCo2e = 90 * distance;
    const kgCo2e = gramsCo2e / 1000;

    if (unit === 'miles') {
      const lbsCo2e = kgCo2e * 2.205; //convert to imperial
      res.send({ value: lbsCo2e, unit: 'lbs' });
      return;
    }

    res.send({ value: kgCo2e, unit: 'kg' });
    return;
  }

  res.send({ kg: 0 });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
