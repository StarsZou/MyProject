export default class Utils {
    // static 类的属性和方法
    // 不加static 就是类实例化对象的属性和方法
    static ce(type, style, parent) {
        let elem = document.createElement(type);
        if (style)
            Object.assign(elem.style, style);
        if (parent) {
            if (typeof parent === "string") parent = document.querySelector(parent);
            parent.appendChild(elem);
        }
        return elem;
    }

    static addClass(elem, className) {
        if (!className) return;
        let classArr = elem.className.split(/\s+/).concat(className.split(/\s+/));
        classArr = Array.from(new Set(classArr));
        elem.className = classArr.join(" ");
    }
    static removeClass(elem, className) {
        let classArr = elem.className.split(/\s+/);
        let arr = className.split(/\s+/);
        classArr = classArr.reduce((value, item) => {
            if (arr.indexOf(item) < 0) value.push(item);
            return value;
        }, []);
        elem.className = classArr.join(" ");
    }

    static setCss(selector, styleObject) {
        if (document.styleSheets.length === 0) {
            Utils.ce("style", undefined, document.head);
        }
        let styleSheet = document.styleSheets[document.styleSheets.length - 1];
        let css = "";
        for (let prop in styleObject) {
            let value = styleObject[prop]
            prop = prop.replace(/[A-Z]/g, function (s) {
                return "-" + s.toLowerCase();
            })
            css += prop + ":" + value + ";";
        }
        if (styleSheet.insertRule) {
            styleSheet.insertRule(selector + "{" + css + "}", styleSheet.cssRules.length);
        } else {
            styleSheet.addRule(selector, css, styleSheet.cssRules.length);
        }
    }

    static arr;
    static callBack;
    static list=[]
    static loadImage(arr,callBack){
        Utils.arr=arr;
        Utils.callBack=callBack;
        var img=new Image();
        img.src=arr.shift();
        img.addEventListener("load",Utils.loadHandler)
    }
    static loadHandler(e){
        var img=e.currentTarget;
        Utils.list.push(img.cloneNode(false));
        if(Utils.arr.length===0){
            Utils.callBack(Utils.list);
            return;
        }
        img.src=Utils.arr.shift();
    }

}