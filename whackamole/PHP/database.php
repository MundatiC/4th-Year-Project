<?php 

    $con = mysqli_connect('localhost', 'root', '', 'whackamole');

    if(!$con) {
        echo "Error: " . mysqli_connect_errno();
    }