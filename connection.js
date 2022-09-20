const mongoose = require('mongoose');

const dbConnectionString = "mongodb+srv://nikhil:Rajbhar54321@cluster0.vzimkc8.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection Successful");
}).catch((error) => {
    console.log(error);
    console.log("error");
})
