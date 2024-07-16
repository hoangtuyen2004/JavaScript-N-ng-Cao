const DATA =[
    {
        name: "chinhpd5",
        age: 20,
        gender: true,
        mark :10
    },
    {
        name: "chinhpd6",
        age: 21,
        gender: false,
        mark :9
    },
    {
        name: "chinhpd7",
        age: 20,
        gender: true,
        mark :8
    },
    {
        name: "chinhpd5",
        age: 21,
        gender: false,
        mark :9
    }
]

// find: tìm một phần tử trong mảng thỏa mãn điều kiện gần nhất
    //Sau khi tìm xong thì kết thúc vòng lặp
const findItem = DATA.find((item, index) => {
    return item.name == "chinhpd5";
});
// console.log(findItem);

// some (boolean): Duyệt mảng, kiểm tra xem trong mảng có ít nhất 1 phần tử thỏa mãn điều kiện
    // Nếu thỏa mã -> kết thúc vòng lặp
const someItem = DATA.some((item,index)=>{
    // console.log(index);
    return item.age == 21;
    // return item.mark >10;
});
// console.log(someItem);

// every (boolean): duyệt mảng, kiểm tra xem mảng
// Nếu có phần tử trong mảng không thỏa mãn ĐK -> false -> kết thúc vòng lặp
// Nếu TẤT CẢ CÁC PHẦN TỬ thỏa mãn điều kiện -> true
const checkMark = DATA.every((item,index)=>{
    // kiểm tra các phần tử trong mảng có giá trị điểm nhỏ hơn hoặc bằng 5
    // console.log(index);
    // return item.mark <= 5
    return item.mark >= 8
})

// console.log(checkMark);


// MAP: duyệt qua tất cả các phần tử trong mảng
    // Nếu có return trả 1 mảng mới
    const newDATA = DATA.map((item,index)=>{
        return {
            ...item,mark: "Điểm: " +item.mark
        }
    });
    // console.log(newDATA);

// Filter: Duyệt 1 mảng
    // Trả về 1 mảng mới chứa các phần tử thỏa mãn điều kiện
let newFilter = DATA.filter((item,index)=>{
    return item.mark >= 9;
});

let trElement = newFilter.map((item, index)=>{
    return`<tr>
                <td>${index+1}</td>
                <td>${item.name}</td>
                <td>${item.gender}</td>
                <td>${item.age}</td>
                <td>${item.mark}</td>
        </tr>`
}).join('') // join: chuyển mảng về chuỗi
let tbodyElement = document.querySelector('tbody');
    tbodyElement.innerHTML = trElement;

    // reduce :duyệt mảng và tính toán
    // value: lưu trữ giá trị qua các lần lặp
    // item: các phần tử trong mảng
    // index: vị trí các phần tử
    // array: mảng ban đầu
const total = newFilter.reduce((value,item,index,array)=>{
    return value= value + item.mark
},0)

console.log(total);