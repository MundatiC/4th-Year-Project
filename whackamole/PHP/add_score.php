<?php
header("Access-Control-Allow-Origin: http://localhost:3000");

include 'database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if the required fields are present
    if(isset($_POST['difficulty'], $_POST['topic'], $_POST['score'], $_POST['user'])) {
        $difficulty = $_POST['difficulty'];
        $topic = $_POST['topic'];
        $score = intval($_POST['score']);
        $user = $_POST['user'];

        // Output for testing
        echo "Your topic is " . $topic . " and your level was " . $difficulty . ". Your final score is " . $score . ". Well done, " . $user;

        // Insert data into the database (use prepared statements to prevent SQL injection)
        $stmt = $con->prepare("INSERT INTO playerscore (user, topic, difficulty, score) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("sssi", $user, $topic, $difficulty, $score);
        $stmt->execute();

        // Close the statement
        $stmt->close();

    } else {
        echo "One or more required fields are missing.";
    }
} else {
    echo "Invalid request method.";
}
?>
