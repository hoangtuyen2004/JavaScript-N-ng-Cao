// Xử lí bất đồng bộ

// Chờ 2s thực thi nhiệm vụ trong hàm
console.log('Việc 1');
setTimeout(()=>{
    console.log('Việc 2');
},2000);
console.log('Việc 3');
//1 3 2
// call stack : thực thi logic đồng bộ
// web api : thực thi logic bất đồng bộ

// Cách để sử lí bất đồng bộ
// Callback
// promise
// async | await

// CALLBACK : hàm gọi lại truyền dưới dạng một tham số

function sayHello(name) {
    console.log(`Xin chào ${name}`);
}

function doing(callback) {
    callback("tuyenhdph40250")
}
// doing(sayHello);

function delay(ms, callback) {
    setTimeout(()=>{
        let data = "Đang thực thi ...";
        callback(data);
    },ms);
}

function doing1 () {
    console.log('Bắt đầu');
    delay(2000,(data)=>{
        console.log(data);
        console.log('Kết thúc');
    });
}