//콜백 함수

function fetchData(caallback){
    setTimeout(function(){
        const data = "여기 데이터";
        caallback(data);
    },1000 ) ;
}
let f = function(data){
    console.log("데이터 도착 >> " + data);
}



fetchData(f);



fetchData(function(data){
    console.log("새로운 데이터 >> " + data);
});