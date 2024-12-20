import sqlite3 from 'sqlite3';

const sql3 = sqlite3.verbose();
const dbName = './SavedData.db';

export const db: any = initDatabase(); 

function initDatabase() {

    return new sql3.Database(dbName, (err) => {
        if(err) {
            console.log(err.message);
        } else {
            console.log("Successfully loaded saved_data.db and connected to database");

            db.run('CREATE TABLE IF NOT EXISTS PlannedEvents (' +
                'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
                'event_name TEXT NOT NULL, ' +
                'event_description TEXT, ' +
                'timestamp_start INTEGER NOT NULL, ' +
                'timestamp_end INTEGER NOT NULL, ' +
                'author_id INTEGER NOT NULL, ' +
                'category_id INTEGER NOT NULL)');

            db.run('CREATE TABLE IF NOT EXISTS Users (' +
                'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
                'user_firstname TEXT NOT NULL, ' +
                'user_lastname TEXT NOT NULL, ' +
                'user_patronymic TEXT, ' +
                'user_image TEXT)');

            db.run('CREATE TABLE IF NOT EXISTS Categories (' +
                'id INTEGER PRIMARY KEY AUTOINCREMENT, ' +
                'category_name TEXT NOT NULL, ' +
                'color TEXT NOT NULL)');
        }
    })
}