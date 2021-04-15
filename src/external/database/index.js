const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

const database = {
  connect() {
    if (!MONGO_URL) {
      console.log("Unable to connect to mongoDB");
      return;
    }

    mongoose.connect(
      MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      () => console.log("Connected to mongodb")
    );
  },
};

module.exports = {
  database,
};
