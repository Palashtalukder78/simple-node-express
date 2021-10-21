const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = 4000;
const handler = (req, res) => {
    res.send("Hello from node")
}
app.get('/', (req, res) => {
    res.send("wow, i am learning Node and node mon... Is it be a friend ?")
});
const users = [
    { id: 0, name: 'Palash Talukder', age: '25', email: "palash78@gmail.com", phone: '01990524105' },
    { id: 1, name: 'Rasel mia', age: '21', email: "rasel90@gmail.com", phone: '01990524105' },
    { id: 2, name: 'Arfan', age: '25', email: "arfan@gmail.com", phone: '01990524105' },
    { id: 3, name: 'Rafi', age: '25', email: "rafi@gmail.com", phone: '01990524105' },
    { id: 4, name: 'Mahmud', age: '25', email: "mahmud@gmail.com", phone: '01990524105' }
];
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("Hitting the post", req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

app.get('/users', (req, res) => {
    const search = req.query.search;
    //use-query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users)
    }
})
//dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})
app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'orange'])
})
app.get('/fruits/mango/fazli', (req, res) => {
    res.send('fruits')
})
app.listen(port, () => {
    console.log('listening to port: ', port);
})