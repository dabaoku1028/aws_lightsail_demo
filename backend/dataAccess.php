<?php
$host = "localhost"; /* Host name */
$user = "AWS"; /* User */
$password = "AWSEducate666"; /* Password */
$dbname = "DEMO"; /* Database name */

$con = mysqli_connect($host, $user, $password, $dbname);
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}
?>