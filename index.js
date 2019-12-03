// implement your API here
const express = require("express");
const db = require('./data/seeds/users');
const server = express();

server.get('/', (req, res) => {
    res.send({ api: 'up + running...' })

});
//GET to list of users
server.get('/users', (req, res) => {
    db.find()
        .then(users => {
            res.status(200).json(users);
        })

        .catch(error => {
            res.json({ error: 'failed to get users from db' });
        });
});
//POST to /'users'
server.post('users', (req, res) => {
    const userInfo = req.body;
    console.log('user info', userInfo);
    db.add(userInfo).then(user => {
        if (name) {
            res.status(201).json(user)
        }).catch(error => {
            console.log('error', error);
            res.status(400).json({ error: 'failed to get users from db' })
        });
});
server.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    db.remove(id).then(removed => {
        if (removed) {
            res.status(200).json({ message: 'user not found' })
        }
    })
})
const port = 4000;
server.listen(port, () => console.log(`\n *** API running on port ${port} **\n`))