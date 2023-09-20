<?php
include "dataAccess.php";

$product1=$_POST['product1'];
$product2=$_POST['product2'];
$product3=$_POST['product3'];
$product4=$_POST['product4'];
$product5=$_POST['product5'];
$product6=$_POST['product6'];

if ($product1 != 0){
    $sql="insert into ec_order(productId, quantity) values (1 ,$product1)"; 
    $con->query($sql);
}

if ($product2 != 0){
    $sql="insert into ec_order(productId, quantity) values (2 ,$product2)"; 
    $con->query($sql);
}

if ($product3 != 0){
    $sql="insert into ec_order(productId, quantity) values (3 ,$product3)"; 
    $con->query($sql);
}

if ($product4 != 0){
    $sql="insert into ec_order(productId, quantity) values (4 ,$product4)"; 
    $con->query($sql);
}

if ($product5 != 0){
    $sql="insert into ec_order(productId, quantity) values (5 ,$product5)"; 
    $con->query($sql);
}

if ($product6 != 0){
    $sql="insert into ec_order(productId, quantity) values (6 ,$product6)"; 
    $con->query($sql);
}
?>