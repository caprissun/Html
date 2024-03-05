//콜백 함수

let f = function(){
    console.log("1번");
};

setTimeout(             // console.log("-----------");
    f,3000              // 실행 후 3 초 후 
                        // console.log("1번"); 실행
);
console.log("-----------");

function double(num){
    setTimeout(
        function(){
            const doubleNum = num*2;
            console.log(doubleNum);
        },1000
    );
};

double(10);