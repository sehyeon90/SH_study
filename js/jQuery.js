// 파일의 특정부분 불러오기
// $(document).ready(function () {
//     $("button").click(function () {
//         $("#id").load("test.txt. #domain")
//     })
// })

// 파일 내용 전체 불러오기
// $(document).ready(function () {
//   $("button").click(function () {
//     $("#hz").load("test.txt");
//   });
// });

$(document).ready(function () {
  $("#main_header").load("/html/header.html");
  $("#main_gnd").load("/html/nav.html");
  $("#main_lnb").load("/html/main_lnb.html");
  $("#content").load("/html/content.html");
  $("#main_footer").load("/html/footer.html");
});

// $(document).ready(function () {
//     $("main_gnd").click(function () {
//       $(".left > li > a").load();
//     });
// });

// $("#main_gnd .left > li > a").click(function () {
//     var $OnClickMenu_gnd = $(this);

//     var $main_gnd = $OnClickMenu_gnd.closest(".main_gnd");
//     var $body = main_gnd.find("#content");

//     .parent().find('body').removeClass('body');
//     $OnClickMenu_gnd.addClass('body');

//     var index = $OnClickMenu_gnd.index()

// })
