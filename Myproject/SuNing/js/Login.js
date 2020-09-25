import Utils from "./Utils.js";
export default class Login {
    inputs;
    smlogin;
    zhlogin;
    scan_login;
    pc_login;
    username;
    password;
    sumbit;
    data;
    register;
    constructor() {
        this.init()
    }
    init() {
        this.register=document.querySelector(".register")
        this.zhlogin = document.querySelector(".tab-zh ");
        this.smlogin = document.querySelector(".tab-sm ");
        this.scan_login = document.querySelector(".scan-login");
        this.pc_login = document.querySelector(".pc-login");
        this.username = document.querySelector("#username");
        this.password = document.querySelector("#password");
        this.sumbit = document.querySelector(".login-submit")
        this.inputs = document.querySelectorAll("input");
        this.register.addEventListener("click",()=>this.registerHandler())
        this.zhlogin.addEventListener("click", e => this.zhclickHander(e));
        this.smlogin.addEventListener("click", e => this.smclickHander(e));
        this.sumbit.addEventListener("click", e => this.sumbitHandler(e))
    }
    //点击跳转注册页面
    registerHandler(){
        location.href="./register.html"
    }
    zhclickHander(e) {
        this.scan_login.style.display = "none";
        this.pc_login.style.display = "block"
        Utils.addClass(this.zhlogin.parentNode, "on");
        Utils.removeClass(this.smlogin.parentNode, "on");

    }
    smclickHander(e) {
        this.scan_login.style.display = "block";
        this.pc_login.style.display = "none";
        Utils.removeClass(this.zhlogin.parentNode, "on");
        Utils.addClass(this.smlogin.parentNode, "on");

    }
    sumbitHandler(e) {
        this.data= {
            Tel: this.inputs[0].value,
            password: this.inputs[1].value,
        }
        this.ajax(this.data)

    }
     ajax(data) {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", e=>this.loadHadler(e));
        xhr.open("POST", "http://10.20.159.166:4002/login");
        xhr.send(JSON.stringify(data))
    }
     loadHadler(e) {
        try {
            let a = JSON.parse(e.currentTarget.response);
            sessionStorage.name = a.name;
            location.href = "./index.html"
            console.log(a);
        } catch {
            alert("账户或密码错误");
        }
    }


}