import Utils from "./Utils.js";
export default class Details {
    info;
    datalist;
    info_id;
    info_type;
    prev;
    scale_prev;
    taste_prev;
    step = 1;
    ids;
    shoppingList={};
    constructor(info, dataList) {
        this.dataList = dataList;
        this.info = info;
        //商品列表类型
        this.info_type = this.info.split("/")[1];
        //具体商品的id
        this.info_id = this.info.split("?")[1].split("/")[0];
        //点击商品渲染的数据
        this.dataList.forEach(item=>{
                if(item[this.info_type]){
                    this.data=item[this.info_type]
                }
        })
        // this.data=this.dataList[this.info_type][0].skus;
        this.data.forEach(item=>{
            if(item.sugGoodsCode===this.info_id){
                this.dataRender=item;
            }
        });
        // console.log(this.dataRender);
        this.init();
    }
    //边界检测
    static useBoundary(now, max, min) {
        if (now >= max) {
            return max
        }
        if (now <= min) {
            return min
        }
        return now
    }
    //初始化
    init() {
        this.list_img_else = document.querySelector("#list-img");
        //放大镜小图内容部分
        this.small_else = document.querySelector(".small-img");
        //放大镜大图部分
        this.scale_box_else = document.querySelector(".scale-box");
        this.title = document.querySelector(".info-title");
        this.price = document.querySelector(".price");
        this.type = document.querySelector("#type")
        //小图的选项卡区域
        this.renderMain();
        this.list_ele = Array.from(document.querySelectorAll("#list-img  li"));
        //小图的部分
        this.small_img_ele = document.querySelector(".small-img img");
        //小图的焦点部分
        this.small_focus_img_ele = document.querySelector(".focus-box");
        this.small_focus_img_ele.style.backgroundImage = `url(${this.dataRender.icon[0]})`
        //大图焦点部分
        this.scale_box_img_ele = document.querySelector(".scale-box img");

        // zxc
        this.cardHandler(this.list_ele[0])
        this.list_ele.forEach(item => {
            item.addEventListener("mouseover", () => this.cardHandler(item))
        });
        this.small_else.addEventListener("mouseover", e => this.mouseHandler(e));
        this.small_else.addEventListener("mouseout", e => this.mouseHandler(e));
        this.small_else.addEventListener("mousemove", e => this.mouseHandler(e));
        this.changeClick();
        this.changeBuyNum();
        this.sumbit=document.querySelector(".addcart");
        this.sumbit.addEventListener("click",e=>this.subClickHandler(e))

    }
    //渲染数据
    renderMain() {
        //放大镜渲染
        this.small_else.innerHTML = `<img src="${this.dataRender.icon[0]}" alt="">
        <div class="focus-box"></div>`;
        this.dataRender.icon.forEach((item, index) => {
            this.list_img_else.innerHTML += `<li 
            data-src="${item}"><img
                src="${item}" alt="">
        </li>`
        });
        this.scale_box_else.innerHTML = `<img src="${this.dataRender.icon[0]}" alt="">`
        //标题渲染
        this.title.innerHTML = `<h1 class="sugGoodsName">
        <span class="cs">
            <i>苏宁超市</i>
            <i class="cs-zy">自营</i>
        </span>${this.dataRender.sugGoodsName}
    </h1>
    <h2 class="commodityDesc">${this.dataRender.commodityDesc}`
        //价格渲染
        this.price.innerHTML = `<i>￥</i>
    ${this.dataRender.price}`
        //类型渲染
        this.type.innerHTML = ""
        if (this.dataRender.scale) {
            let scale = `<dl class="scale clear_fix"> <dt>
        <span class=" getCoupon">规格</span> 
     </dt>
     <dd><ul class="scale-ul">`
            this.dataRender.scale.forEach((item, index) => {
                scale += `<li class="clr-item ${index === 0? 'selected': ""}">
         <a href="javascript:void(0)" >
             <img src="${this.dataRender.scaleImg}" alt="">
             <i></i>
             <span>${item}</span>
         </a>
     </li>`
            });
            scale += ` </ul>  
     </dd>
     </dl> `
            this.type.innerHTML += scale;

        }
        if (this.dataRender.taste) {
            let taste = ` <dl class="taste clear_fix">
        <dt>
           <span class=" getCoupon">口味</span> 
        </dt>
        <dd>
        <ul class="taste-ul">`
            this.dataRender.taste.forEach((item, index) => {
                taste += `<li class="clr-item ${index === 0? 'selected': ""}">
            <a href="javascript:void(0)" >
              
                <i></i>
                <span>${item}</span>
            </a>
        </li>`
            });
            taste += ` </ul>  
     </dd>
     </dl> `
            this.type.innerHTML += taste;
        }
        this.type.innerHTML += `<dl class="number clear_fix">
    <dt>
        <span class="getCoupon">数量</span>
    </dt>
    <dd>
        <a href="javascript:void(0)" class="func minus minus-disable"></a>
        <input id="buyNum" type="text" value="1"max="99">
        <a href="javascript:void(0)" class="func plus"></a>
    </dd>
</dl>`
    }
    //选项卡
    cardHandler(item) {
        if (this.prev) {
            Utils.removeClass(this.prev, "active");
        }
        this.prev = item;
        Utils.addClass(this.prev, "active");
        let data_src = this.prev.getAttribute("data-src");
        this.small_img_ele.src = data_src;
        this.scale_box_img_ele.src = data_src;
        this.small_focus_img_ele.style.backgroundImage = `url(${data_src})`
    }
    //放大镜鼠标移入事件
    mouseHandler(e) {
        if (e.type === "mouseover") {
            this.small_focus_img_ele.style.display = "block";
            this.small_img_ele.style.opacity = "0.3";
            this.scale_box_else.style.display = "block";
        } else if (e.type === "mouseout") {
            this.small_focus_img_ele.style.display = "none";
            this.small_img_ele.style.opacity = "1";
            this.scale_box_else.style.display = "none";
        } else if (e.type === "mousemove") {
            let {
                clientX: x,
                clientY: y
            } = e
            this.follEle(x, y);
        }
    }
    //焦点部分移动
    follEle(x, y) {
        let small_size = this.small_else.getBoundingClientRect();
        let small_focus_img_size = this.small_focus_img_ele.getBoundingClientRect();

        let left = x - small_size.x - small_focus_img_size.width / 2;
        let top = y - small_size.y - small_focus_img_size.height / 2;
        left = Details.useBoundary(left, small_size.width - small_focus_img_size.width, 0);
        top = Details.useBoundary(top, small_size.height - small_focus_img_size.height, 0);
        //和鼠标一起移动
        this.small_focus_img_ele.style.left = left + "px";
        this.small_focus_img_ele.style.top = top + "px";
        //让焦点和背景进行定位
        this.small_focus_img_ele.style.backgroundPositionX = -1 * left + "px";
        this.small_focus_img_ele.style.backgroundPositionY = -1 * top + "px";
        this.scaleFollow(left, top, small_size, small_focus_img_size)
    }
    //大图的的整体部分移动
    scaleFollow(left, top, small_size, small_focus_img_size) {
        let scale_box_img_size = this.scale_box_img_ele.getBoundingClientRect();
        let scale_box_size = this.scale_box_else.getBoundingClientRect();
        let [left_prop, top_prop] = [
            parseInt(parseInt(left) / (small_size.width - small_focus_img_size.width) * 100) / 100,
            parseInt(parseInt(top) / (small_size.height - small_focus_img_size.height) * 100) / 100,
        ];
        let scale_max_left = scale_box_img_size.width - scale_box_size.width;
        let scale_max_top = scale_box_img_size.height - scale_box_size.height;
        this.scale_box_img_ele.style.left = -scale_max_left * left_prop + "px";
        this.scale_box_img_ele.style.top = -scale_max_top * top_prop + "px";
    }
    //改变选项卡
    changeClick() {
        if (this.dataRender.scale) {
            this.scale_li = Array.from(document.querySelectorAll(".scale-ul li"));
            this.scale_li.forEach(item => {
                item.addEventListener("click", () => this.scaleHandler(item));

            });
        }
        if (this.dataRender.taste) {
            this.taste_li = Array.from(document.querySelectorAll(".taste-ul li"));
            this.taste_li.forEach(item => {
                item.addEventListener("click", () => this.tasteHandler(item));

            });
        }
    }
    scaleHandler(item) {
        this.scale_li.forEach(item => {
            Utils.removeClass(item, "selected")
        });
        Utils.addClass(item, "selected");


    }
    tasteHandler(item) {
        this.taste_li.forEach(item => {
            Utils.removeClass(item, "selected")
        });
        Utils.addClass(item, "selected");

    }
    //改变商品数量
    changeBuyNum() {
        this.minus = document.querySelector(".minus");
        this.input = document.querySelector("#buyNum");
        this.plus = document.querySelector(".plus");
        this.minus.addEventListener("click", e => this.minClickHandler(e));
        this.input.addEventListener("input", e => this.inputHandler(e));
        this.plus.addEventListener("click", e => this.pluClickHandler(e))

    }
    minClickHandler(e) {
        if (e.currentTarget.className.split(" ").indexOf("minus-disable") > 0) return;
        this.step--;
        this.input.value = this.step;
        if (this.step <= 1) {
            Utils.addClass(this.minus, "minus-disable");
        }
        if (this.step < 99) {
            Utils.removeClass(this.plus, "plus-disable");
        }
    }
    pluClickHandler(e) {
        if (e.currentTarget.className.split(" ").indexOf("plus-disable") > 0) return;
        this.step++;
        if (this.step > 1) Utils.removeClass(this.minus, "minus-disable");
        this.input.value = this.step;
        if (this.step >= 99) {
            Utils.addClass(this.plus, "plus-disable");
        }
    }
    inputHandler(e) {
        this.input.value = this.input.value.replace(/\D/g, "");
        if(this.ids)return;
        this.ids=setTimeout(()=>{
            clearTimeout(this.ids);
            this.ids=undefined
            
            if(this.input.value<=1){
                this.input.value = 1;
                Utils.addClass(this.minus, "minus-disable");
                Utils.removeClass(this.plus, "plus-disable");
            }else if(this.input.value>1){
                Utils.removeClass(this.plus, "plus-disable");
                Utils.removeClass(this.minus, "minus-disable");

            }
            else if(this.input.value >= 99){
                    this.input.value = 99;
                    Utils.addClass(this.plus, "plus-disable");
                    Utils.removeClass(this.minus, "minus-disable");
                }
            
            this.step = Number(this.input.value);
        },500);
        
    }
    subClickHandler(e){
        //sugGoodsCode:id
        //pictureUrl:小图片
        //sugGoodsName:标题
        //scale:规格
        //price:单个价格
        //totalprice:总价
        //num:数量
        //delete：删除
        this.shoppingList.id=this.dataRender.sugGoodsCode;
        this.shoppingList.iconImg=this.dataRender.pictureUrl;
        this.shoppingList.title=this.dataRender.sugGoodsName;
        this.shoppingList.price=this.dataRender.price;
        this.shoppingList.num=this.step;
        this.shoppingList.totalprice=(this.shoppingList.num*this.dataRender.price).toFixed(2);
        this.shoppingList.checked=false;
        this.shoppingList.delete=false;
        if(this.dataRender.scale){
            this.scale_li.forEach((item,index)=>{              
                if(item.className.split(" ").indexOf("selected")>-1){  
                    this.shoppingList.scale="规格："+this.scale_li[index].children[0].children[2].textContent
                }
            })
        }else{
            this.shoppingList.scale="";
        }
        if(this.dataRender.taste){
            this.taste_li.forEach((item,index)=>{
                if(item.className.split(" ").indexOf("selected")>-1){           
                    this.shoppingList.taste="口味："+this.taste_li[index].children[0].children[1].textContent
                    
                }
            })
        }else{
            this.shoppingList.taste=""; 
        }       
        this.ajax(this.shoppingList)
       
         
    }


    ajax(data) {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", e=>this.loadHadler(e));
        xhr.open("POST", "http://10.20.159.166:4002/addshoppingList");
        xhr.send(JSON.stringify(data))
    }
    loadHadler(e) {
            let a = JSON.parse(e.currentTarget.response);
            if(a===1){
                location.href="./shoppingCart.html";
            }               
    }


}