import sqlite3 from 'sqlite3';

export function initDatabase() {
    const sql3 = sqlite3.verbose();
    const dbName = 'saved_data.db';

    let db = new sql3.Database(dbName, (err) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log("Successfully loaded saved_data.db and connected to database");

            db.run('CREATE TABLE IF NOT EXIST event (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, description TEXT, date_start TEXT NOT NULL, date_end TEXT, authorId INTEGER NOT NULL, departmentId INTEGER NOT NULL)');
            db.run('CREATE TABLE IF NOT EXIST department (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, managerId INTEGER NOT NULL)');
            db.run('CREATE TABLE IF NOT EXIST employee (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, roleId)');
        }
    })
    db.close();
}