import * as SQLite from 'expo-sqlite';

type User= {
    id: number;
    username: string;
    password: string;
  };

const db = SQLite.openDatabaseAsync('users.db');

export const initDB = async() =>{


    await (await db).execAsync(`
        CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, username TEXT NOT NULL, password TEXT NOT NULL);
    `);

    // const allRows = await (await db).getAllAsync('SELECT * FROM users');
    // console.log('All Users:', allRows);
}


export const addUser = async (username: string, password: string) => {

        
        //get new max ID
        const getMaxID: Array<User> = await (await db).getAllAsync('SELECT * FROM users')
        const lastItem = getMaxID.length -1
        const newID = getMaxID[lastItem].id +1

        const statement = await (await db).prepareAsync(
            'INSERT INTO users (id, username, password) VALUES ($id, $username, $password)'
          );
          try {
            let result = await statement.executeAsync({ $id: newID, $username: username, $password: password });

            if(result.changes == 1){
                return true;
            }else{
                return false;
            }
          }finally {
            await statement.finalizeAsync();
          }   
  };



export const checkLogin = async (username: string, password: string) => {

    
    const statement = await (await db).prepareAsync(
        'SELECT * FROM users WHERE username = $username AND password = $password'
      );
      try {
        let result = await statement.executeAsync<{$username: string, $password: string }>({
            $username: username, $password: password
        });


        const allRows = await result.getAllAsync();
        
        if(allRows.length > 0){
            //username & password match
            return true;
        }else{
            return false;
        }
        
      }finally {
        await statement.finalizeAsync();
      }   
};


  
