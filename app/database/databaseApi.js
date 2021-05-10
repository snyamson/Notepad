import moment from "moment";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("notesDB.db");

const setUpDatabase = () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS note(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT, created_At TEXT)",
      null,
      () => console.log("Success: connected to the database"),
      (error) => console.log(error)
    );
  });
};

const insertNewNote = (title, content) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO note(title, content, created_At) VALUES(?,?,?)",
      [title, content, moment().format("LLL").toString()],
      () => console.log("Success: inserted a new note"),
      (error) => console.log(`Error: ${error}`)
    );
  });
};

export { setUpDatabase, insertNewNote };
