const {createPool} = require('mysql');

const pool = createPool ({
    port : 3306,
    host: "bx1q0hoq1vdojrpy3f8w-mysql.services.clever-cloud.com",
    user : " ugrtjewwfy2vacsh",
    password : "GCo3Lq336YjIWHQVNeDp ", 
    database :" bx1q0hoq1vdojrpy3f8w",
    connectionLimits:10
});
module.exports = pool ;