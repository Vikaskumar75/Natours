require('dotenv').config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');

process.setMaxListeners(0);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to database...'));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}....`);
});
