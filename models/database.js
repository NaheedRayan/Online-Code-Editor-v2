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
                const query = "SELECT * FROM user" ;
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
    async getUsername(username){
        try{
            const response = await new Promise((resolve, reject)=>{
                
                const query = "SELECT * FROM user WHERE username = ? LIMIT 1";
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
    async getUserById(id){
        try{
            const response = await new Promise((resolve, reject)=>{
                
                const query = "SELECT * FROM user WHERE id = ? LIMIT 1";
                db.query(query , [id] , (err , results) => {
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

    async getEmail(email){
        try{
            const response = await new Promise((resolve, reject)=>{
                
                const query = "SELECT * FROM user WHERE email = ? LIMIT 1";
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
                
                const query = "SELECT * FROM user WHERE username = ? LIMIT 1";
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
    async getPassword_for_email_or_username(username_or_email , password){
        try{
            const response = await new Promise((resolve, reject)=>{
                
                const query = "SELECT * FROM user WHERE (username = ? OR email = ?) AND password = ? LIMIT 1";
                db.query(query , [username_or_email , username_or_email, password] , (err , results) => {
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
    


    async saveNewUserData(userData){
        try {
            const response = await new Promise((resolve, reject)=>{
                const query = "INSERT INTO user (username, email ,password) VALUES ?" ;
                db.query(query , [userData] , (err , results) => {
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            })
            return response;
            
        } catch (error) {
            console.log(error)
        }
    }


    async get_file(user_id){
        try{
            const response = await new Promise((resolve, reject)=>{
                
                const query = "SELECT * FROM file_data WHERE id = ?";
                db.query(query , [user_id] , (err , results) => {
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

    // deleting a file
    async delete_file(user_id , file_id){
        try{
            const response = await new Promise((resolve, reject)=>{
                
                const query = "DELETE FROM file_data WHERE (id = ? AND file_id =?) ";
                db.query(query , [user_id,file_id] , (err , results) => {
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


    //save as file with name

    async save_as_file(file_name , data , user_id){
        try {
            const response = await new Promise((resolve, reject)=>{
                
                const query = "INSERT INTO file_data (file_name, file_data ,id) VALUES (?,?,?)" ;
                db.query(query , [file_name , data , user_id] , (err , results) => {
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            })
            return response;
                        
        } catch (error) {
            console.log(error)
            
        }
    }


    //update file 

    async save_file(file_id , data){
        try {
            const response = await new Promise((resolve, reject)=>{
                
                const query = "UPDATE file_data SET file_data = ? WHERE file_id = ?" ;
                db.query(query , [ data , file_id] , (err , results) => {
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            })
            return response;
                        
        } catch (error) {
            console.log(error)
            
        }
    }


    //update profile 

    async update_profile(id , username , firstname , lastname , email , password , address , city , zip , phone){
        try {
            const response = await new Promise((resolve, reject)=>{
                
                const query = "UPDATE user SET  username = ? , first_name = ? , last_name = ? , email = ? , password = ? , address = ? , city = ? ,zip = ? , phone = ?  WHERE id = ?" ;
                db.query(query , [ username , firstname , lastname , email , password , address , city , zip , phone , id] , (err , results) => {
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            })
            return response;
                        
        } catch (error) {
            console.log(error)
            
        }
    }



}




module.exports = DbServices;