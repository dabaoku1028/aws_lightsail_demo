$(document).ready(function(){
    $.ajax({
        url: '../backend/getOrder.php',
        type: 'get',
        dataType: 'JSON',
        success: function(response){
            var len = response.length;
            for(var i=0; i<len; i++){
                var orderId = response[i].orderId;
                var productId = response[i].productId;
                var quantity = response[i].quantity;
                var productname = "";
                var pic = "";

                switch(productId){
                    case '1':
                        productname = "Banana";
                        pic = "assets/img/portfolio/banana.jpg"
                        break;
                    case '2':
                        productname = "Blue Berry";
                        pic = "assets/img/portfolio/blueberry.jpg"
                        break;
                    case '3':
                        productname = "Grape";
                        pic = "assets/img/portfolio/grape.jpg"
                        break;
                    case '4':
                        productname = "Kiwi";
                        pic = "assets/img/portfolio/kiwi.jpg"
                        break;
                    case '5':
                        productname = "Orange";
                        pic = "assets/img/portfolio/orange.jpg"
                        break;
                    case '6':
                        productname = "Strawberry";
                        pic = "assets/img/portfolio/strawberry.jpg"
                        break;
                }

                var tr_str = "<tr>" +
                    "<td>" + orderId + "</td>" +
                    "<td>" + productname + "</td>" +
                    "<td><img src=\"" + pic + "\"width=\"100\" height=\"80\"></td>" +
                    "<td>" + quantity + "</td>" +
                    "</tr>";

                $("#orderTable tbody").append(tr_str);
            }
        }
    });
});
