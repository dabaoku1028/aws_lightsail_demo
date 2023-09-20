$(document).ready(function(){
    cartarr = [];
    cartarr.push(localStorage.getItem("product1"));
    cartarr.push(localStorage.getItem("product2"));
    cartarr.push(localStorage.getItem("product3"));
    cartarr.push(localStorage.getItem("product4"));
    cartarr.push(localStorage.getItem("product5"));
    cartarr.push(localStorage.getItem("product6"));
    var len = cartarr.length;
    for(var i=1; i<len+1; i++){
        if(cartarr[i-1] == null){
            continue;
        }
        var productname = "";
        var pic = "";

        switch(i){
            case 1:
                productname = "Banana";
                pic = "assets/img/portfolio/banana.jpg"
                break;
            case 2:
                productname = "Blue Berry";
                pic = "assets/img/portfolio/blueberry.jpg"
                break;
            case 3:
                productname = "Grape";
                pic = "assets/img/portfolio/grape.jpg"
                break;
            case 4:
                productname = "Kiwi";
                pic = "assets/img/portfolio/kiwi.jpg"
                break;
            case 5:
                productname = "Orange";
                pic = "assets/img/portfolio/orange.jpg"
                break;
            case 6:
                productname = "Strawberry";
                pic = "assets/img/portfolio/strawberry.jpg"
                break;           
        }

        var tr_str = "<tr>" +
            "<td>" + (i) + "</td>" +
            "<td>" + productname + "</td>" +
            "<td><img src=\"" + pic + "\"width=\"100\" height=\"80\"></td>" +
            "<td>" + cartarr[i-1] + "</td>" +
            "</tr>";

        $("#cartTable tbody").append(tr_str);
    }
});

function createOrder(){
    $.ajax({
        url: '../backend/createOrder.php',
        type: "POST",
        data:{
            product1: this.cartarr[0],
            product2: this.cartarr[1],
            product3: this.cartarr[2],
            product4: this.cartarr[3],
            product5: this.cartarr[4],
            product6: this.cartarr[5],
        },
        success: function(){
            Swal.fire({
                title: '成功下單!',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.clear();
                    window.location.replace("order.html");
                }
            })
        }
    });
}

function cleanCart(){
    Swal.fire({
        title: '確定要清空購物車嗎?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: '成功清空購物車!',
            icon: 'success',
          }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                window.location.replace("index.html");
            }
        })
        }
      })

}