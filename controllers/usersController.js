const User = require('../models/user.js');

module.exports = {
    getUsers(req, res, next) {
        User.get()
            .then(data => res.status(200).json({ success: true, articles: data }))
            .catch(err => res.status(400).json({ err }));
    },

    createUser(req, res, next) {
        const { title, content } = req.body;

        User.create(title, content)
            .then(() => res.status(201).json({ success: true, msg: 'Article created' }))
            .catch(err => res.status(400).json({ err }));
    },

    updateUser(req, res, next) {
        const { title, content } = req.body;
        let id = req.params.id;

        User.update(title, content, id)
            .then(() => res.status(200).json({ success: true, msg: `Article #${id} updated` }))
            .catch(err => res.status(400).json({ err }));
    },

    deleteUser(req, res, next) {
        let id = req.params.id;

        User.delete(id)
            .then(() => res.status(200).json({ success: true, msg: `Article #${id} deleted` }))
            .catch(err => res.status(400).json({ err }));
    }
};