const db = require('./db');
const helper = require('../helper');
const config = require('../config/config');

async function getMultiple(page =1){

    const offset= helper.getOffset(page,config.listPerPage);
    const rows= await db.query(`SELECT id, name 
        FROM heroes LIMIT ${offset},${config.listPerPage}`);
    const data = helper.emptyOrRows(rows);
    //const meta= {page};
    
    return data
    
    }
    
    async function getByID(id =1){
      const rows= await db.query(`SELECT id, name 
          FROM heroes where id= ${id}`);
      const data = helper.emptyOrRows(rows);
      return data[0]
      }
      
    async function create(heroe){
        const result= await db.query(`INSERT INTO heroes 
        (name) 
        VALUES 
        ("${heroe.name}")`
      );
        let message= 'Error en crear el lenguaje de programación';
        if(result.affectedRows){
            message='Se creo correctamente el lenguaje de programación';
        }
    return message;
    }
    async function update(id,heroe){
        const result = await db.query(
            `UPDATE heroes 
            SET name="${heroe.name}"  
            WHERE id=${id}` 
          );
          let message = 'Error in updating programming language';
          if (result.affectedRows) {
            message = 'Programming language updated successfully';
          }
          return {message};
    }

    async function remove(id){
        const result=await db.query(` DELETE FROM 
        heroes 
        where id=${id}`);
        let message = 'Error in remove programming language';
        if (result.affectedRows) {
          message = 'Programming language removed successfully';
        }
        return {message};
    };

    module.exports={getMultiple,create,update,remove,getByID}
