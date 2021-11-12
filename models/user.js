const db = require('./index');

// EMPTY OBJECT
// USED FOR EXPORTING THE FUNCTIONS BELOW
const User = {};

// CREATE User
User.create = (title, content) => {
    return db.none(`INSERT into Users(title, content)` + `VALUES($1, $2)`, [title, content]);
};

// GET ALL UserS
User.get = () => {
    return db.any('SELECT * FROM Users');
};

// UPDATE AN User
User.update = (title, content, id) => {
    return db.none(`UPDATE Users SET title = $1, content = $2 WHERE id = $3`, [
        title,
        content,
        id
    ]);
};

// DELETE AN User
User.delete = id => {
    return db.none(`DELETE from Users WHERE id = $1`, id);
};

module.exports = User;