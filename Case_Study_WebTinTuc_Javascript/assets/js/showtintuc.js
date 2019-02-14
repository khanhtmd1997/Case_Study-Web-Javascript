	
		var result = document.getElementById('hienthi');
		show(listBaiViet);
		function show(arrayShowIndex){
			var data = "";
			var max = arrayShowIndex.length;
			for(var i = 0; i < max;i++){
					data += 	
								"<h3>"+ arrayShowIndex[i].tieude +"</h3>"+
								"<p>"+ arrayShowIndex[i].tomtat +"</p>"+
								"<p>"+ arrayShowIndex[i].noidung +"</p>"+
								"<img src='"+ arrayShowIndex[i].anh +"' style='width:100px;height:100px;'>"+"<br>"+
								"<button onclick=chitiet("+arrayShowIndex[i].id+")>"+"Xem thêm"+"</button>";
								//"<a href='trangchitiet.html?"+arrayShowIndex[i].id+"' onclick=chitiet(arrayShowIndex[i].id)>Xem thêm</a>";
			}
			result.innerHTML = data;
		}
		function chitiet(chiTiet){
			var data ="";
			var result = document.getElementById("chitiet");
			data += 
			"<h1>"+listBaiViet[chiTiet].tieude+"</h1>"+
			"<h5>"+listBaiViet[chiTiet].tomtat+"</h5>"+
			"<h4>"+listBaiViet[chiTiet].noidung+"</h4>"+
			"<img src='"+listBaiViet[chiTiet].anh+"' style='width:100px;height:100px;'>"+"<br>"+
			"<a href='file:///C:/Users/Admin/Desktop/Case%20Study/trangchu.html'>Quay lại</a>";
			result = data;
			document.write(data);
		}
