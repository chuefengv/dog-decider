const Pool = require('pg').Pool;

const pool = new Pool({
    password: '9b61f8e0c50865c3aa71c9de9511a8e5e7a983f9f4134c225ae52eb6a0c9e0dc',
    user: 'oiflijelbfexem',
    database: 'd6438tlnopbgf5',
    host: 'ec2-23-21-229-200.compute-1.amazonaws.com',
    port: '5432',
    ssl: {rejectUnauthorized:false}
});

module.exports = pool;

