const mongoose = require("mongoose");
const DB_URI = "mongodb://localhost:27017/";

module.exports = () => {
    const connect = async () => {
        try {
            await mongoose.connect(DB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log('Conexión exitosa a MongoDB');
        } catch (error) {
            console.error('Error de conexión a MongoDB:', error);
        }
    };

    connect();
};
