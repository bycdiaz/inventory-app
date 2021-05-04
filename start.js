require('dotenv').config();

// const mongoose = require('mongoose');

// mongoose.connect(process.env.DB_URI,
//   {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
//   }
// );

const app = require('./app/app');

app.listen(process.env.PORT, () => {
  console.log(`listening at http://localhost:${process.env.PORT}`)
});
