$(function () {
    var keyArr = [];

   $('#search-btn').on('click',function () {
        var keyword = $(this).siblings('input').val();

        if (keyword){

            keyArr.push(keyword);
            localStorage.setItem('keyArr',JSON.stringify(keyArr));

            location.href = "search-result.html?keyword=" + keyword;
        } else {
            alert('请输入要搜索的商品名');
        }
   });

   if (localStorage.getItem('keyArr')){
        keyArr = JSON.parse(localStorage.getItem('keyArr'));
        var html = template('searchTpl',{result:keyArr});
        $('#history-box').html(html);
   }


    $('#clearbtn').on('click',function () {
        $('#history-box').html("");
        localStorage.removeItem('keyArr');
    })

    $('#history-box').on('click','li',function () {
        location.href = 'search-result.html?keyword=' + $(this).text();
    })

});