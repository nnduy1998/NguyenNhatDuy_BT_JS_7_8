var listNumbers = [];

// Lưu số
document.getElementById("luuSo").addEventListener("click", function(){
    var x = document.getElementById("soNguyenX").value;
    if(x == ""){
        alert("Vui lòng nhập số nguyên")
        return;
    }
    x = parseInt(x);
    listNumbers.push(x);
    console.log(listNumbers);
    document.getElementById("mangVuaNhap").innerHTML = "Mảng vừa nhập : " + listNumbers;
    document.getElementById("mangVuaNhap").style.display = "block";
})


// Tổng các số dương
document.getElementById("tongSoDuong").addEventListener("click",function(){
    var tong = 0;
    for(var i = 0; i < listNumbers.length; i++){
        if(listNumbers[i] > 0){
            tong = tong + listNumbers[i];
        }
    }
    document.getElementById("hienThiKetQua").innerHTML ="Tổng các số dương = " + tong;
    document.getElementById("hienThiKetQua").style.display = "block";
})

//Đếm số dương
document.getElementById("demSoDuong").addEventListener("click", function(){
    var dem = 0
    for(var i = 0; i < listNumbers.length; i++){
        if(listNumbers[i] > 0){
            dem++;
        }
    }
    document.getElementById("hienThiKetQua").innerHTML ="Có " + dem + " số dương";
    document.getElementById("hienThiKetQua").style.display = "block";

})

//Tìm min
document.getElementById("timMin").addEventListener("click", function(){
    var min = listNumbers[0];
    for(var i = 1; i < listNumbers.length; i++){
        if(listNumbers[i] < min){
            min = listNumbers[i];
        }
    }
    document.getElementById("hienThiKetQua").innerHTML ="Số nhỏ nhất là : " + min ;
    document.getElementById("hienThiKetQua").style.display = "block";
})

//Tìm số dương min
document.getElementById("timSoDuongMin").addEventListener("click", function(){
    for(var i = 0; i < listNumbers.length-1; i++){
        for(var j = i + 1; j < listNumbers.length; j++)
        if(listNumbers[i] > listNumbers[j]){
            var tmp = listNumbers[i];
            listNumbers[i] = listNumbers[j];
            listNumbers[j] = tmp; 
        }
    }
    console.log(listNumbers);
    for(var k = 0; k < listNumbers.length; k++){
        if(listNumbers[k] > 0){
            console.log(listNumbers[k])
            var soDuongMin = listNumbers[k];
            document.getElementById("hienThiKetQua").innerHTML = "Số dương nhỏ nhất là : " + soDuongMin;
            document.getElementById("hienThiKetQua").style.display = "block";
            return 0;
        }
    }
    
    document.getElementById("hienThiKetQua").innerHTML = "Mảng không tồn tại số dương" ;
    document.getElementById("hienThiKetQua").style.display = "block";
    
    
    
})

//Tìm số chẵn cuối cùng
document.getElementById("timSoChanCuoiCung").addEventListener("click", function(){
    var soChanCuoiCung = listNumbers[0];
    for(var k = 0; k < listNumbers.length; k++){
        if(listNumbers[k] % 2 == 0){
            soChanCuoiCung = listNumbers[k];
        }
    }
    if(soChanCuoiCung % 2 != 0){
        document.getElementById("hienThiKetQua").innerHTML = "Mảng không tồn tại số chẵn" ;
        document.getElementById("hienThiKetQua").style.display = "block";
    } else{
        document.getElementById("hienThiKetQua").innerHTML = "Số chẵn cuối cùng là : "+ soChanCuoiCung ;
        document.getElementById("hienThiKetQua").style.display = "block";
    }
    
})

// Đổi chỗ
document.getElementById("doiChoTheoViTri").addEventListener("click", function(){
    document.getElementById("viTri1").style.display = "block";
    document.getElementById("viTri2").style.display = "block";
    document.getElementById("doiCho").style.display = "block";
    console.log(listNumbers);
    document.getElementById("doiCho").addEventListener("click", function(){
        var vt1 = document.getElementById("viTri1").value;
        var vt2 = document.getElementById("viTri2").value;
        if(vt1 == "" || vt1 < 0){
            alert("Nhập vị trí 1 không hợp lệ")
            return;
        }
        if(vt2 == "" || vt2 < 0){
            alert("Nhập vị trí 2 không hợp lệ")
            return;
        }
        if(vt1 === vt2){
            alert("Hai vị trí đã nhập trùng nhau")
            return;
        }
        vt1 = parseInt(vt1);
        vt2 = parseInt(vt2);
        if(vt1 > listNumbers.length-1){
            alert("Nhập vị trí 1 không hợp lệ")
            return;
        }
        if(vt2 > listNumbers.length-1){
            alert("Nhập vị trí 2 không hợp lệ")
            return;
        }

        for(var i = 0; i < listNumbers.length; i++){
            for(var j = 0; j < listNumbers.length; j++){
                if(vt1 == i && vt2 == j){
                    var tmp = listNumbers[i];
                    listNumbers[i] = listNumbers[j];
                    listNumbers[j] = tmp; 
                }
            }         
        }
        console.log(listNumbers);
        document.getElementById("hienThiKetQua").innerHTML = "Mảng sau khi đổi chỗ : " + listNumbers ;
        document.getElementById("hienThiKetQua").style.display = "block";
    })
    
})

//Sắp xếp tăng 
document.getElementById("sapXepTang").addEventListener("click", function(){
    console.log(listNumbers);
    for(var i = 0; i < listNumbers.length - 1; i++){
        for(var j = i + 1; j < listNumbers.length; j++)
        if(listNumbers[i] > listNumbers[j]){
            var tmp = listNumbers[i];
            listNumbers[i] = listNumbers[j];
            listNumbers[j] = tmp; 
        }
    }
    document.getElementById("hienThiKetQua").innerHTML = "Mảng sau khi sắp xếp : <br />" + listNumbers;
    document.getElementById("hienThiKetQua").style.display = "block";
})