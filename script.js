let data = [
  {
 name:"Camera sau cho ô tô 70Mai RC06 - Hàng nhập khẩu",       picture:"https://salt.tikicdn.com/cache/280x280/ts/product/9e/f4/31/37c6eaf3a89164522cb1a0d9d350e6dd.jpg"
  },
  {
 name:"Camera sau cho ô tô 70Mai RC06 - Hàng nhập khẩu",       picture:"https://salt.tikicdn.com/cache/280x280/ts/product/32/54/a4/2240030b4a8752640e010d83b2966b0d.jpg"
  },
  {
 name:"Camera sau cho ô tô 70Mai RC06 - Hàng nhập khẩu",       picture:"https://salt.tikicdn.com/cache/280x280/ts/product/6a/15/cb/f796451d780c585483082c7994fe6895.jpg"
  },
   {
 name:"Camera sau cho ô tô 70Mai RC06 - Hàng nhập khẩu",       picture:"https://salt.tikicdn.com/cache/280x280/ts/product/9e/f4/31/37c6eaf3a89164522cb1a0d9d350e6dd.jpg"
  },
  {
 name:"Camera sau cho ô tô 70Mai RC06 - Hàng nhập khẩu",       picture:"https://salt.tikicdn.com/cache/280x280/ts/product/32/54/a4/2240030b4a8752640e010d83b2966b0d.jpg"
  },
  {
 name:"Camera sau cho ô tô 70Mai RC06 - Hàng nhập khẩu",       picture:"https://salt.tikicdn.com/cache/280x280/ts/product/6a/15/cb/f796451d780c585483082c7994fe6895.jpg"
  },
   {
 name:"Camera sau cho ô tô 70Mai RC06 - Hàng nhập khẩu",       picture:"https://salt.tikicdn.com/cache/280x280/ts/product/9e/f4/31/37c6eaf3a89164522cb1a0d9d350e6dd.jpg"
  },
  {
 name:"Camera sau cho ô tô 70Mai RC06 - Hàng nhập khẩu",       picture:"https://salt.tikicdn.com/cache/280x280/ts/product/32/54/a4/2240030b4a8752640e010d83b2966b0d.jpg"
  },
  {
 name:"Camera sau cho ô tô 70Mai RC06 - Hàng nhập khẩu",       picture:"https://salt.tikicdn.com/cache/280x280/ts/product/6a/15/cb/f796451d780c585483082c7994fe6895.jpg"
  },
];


let page=1;
 $.each(data, function(i, item) { 
           $("#list").append(`<p><img src="${item.picture}" style=""/><h3>${item.name}<h3></p>`);
          });


$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
      page++;
         $.each(data, function(i, item) { 
           $("#list").append(`<p><img src="${item.picture}" style=""/><h3>${item.name}<h3></p>`);
          });
      console.log(page);
    }
});