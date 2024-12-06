import sqlite3 from 'sqlite3';

export function initDB() {
    const sql3 = sqlite3.verbose();
    const db = new sql3.Database('./sqlite.db', sqlite3.OPEN_READWRITE, (err: any) => {
        console.error("start db")
        if (err) console.error(err.message);
    });
    
    db.serialize(() => {
        db.run("CREATE TABLE lorem (info TEXT)");
    
        const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for (let i = 0; i < 10; i++) {
            stmt.run("Ipsum " + i);
        }
        stmt.finalize();
    
        db.each("SELECT rowid AS id, info FROM lorem", (err: any, row: { id: string; info: string; }) => {
        console.log(row.id + ": " + row.info);
        });
    });

    db.close();
}