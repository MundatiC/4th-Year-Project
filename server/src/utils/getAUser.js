async function getAUser(Username, pool) {

    
    if (pool.connected) {
        let results = await pool.request()
            .input("Username", Username)
            .execute("GetUserByUsername")
        
        

        return results.recordset[0];
    }

}

module.exports = getAUser;