CREATE TABLE Users (
    UserID UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    Username NVARCHAR(50) UNIQUE,
    Email NVARCHAR(100) UNIQUE,
    UserType NVARCHAR(10),  -- Values could be 'Student' or 'Teacher'
    CreatedAt DATETIME DEFAULT GETDATE()
);
go

CREATE TABLE UserGameSettings (
    UserSettingID UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    UserID UNIQUEIDENTIFIER,
    SettingName NVARCHAR(50),
    SettingValue NVARCHAR(255),  -- Store all values as strings
    LastUpdated DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

go

CREATE OR ALTER PROCEDURE AddUser
    @Username NVARCHAR(50),
    @Email NVARCHAR(100),
    @UserType NVARCHAR(10),
    @Password NVARCHAR(255),  -- Add parameter for password
    @FullName NVARCHAR(100)   -- Add parameter for full name
AS
BEGIN
    INSERT INTO Users (Username, Email, UserType, Password, FullName)
    VALUES (@Username, @Email, @UserType, @Password, @FullName);  -- Include new columns in INSERT statement
END;
go

CREATE OR ALTER PROCEDURE EditUserGameSetting
    @UserID UNIQUEIDENTIFIER,
    @Math NVARCHAR(1),
    @Numbers INT,
    @Speed INT,
    @Volume FLOAT
AS
BEGIN
    BEGIN TRY
        -- Start a transaction
        BEGIN TRANSACTION;

        -- Delete existing game settings for the user
        DELETE FROM UserGameSettings WHERE UserID = @UserID;

        -- Insert the new game settings for the user
        INSERT INTO UserGameSettings (UserID, SettingName, SettingValue, LastUpdated)
        VALUES (@UserID, 'Math', @Math, GETDATE()),
               (@UserID, 'Numbers', CAST(@Numbers AS NVARCHAR(255)), GETDATE()),
               (@UserID, 'Speed', CAST(@Speed AS NVARCHAR(255)), GETDATE()),
               (@UserID, 'Volume', CAST(@Volume AS NVARCHAR(255)), GETDATE());

        -- Commit the transaction
        COMMIT TRANSACTION;

        -- Return success message
        SELECT 'Game settings updated successfully.' AS [Message];
    END TRY
    BEGIN CATCH
        -- Rollback the transaction if an error occurs
        IF @@TRANCOUNT > 0
        BEGIN
            ROLLBACK TRANSACTION;
        END;

        -- Return error message
        SELECT ERROR_MESSAGE() AS [Message];
    END CATCH;
END;
go

CREATE OR ALTER PROCEDURE GetUserGameSettings
    @UserID UNIQUEIDENTIFIER
AS
BEGIN
    BEGIN TRY
        -- Retrieve the game settings for the user
        SELECT SettingName, SettingValue
        FROM UserGameSettings
        WHERE UserID = @UserID;

        -- Return success message
        SELECT 'Game settings retrieved successfully.' AS [Message];
    END TRY
    BEGIN CATCH
        -- Return error message
        SELECT ERROR_MESSAGE() AS [Message];
    END CATCH;
END;
go


CREATE OR ALTER PROCEDURE GetUserByUsername
    @Username NVARCHAR(50)
AS
BEGIN
    SELECT * FROM Users WHERE Username = @Username;
END;
go

CREATE or ALTER PROCEDURE [dbo].[SearchStudentsByUsername]
    @username NVARCHAR(MAX)
AS
BEGIN
    SELECT UserID, Username, FullName
    FROM Users 
    WHERE Username COLLATE SQL_Latin1_General_CP1_CI_AI LIKE '%' + @username + '%'
          AND UserType = 'Student'
END

when select, fecth that as perfomance data, and wrong equations

send email

set game settings

CREATE TABLE Games (
    GameID UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(), -- Unique identifier for the game
    GameName NVARCHAR(255) NOT NULL, -- Name of the game
    Description NVARCHAR(MAX), -- Description of the game
    Genre NVARCHAR(50) -- Genre of the game (e.g., puzzle, action, adventure)
); 

CREATE TABLE UserGames (
    UserGameID UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(), -- Unique identifier for each user game record
    UserID UNIQUEIDENTIFIER NOT NULL, -- Identifier for the user playing the game
    GameID UNIQUEIDENTIFIER NOT NULL, -- Identifier for the game being played
    GameName NVARCHAR(255) NOT NULL, -- Name of the game
    HighScore INT, -- High score achieved by the user in the game
    TimePlayed TIME, -- Total time played by the user in the game
    EquationsWrong INT, -- Number of incorrect equations for the game
    Equations NVARCHAR(MAX), -- Equations stored as comma-separated values
    CONSTRAINT FK_UserGames_User FOREIGN KEY (UserID) REFERENCES Users(UserID), -- Foreign key constraint to link to the Users table
    CONSTRAINT FK_UserGames_Game FOREIGN KEY (GameID) REFERENCES Games(GameID) -- Foreign key constraint to link to the Games table
);
go

CREATE PROCEDURE GetUserGamesByUserID
    @UserID UNIQUEIDENTIFIER
AS
BEGIN
    SELECT *
    FROM UserGames
    WHERE UserID = @UserID;
END;

 






