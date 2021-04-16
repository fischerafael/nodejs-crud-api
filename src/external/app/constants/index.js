const DEV_PORT = process.env.DEV_PORT;
const PROD_PORT = process.env.PORT;

const PORT = PROD_PORT || DEV_PORT;

module.exports = {
  PORT,
};
