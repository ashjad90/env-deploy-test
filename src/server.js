import express from 'express';
import 'dotenv/config';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World: I am running on port:"+process.env.PORT+":"+process.env.NODE_ENV);
})
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});
