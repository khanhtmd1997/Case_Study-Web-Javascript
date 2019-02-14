class User{
			constructor(name,pass,roles){
				this.name = name;
				this.pass = pass;
				this.roles = roles
			}
		}
var user = new User("khanh","123","1");
var user1 = new User("khanh1","123","2");
var user2 = new User("khanh2","123","2");
var user3 = new User("khanh3","123","2");
var listUser = [user,user1,user2,user3];