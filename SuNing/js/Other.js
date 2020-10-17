export default class Other {
    login;
    register;
    username;
    outlogin;
    constructor() {
        this.init();
    }
    init() {
        this.outlogin = document.querySelector(".outlogin")
        this.login = document.querySelector(".login");
        this.register = document.querySelector(".register");
        this.username = document.querySelector(".username")
        this.judgeLogin();
        this.outlogin.addEventListener("click", () => this.outloginHandler());

    }
    judgeLogin() {
        if (sessionStorage.name) {
            this.username.innerHTML = sessionStorage.name;
            this.username.style.display = "block";
            this.outlogin.style.display = "block";
            this.login.style.display = "none";
            this.register.style.display = "none";
        }
        // console.log(sessionStorage.name);
    }
    outloginHandler() {
        this.username.style.display = "none";
        this.outlogin.style.display = "none";
        this.login.style.display = "block";
        this.register.style.display="block"
        sessionStorage.name=""
        location.href="./login.html"

    }

}