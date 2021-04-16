require("dotenv/config");

const { app } = require("./external/app");
const { PORT } = require("./external/app/constants");

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
