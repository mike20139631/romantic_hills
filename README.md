<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" type="text/css">
  <link rel="stylesheet" href="css/scrolltop_themes/tab.css">
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
  <!-- <link rel="stylesheet" href="css/fontawesome.min.css"> -->
</head>
<body>
  <header class="flex flex-row space-x-11 px-5 py-5 border fixed top-0 w-screen min-w-min justify-center" style="background-color: #f7ebe8;">
    <div data-scroll-nav="1" class="text-2xl font-bold text-purple-600" style="color: #7c90db;" >漫漫介紹</div>
    <div data-scroll-nav="2" class="text-2xl font-bold text-purple-600" style="color: #ffa987;">漫漫美食</div>
    <div data-scroll-nav="3" class="text-2xl font-bold text-purple-600" style="color: #e54b4b;">即刻預訂</div>
    <div data-scroll-nav="4" class="text-2xl font-bold text-purple-600" style="color: #7d5c65;">漫漫在哪</div>
  </header>
  <div data-scroll-nav="0" data-scroll-index="0" class="px-8 py-6 border border-red-500">fake header</div>
  <main id="section1" data-scroll-index="1" class="p-10 border flex flex-col space-y-5 items-center" style="background-color: #f7d6e0;">
    <div class="py-5"></div>
    <h3 class="text-3xl">漫漫介紹...</h3>
    <img src="img/logo_01.png" alt="logo" width="300" class="rounded-full"/>
  </main>
  <div id="section2" data-scroll-index="2" id="menu" class="p-10 border flex flex-col space-y-5 items-center" style="background-color: #eff7f6;">
    <div class="py-5"></div>
    <h3 class="text-3xl">漫漫美食...</h3>
    
    <img src="img/menu_01.jpg" alt="menu" width="600"/>
  </div>
  <div id="section3" data-scroll-index="3" id="order" class="p-10 border flex flex-col space-y-5 items-center" style="background-color: #f7d6e0;">
    <div class="py-5"></div>
    <h3 class="text-3xl">即刻預訂...</h3>
    <div class="flex flex-col border shadow-xl  border-gray-300 p-10 rounded-2xl bg-white">

      <div class="flex flex-row border rounded-md space-x-3 py-2 min-w-max items-center">
        <h3 class="text-blue-800 font-bold text-lg">取餐人: </h3>
        <input id="o_name" type="text" placeholder="取餐名字" class="border">
      </div>
      <div class="flex flex-row border rounded-md space-x-3 py-2 min-w-max items-center">
        <h3 class="text-blue-800 font-bold text-lg">聯絡電話: </h3>
        <input id="o_tel" type="text" placeholder="聯絡電話" class="border">
      </div>
      <div class="flex flex-row border rounded-md space-x-3 py-2 min-w-max items-center">
        <h3 class="text-blue-800 font-bold text-lg">付款方式: </h3>
        <label><input type="radio" name="paymentType" value="0" required checked> 現金</label>
        <label><input type="radio" name="paymentType" value="1"> 匯款</label>
      </div>
      <div class="flex flex-row border rounded-md space-x-3 py-2 min-w-max items-center">
        <h3 class="text-blue-800 font-bold text-lg">取餐方式: </h3>
        <!-- <form action=""> -->
        <label><input type="radio" name="orderType" value="0" required checked> 外帶</label>
        <label><input type="radio" name="orderType" value="1" > 外送</label>
        <!-- </form> -->
        <span id="delivery_mark" class="pl-4" style="color:red;display:none;">*中和, 永和 滿30個甜甜圈可外送(需提前一天預訂)</span>
      </div>
      <div class="flex flex-row border rounded-md space-x-3 py-2 min-w-max items-center">
        <h3 class="text-blue-800 font-bold text-lg">取餐地址: </h3>
        <input id="o_delivery_addr" type="text" placeholder="填寫取餐地址" class="border focus:cursor-text cursor-auto w-96" style="display:none;">
        <span id="store_addr" class="">新北市中和區景平路375號 (<a class="underline text-blue-600" target="_blank" href="https://www.google.com/maps/dir//%E6%96%B0%E5%8C%97%E5%B8%82%E4%B8%AD%E5%92%8C%E5%8D%80%E6%99%AF%E5%B9%B3%E8%B7%AF375%E8%99%9F">地圖</a>)</span>
      </div>
      <div class="flex flex-row border rounded-md space-x-3 py-2 min-w-max items-center">
        <h3 class="text-blue-800 font-bold text-lg">取餐時間: </h3>
        <input id="o_meal_time" type="text" value="2021-12-19 12:30:00" placeholder="2021-12-19 12:30:00" class="border focus:cursor-text cursor-auto">
      </div>


      <div class="flex flex-col border">
        <h3 class="font-bold text-lg" style="color:green;">產品選項: </h3>
        <table class="mx-5 table-auto border-collapse border border-gray-400 my-3">
          <thead>
            <tr>
              <th class="border border-gray-300 w-72 py-2 bg-gray-100">產品名稱</th>
              <th class="border border-gray-300 w-48 bg-gray-100">單價</th>
              <th class="border border-gray-300 w-72 bg-gray-100">數量</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-gray-300 text-center">
                <h3 id="prod_1_name" class="text-blue-800 font-bold">蔓越莓核桃乳酪</h3>
              </td>
              <td class="border border-gray-300 text-center">
                <h3 class="text-blue-800 font-bold">$45</h3>
              </td>
              <td class="border border-gray-300">
                <div class="flex flex-row rounded-md space-x-3 py-5 min-w-max items-center justify-center">
                  <input type="hidden" id="prod_1_price" value="45" class="input_prod_price">
                  <i id="prod_1_sub" class="input_prod_sub fas fa-do-not-enter fa-lg cursor-pointer " style="color:green;"></i>
                  <input id="prod_1_count" type="number" min="0" value="0" placeholder="0" class="input_prod border w-24 text-center">
                  <i id="prod_1_plus" class="input_prod_plus fas fa-plus-circle fa-lg cursor-pointer" style="color:red;"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 text-center">
                <h3 id="prod_2_name" class="text-blue-800 font-bold">香蕉巧克力</h3>
              </td>
              <td class="border border-gray-300 text-center">
                <h3 class="text-blue-800 font-bold">$45</h3>
              </td>
              <td class="border border-gray-300">
                <div class="flex flex-row rounded-md space-x-3 py-5 min-w-max items-center justify-center">
                  <input type="hidden" id="prod_2_price" value="45" class="input_prod_price">
                  <i id="prod_2_sub" class="input_prod_sub fas fa-do-not-enter fa-lg cursor-pointer " style="color:green;"></i>
                  <input id="prod_2_count" type="number" min="0" value="0" placeholder="0" class="input_prod border w-24 text-center">
                  <i id="prod_2_plus" class="input_prod_plus fas fa-plus-circle fa-lg cursor-pointer" style="color:red;"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 text-center">
                <h3 id="prod_3_name" class="text-blue-800 font-bold">鳳梨燒肉</h3>
              </td>
              <td class="border border-gray-300 text-center">
                <h3 class="text-blue-800 font-bold">$55</h3>
              </td>
              <td class="border border-gray-300">
                <div class="flex flex-row rounded-md space-x-3 py-5 min-w-max items-center justify-center">
                  <input type="hidden" id="prod_3_price" value="45" class="input_prod_price">
                  <i id="prod_3_sub" class="input_prod_sub fas fa-do-not-enter fa-lg cursor-pointer " style="color:green;"></i>
                  <input id="prod_3_count" type="number" min="0" value="0" placeholder="0" class="input_prod border w-24 text-center">
                  <i id="prod_3_plus" class="input_prod_plus fas fa-plus-circle fa-lg cursor-pointer" style="color:red;"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 text-center">
                <h3 id="prod_4_name" class="text-blue-800 font-bold">原味甜甜圈</h3>
              </td>
              <td class="border border-gray-300 text-center">
                <h3 class="text-blue-800 font-bold">$30</h3>
              </td>
              <td class="border border-gray-300">
                <div class="flex flex-row rounded-md space-x-3 py-5 min-w-max items-center justify-center">
                  <input type="hidden" id="prod_4_price" value="45" class="input_prod_price">
                  <i id="prod_4_sub" class="input_prod_sub fas fa-do-not-enter fa-lg cursor-pointer " style="color:green;"></i>
                  <input id="prod_4_count" type="number" min="0" value="0" placeholder="0" class="input_prod border w-24 text-center">
                  <i id="prod_4_plus" class="input_prod_plus fas fa-plus-circle fa-lg cursor-pointer" style="color:red;"></i>
                </div>
              </td>
            </tr>
            <tr>
              <td class="border border-gray-300 text-center">
                <h3 id="prod_5_name" class="text-blue-800 font-bold">阿里山冷泡烏龍</h3>
              </td>
              <td class="border border-gray-300 text-center">
                <h3 class="text-blue-800 font-bold">$40</h3>
              </td>
              <td class="border border-gray-300">
                <div class="flex flex-row rounded-md space-x-3 py-5 min-w-max items-center justify-center">
                  <input type="hidden" id="prod_5_price" value="45" class="input_prod_price">
                  <i id="prod_5_sub" class="input_prod_sub fas fa-do-not-enter fa-lg cursor-pointer " style="color:green;"></i>
                  <input id="prod_5_count" type="number" min="0" value="0" placeholder="0" class="input_prod border w-24 text-center">
                  <i id="prod_5_plus" class="input_prod_plus fas fa-plus-circle fa-lg cursor-pointer" style="color:red;"></i>
                </div>
              </td>
            </tr>                        
          </tbody>
        </table>
      </div>


      <div class="grid grid-cols-2  py-5 items-center border">
        <div class="place-self-center">
          <span class="text-blue-800 font-bold">總金額&nbsp:&nbsp&nbsp&nbsp</span>
          <span id="o_total_price" class="select-all">0</span>
          <span class="text-blue-800 font-bold">&nbsp&nbsp&nbsp元</span>
        </div>
        <div class="justify-self-center ">
          <button class="px-8 py-1 rounded-md bg-blue-700 text-white  hover:bg-blue-600 active:bg-blue-800" type="button" onclick="post_ajax()">確定</button>
          </div>
      </div>
    </div>
  </div>
  <footer id="section4" data-scroll-index="4" class="p-10 border flex flex-col space-y-5 items-center" style="background-color: #eff7f6;">
    <div class="py-5"></div>
    <h3 class="text-3xl">漫漫在哪...</h3>
    <img src="img/map_01.jpg" alt="map" width="600"/>
  </footer>



  <div class="border py-2 hidden"><a data-scroll-goto="0" class="border-2 border-yellow-700 bg-yellow-700 text-white px-2">Back to top</a></div>

  <script src="js/jquery-3.6.0.min.js"></script>
  <script src="js/scrollIt.js"></script>
  <script src="js/jquery.scrollUp.min.js"></script>
  <script src="js/mike-count.js"></script>
  <script>
    //啟動導覽
    $(function(){
      $.scrollIt();
    });
    //啟動 碰底顯示scroll to top
    $(function () {
      $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 300,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',           // Fade, slide, none
        animationSpeed: 200,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: '往上滾動',       // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required.
        scrollImg: false,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
      });
    });
  </script>
</body>
</html>