CREATE TABLE Users (
    UserID UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    Username NVARCHAR(50),
    Email NVARCHAR(100),
    FullName NVARCHAR(100)
    UserType NVARCHAR(10),  -- Values could be 'Student' or 'Teacher'
    Password NVARCHAR(255),
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

