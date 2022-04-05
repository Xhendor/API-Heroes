const express = require("express");
const app = express();
const port = 3000;
const heroesRouter=require('./routes/heroes');
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.get("/", (req, res) => {
    res.json({ message: "ok" });
  });

  app.use("/api/heroes",heroesRouter);

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  