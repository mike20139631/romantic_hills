// alert("321");



//取餐方式改變時
$('input[type=radio][name=orderType]').on('change', function() { //可行
// $('input[name=orderType]').on('change', function() { //可行
    // alert(this.value);
    //地址跟著改變
    $("#o_delivery_addr").hide();
    $("#store_addr").hide();

    $("#delivery_mark").hide();
    
    if (this.value == '0'){
        //外帶
        $("#store_addr").show();
    }else{
        //外送
        $("#o_delivery_addr").show();
        //外送時，顯示備註
        $("#delivery_mark").show();
    }    
});

//數量加減
$(".input_prod_plus").on("click", function(){
    var num = +$(this).parent().children(".input_prod").first().val() + 1;
    $(this).parent().children(".input_prod").first().val(num).trigger("input");
});
$(".input_prod_sub").on("click", function(){
    var num = +$(this).parent().children(".input_prod").first().val() - 1;
    if (num<=0){
        num=0;
    }
    $(this).parent().children(".input_prod").first().val(num).trigger("input");
});

//價格改變 全部項目重新計算
$(".input_prod").on("input", function() {
    var total_price = 0;
    $(".input_prod").each(function() {
        let price = +$(this).parent().children(".input_prod_price").first().val();
        let count = +$(this).val();
        console.log((price*count));
        total_price += (price*count);
    });
    $("#o_total_price").text( total_price );
});

//組json 送post
function post_ajax(){
    const url = "https://script.google.com/macros/s/AKfycbz6UfKNwze71HijjQgkBcBdeFPks83XKdZVHXrd_c3DpWIKiDpE6attAioo4THMFKRUIg/exec";

    //取得相關參數
    var o_name = $("#o_name").val();
    var o_tel = $("#o_tel").val();
    var o_meal_time = $("#o_meal_time").val();
    var o_total_price = +$("#o_total_price").text();
    //檢查參數
    if(!o_name){
        alert("請輸入名字。");
        return false;
    }
    if(!o_tel){
        alert("請輸入聯絡電話。");
        return false;
    }
    if(!o_meal_time){
        alert("請輸入取餐時間。");
        return false;
    }
    if(!o_total_price && o_total_price <= 0){
        alert("請選購產品。");
        return false;
    }

    var payment_value = +$("input[name='paymentType']:checked").val();
    var o_payment = "";
    if (payment_value == 0) {
        //現金
        o_payment = "cash";
    }else{
        //匯款
        o_payment = "transfer";
    }

    var order_type_value = +$("input[name='orderType']:checked").val();
    var o_order_type = "";
    var o_delivery_addr = "";
    if (order_type_value == 0) {
        //外帶
        o_order_type = "takeout";
    }else{
        //外送
        o_order_type = "delivery";
        //外送要帶入外送地址
        let addr = $("#o_delivery_addr").val();
        //地址檢查
        if (!addr){
            //地址未輸入
            alert("請輸入外送地址。");
            return false;
        }
        o_delivery_addr = addr;
    }

    const order_list = [];
    for (var i = 1; i <= 5; i++){
        //prod_1_count
        let quantity = +$("#prod_" + i.toString() + "_count").val();
        if (quantity && quantity > 0){
            //prod_1_name
            let name = $("#prod_" + i.toString() + "_name").text();
            //prod_1_price
            let price = +$("#prod_" + i.toString() + "_price").val();
            let obj = {
                "prod_id": i,
                "prod_name": name,
                "unit_price": price,
                "quantity": quantity                
            }
            order_list.push(obj);
        }
    }


    //取得 訂單編號 (棄用，訂單編號由server端確認訂單成立後再回傳到client頁面)
    // var order_id = "";
    // const order_id_url = url + "?action=getNewOrderId";
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("GET", order_id_url, true);
    // xhttp.onload = function(event) {
    //     if (xhttp.status == 200) {
    //         order_id = this.responseText;
    //     } else {
    //         alert("GET order_id error:(" + xhttp.status + ") " + this.responseText);
    //         return true;
    //     }
    // }
    // xhttp.send(null);
    // // xhttp.send();
    // console.log("order_id:" + order_id);


    const data_json = {
        "verification_code": "romantic_hills",
        "order_info": {
        //   "order_id": order_id,
          "name": o_name,
          "tel": o_tel,
          "payment": o_payment,
          "order_type": o_order_type,
          "delivery_addr": o_delivery_addr,
          "meal_time": "2021-12-18 17:30:00",
          "total_price": o_total_price,
          "order_list": order_list
        }
    }

    //send post
    var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", "ajax_files.php", true);
    xhttp.open("POST", url, true);
    // xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Content-Type", "text/plain");
    xhttp.onload = function(event) {
        
        // oOutput = document.querySelector('#show-result');
        if (xhttp.status == 200) {
            //回傳json
            // const response_body = {
            //     "status": 1,
            //     "msg": "send line notify successful.",
            //     "send_data" = send_data
            // }
            const response_body = JSON.parse(this.responseText);
            console.log("rtn_json:" + this.responseText);
            //收到成功的json: rtn_json:{"status":1,"msg":"send line notify successful.","order_id":"60001"}
            if (response_body.status == 1){
                //跳alert顯示 訂單資訊
                // const send_data = {
                //     "訂單成立時間": order_time,
                //     "訂單資訊": {
                //       "訂單編號": o_order_id,
                //       "顧客姓名": o_name,
                //       "聯絡電話": o_tel,
                //       "付款方式": send_o_payment,
                //       "取餐方式": send_o_order_type,
                //       "外送地址": o_delivery_addr,
                //       "外送地圖連結": "https://www.google.com/maps/dir//" + o_delivery_addr +"/",
                //       "取餐時間": o_meal_time,
                //       "總金額": sheet_total_price,
                //       "訂單內容": send_re_order_list
                //     }
                //   }
                var alert_str = "您的訂單已成立，資訊如下:";
                for (const [key, value] of Object.entries(response_body.send_data)) {
                    if(key.toString() == "外送地圖連結"){
                        continue;
                    }
                    alert_str += "\n" + key.toString() + ": " + value.toString();
                }
                alert(alert_str);
            }else{
                alert("發生錯誤: " + response_body.msg);
            }


            // oOutput.innerHTML = this.responseText;
        } else {
            // oOutput.innerHTML = "Error " + xhttp.status + " occurred when trying to upload your file.";
            // oOutput.innerHTML = '<p class="text-red-500 text-sm">' + "Error " + xhttp.status + " occurred when trying to upload your file." + '</p>';
            alert("POST order error:(" + xhttp.status + ") " + this.responseText);
            return true;
        }
    }

    var data = JSON.stringify(data_json);
    xhttp.send(data);

}