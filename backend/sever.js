const app = require('./src/app');
const config = require('./src/config/config');
const connect = require('./src/db/db')



app.listen(config.PORT , ()=>{
    console.log(`Server is listening at PORT: ${config.PORT}`);
    connect();
})