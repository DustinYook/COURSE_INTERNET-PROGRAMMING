/* hw6_01_eval_script.js : hw6_01_eval.html의 외부 자바스크립트 정의 */
// 사용자입력 및 사용자값 처리 후 결과 반환처리 수행

var str = new String; // 입력값을 전체적으로 저장
var result; // 결과를 저장할 변수

/* 사용자로부터 버튼을 통해 입력을 받는 함수 */
function input(value)
{
    if(isNaN(value)) // 숫자가 아닌 값, 즉 연산자가 입력된 경우 처리
        operator(value);
    else // 숫자가 입력된 경우 처리
        number(value);
    document.getElementById('display').value = str; // 입력값을 출력
}

/* 연산자가 들어온 경우 처리 */
function operator(value)
{
    switch(value) // 연산자 값에 따라 분기
    {
    case '+': // 덧셈
        str += document.getElementById('add').value;
        break;
    case '-': // 뺄셈
        str += document.getElementById('sub').value;
        break;
    case '*': // 곱셈
        str += document.getElementById('mult').value;
        break;
    case '/': // 나눗셈
        str += document.getElementById('div').value;
        break;
    }
}

/* 숫자가 들어온 경우 처리 */
function number(value)
{
    switch(value)
    {
    case 0: // 0 입력
        str += document.getElementById('num' + 0).value;
        break;
    case 1: // 1 입력
        str += document.getElementById('num' + 1).value;
        break;
    case 2: // 2 입력
        str += document.getElementById('num' + 2).value;
        break;
    case 3: // 3 입력
        str += document.getElementById('num' + 3).value;
        break;
    case 4: // 4 입력
        str += document.getElementById('num' + 4).value;
        break;
    case 5: // 5 입력
        str += document.getElementById('num' + 5).value;
        break;
    case 6: // 6 입력
        str += document.getElementById('num' + 6).value;
        break;
    case 7: // 7 입력
        str += document.getElementById('num' + 7).value;
        break;
    case 8: // 8 입력
        str += document.getElementById('num' + 8).value;
        break;
    case 9: // 9 입력
        str += document.getElementById('num' + 9).value;
        break;
     }
}

/* 연산후 결과를 결과창에 띄워주는 함수 */
function getResult()
{
    result = eval(str); // eval(문자열 수식);은 expr의 평가값을 반환
    document.getElementById('display').value = result; // 입력창에 결과를 출력
    str = result; // result를 다음 연산의 피연산자1로 넣음
}