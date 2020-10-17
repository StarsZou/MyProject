module.exports = (function () {
    return {
        //购物车数据
        shoppingList: [],
        //首页，详情页数据
        dataList: [{
            phbGoods: [{
                    "sugGoodsCode": "0000",
                    "sugGoodsName": "ROYAL CANIN 皇家猫粮 K36幼猫猫粮 全价粮 4-12月龄 2kg 支持免疫系统 呵护消化健康",
                    "price": "135.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/HeCl0MxLdoQtrxiSIbU06w.jpg",
                    "commodityDesc": "支持自身抵抗力发育-支持幼猫消化健康-适宜能量配方支持健康成长  ",
                    "scale": [
                        "室内成猫10KG",
                        "室内成猫2KG",
                        "幼猫粮2KG",
                        "室内成猫0.4KG"
                    ],
                    "scaleImg": "//imgservice.suning.cn/uimg1/b2c/image/3dqsDunB3ahldRHESHcgZw.jpg_60w_60h_4e",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/HeCl0MxLdoQtrxiSIbU06w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/5YqftzpIkV6g4-1Lq286_Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/FaXS8CB1iG8LR7RoY9Fcmw.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/IHfYNCOj6ZFF25t9EkyV1w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/-ihPSI_8ya_rlYIal1DeFQ.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0001",
                    "sugGoodsName": "宝路 成犬中小型全价犬粮 牛肉味1.8kg 泰迪比熊博美柯基 宠物狗粮",
                    "price": "39.80",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/IW9DTWFjhuKDzzejGSpfoA.jpg",
                    "commodityDesc": "毛发柔亮的狗干粮-肠胃易吸收的狗主粮-减少牙垢积累的宠物食品  ",
                    "scale": [
                        "成犬中小型犬1.8kg",
                        "成犬中小型犬7.5kg"
                    ],
                    "scaleImg": "//imgservice.suning.cn/uimg1/b2c/image/IW9DTWFjhuKDzzejGSpfoA.jpg_60w_60h_4e",
                    "taste": [
                        "牛肉味",
                        "烧烤味"
                    ],
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/IW9DTWFjhuKDzzejGSpfoA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/ipOi3YRRvhEiScKZz48E4w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/dyP0MQsqfp7YTvsKT-E4VQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/VaOaKb4UrSyP0R7RZTEhaQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/sO-5pcsax7iZytNlFCR5yg.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0002",
                    "sugGoodsName": "伟嘉妙鲜包 成猫湿粮混合口味妙鲜包85g 整盒*12包装",
                    "price": "39.80",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/HitB0wo3kK-0OPcuIaVrvg.jpg",
                    "commodityDesc": "妙鲜包 猫粮猫湿粮 软包罐头可拌饭 多种口味混合  ",
                    "num": 1,
                    "miniIcon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/HitB0wo3kK-0OPcuIaVrvg.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/NXYE1x3lv4hd7aQaxxh_1g.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/0eXs-kvDGrk89N6CDyLVzg.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2GfEZ298Wifslv42PSvPzA.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/c7LadhNQzyFmiUPlnZyNfA.jpg_60w_60h_4e"
                    ],
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/HitB0wo3kK-0OPcuIaVrvg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/NXYE1x3lv4hd7aQaxxh_1g.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/0eXs-kvDGrk89N6CDyLVzg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2GfEZ298Wifslv42PSvPzA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/c7LadhNQzyFmiUPlnZyNfA.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0003",
                    "sugGoodsName": "西西猫膨润土猫砂10公斤除臭结团猫沙膨润土低尘猫砂20斤10kg猫咪用品",
                    "price": "15.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/aDxHpmvYUcY0FQRQCNCC-g.jpg",
                    "commodityDesc": "除臭不粘底-低粉尘-结团牢  ",
                    "num": 1,
                    "miniIcon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/aDxHpmvYUcY0FQRQCNCC-g.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/YSg62UUxHD8ir8KwNEOd5Q.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/b-ffYhSEMvXzMULqo3L9BQ.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/H1ezjmuD8XfghdCrF8Oepg.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/HhifL4B6VKcS2W3QA6I3TA.png_60w_60h_4e"
                    ],
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/aDxHpmvYUcY0FQRQCNCC-g.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/YSg62UUxHD8ir8KwNEOd5Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/b-ffYhSEMvXzMULqo3L9BQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/H1ezjmuD8XfghdCrF8Oepg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/HhifL4B6VKcS2W3QA6I3TA.png_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0004",
                    "sugGoodsName": "YAHO亚禾狗狗磨牙棒六星洁齿磨牙棒混合味220g 洁齿磨牙除口臭",
                    "price": "19.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/JhP9ZQ73tE022-oBYMjLvw.jpg",
                    "commodityDesc": "适口性形状设计，易于狗狗咀嚼，除口臭，高营养。  ",
                    "num": 1,
                    "miniIcon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/JhP9ZQ73tE022-oBYMjLvw.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/OL_8SldOOImD7qe7vHz9rg.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/zqDVU21CEL3pGw2Cg4tSEg.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/D3ayoVFXKFhhpz9xO00bQg.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/f-80dU6rEl6m9KFipXfwSw.jpg_60w_60h_4e"
                    ],
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/JhP9ZQ73tE022-oBYMjLvw.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/OL_8SldOOImD7qe7vHz9rg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/zqDVU21CEL3pGw2Cg4tSEg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/D3ayoVFXKFhhpz9xO00bQg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/f-80dU6rEl6m9KFipXfwSw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0005",
                    "sugGoodsName": "LORDE里兜三文鱼猫条10g*4条猫零食 猫咪磨牙零食",
                    "price": "9.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/O-_i0lP51kcX19KO6r7C_g.jpg",
                    "commodityDesc": "合理营养配比更易吸收 多吃不怕胖  ",
                    "taste": [
                        "三文鱼猫条",
                        "鸡肉猫条",
                        "鸡肉扇贝猫条",
                        "金枪鱼猫条"
                    ],
                    "num": 1,
                    "miniIcon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/O-_i0lP51kcX19KO6r7C_g.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/m9bEdZw3xmtSp_YJiViyFQ.jpg_60w_60h_4e",
                        "///imgservice.suning.cn/uimg1/b2c/image/PS5utYe-07aqFTQq-MxgEw.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/6CS0hXPlEJS1KKjztEGQFw.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/7I9szL3EUj-rjd_usfmutw.jpg_60w_60h_4e"
                    ],
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/O-_i0lP51kcX19KO6r7C_g.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/m9bEdZw3xmtSp_YJiViyFQ.jpg_800w_800h_4e",
                        "///imgservice.suning.cn/uimg1/b2c/image/PS5utYe-07aqFTQq-MxgEw.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/6CS0hXPlEJS1KKjztEGQFw.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/7I9szL3EUj-rjd_usfmutw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0006",
                    "sugGoodsName": "YaHo亚禾 牛肉粒500g狗狗零食训练牛肉粒幼犬磨牙棒狗零食牛肉粒",
                    "price": "29.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/sTeP4vupaKU3XUUnjcS8cA.jpg",
                    "commodityDesc": "训练零食，洁齿磨牙  ",
                    "num": 1,
                    "miniIcon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/sTeP4vupaKU3XUUnjcS8cA.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/Yvl8xN8YxKl_KucsLtJobg.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G1ZoZ0uK_01Wr0H0xtTXog.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/UObr2XkU-dPYnGtBcQKj6Q.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/Cph_OouZLIQnJm8I6MJ7_A.jpg_60w_60h_4e"
                    ],
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/sTeP4vupaKU3XUUnjcS8cA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/Yvl8xN8YxKl_KucsLtJobg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G1ZoZ0uK_01Wr0H0xtTXog.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/UObr2XkU-dPYnGtBcQKj6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/Cph_OouZLIQnJm8I6MJ7_A.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0007",
                    "sugGoodsName": "Wanpy顽皮鲜封包80g*10包猪肉蔬菜鲜封包狗零食狗狗湿粮拌饭",
                    "price": "32.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/bWCoD4jevHx2M6us-wWEMg.jpg",
                    "commodityDesc": "湿粮拌饭精选食材  ",
                    "num": 1,
                    "miniIcon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/bWCoD4jevHx2M6us-wWEMg.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/XKz8ui1Eol2pJF54V6KHrQ.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/PC6KujJ8jerTuhnVCRS4YQ.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/qQh4ZVi8hnkZQ0noDhTKUA.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/3Ah7_SWrYmuBIeKj6TPUbw.jpg_60w_60h_4e"
                    ],
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/bWCoD4jevHx2M6us-wWEMg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/XKz8ui1Eol2pJF54V6KHrQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/dyP0MQsqfp7YTvsKT-E4VQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/PC6KujJ8jerTuhnVCRS4YQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/3Ah7_SWrYmuBIeKj6TPUbw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0008",
                    "sugGoodsName": "麦富迪狗湿粮浓汤鸡肉95g*12包妙鲜包 狗罐头 狗粮 浓汤鸡肉拌粮拌饭搭档",
                    "price": "21.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/nG-p_MDWyn1kwSE-0qNRoA.jpg",
                    "commodityDesc": "除臭不粘底-低粉尘-结团牢  ",
                    "scale": [
                        "鸡肉95g*12包",
                        "鱼肉95g*12包"
                    ],
                    "scaleImg": "//imgservice.suning.cn/uimg1/b2c/image/nG-p_MDWyn1kwSE-0qNRoA.jpg_60w_60h_4e",
                    "num": 1,
                    "miniIcon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/nG-p_MDWyn1kwSE-0qNRoA.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/rSVz36NtrpCp3gnFch_Z_w.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/oiUgWp-cPCBTB3SQsaCKhg.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/yU2_GIXa_yP-AYYG2S-ljA.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/Q6QV3_V3CkF_0jNw5tfW5g.jpg_60w_60h_4e"
                    ],
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/nG-p_MDWyn1kwSE-0qNRoA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/rSVz36NtrpCp3gnFch_Z_w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/oiUgWp-cPCBTB3SQsaCKhg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/yU2_GIXa_yP-AYYG2S-ljA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/Q6QV3_V3CkF_0jNw5tfW5g.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "009",
                    "sugGoodsName": "雪貂留香狗狗沐浴液貂油沐浴露500ml洗澡香波滋养修护防脱",
                    "price": "39.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/W_aZDDS7EH3Oo4s7fsxZVg.jpg",
                    "commodityDesc": "爆款直降  ",
                    "taste": [
                        "美白毛香波",
                        "抑菌止痒香波",
                        "修护防脱",
                        "金色犬用",
                        "柔顺护毛",
                        "幼犬专用",
                        "全效通用"
                    ],
                    "num": 1,
                    "miniIcon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/W_aZDDS7EH3Oo4s7fsxZVg.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bI7yd_XmsgT0uI_wS-yWjA.jpg_60w_60h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/xVF6MuGhLk12mRRHN_lJsA.jpg_60w_60h_4e"
                    ],
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/W_aZDDS7EH3Oo4s7fsxZVg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bI7yd_XmsgT0uI_wS-yWjA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bI7yd_XmsgT0uI_wS-yWjA.jpg_800w_800h_4e"
                    ]
                }
            ]
        }, {
            snsxGoods: [{
                    "sugGoodsCode": "0020",
                    "sugGoodsName": "【发顺丰】【有检疫证附调料】短猪尾巴1斤 7-9根 粗尾巴根 新鲜生鲜猪尾 非冻品",
                    "price": "53.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/4BpPAnEMiEc2BMuUaq_mkA.jpg",
                    "commodityDesc": "新鲜出库，品质保证  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/kM_ZbFOer1Z-3OUpRYiyuA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/Or9UP-EsxPZ5_88ixXc9BQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/kM_ZbFOer1Z-3OUpRYiyuA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2wJMmSSaTs0lAlG5D96R9g.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/dWW3mWckXBFmsMoraCNU5w.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0021",
                    "sugGoodsName": "光明如实135g无添加发酵乳 酸奶三连杯 （共3杯）",
                    "price": "49.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/3Z0KFwYYlHjCdUrCpGV5UA.jpg",
                    "commodityDesc": "品牌酸奶，健康营养  ",
                    "scale": [
                        "135g无添加酸奶洋槐蜜12杯",
                        "135g无添加酸奶洋槐蜜3杯",
                        "135g无添加酸奶洋槐蜜3杯",
                        "135g无添加酸奶洋槐蜜9杯"
                    ],
                    "scaleImg": "//imgservice.suning.cn/uimg1/b2c/image/IP1RYyo_N9pd8UqAJSozYw.jpg_60w_60h_4e",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/3Z0KFwYYlHjCdUrCpGV5UA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/jRrFgZDbjym2NMxCKFZM0g.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/FmtXpl2WsOE9ny19wtWJ4Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/FPWKGFZCFn8uSbxdnUbttw.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/NcieuBaZrfG-3ZpWEKSuIA.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0022",
                    "sugGoodsName": "【拍2件得1件9斤装】新鲜香甜紫薯 地瓜蔬菜 宝宝辅食 净重5斤装 诗亦",
                    "price": "16.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/W4GY7SA36OyJKJJFDQZi2A.jpg",
                    "commodityDesc": "软糯香甜  ",
                    "num": 1,
                    "icon": [
                        "//uimgproxy.suning.cn/uimg1/pcpv/pcpv/iwogh/2020/09/21/20/iwoghBannerPicture/8aba92373b2c4ce3a05aa37f684ccab6.png_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/W4GY7SA36OyJKJJFDQZi2A.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/85hVgJuWFtPfOCFCvVTXXA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/JnTYB16ZARSKCOz51ixGIQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/DGjpR-YU-aMzezlI3i19bQ.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0023",
                    "sugGoodsName": "【中华特色】徐州助农馆【2件免邮】汇尔康(HR) 干大蒜2.5斤 大蒜头农家自种 大蒜瓣 坏果包赔 产地直发 华东",
                    "price": "7.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/FnfKVZSreiZv_YY38KL-GA.png",
                    "commodityDesc": "2件免邮，新鲜果蔬，等您来选  ",
                    "scale": [
                        "生姜1斤",
                        "大蒜2.5斤",
                        "大葱2.5斤",
                        "蒜苔2.5斤"
                    ],
                    "scaleImg": "//imgservice.suning.cn/uimg1/b2c/image/FnfKVZSreiZv_YY38KL-GA.png_60w_60h_4e",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/FnfKVZSreiZv_YY38KL-GA.png_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/ErcmxexJl1MfDXc-WnSzig.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/mdauyQYb_QXxS4QDrVa_lQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/yxFeNcRJBWp6SQkfticsmg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/Z6uFUUWGu0YzUo1nePgLLw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0024",
                    "sugGoodsName": "【店长力荐】【顺丰直达】山东沾化冬枣 精品果5斤装 脆甜大枣子 现摘新鲜枣子水果 脆甜爽口 多汁无渣 星优选 鲤赞农场",
                    "price": "19.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/pQdOntjtI8DmdmVrVBwobg.jpg",
                    "commodityDesc": "果园现摘，新鲜直达，多汁无渣，脆甜爽口，立即购买……  ",
                    "scale": [
                        "沾化冬枣 精品果5斤装",
                        "沾化冬枣 精品大果5斤装"
                    ],
                    "scaleImg": "//imgservice.suning.cn/uimg1/b2c/image/pQdOntjtI8DmdmVrVBwobg.jpg_60w_60h_4e",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/DzKSsr1kKkpQT9JaiReSnQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/pQdOntjtI8DmdmVrVBwobg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/sFOzJHziodVI7UM2DwHPKA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/LPrvMbAczHhq_2VfGtyWGw.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/iEsjp8ahafaXsFVR4HS_3g.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0025",
                    "sugGoodsName": "君乐宝涨芝士啦低温酸奶酸牛奶芝士风味180g*8袋加芝芝多莓口味180g*4袋",
                    "price": "49.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0026",
                    "sugGoodsName": "米又 福建六鳌红心小番薯 地瓜 2.5斤小果（偶件数发）",
                    "price": "8.18",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/NZG-0Cu7O9oiPrL7K2UQCA.jpg",
                    "commodityDesc": "产地直发 香甜糯糯 拍2件合发1箱--  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/NZG-0Cu7O9oiPrL7K2UQCA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/eEiCjilQ6spvafBAw02X-Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/MF1eEU8W1MWxH6Qj71t2yA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/KkzuK6xYxknEgBzC7LcUpg==.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/8bnMyaOB1YurhJZkVcNdRA.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0027",
                    "sugGoodsName": "鲜菓篮 芒果水果 攀枝花凯特芒带箱10斤精装中大果（净重8.5-9斤） 凯特芒果 攀枝花芒果 应季鲜果热带水果",
                    "price": "37.80",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/fz6-QwD9UjgaJJpQHGvwTQ.jpg",
                    "commodityDesc": "个大美味细嫩无丝  ",
                    "scale": [
                        "凯特芒3斤装中大果 特惠试吃",
                        "凯特芒中大果5斤装 细嫩无丝",
                        "凯特芒中大果10斤装 吃货必买"
                    ],
                    "scaleImg": "//imgservice.suning.cn/uimg1/b2c/image/Npk9kdwbfXUF3p8sHaJzdw.jpg_60w_60h_4e",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/fz6-QwD9UjgaJJpQHGvwTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/cDUtjkvOO9hpA0Qv99aijg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/kbT_--lBcPJuyv8nc9dmJw.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/e1KE4iXDpI5PniU2JF13pg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/4xWROkuSMSjNuiv3Qa8mjg.png_800w_800h_4e"
                    ]
                }

            ]
        }, {
            loveGoods: [{
                    "sugGoodsCode": "0060",
                    "sugGoodsName": "新逸风 无芯卷纸12卷五层加厚卫生纸手纸厕纸1提",
                    "price": "10.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/vq9z9gBu-3Yhr8fWgS-SgQ.png",
                    "commodityDesc": "个大美味细嫩无丝  ",
                    "scale": [
                        "凯特芒3斤装中大果 特惠试吃",
                        "凯特芒中大果5斤装 细嫩无丝",
                        "凯特芒中大果10斤装 吃货必买"
                    ],
                    "scaleImg": "//imgservice.suning.cn/uimg1/b2c/image/Npk9kdwbfXUF3p8sHaJzdw.jpg_60w_60h_4e",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/fz6-QwD9UjgaJJpQHGvwTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/cDUtjkvOO9hpA0Qv99aijg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/kbT_--lBcPJuyv8nc9dmJw.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/e1KE4iXDpI5PniU2JF13pg.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/4xWROkuSMSjNuiv3Qa8mjg.png_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0061",
                    "sugGoodsName": "农夫山泉饮用天然水塑膜量贩装550ml*12瓶",
                    "price": "18.80",
                    "pictureUrl": "//image.suning.cn/uimg/b2c/newcatentries/0070182042-000000000104062166_1.jpg",
                    "commodityDesc": "产地直发 香甜糯糯 拍2件合发1箱--  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/NZG-0Cu7O9oiPrL7K2UQCA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/eEiCjilQ6spvafBAw02X-Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/MF1eEU8W1MWxH6Qj71t2yA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/KkzuK6xYxknEgBzC7LcUpg==.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/8bnMyaOB1YurhJZkVcNdRA.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "0062",
                    "sugGoodsName": "【7月产】蒙牛特仑苏纯牛奶苗条装250ml*12 盒",
                    "price": "54.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/sZ78SpjZkU5CVsCfYq7P7Q.jpg",
                    "commodityDesc": "产地直发 香甜糯糯 拍2件合发1箱--  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/NZG-0Cu7O9oiPrL7K2UQCA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/eEiCjilQ6spvafBAw02X-Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/MF1eEU8W1MWxH6Qj71t2yA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/KkzuK6xYxknEgBzC7LcUpg==.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/8bnMyaOB1YurhJZkVcNdRA.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000011422013303",
                    "sugGoodsName": "缘点本色抽纸家用餐巾纸10包装无添加纸巾孕婴可用卫生纸巾",
                    "price": "10.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/8hcR5Bnz6Xeun2IZ_rN3cw.jpg",
                    "commodityDesc": "产地直发 香甜糯糯 拍2件合发1箱--  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/NZG-0Cu7O9oiPrL7K2UQCA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/eEiCjilQ6spvafBAw02X-Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/MF1eEU8W1MWxH6Qj71t2yA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/KkzuK6xYxknEgBzC7LcUpg==.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/8bnMyaOB1YurhJZkVcNdRA.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000000144016246",
                    "sugGoodsName": "伊利安慕希常温酸牛奶礼盒装205g*12 整箱 营养儿童成人学生早餐奶",
                    "price": "66.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/YjoAuOAGCkuSLv-ZbUSxiQ.jpg",
                    "commodityDesc": "产地直发 香甜糯糯 拍2件合发1箱--  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/NZG-0Cu7O9oiPrL7K2UQCA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/eEiCjilQ6spvafBAw02X-Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/MF1eEU8W1MWxH6Qj71t2yA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/KkzuK6xYxknEgBzC7LcUpg==.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/8bnMyaOB1YurhJZkVcNdRA.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000011798893772",
                    "sugGoodsName": "LSPG 万年青制药 一次性 医用口罩 50只装（5包 每包10只）灭菌级 蓝色",
                    "price": "29.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/UYOHIA3jn2GgMUihj8E1ew.jpg",
                    "commodityDesc": "产地直发 香甜糯糯 拍2件合发1箱--  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/NZG-0Cu7O9oiPrL7K2UQCA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/eEiCjilQ6spvafBAw02X-Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/MF1eEU8W1MWxH6Qj71t2yA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/KkzuK6xYxknEgBzC7LcUpg==.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/8bnMyaOB1YurhJZkVcNdRA.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000000103955441",
                    "sugGoodsName": "云南白药（YUNNAN BAIYAO） 金口健牙膏 益优清新（益优冰柠）105g 新老包装 随机发货",
                    "price": "14.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/1NCN8_xYq2tRphZ7z1aaiQ.jpg",
                    "commodityDesc": "产地直发 香甜糯糯 拍2件合发1箱--  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/image/NZG-0Cu7O9oiPrL7K2UQCA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/eEiCjilQ6spvafBAw02X-Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/MF1eEU8W1MWxH6Qj71t2yA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/KkzuK6xYxknEgBzC7LcUpg==.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/8bnMyaOB1YurhJZkVcNdRA.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000000135345762",
                    "sugGoodsName": "（24斤）白猫高效洁净 清新花香洗衣液瓶装3kg*4整箱销售 手洗机洗（苏宁定制）新老包装随机发货",
                    "price": "59.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/PbFYC8QRzEs2OCuHVchyRQ.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012120191508",
                    "sugGoodsName": "金唐(KTANG) 桂圆干500g*2袋 福建莆田特产桂圆干龙眼干肉厚核小 桂圆红枣枸杞茶搭配",
                    "price": "51.60",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/06pvu8R1aInwspUUJahR9Q.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012111713253",
                    "sugGoodsName": "a1爱逸 云蛋糕500g长崎蛋糕儿童早餐鸡蛋糕吐司面包网红休闲零食",
                    "price": "29.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/2DIKZCJsfiqJqPXLJXcwBQ.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000000125363710",
                    "sugGoodsName": "上好佳 鲜虾片 80g",
                    "price": "7.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/ipjYNUcMBQc2bY2-GflU1w.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000000143309141",
                    "sugGoodsName": "海天 金标生抽1.9L 调味品 炒菜炒面火锅调味料海天出品 新旧包装随机发货",
                    "price": "25.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/HYBhiPo16aQss95vhcRrXA.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000000641266332",
                    "sugGoodsName": "盛耳 新米有机黄小米400g 五谷小米杂粮东北粮食特产",
                    "price": "14.50",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/fDtiJ-f4VKW4bncFC2DJYA.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000011709644742",
                    "sugGoodsName": "桑克拉（SUN CLARA）胖大海菊花决明子茶人参五宝茶八宝茶旗舰店 正品南京同仁堂联名款150g/袋",
                    "price": "28.80",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/EXypotWZKmyFKeqxBh7Nug.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000000103725017",
                    "sugGoodsName": "芙丽芳丝(Freeplus)净润洗面霜 100g 氨基酸系洗面奶 日本洁面乳 补水保湿 深层清洁 男女通用",
                    "price": "99.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/XTiabBt7uRTETaS2KUKbaA.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000011235644449",
                    "sugGoodsName": "海尔(Haier)语音播报电子血压计BSX562家用臂式血压仪医用自动精准心律测量智能加压",
                    "price": "169.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/41XeRcxcB_44MVRZtBc8vg.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012071542863",
                    "sugGoodsName": "大宝SOD蜜200ml*2",
                    "price": "32.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/zZWvkCK8-P7b0smAHS46YQ.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012111630345",
                    "sugGoodsName": "億維一次性使用医用口罩50只三层外科医生医科医疗医护用口鼻罩夏天薄款透气防飞沫防飞溅防病菌防尘防护罩含熔喷布成人男女学生",
                    "price": "24.50",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/gEi87t9vpqXrEjNCWIC7cQ.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012107221930",
                    "sugGoodsName": "岡本okamoto超薄避孕套共16片 内置SKIN超润滑 3片 纯8片男用女情趣延时计生用品安全套套byt赠激薄5自营",
                    "price": "31.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/lDToUveHQeArhA7_dWnMXA.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012108324949",
                    "sugGoodsName": "丰凯园实业 宁夏特产中宁红枸杞子茶 特级500g罐装 正宗头茬免洗大粒",
                    "price": "37.69",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/wCWdckPz8DjnnQl5WuLf7Q.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000000721520009",
                    "sugGoodsName": "美迪惠尔(Mediheal)水润补水保湿面膜 27mlx10片 经典水库 澎湃水润 补水护肤男女适用 品牌直供 苏宁物流",
                    "price": "55.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/GWrn-SnrqjSVHT_irAc5GA.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000000122479628",
                    "sugGoodsName": "美宝莲(Maybelline)眼唇卸妆液150ml/眼唇脸三合一温和深层清洁卸妆水卸妆油官方正品",
                    "price": "59.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/HwobfHT5_7ZJW4naGQm8dA.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000000103632464",
                    "sugGoodsName": "大宝SOD蜜100ml乳液男女通用面霜保湿补水擦脸油深层滋润润肤霜秋冬季懒人润肤露全身可用脸部润肤乳",
                    "price": "11.80",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/plTrmrEUettSIW4C9Ao3fg.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000000712144337",
                    "sugGoodsName": "【国内专柜版】纪梵希高定香榭天鹅绒唇膏 小羊皮口红306# 法式红 斩男番茄色",
                    "price": "190.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/U4fKIquWGmpprm1DKE8rZA.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012111738798",
                    "sugGoodsName": "【买1发2】老金磨方 黑芝麻丸126g 手工制芝麻丸男女蜂蜜膏辟谷丸子芝麻球",
                    "price": "49.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/RT7SXVhIJIswYChwYGsz9w.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000011389641570",
                    "sugGoodsName": "再春堂牛蒡250g*2瓶共500g苍山黄金牛蒡茶罐装正品牛旁牛棒谤篣牛膀根茶养生茶饮泡水喝",
                    "price": "38.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/ykfDUwvBiLokFFuD_gPcNg.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000011724024532",
                    "sugGoodsName": "买1送1共500g再春堂 桃胶 桃花泪 250克/瓶 精选桃胶 保健茶饮 可搭配雪燕皂角米组合 免洗易泡发 瓶装",
                    "price": "39.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/ox2C7EWsmonW6nnBpT2ZPw.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000011752736279",
                    "sugGoodsName": "桑克拉（SUN CLARA）南京同仁堂黄芪共500g 大片黄芪片道地产区北芪野生自然可泡水可搭配当归党参",
                    "price": "42.80",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/A1KC9aV8VMwaEsXQeMsHEg.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugType": "1",
                    "sugGoodsCode": "000000010836515384",
                    "sugGoodsName": "青源堂 陈皮丝 新会老陈皮干茶陈皮丝100克",
                    "price": "12.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/h9q-TfI3g3akJKDaa2aFiw.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000010645922323",
                    "sugGoodsName": "Freeplus 净润洗面奶 100g 孕妇可用 补水保湿 调节水油平衡 氨基酸洁面 弱酸性 日本原装进口",
                    "price": "99.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/4IEQXNFfmBmF3ct3ze9nXg.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012090085517",
                    "sugGoodsName": "正大制药益生菌白芸豆正大小纤淀粉脂肪阻断片调理肠胃大餐救星碳水阻断剂抗糖抗油 1g*28粒",
                    "price": "139.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/IiLGoZB7QgDMZO9WoxBUBQ.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000011944837150",
                    "sugGoodsName": "新逸风 卷纸12卷 五层加厚 家用纸巾无芯卷纸卫生纸巾",
                    "price": "6.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/JkA2z63IFiyFgrNTxuD0Kw.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugType": "1",
                    "sugGoodsCode": "000000000109820550",
                    "sugGoodsName": "伊利金典纯牛奶礼盒装250ml*12",
                    "price": "65.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/e-QN1DKV68rw17jaI0VoOQ.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000011694073041",
                    "sugGoodsName": "心相印 抽纸 茶语丝享系列3层110抽20包卫生纸巾餐巾纸擦手纸面巾纸家庭装（整箱销售）",
                    "price": "39.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/5It5xmPE073QHItb0j2MjQ.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012113906061",
                    "sugGoodsName": "桑克拉(SUN CLARA)南京同仁堂红豆薏米芡实茶装赤小豆薏仁茶苦荞大麦茶叶薏米茶水果花茶156克/袋",
                    "price": "23.80",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/bHYxhhYOecr0f4PmJbIjag.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012107228299",
                    "sugGoodsName": "富林电子血压计老人臂式测量仪家用机量仪器高精准表全自动医生用",
                    "price": "99.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/M1-2C8-FLXDlTaTPfeU2UA.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012114884919",
                    "sugGoodsName": "億維一次性使用医用口罩100只装三层外科医生医科医疗医护用口鼻罩夏天薄款透气防飞沫防飞溅防病菌防尘防护罩含熔喷布成人男女",
                    "price": "39.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/D1GNPeil_JvQPpwltbb0pw.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012107221932",
                    "sugGoodsName": "岡本003超薄贴身避孕套24只 1.03贴身超滑3片 SKIN超润滑3片 纯8片 激薄5片*2盒男女用情趣安全套套byt",
                    "price": "64.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/fWwjISCgg56F-8UipIkHbg.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000011107351594",
                    "sugGoodsName": "【券后一元】谜草集 芦荟胶祛痘膏 淡化痘坑去痘印 补水舒缓保湿面霜面膜 男女士护肤 300g/盒",
                    "price": "6.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/H-23_BTwhwflubePqr8XEw.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012099577379",
                    "sugGoodsName": "买1发5 福东海 黑芝麻丸90g九蒸九晒纯手工九制芝麻蜂蜜丸膏丸男女营养代餐以黑补黑",
                    "price": "59.80",
                    "pictureUrl": "//imgservice5.suning.cn/uimg1/b2c/image/E_tkXxy28gA5O3nqLdharQ.jpg_400w_400h_4e",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000011752736269",
                    "sugGoodsName": "牛蒡茶南京同仁堂牛蒡根干片旗舰店正品牛旁牛磅牛膀茶叶新鲜切片大片",
                    "price": "38.91",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/s-bJxtt9ss91nFVVhU7Tkw.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000000127201155",
                    "sugGoodsName": "清风 抽纸 淡绿花二层200抽*20包面巾纸 餐巾纸 擦手纸",
                    "price": "39.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/0B6Rdv5KcCmXgvTf7ksUIw.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012106911592",
                    "sugGoodsName": "买1送1 买2发5 同款再春堂红糖姜茶120g姜糖红糖水速溶姜母茶老姜汤生姜水姜汁大姨妈茶",
                    "price": "30.32",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/3LgsNI0f-LoI_Dh-oW-ddA.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012079341838",
                    "sugGoodsName": "海氏海诺医用外科口罩一次性医疗口罩医护透气成人三层熔喷布50只",
                    "price": "59.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/1jzOqeKSfXWOFRfFKWbV8g.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000000102344813",
                    "sugGoodsName": "杜蕾斯（Durex） 避孕套 活力装 12只装 润滑型 标准款 安全套套 男用 成人情趣计生性用品 byt",
                    "price": "34.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/nLK8oNAZhRYvB2OPbMvTtA.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000011808893211",
                    "sugGoodsName": "买1发3固本堂红豆薏米茶芡实薏仁茶苦荞芡实茶养生泡水喝150g",
                    "price": "30.11",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/QGy7UkC3PjGilhb1BmIPNw.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000011867637718",
                    "sugGoodsName": "蓝湾贝舒一次性医用儿童口罩 带熔喷层防护 蓝色三层 儿童男女通用3-12岁 五十片装",
                    "price": "18.80",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/AqLqdGaIqV0yqDnXKdFDfw.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000010046502664",
                    "sugGoodsName": "杰士邦jissbon 奇幻装礼盒9合一50只升级避孕套003持久超薄型安全套自营情趣狼牙套带刺大颗粒延时刺激螺纹零感",
                    "price": "62.90",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/RM3abb4kn6bjfSc7m87Vdw.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012111637208",
                    "sugGoodsName": "买1送1同款 再春堂杭白菊正宗桐乡胎菊50g王茶叶杭州菊花花草茶搭金银花茶",
                    "price": "26.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/7H-RiOUEYF3nwBKk_86ldQ.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                },
                {
                    "sugGoodsCode": "000000012039365994",
                    "sugGoodsName": "买2送1再春堂三降茶150g玉米须山楂栀子桂花菊花桑叶荷叶决明子组合型降压花茶草三血高糖脂压本养生茶饮",
                    "price": "20.00",
                    "pictureUrl": "//imgservice.suning.cn/uimg1/b2c/image/kfAn28frm8yJG_rFjfpH3Q.jpg",
                    "commodityDesc": "生鲜短效产品，乡镇自提，一经发货不支持无理由退货  ",
                    "num": 1,
                    "icon": [
                        "//imgservice.suning.cn/uimg1/b2c/atmosphere/HT0bDrRZFejrrrIfs0hYTQ.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/G652bSsb8lb2QnV7E3Gn3w.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/bPVyfpLc5EqeRpWTjlKB6Q.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/nn4XbQnJic6iJf6awMSGRA.jpg_800w_800h_4e",
                        "//imgservice.suning.cn/uimg1/b2c/image/2lrWd43anIMutPvBHWF5fw.jpg_800w_800h_4e"
                    ]
                }
            ]
        }]



    }
})()