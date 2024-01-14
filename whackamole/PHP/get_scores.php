<?php 

header("Access-Control-Allow-Origin: http://localhost:3000");

include 'database.php';

    if($con->connect_error) {
        die("Connection failed: " . $con->connect_error);
    }

    if(isset($_GET)) {
        $query = "SELECT * FROM playerscore ORDER BY score DESC";

        $result = $con->query($query);

        if($result->num_rows > 0) {
            $rows = array();
            while($row = $result->fetch_assoc()) {
                $rows[] = $row;
            }
            echo json_encode($rows);
        } else {
            echo json_encode(array());
        }
        
    }