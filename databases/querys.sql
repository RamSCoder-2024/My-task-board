-- Creacion de base de datos.
CREATE DATABASE my_task_board;
USE my_task_board;

-- Creacion de tabla de tareas.
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
    title VARCHAR(250) NOT NULL,
    description VARCHAR(250),
    PRIMARY KEY(id)
)

-- addTask: Agregar nuevos tareas
INSERT INTO tasks (title, description) VALUES ('task1', 'description1');
-- +----+--------+--------------+
-- | id | title  | description  |
-- +----+--------+--------------+
-- |  1 | task1  | description1 |
-- |  2 | title2 | description2 |
-- +----+--------+--------------+