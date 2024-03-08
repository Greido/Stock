const app = require("./server");

app.listen(app.get("port")),
  () => {
    console.log("sv on port", app.get("port"));
  };
