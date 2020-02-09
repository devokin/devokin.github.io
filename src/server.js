// 'use strict';
//
// import { sgSubscribe } from './helpers';
//
// const express = require('express');
// const sgMail = require('@sendgrid/mail');
//
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//
// const app = express();
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
//
// app.get('/', (req, res) => {
//   res.status(200).sendFile(__dirname + '/index.html');
// });
//
// app.post('/api/subscribe', (req, res) => {
//   const msg = {
//     to: req.body.email,
//     from: 'adevokin@gmail.com',
//     subject: 'Testing from google cloud',
//     text: 'my Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   };
//   sgMail.send(msg).then(response => {
//     console.log('success');
//     return res.status(200).send(response);
//   }).catch(err => {
//     console.log(err);
//     return res.status(400).send(err);
//   });
//
// });
//
// app.post('/api/add', (req, res) => {
//
//   sgSubscribe()
//   // sgMail.
//   // [
//   //   {
//   //     "email": "example@example.com",
//   //     "last_name": "Jones",
//   //     "pet": "Fluffy",
//   //     "age": 25
//   //   }
//   // ]
// });
//
// if (module === require.main) {
//   const server = app.listen(process.env.PORT || 8080, () => {
//     const port = server.address().port;
//     console.log(`App listening on port ${port}`);
//   });
// }
//
// module.exports = app;
