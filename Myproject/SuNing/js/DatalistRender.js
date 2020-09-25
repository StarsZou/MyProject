export default class DatalistRender{
    dataList;
    loveList;
    phbList;
    snsxList;
    snsx_else;
    love_else;
    phb_else;
    constructor(dataList){
        // console.log(dataList);
        //获取数据
        this.dataList=dataList;
        //苏宁生鲜数据
        this.snsxList=this.dataList[1].snsxGoods;
        //排行榜数据
        this.phbList=this.dataList[0].phbGoods;
        //猜你喜欢数据
        this.loveList=this.dataList[2].loveGoods;
        this.init();
        // console.log(this.phbList[0]);  
    }
    init(){
        this.snsx_else=document.querySelector(".super-list-con");
        this.love_else=document.querySelector(".love-list-con");
        this.phb_else=document.querySelector(".phb-list-con")
        this.snsxRender();
        this.loveRender();
        this.phbRender();
    }
    snsxRender(){
        let snsxHtml="";
        this.snsxList.forEach(item=>{
            return snsxHtml+=`<li><a target="_blank" href="./details.html?${item.sugGoodsCode}/snsxGoods">
            <img src="http:${item.pictureUrl}" alt="">
            <p class="super_list_des">${item.sugGoodsName}</p>
            <p class="super_list_price">
                <span>￥</span>&nbsp;
                <em>${item.price}</em>
                <a href="javascript:void(0)" class="super-car"></a>
            </p></a></li>`           
        });
        this.snsx_else.innerHTML=snsxHtml; 
    }
    phbRender(){
        let phbHtml="";
        this.phbList.forEach(item=>{
            return phbHtml+=`<li><a target="_blank" href="./details.html?${item.sugGoodsCode}/phbGoods">
            <img src="http:${item.pictureUrl}" alt="">
            <p class="main_list_des">${item.sugGoodsName}</p>
            <p class="main_list_price">
                <span>￥</span>&nbsp;
                <em>${item.price}</em>
                <a href="javascript:void(0)" class="car-btn"></a>
            </p>
            <p class="main_list_prize"></p>
        </a></li>`
        });
        this.phb_else.innerHTML=phbHtml;
    }
    loveRender(){
        let loveHtml="";
        this.loveList.forEach(item=>{
            return loveHtml+=`<li><a target="_blank" href="./details.html?${item.sugGoodsCode}/loveGoods">
                <img src="http:${item.pictureUrl}" alt="">
                <p class="main_list_des">${item.sugGoodsName}</p>
                <p class="main_list_price">
                    <span>￥</span>&nbsp;
                    <em>${item.price}</em>
                    <a href="javascript:void(0)" class="car-btn"></a>
                </p></a></li>`
        });
        this.love_else.innerHTML=loveHtml;
    }

}