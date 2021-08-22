function getConfig() {
    return {
        PORT: process.env.PORT,
        authinticationDomain: process.env.AUTH0_DOMAIN,
        AUTH0_API_ID: process.env.AUTH0_API_ID,
        API_URL: process.env.THE_SPORTSDB_API,
        AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
        AtlasDataBaseConnection: process.env.MONGO_DB_CONNECTION,
        ConnectionParameters: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    };
}
module.exports = getConfig;
