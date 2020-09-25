var cartData = require("./cartData")
module.exports = (function () {
    return {
        getDatalist:function(res){
            res.write(JSON.stringify(cartData.dataList));
            res.end();
        },
        addshoppingList: function (res, data) {
            var a = this.getSomeGoods(data);
            if (a) {
                a.num = Number(a.num) + Number(data.num);
                a.totalprice = (a.num * a.price).toFixed(2);
            } else {

                cartData.shoppingList.push(data);
            }
            res.write("1");
            res.end();
            console.log(cartData.shoppingList);
        },
        getShoppingList: function (res) {
            res.write(JSON.stringify(cartData.shoppingList));
            res.end();
        },
        getSomeGoods: function (data) {
            return cartData.shoppingList.reduce((value, item) => {
                if (Number(item.id) === Number(data.id)) value = item;
                return value;
            }, null);
        },
        changGoodsNum: function (res, data) {
            var a = this.getSomeGoods(data);
            if (!a) {
                res.end("数据错误");
                return;
            }
            a.num = data.num;
            a.totalprice = (a.price * a.num).toFixed(2);
            res.write(JSON.stringify(cartData.shoppingList));
            res.end();

        },
        deleteGoods: function (res, data) {
            // console.log(data);
            var list = cartData.shoppingList.filter(item =>!data.includes(Number(item.id)));
            cartData.shoppingList.length = 0;
            cartData.shoppingList.push(...list);
            // console.log(cartData.shoppingList);
            res.write(JSON.stringify(cartData.shoppingList));
            res.end();

        },
        selectGoods: function (res, data) {
            cartData.shoppingList.forEach(item => {
                if (data.id==Number(item.id)){
                    item.checked =!data.checked;
                } 
            })
            res.write(JSON.stringify(cartData.shoppingList));
            res.end();
        },
        changeSelectGoods:function(res,data){
            if(data.checked){
                cartData.shoppingList.forEach(item=>{
                    item.checked=true;
                })
            }else{
                cartData.shoppingList.forEach(item=>{
                    item.checked=false;
                })

            }
            res.write(JSON.stringify(cartData.shoppingList));
            res.end();

        }

    }
})()