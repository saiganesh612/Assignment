const sqlite3 = require("sqlite3").verbose();
let db;

module.exports.fetchData = () => {
    const data = [];
    return new Promise((resolve, reject) => {
        db = new sqlite3.Database("./sample_database.db", err => {
            if (err) console.log(err.message);
            else console.log("Connection established...");
        })

        db.serialize(() => {
            db.each('SELECT * FROM data_table', (err, info) => {
                if (err) console.log(err.message);
                else data.push(info);
            })
        })
        setTimeout(() => {
            if (data) return resolve(data);
            else return reject({ message: "Something went wrong!" })
        }, 15);
    })
}

module.exports.closeConnection = () => {
    db.close(err => {
        if (err) console.log(err.message);
        else console.log("Connection closed");
    })
}
