import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import taskRouter from "./routers/task_router.js";
import connection from "./db.js";

const app = express();
const port = process.env.PORT || 3006;
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.json());
//middleware de Express sirve los archivos estáticos desde el directorio 'dist'
app.use(express.static(path.resolve(dirname, "../dist")));

// Ruta para servir el archivo index de dist/
app.get("/", (req, res) => {
  res.sendFile(path.resolve(dirname, "../dist/index.html"));
});

app.use(taskRouter);

connection.connect((e) => {
  if (e) console.error("Error: " + e);
  
  console.log("Conectado a la base de datos");
  app.listen(port, async () => {
    console.log(`Express server run: http://localhost:${port}`);
  });
});