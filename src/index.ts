import express from 'express';
import { sgSubscribe } from './helpers/sgSubscribe';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/views/index.html');
});

app.get('/test', (req, res) => {
    res.status(200).sendFile(__dirname + '/views/test.html');
});

app.post('/api/subscribe', async (req, res) => {

    try {
        let result = await sgSubscribe(req.body.contact);
        return res.status(200).send(result);
    } catch(err) {
        return res.status(400).send(err)
    }

});

app.listen(process.env.PORT || 8080, () => {
    console.log(`App listening on port 8080`);
});
