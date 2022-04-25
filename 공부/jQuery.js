

// jQuery



//     java Script: client(front), web 서버와 관련없음
//     - 주목적 : 화면의 resource와 값을 설저으 취득하는 부분을 처리
//     - DOM(getElementById, nodelist)

// CSS: 디자인.front
    
// jQuery: 자바 스크립트를 경량화 시킨것.java script를 통해서 제작해둠
//     - ajax(비동기 통신)
//     - < a < form < location.href
//     - 자바스크립트를 사용하기 어려워서 나옴
//     - Vue, React : jQuery 대용

// 자바 스크립트로 접근

// var arrptag = document.getElementsByTagName("p")
// for (i = 0; i < arrptag.length; i++){
//     console.log(arrptag[i].innerHTML);
//     arrptag[i].innerHTML = "hello p tag"
// }

// jQuery 실행코드

// $(document).ready(function () {
//     alert('jQuery 실행');

//     var v = $(태그명 또는 id 또는 class).핸들러함수()----> getter
//     $(태그명 또는 id 또는 class).핸들러함수(매개변수)----> setter
    
//     .html() : 문자열안의 태그를 인식함
//     .text() : 문자열로 모두 인식함
// })

//$(document).ready vs $(window).onload
//$(document).ready 의 호출 시점: 1~2번 과정이 완료되어 DOM Tree생성이 완료된 후 호출
//$(window).onload 의 호출 시점: 모든 과정이 완료되어, 웹페이지가 다 구성된 후 호출 

호출시점의 차이: .ready() -> .onload() 순으로 실행

    .ready() 호출시점: DOM Tree 생성 완료 후
    .onload() 호출 시점: 모든 페이지 구성요소 페인팅 완료 후


$(document).ready(function () {
    alert('hi -ready');
});

$(window).onload(function () {
    alert('hi -load');
});


//태그 클릭시 호출
// $("p").click(function () {
//     클릭시 호출
// });

//id/ class 적용
// div 태그 안에 있는 p태그만 적용
// $("div p").click(function () {
//     alert(div p tag click)
// });

//div 안에 클래스명이 cls인 태그에만 적용
// $("div.cls")click(function () {
//     alert("div p tag click")
// });

//this

$('p').on("click", function () {
    //$(this).hide(); // ---> this : 클릭한 부분의 오브젝트
    //현재 클릭한 부분을 숨김

    //jQuery에서 css접근하기
    //$(this).css("property명", "property값"); //= setter
    //$(this).css("background", "red"); //setter : background

    //getter
    var color = $(this).css("background")

})
