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

