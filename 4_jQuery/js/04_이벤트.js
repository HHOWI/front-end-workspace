// 1. 이벤트 연결
// 1) on, off
/*
$('#area1').on('mouseenter',function(event) {
    // 마우스가 올라갔을 때
    // 배경색상 : beige, 텍스트는 : 마우스가 올라감
    $(event.target).css('background-color', 'beige').text('마우스가 올라감');
});
// mouseleave 함수
// 배경색상 : hotpink, 텍스트는 : 마우스가 내려감
$('#area1').on('mouseleave', function(event) {
    $(event.target).css('background-color', 'hotpink').text('마우스가 내려감');
});
*/
$('#area1').on('mouseenter mouseleave', function (event) {
    console.log(event.type);
    if (event.type === 'mouseenter') {
        $(event.target).css('background-color', 'beige').text('마우스가 올라감');
    } else if (event.type === 'mouseleave') {
        $(event.target).css('background-color', 'hotpink').text('마우스가 내려감');
    }
});
/*
$('#area1').on('click', function(event) {
    // 배경색은 white, 텍스트는 ''
    $(event.target).css('background-color', 'white').text('').off('mouseenter mouseleave');
});
*/
$('#area1').on({
    mouseenter: function (event) {
        $(event.target).css('background-color', 'beige').text('마우스가 올라감');
    },
    mouseleave: function (event) {
        $(event.target).css('background-color', 'hotpink').text('마우스가 내려감');
    },
    click: function (event) {
        $(event.target).css('background-color', 'white').text('').off('mouseenter mouseleave');
    }
});

// 2) one
$('#area2').one('click', function () {
    alert('실행!');
});

// 2. 키보드 이벤트
// 1) keydown, keypress, keyup
// keydown : 키보드가 눌려질 때
$('#textarea1').keydown(function (e) {
    console.log(`keydown / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
// keypress : 글자가 입력될 때
$('#textarea1').keypress(function (e) {
    console.log(`keypress / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});
// keyup : 키보드가 떼어질 때
$('#textarea1').keyup(function (e) {
    console.log(`keyup / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});

// -> 3가지를 on 메소드로 한번에!
$('#textarea1').on({
    keydown: function (e) {
        console.log(`keydown / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    },
    keyup: function (e) {
        console.log(`keyup / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    },
    keypress: function (e) {
        console.log(`keypress / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    }
});

// substring
console.log("Hello~".substring(0, 2));

$('#textarea2').on({
    keyup: function (e) {
        const charCount = $(e.target).val().length;
        const maxLength = parseInt($('#maxLength').text());

        if (charCount > maxLength) {
            // 글자수제한! substring!
            $(e.target).val($(e.target).val().substring(0, maxLength));
        } else {
            $('#counter').text(charCount);
        }
    }
});

$('#userId').on('keyup', function (e) {
    const input = $(e.target).val()
    const regExp = /^[a-z]{1}[a-z\d]{4,12}$/;
    if (regExp.test(input)) {
        $('#idCheck').text('사용 가능한 아이디입니다.').css('color', 'green');
    } else if (input === "") {
        $('#idCheck').text("");
    } else {
        $('#idCheck').text('사용 불가능한 아이디입니다.').css('color', 'red');
    }
})
let num = 0;
$('#area3').on('click', function () {
    // $('#counter2').text(++num);

    let currentCount = parseInt($('#counter2').text());
    $('#counter2').text(++currentCount);
});

$('#btn').on('click', function () {
    $('#area3').trigger('click');
});