export default class Carousel {
    dot_num = 0;
    index = 0;
    ids = 0;
    prev_index
    constructor() {
        this.ids = setInterval(() => this.rightclickHandler(), 4000);
        this.init()
    }
    //初始化函数
    init() {
        this.banner = document.querySelector(".banner");
        this.banner_nav = document.querySelector(".banner-nav");
        this.next_btn_else = document.querySelector(".right-arrow");
        this.prev_btn_else = document.querySelector(".left-arrow");
        this.imgs = Array.from(document.querySelectorAll(".banner img"));
        this.other = this.imgs.splice(0, 1);
        this.next_btn_else.addEventListener("click", e => this.rightclickHandler(e));
        this.prev_btn_else.addEventListener("click", e => this.leftclickHandler(e));
        this.banner.addEventListener("mouseenter", e => this.mouseHandler(e));
        this.banner.addEventListener("mouseleave", e => this.mouseHandler(e));
        this.banner_nav.addEventListener("mouseover", e => this.dotmouseoverHandler(e));
        this.changeImg()
    }

    dotmouseoverHandler(e) {
        if (e.target.constructor !== HTMLAnchorElement) return;
        this.index = Array.from(this.banner_nav.children).indexOf(e.target);
        this.changeImg()
    }
    //鼠标移入移出开启关闭定时器轮播
    mouseHandler(e) {
        clearInterval(this.ids)
        if (e.type !== "mouseenter") this.ids = setInterval(e => this.rightclickHandler(e), 4000);
    }
    //右键轮播
    rightclickHandler() {
        this.index===this.imgs.length-1 ? this.index = 0 : this.index++
        this.changeImg()
    }
    //左键轮播
    leftclickHandler() {
        this.index === 0 ? this.index=this.imgs.length-1 : this.index--
        this.changeImg();
    }
    changeImg() {
        this.imgs[this.dot_num].style.zIndex = 0;
        this.imgs[this.dot_num].style.opacity = 0;
        this.banner_nav.children[this.dot_num].style.backgroundColor = "#8f061f"
        this.dot_num = this.index;
        this.imgs[this.dot_num].style.zIndex = 1;
        this.imgs[this.dot_num].style.opacity = 1;
        this.banner_nav.children[this.index].style.backgroundColor = "#fff"
    }
}