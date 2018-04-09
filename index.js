const User = require('./users/User')

User.findById(1)
.then(data => {
    console.log('firstname:', data.firstName)
})
.catch(err => {
    console.error(err.message)
})

// User.create({
//     firstName: 'Sally',
//     lastName: 'Smith'
// })
// .then(data => {
//     console.log('firstname:', data.firstName)
// })
// .catch(err => {
//     console.error(err.message)
// })
