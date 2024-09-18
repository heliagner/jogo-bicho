import 'dotev/config'
import e from 'express';

const app = e();

app.listen(process.env.API_PORT, () => {
    console.log(`Listening on port ${process.env.API_PORT}`)
});