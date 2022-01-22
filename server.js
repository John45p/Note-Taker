const express = require('express');
const apiRoutes = require('./Routes/apiRoute');
const htmlRoutes = require('./Routes/htmlRoute');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
apiRoutes(app);

htmlRoutes(app);

app.listen(PORT, () =>
  console.log(`Listening to ${PORT}!`)
);
