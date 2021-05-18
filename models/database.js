const mysql = require("mysql");
let instance = null ;



const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    // password: "password",
    database: "execution-engine"
});



db.connect((err)=>{
    if(err)
        console.log(err.message);
    else {
        console.log("Connected to database")
    }
})


class DbServices{
    static getServiceInstance(){
        return instance ? instance : new DbServices();
    }

    async getAllData(){
        try {
            const response = await new Promise((resolve, reject)=>{
                const query = "SELECT * FROM User" ;
                db.query(query , (err, results)=>{
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            })
            // console.log(response)
            return response;
        } catch (error) {
            console.log(error);
            
        }
    }

    async getEmail(email){
        try{
            const response = await new Promise((resolve, reject)=>{
                
                const query = "SELECT * FROM User WHERE email = ? LIMIT 1";
                db.query(query , [email] , (err , results) => {
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            })

            return response;

        }
        catch (error) {
            console.log(error);
        }
    }
    async getUsername(username){
        try{
            const response = await new Promise((resolve, reject)=>{
                
                const query = "SELECT * FROM User WHERE username = ? LIMIT 1";
                db.query(query , [username] , (err , results) => {
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            })
            return response;
        }
        catch (error) {
            console.log(error);
        }
    }
}




module.exports = DbServices;