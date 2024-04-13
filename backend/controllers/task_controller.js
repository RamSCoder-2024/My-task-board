import connection from "../db.js";

export const addTask = async (req, res) => {
  try {
    let { title, description, icon, status } = req.body;

    connection.query(
      "INSERT INTO tasks (title, description, icon, status) VALUES (?, ?, ?, ?)",
      [title, description, icon, status],
      (error) => {
        if (error) {
          console.error(error);
          return res
            .status(500)
            .send("Error al realizar la inserción de datos.");
        }
        res.json({ title, description, icon, status });
      }
    );
  } catch (e) {
    console.error(e);
    res.status(500).send("Error al realizar la inserción de datos.");
  }
};
