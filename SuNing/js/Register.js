import Utils from "./Utils.js";
export default class Register {
    data = {};
    form;
    inputs;
    submit;
    login;
    haha = ["Tel", "name", "password"]
    list = new Set();
    constructor() {
        this.init()
    }
    init() {
        this.submit = document.querySelector(".submit-btn");
        this.inputs = Array.from(document.querySelectorAll("input"));
        this.form = document.querySelector("form");
        // console.log(this.inputs);
        this.form.addEventListener("input", e => this.inputHandler(e));
        this.changTip();
        this.submit.addEventListener("click", e => this.sumbitHandler(e));

    }
    inputHandler(e) {
        let input = e.target;
        if (input.name === "phone") {
            input.value = input.value.replace(/\D/g, "");
        }
        if (input.ids) return;
        input.ids = setTimeout(() => {
            input.ids = undefined;
            this.judgeInput(input);
        }, 500)
    }
    //改变输入提示
    changTip() {
        this.inputs.forEach(item => {
            item.addEventListener("focus", e => this.focusHandler(e))
        })
    }
    focusHandler(e) {
        e.target.parentNode.parentNode.nextElementSibling.innerHTML = e.target.getAttribute("tip2");
        e.target.parentNode.parentNode.nextElementSibling.style.color = "#bbb";
        e.target.parentNode.parentNode.nextElementSibling.style.display = "block";
    }
    judgeInput(input) {
        if (this.regText(input)) {
            if (input.nextElementSibling) {
                Utils.addClass(input.nextElementSibling, "ok");
            }
            input.parentNode.parentNode.nextElementSibling.style.display = "none";
            this.list.add(input);
        } else {

            if (input.nextElementSibling) {
                Utils.removeClass(input.nextElementSibling, "ok");
            }
            input.parentNode.parentNode.nextElementSibling.innerHTML = input.getAttribute("tip1");
            input.parentNode.parentNode.nextElementSibling.style.display = "block";
            input.parentNode.parentNode.nextElementSibling.style.color = "red";
            if (this.list.has(input)) this.list.delete(input);
        }
    }
    regText(input) {
        switch (input.name) {
            case "username":
                return /^[\u4e00-\u9fa5a-zA-Z0-9\-_]{4,20}$/.test(input.value);
            case "password":
                return /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{8,20}$/.test(input.value);
                break;
            case "phone":
                return /^\d{11}$/.test(input.value);
                break;
        }
    }
    sumbitHandler(e) {
        if (this.list.size < this.inputs.length) {
            e.preventDefault();
            return;
        } else {
            var i = 0
            this.list.forEach(item => {
                this.data[this.haha[i++]] = item.value
            });
            this.ajax(this.data);
            console.log(this.data);

        }
    }
         ajax(data){
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("load",e=>this.loadHadler(e));
            xhr.open("POST","http://10.20.159.166:4002/registe");
            xhr.send(JSON.stringify(data))
        }
        loadHadler(e){
            if(e.currentTarget.response==="1"){
                location.href="./login.html"
              }    
            else{
                this.inputs[0].parentNode.parentNode.nextElementSibling.innerHTML="该手机号已存在,您可以使用此手机号直接登录";
                this.inputs[0].parentNode.parentNode.nextElementSibling.style.display="block";
                this.inputs[0].parentNode.parentNode.nextElementSibling.style.color="red";
                // console.log("该账户已被注册");
            }
        }
    


}