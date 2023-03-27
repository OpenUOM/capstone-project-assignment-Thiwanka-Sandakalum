
const readStudents = async () => {
    const sql = `SELECT * FROM student`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((student) => {
                resolve(student);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudentInfo = async (id) => {
    const sql = `SELECT * FROM student WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((student) => {
                resolve(student);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const addStudent = async (id, name, age) => {
    const sql = `INSERT INTO student(id,name,age) values (?, ?, ?)`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age])
            .then(() => {
                resolve({status: "Successfully inserted student"})
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const updateStudent = async (name, age, id) => {
    const sql = `UPDATE student SET name=?, age=? WHERE id=?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [name, age, id])
            .then(() => {
                resolve({status: "Successfully updated student"})
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const deleteStudent = async (id) => {
    const sql = `DELETE FROM student WHERE id = ?`
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then(() => {
                resolve({status: "Successfully deleted student"})
            })
            .catch((error) => {
                reject(error);
            });
    });
}