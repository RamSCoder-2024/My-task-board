import connection from "../db.js";

export const addTask = async (req, res) => {
  try {
    const { title, description } = req.body;

    connection.query(
      "INSERT INTO tasks (title, description) VALUES (?, ?)",
      [title, description],
      (error) => {
        if (error) {
          console.error(error);
          return res
            .status(500)
            .send("Error al realizar la inserción de datos.");
        }
        res.json({ title, description });
      }
    );
  } catch (e) {
    console.error(e);
    res.status(500).send("Error al realizar la inserción de datos.");
  }
};
