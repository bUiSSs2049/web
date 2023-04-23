//require('dotenv').config();
module.exports = {
    'connection':{
     'host':process.env.HOST,
     'user':process.env.USER,
     'password':process.env.PQSS
    },
    'database':process.env.DB,
    'user_table':'users'
}
   
