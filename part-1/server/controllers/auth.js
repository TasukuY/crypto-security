let bcryptjs = require('bcryptjs');
const { retry } = require('statuses');
const users = []

module.exports = {
    login: (req, res) => {
      // console.log('Logging In User')
      // console.log(req.body)
      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcryptjs.compareSync(password, users[i].password)) {
          let securedUserInfo = {...users[i]};
          delete securedUserInfo.password;
          //console.log(securedUserInfo);
          return res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        // console.log('Registering User')
        // console.log(req.body)

        const {password} = req.body;
        const hashedPass = bcryptjs.hashSync(password);
        req.body.password = hashedPass
        // console.log(req.body);
        users.push(req.body)
        res.status(200).send(req.body)
    }
}