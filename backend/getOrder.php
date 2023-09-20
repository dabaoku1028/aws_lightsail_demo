<?php
include "dataAccess.php";
$return_arr = array();
$query = "SELECT * FROM ec_order"; 
$result = mysqli_query($con,$query);

while($row = mysqli_fetch_array($result)){
    $orderId = $row['orderId'];
    $productId = $row['productId'];
    $quantity = $row['quantity'];

    $return_arr[] = array("orderId" => $orderId,
                    "productId" => $productId,
                    "quantity" => $quantity);
}

echo json_encode($return_arr);
?>