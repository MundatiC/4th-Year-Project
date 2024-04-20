var userSettings;

// Retrieve UserID from local storage
const user = localStorage.getItem('userData');

const userData = JSON.parse(user);

const userID = userData.UserID;

document.addEventListener('DOMContentLoaded', function () {
  // Send a GET request to the /getGameSettings endpoint
  axios.post('http://localhost:5050/getGameSettings', {
    UserID: userID
  })
    .then(response => {
      // Handle successful response


      // Assign response data to userSettings
      userSettings = response.data;

      document.dispatchEvent(new CustomEvent('settingsLoaded'));

      // Now userSettings contains the game settings received from the server
      getUserSettings();

      update();

    })
    .catch(error => {
      // Handle error
      console.error('Error retrieving game settings:', error);
    });
});
