import { callbackify } from 'util';
import { db } from './initBehavior.js';

//CREATE

export const createPlannedEvent = (event_name: any, event_description: any,timestamp_start: any, timestamp_end: any, author_id: any, category_id: any, callback: any) => {
    const sql = `INSERT INTO PlannedEvents (event_name, event_description, timestamp_start, timestamp_end, author_id, category_id) VALUES (?,?,?,?,?,?)`;
    db.run(sql, [event_name, event_description, timestamp_start, timestamp_end, author_id, category_id], function(err: any) {
        callback(err);
    });
}

export const createCategory = (category_name: any, color: any, callback: any) => {
    const sql = `INSERT INTO Categories (category_name, color) VALUES (?,?)`;
    db.run(sql, [category_name, color], function(err: any) {
        callback(err);
    });
}

export const createUser = (user_firstname: any, user_lastname: any, user_patronymic: any, user_image: any, callback: any) => {
    const sql = `INSERT INTO Users (user_firstname, user_lastname, user_patronymic, user_image) VALUES (?,?,?,?)`;
    db.run(sql, [user_firstname, user_lastname, user_patronymic, user_image], function(err: any) {
        callback(err);
    });
}

//READ

export const readPlannedEvents = (callback: any) => {
    const sql = 'SELECT * FROM PlannedEvents';
    db.all(sql, [], callback);
}

export const readCategories = (callback: any) => {
    const sql = 'SELECT * FROM Categories';
    db.all(sql, [], callback);
}

export const readUsers = (callback: any) => {
    const sql = 'SELECT * FROM Users';
    db.all(sql, [], callback);
}

export const queryRead = (callback: any, select: string, from: string, where: string) => {
    let sqlWhere;

    if (where !== undefined || where !== null) {
        sqlWhere = `WHERE ${where}`
    }

    const sql = `SELECT ${select} FROM ${from} ${sqlWhere}`
    db.run(sql, [], callback);
}

//UPDATE

export const updateUser = (id: any, user_firstname: any, user_lastname: any, user_patronymic: any, user_image: any, callback: any) => {
    let add = '';

    if (user_firstname !== undefined)   add += `user_firstname = '${user_firstname}'`;
    if (user_lastname !== undefined)    add += `user_lastname = '${user_lastname}'`;
    if (user_patronymic !== undefined)  add += `user_patronymic = '${user_patronymic}'`;
    if (user_image !== undefined)       add += `user_image = '${user_image}'`;
    

    const sql = `UPDATE Users SET ${add} WHERE id = ?`;
    db.run(sql, [], callback);
}

//DELETE

export const deleteUser = (id: any, callback: any) => {
    const sql = 'DELETE FROM Users WHERE id = ?';
    db.run(sql, id, callback);
}

