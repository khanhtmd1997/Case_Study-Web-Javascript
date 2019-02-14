function checkinput(){
		var userName = document.getElementById('USERNAME').value;
		var passWord = document.getElementById('PASSWORD').value;
		var save = "";
		//console.log(userName+passWord);
		check(listUser);
		function check(array){
			var i=0;
			while(i < array.length){
				if(userName == array[i].name && passWord == array[i].pass && array[i].roles == 1){
					save = userName;
					document.write("<h1>Xin chào "+userName+"</h1>"+"<a href='quantriuser.html'>Tới trang quản trị user</a>");
					break;
				}else {
					alert("Tài khoản, mật khẩu không đúng hoặc TÀI KHOẢN BẠN KHÔNG CÓ QUYỀN");
					break;
				}
			}
		}
}

