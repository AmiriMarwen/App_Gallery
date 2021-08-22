const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
// const helmet = require('helmet')

const cors = require('cors')
require('dotenv').config()

const port = process.env.PORT || 1111
const app = express();

app.use(express.json());
app.use(morgan('tiny'));
// app.use(helmet());
app.use(cors());



// Connecting to Atlas mongoDb
const uri = process.env.ATLAS_URI
mongoose.connect( uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection
connection.once('open' , ()=>{
  console.log('Atlas Db Connected Successfully');
}).catch(err => console.log( err ));;

app.get('/', (req, res) => {
  res.json( { message : `🎉 Server Run On Port https://localhost:${port} 🎉`})
});

// api custom routing
const router = require('../route/router')
app.use('/api', router);

// Api Responce middleware
const custom_headers = require('../middleware/res_headers');
app.use(custom_headers.contentRange)

// Api admin Routing 
const adminrouter = require('../route/admin.router')
app.use('/admin', adminrouter);

// importing error hundler middleware
const middleware = require('../middleware/error_middleware');
// Not Found 404 Error this should be at the end of all routes
app.use(middleware.notFound);
// Error handler
app.use(middleware.errorHundler);

// app listen on specific port
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
});
