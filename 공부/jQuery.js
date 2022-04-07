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

