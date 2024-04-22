async function addUserGameData(req, res) {
    let { UserID, GameName, EquationsWrong, Equations } = req.body;
    let { pool } = req;

    // Ensure correct parsing/formatting of parameters especially TimePlayed

    try {
        const result = await pool
            .request()
            .input("UserID", UserID)
            .input("GameName", GameName)
            .input("EquationsWrong", EquationsWrong)
            .input("Equations", Equations)
            .execute("usp_AddOrUpdateUserGame");

        console.log(result);

        if (result.rowsAffected[0] > 0) {
            res.status(201).send({
                success: true,
                message: "Game settings successfully updated",
            });
        } else {
            res.status(404).send({
                success: false,
                message: "No changes made. Record may not exist or no updates were necessary.",
            });
        }
    } catch (error) {
        console.error("SQL error", error);
        res.status(500).send({
            success: false,
            message: "An error occurred in updating the game settings",
        });
    }
}

module.exports = {
    addUserGameData
}
