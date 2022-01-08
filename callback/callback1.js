let doWork = function(job, timer, callback){
    setTimeout(()=>{
        //callback的設計上
        //通常第一個參數是錯誤
        //通常第二個參數會是結果
        callback(null, `完成工作 ${job}`);
    }, timer);
};

//刷牙  --> 吃早餐 --> 做功課
let dt = new Date();
console.log(`Start ${dt.toISOString()}`)

doWork("刷牙", 2000, (err, result) => {
    console.log(result)
}) 

doWork("吃早餐", 3000, (err, result) => {
    console.log(result)
}) 

doWork("寫功課", 2000, (err, result) => {
    console.log(result)
}) 