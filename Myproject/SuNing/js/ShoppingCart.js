import Ajax from "./Ajax.js";
import Utils from "./Utils.js";
export default class ShoppingCart{
    ids;
    step;
    shoppingList;
    allNum=0;
    allprices=0;
    flag=false;
    constructor(shoppingList){
        this.shoppingList=shoppingList;
        // console.log(shoppingList);
      this.init();
    }
    init(){
        this.cart_empty=document.querySelector(".cart-empty");
        this.cart_wrapper=document.querySelector(".cart-wrapper");
        this.cart_body=document.querySelector(".cart-body");
        this.cartPayAmount=document.querySelector("#cartPayAmount");
        this.all_num=document.querySelector(".all-num");
        this.del_goods=document.querySelector(".delGoods");
        this.setRender();
    }
    //判断是否渲染购物车
    setRender(){
        if(this.shoppingList.length!==0){
            this.cart_wrapper.style.display="block"
            this.cart_empty.style.display="none";
            this.cart_body.innerHTML="";
            this.cartRender()
        }else{
            this.cart_wrapper.style.display="none"
            this.cart_empty.style.display="block"
        }
    }
    //根据数据渲染购物车
    cartRender(){
        let cartBody=""
        this.shoppingList.forEach(item=>{
            cartBody=`<div data-id=${item.id} class="cart-list clear_fix">
            <div class="cart-main clear_fix">
                <div class="td td-chk form">
                    <input data-id=${item.id} name="checkbox" type="checkbox" class="checkbox chk-item" ${item.checked ? "checked": ""}>
                    <label for="checkbox"></label>

                </div>
                <div class="td td-item">
                    <div class="item-pic">
                        <img
                            src="${item.iconImg}">
                    </div>
                    <div class="item-info">
                        <a href="javascript:vpid(0)" class="item-title">${item.title}</a>
                    </div>
                </div>
                <div class="td td-specs">
                    <div class="specs-line">
                        <p>${item.scale}</p>
                    </div>
                    <div class="specs-line">
                        <p>${item.taste}</p>
                    </div>
                </div>
                <div class="td td-price">
                    <div class="price-line">
                                <i>¥</i><em>${item.price}</em>
                        </span>
                    </div>

                </div>
                <div class="td td-amount">
                    <div class="item-amount">
                            <a href="javascript:void(0)" data-id=${item.id} class="minus " >-</a>
                            <input data-id=${item.id} type="text" class="ui-text text-amount" autocomplete="off" data-max="99" data-min="1" value="${item.num}" maxlength="2">
                            <a href="javascript:void(0)" data-id=${item.id} class="plus " >+</a>
                    </div>
                </div>
                <div class="td td-sum">
                    <b class="sn-price">
                            <i>¥</i><em>${item.totalprice}</em>
                    </b>
                </div>
                <div class="td td-op">
                    <p class="delete" data-id=${item.id} >
                        删除
                    </p>
                </div>
            </div>
        </div>`
        this.div = document.createElement("div")
        this.div.innerHTML = cartBody;
        let ipt = this.div.querySelector(".ui-text");
        this.div.querySelector(".checkbox").addEventListener("click",e=>this.checkHandler(e))
        let minus=this.div.querySelector(".minus");
        let plus=this.div.querySelector(".plus");
        if(ipt.value==1){
            Utils.addClass(minus,"no-minus")
        }else if(ipt.value==99){
            Utils.addClass(plus,"no-plus")

        }
        this.div.querySelector(".minus").addEventListener("click",e=>this.minusClickHandler(e,ipt,minus,plus));
        this.div.querySelector(".plus").addEventListener("click",e=>this.plusClickHandler(e,ipt,plus,minus));
        this.div.querySelector(".ui-text").addEventListener("input",e=>this.inputClickHandler(e,ipt,minus,plus));
        this.div.querySelector(".delete").addEventListener("click",e=>this.deleteClickHandler(e));
        this.cart_body.appendChild(this.div);
        });
        this.allcheck=document.querySelector(".allCheckBox");
        this.allcheck.addEventListener("click",e=>this.allCheckHandler(e));
        this.check_btn=document.querySelector(".check-btn");
        this.checkbar=document.querySelector(".checkbar");
        this.checkbar.addEventListener("click",e=>this.checkbarHandler(e))
        let result= this.shoppingList.some(item=>{
            return item.checked==false;     
        });
        let flags= this.shoppingList.some(item=>{
            return item.checked==true;     
        });
        this.checkcolor(flags)
        if(result){
            this.allcheck.checked=false;
            this.checkbar.checked=false;
        }else{
            this.allcheck.checked=true;
            this.checkbar.checked=true;
        }
        this.allprice();
        this.del_goods.addEventListener("click",e=>this.delChickHandler(e))
    }
    //商品选项框的处理
    checkHandler(e){    
            let data= this.shoppingList.reduce((value, item) => {
                if (Number(item.id) === Number(e.target.getAttribute("data-id"))) value = item;
                return value;
            }, null);
            Ajax.ajax("http://10.20.159.166:4002/selectGoods",data);
            
    }
    //商品数量减      
    minusClickHandler(e,ipt,minus,plus){
        ipt.value--;
        this.step=ipt.value;
        this.changeStep(ipt,plus,minus);
        Ajax.ajax("http://10.20.159.166:4002/changGoodsNum",{num:ipt.value,id:e.target.getAttribute("data-id")});
    }
    //商品数量加
    plusClickHandler(e,ipt,plus,minus){
        ipt.value++;
        // if(ipt.value>1){
        //     Utils.removeClass(minus,"no-minus");
        // }
        // if(ipt.value>=99){
        //     ipt.value=99;
        //     Utils.addClass(plus,"no-plus");
        // }
        this.step=ipt.value;
        this.changeStep(ipt,plus,minus);
        Ajax.ajax("http://10.20.159.166:4002/changGoodsNum",{num:ipt.value,id:e.target.getAttribute("data-id")});
        // document.addEventListener("changGoodsNum",e=>this.updateHandler(e));
    }
    //输入框输入商品数量
    inputClickHandler(e,ipt,minus,plus){
        e.target.value = e.target.value.replace(/\D/g, "");
        if(this.ids)return;
        this.ids=setTimeout(()=>{
            clearTimeout(this.ids);
            this.ids=undefined
        this.step=ipt.value;
        this.changeStep(ipt,plus,minus);
            Ajax.ajax("http://10.20.159.166:4002/changGoodsNum",{num:ipt.value,id:e.target.getAttribute("data-id")});
        },500);
        if(e.target.value>1) Utils.removeClass(minus,"no-minus")
        // console.log(e.target,ipt.value);
    }
    //单个商品的删除
    deleteClickHandler(e){
        let id=Number(e.target.getAttribute("data-id")) ;
        Ajax.ajax("http://10.20.159.166:4002/deleteGoods",[id]);
    }
    //数量的处理
    changeStep(ipt,plus,minus){
         if(this.step<=1){
            ipt.value = 1;
                Utils.addClass(minus, "no-minus");
            }
            else if(this.step >= 99){
                ipt.value=99;
                    Utils.addClass(plus,"no-plus");
                    console.log(plus);
                }
            else{
                Utils.removeClass(plus,"no-minus");
                Utils.removeClass(minus,"no-minus");
            }

    }
    //顶部的的多选框处理
    allCheckHandler(e){
    this.flag=this.allcheck.checked
        this.checkcolor(this.flag);
        Ajax.ajax("http://10.20.159.166:4002/changeSelectGoods",{checked:this.allcheck.checked});
    }
    //结算多选框处理
    checkbarHandler(e){
       this.flag=this.checkbar.checked
        this.checkcolor(this.flag);
        Ajax.ajax("http://10.20.159.166:4002/changeSelectGoods",{checked:this.checkbar.checked});
    }
    //结算的颜色处理
    checkcolor(flag){
        if(flag){
            this.allcheck.checked=true;
            Utils.removeClass(this.check_btn,"checkout-disable-tip")
        }else{
            Utils.addClass(this.check_btn,"checkout-disable-tip")
        }
    }
    //结算价格和数量的处理
    allprice(){
        this.shoppingList.forEach(item=>{
            if(item.checked){
            this.allprices+=Number(item.totalprice);
            this.allNum+=Number(item.num)
            }
        });
        this.cartPayAmount.innerHTML=(this.allprices).toFixed(2)
        this.all_num.innerHTML=this.allNum
    }
    //删除选中商品
    delChickHandler(e){
        let delId=[]
           console.log(this.shoppingList);
           this.shoppingList.forEach(item=>{
               if(item.checked){
                   delId.push(Number(item.id))
               }
           })
           console.log(delId);
           Ajax.ajax("http://10.20.159.166:4002/deleteGoods",delId);
        
    }


    
}