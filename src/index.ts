import express from 'express';
import { ISgContact, sgSubscribe } from './helpers/sgSubscribe';

const app = express();

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/views/index.html');
});

app.post('/api/subscribe', async (req, res) => {

    console.log(req.body);
    console.log(req);
    // const contact: ISgContact = {
    //     email: 'alexstudinskiy@i.ua',
    //     firstName: 'Alex',
    //     lastName: 'Studinskiy',
    //     message: 'Hey my project is awesome'
    // };

    // try {
    //     let result = await sgSubscribe(contact);
    //     return res.status(200).send(result);
    // } catch(err) {
    //     return res.status(400).send(err)
    // }

});

app.listen(process.env.PORT || 8080, () => {
    console.log(`App listening on port 8080`);
});
