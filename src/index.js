require("dotenv/config");
const { app } = require("./external/app");

app.listen(3333, () => console.log("Server is running"));
