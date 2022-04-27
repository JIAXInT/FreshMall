import Mock from 'mockjs'
Mock.mock('/api/user/login', {
    status: 0,
    data: {
        id: 12,
        username: 'jack',
        email: 'jack@163.com',
        phone: null,
        role: 0,
        createTime: 1479048325000,
        updateTime: 1479048325000
    }
})

Mock.mock('/api/user/logout', {
    status: 0
})

Mock.mock('/api/category', {
    data: [{
            id: 0,
            name: '新鲜水果',
            pic: 'https://seopic.699pic.com/photo/50075/2871.jpg_wh1200.jpg',
            goods: [{
                    id: 0,
                    nickName: '火龙果',
                    name: '越南进口白心火龙果4个装 标准果 单果400-550g',
                    price: '39.9',
                    imgUrl: 'http://img10.360buyimg.com/babel/s300x300_jfs/t18877/40/319533497/486134/171c1d37/5a6aa298N0dd3473a.jpg!q80.webp',
                    pic: {
                        0: 'https://img11.360buyimg.com/n1/jfs/t24895/22/2257277627/348477/3e148905/5bc69de5N3325c03a.jpg',
                        1: 'https://img11.360buyimg.com/n1/jfs/t25375/166/2231559698/461287/7216db3b/5bc69de6N6ec25334.jpg',
                        2: 'https://img11.360buyimg.com/n1/jfs/t26167/37/1313965509/463475/ff533d95/5bc69de7N624bb7d5.jpg',
                        3: 'https://img11.360buyimg.com/n1/jfs/t27478/333/1164982634/419703/109b6248/5bc69de7N49a3d869.jpg'
                    }
                },
                {
                    id: 1,
                    nickName: '沃柑',
                    name: '广西沃柑 柑橘1.5kg 新鲜水果',
                    price: '29.9',
                    imgUrl: 'http://img11.360buyimg.com/babel/s300x300_jfs/t17323/133/342988625/418250/308f8fdb/5a6e7133N2f10bd9b.jpg!q80.webp',
                    pic: {
                        0: 'https://img13.360buyimg.com/n1/jfs/t1/111509/36/9288/208240/5ed855cdE03a82032/8452405105118e1d.jpg',
                        1: 'https://img13.360buyimg.com/n1/jfs/t1/117354/5/9400/167224/5ed855ceE7412eaa0/e6af5f09f23128ae.jpg',
                        2: 'https://img13.360buyimg.com/n1/jfs/t1/123182/35/4039/266300/5ed855cfE7a14b6e5/56c056abdd49852b.jpg',
                        3: 'https://img13.360buyimg.com/n1/jfs/t1/125603/26/3995/678348/5ed855d1Ec2f522a5/8234551c31d18fb2.jpg'
                    }
                },
                {
                    id: 2,
                    nickName: '牛油果',
                    name: '进口 牛油果 6个装 单果重约130-180g 新鲜水果',
                    price: '64.9',
                    imgUrl: 'http://img12.360buyimg.com/babel/s300x300_jfs/t10945/175/2172045473/162582/5bf301ef/59f05afdN3c13f6ed.jpg!q80.webp',
                    pic: {
                        0: 'https://img10.360buyimg.com/n1/jfs/t1/84705/35/8574/504204/5e0566e8E55dafba8/f6d258e3c886fba8.jpg',
                        1: 'https://img10.360buyimg.com/n1/jfs/t5884/74/5977514966/130080/e8f2b9c2/5966c834N39aed1a9.jpg',
                        2: 'https://img10.360buyimg.com/n1/jfs/t5641/267/5976229511/130665/7d2b278a/5966c83eN25885f9a.jpg',
                        3: 'https://img10.360buyimg.com/n1/jfs/t1/186167/11/17356/289471/6108da42E02328da2/1771ca0e6fb389a1.jpg'
                    }
                },
                {
                    id: 3,
                    nickName: '猕猴桃',
                    name: '爱奇果/齐峰 徐香猕猴桃 25个 单果约80-100g ',
                    price: '69.9',
                    imgUrl: 'http://img13.360buyimg.com/babel/s300x300_jfs/t17614/30/217738100/211833/4797208b/5a65595fNa8a140db.jpg!q80.webp',
                    pic: {
                        0: 'https://img14.360buyimg.com/n1/jfs/t1/207276/14/4189/238197/615fc79eE78a438c6/6dc30d61fac30677.jpg',
                        1: 'https://img14.360buyimg.com/n1/jfs/t1/190553/9/19743/337774/61248eb8Eab9d8c7a/fed90d49e03656e9.jpg',
                        2: 'https://img14.360buyimg.com/n1/jfs/t1/196238/15/19824/504062/61248eb9E760c6362/6d1907a300d72148.jpg',
                        3: 'https://img14.360buyimg.com/n1/jfs/t1/204366/7/2851/764757/61248eb9E077ec851/d76b8aa74a0d9774.jpg'
                    }
                },
                {
                    id: 4,
                    nickName: '山竹',
                    name: '泰国进口山竹5A级 500g 新鲜水果',
                    price: '219.9',
                    imgUrl: 'http://img14.360buyimg.com/babel/s300x300_jfs/t18223/6/229592867/547530/bb4ec612/5a6595afN4cbebc2e.jpg!q80.webp',
                    pic: {
                        0: 'https://img13.360buyimg.com/n1/jfs/t1/107924/40/18229/141690/60ab3eefEc5765c86/bfb14a5b6e500cc8.jpg',
                        1: 'https://img13.360buyimg.com/n1/jfs/t1/182112/10/5670/248028/60ab3eefE74884b74/f5c1d948102a99b6.jpg',
                        2: 'https://img13.360buyimg.com/n1/jfs/t1/185676/30/5640/141123/60ab3eefE90536779/2385cb053a9a6ceb.jpg',
                        3: 'https://img13.360buyimg.com/n1/jfs/t1/185215/29/5489/211106/60ab3eefE14255110/2c9ef2b0d6eba82e.jpg'
                    }
                },
                {
                    id: 5,
                    nickName: '樱桃',
                    name: '大连美早樱桃400g 果径约26-28mm（标准果）',
                    price: '99.9',
                    imgUrl: 'http://img10.360buyimg.com/babel/s300x300_jfs/t18133/210/591813967/313572/fdbc913a/5a97bad9N902bd478.jpg!q80.webp',
                    pic: {
                        0: 'https://img11.360buyimg.com/n1/jfs/t1/124420/40/21276/194765/6213132fE57bcdce3/6f967392260cf6bd.jpg',
                        1: 'https://img11.360buyimg.com/n1/jfs/t1/124584/13/23352/134742/62131329E61c76fd4/7ec2e4e1a11f029e.jpg',
                        2: 'https://img11.360buyimg.com/n1/jfs/t1/117740/21/20529/117218/6213132bE5eb6981a/5c3e36ddbe85baff.jpg',
                        3: 'https://img11.360buyimg.com/n1/jfs/t1/124420/40/21276/194765/6213132fE57bcdce3/6f967392260cf6bd.jpg'
                    }
                },
                {
                    id: 6,
                    nickName: '芒果',
                    name: '海南三亚台农芒果5斤鸡蛋芒果 新鲜水果',
                    price: '29.9',
                    imgUrl: 'https://img11.360buyimg.com/n7/jfs/t1/166289/7/11910/58552/6047341cE98ca6637/6b5085249314503c.jpg',
                    pic: {
                        0: 'https://img11.360buyimg.com/n1/jfs/t1/162206/34/8960/222661/603df24eEa3b50005/5f89b47aeed3ac88.jpg',
                        1: 'https://img11.360buyimg.com/n1/jfs/t1/166415/38/8580/95745/603df24eEfefe9624/b92ed17bb2c6f4a5.jpg',
                        2: 'https://img11.360buyimg.com/n1/jfs/t1/155236/32/20669/118194/603df24eEfae65e54/8e71d2f95ee17ff3.jpg',
                        3: 'https://img11.360buyimg.com/n1/jfs/t14437/261/2471736130/250407/347709b5/5a9ca8cbNeb4b92ff.jpg'
                    }
                },
                {
                    id: 7,
                    nickName: '橙子',
                    name: ' 精选 脐橙 鲜甜橙子 2.5kg装 单果140-170g',
                    price: '49.9',
                    imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/156741/19/23152/366899/6184ed1bE5c0abb34/845b34ad3fd930e2.jpg',
                    pic: {
                        0: 'https://img10.360buyimg.com/n1/jfs/t1/207123/20/8145/126152/6184ed64E1b42c93e/c6a712e30cb76023.jpg',
                        1: 'https://img10.360buyimg.com/n1/jfs/t1/209914/38/8155/208960/6184ed64Ee493b8b8/b6c3c7e21756196b.jpg',
                        2: 'https://img10.360buyimg.com/n1/jfs/t1/200488/13/15976/379883/6184ed64E8b4a2692/558b196a73cff4b7.jpg',
                        3: 'https://img10.360buyimg.com/n1/jfs/t1/208883/4/8143/442509/6184ed64Eaff243fd/e8c25d5cef95f48f.jpg'
                    }
                }
            ]
        },
        {
            id: 1,
            name: '海产水鲜',
            pic: 'https://seopic.699pic.com/photo/50122/9539.jpg_wh1200.jpg',
            goods: [{
                    id: 0,
                    nickName: '三文鱼',
                    name: '美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货',
                    price: '69.9',
                    imgUrl: 'https://img10.360buyimg.com/babel/s300x300_jfs/t3493/253/425253315/176995/19f2a2b2/5808619cN27390691.jpg!q80.webp',
                    pic: {
                        0: 'https://img11.360buyimg.com/n1/jfs/t1/164348/17/1359/146367/5ff66e3fE1670b56f/0b066adf970a892d.jpg',
                        1: 'https://img11.360buyimg.com/n1/jfs/t1/72853/23/6565/195668/5d494aa6Ec8593804/fea87d62ced8deee.jpg',
                        2: 'https://img11.360buyimg.com/n1/jfs/t1/78877/1/6486/224483/5d494aa6Efa094f54/80e4eb7bf12d64fa.jpg',
                        3: 'https://img11.360buyimg.com/n1/jfs/t1/43834/16/11216/355831/5d494aa6Eaef26dbb/fa358278e510fd2f.jpg'
                    }
                },
                {
                    id: 1,
                    nickName: '黑虎虾',
                    name: '海外直采 活冻泰国黑虎虾 400g 16-20只/盒 原装',
                    price: '49.9',
                    imgUrl: 'https://img11.360buyimg.com/babel/s300x300_jfs/t10255/216/1395629457/558324/dc2739fe/59e094ffNa5d58ce6.jpg!q80.webp',
                    pic: {
                        0: 'https://img11.360buyimg.com/n1/jfs/t9700/306/1436060266/681052/3c9ac812/59e09500Ndcdb8db5.jpg',
                        1: 'https://img11.360buyimg.com/n1/jfs/t9784/341/1408825319/556426/c39bea69/59e09506N1355a960.jpg',
                        2: 'https://img11.360buyimg.com/n1/jfs/t9784/341/1408825319/556426/c39bea69/59e09506N1355a960.jpg',
                        3: 'https://img11.360buyimg.com/n1/jfs/t7900/289/3101499427/504495/c7817054/59e09507Nf82cf836.jpg'
                    }
                },
                {
                    id: 2,
                    nickName: '黄花鱼',
                    name: '三都港 冷冻无公害黄花鱼 700g 2条 袋装 海鲜',
                    price: '59.9',
                    imgUrl: 'https://img12.360buyimg.com/babel/s300x300_jfs/t3805/133/325945617/116002/e90e0bdf/580df2b5Ncb04c5ac.jpg!q80.webp',
                    pic: {
                        0: 'https://img13.360buyimg.com/n1/jfs/t1/132602/34/25562/419672/6237ecacE7e31ac5e/fc47fb80a65eba57.jpg',
                        1: 'https://img13.360buyimg.com/n1/jfs/t1/56460/28/13789/321811/5da953d9Eb646dfcc/7b44ee9285e98652.jpg',
                        2: 'https://img13.360buyimg.com/n1/jfs/t1/171624/12/8008/230462/60934609E48f6247b/d23c75e397284357.jpg',
                        3: 'https://img13.360buyimg.com/n1/jfs/t1/125350/30/4463/219427/5eddcaffE3df85d13/a059af8cf32d6233.jpg'
                    }
                },
                {
                    id: 3,
                    nickName: '扇贝',
                    name: '獐子岛 冷冻蒜蓉粉丝扇贝 200g 6只 海鲜水产 ',
                    price: '29.9',
                    imgUrl: 'https://img13.360buyimg.com/babel/s300x300_jfs/t5110/353/325099350/140051/9ced9d32/58fd68baN9149547f.jpg!q80.webp',
                    pic: {
                        0: 'https://img13.360buyimg.com/n1/jfs/t3034/249/834996576/226720/f9d794ff/57b521ceN291ac0d4.jpg',
                        1: 'https://img13.360buyimg.com/n1/jfs/t3166/148/398955613/190679/9412f2e2/57b521b0Nb6a5431e.jpg',
                        2: 'https://img13.360buyimg.com/n1/jfs/t1/90261/33/2307/263929/5dcd17f4E2a122e74/01fd6012966c238b.jpg',
                        3: 'https://img13.360buyimg.com/n1/jfs/t1/156153/36/3367/44073/5fec3dcaE8d356d84/fa0cf3531ac55b6d.jpg'
                    }
                },
                {
                    id: 4,
                    nickName: '白虾',
                    name: '禧美(Seamix) 原装进口冷冻厄瓜多尔白虾 1.8kg',
                    price: '109.9',
                    imgUrl: 'https://img14.360buyimg.com/babel/s300x300_jfs/t4858/35/34304988/83500/d449ea4e/58d9bb99Nb5d313c2.jpg!q80.webp',
                    pic: {
                        0: 'https://img11.360buyimg.com/n1/jfs/t1/135808/22/20435/127953/5fdac77eE4896155c/c7ba06171ad2aaaf.jpg',
                        1: 'https://img11.360buyimg.com/n1/jfs/t1/133050/39/20444/291211/5fdac77fE3bb6f637/863ba67a6dca7ea5.jpg',
                        2: 'https://img11.360buyimg.com/n1/jfs/t1/145510/36/18916/108228/5fdac77fEe2ea2a8b/bfdb55f1ddb093f7.jpg',
                        3: 'https://img11.360buyimg.com/n1/jfs/t1/135627/35/20328/89852/5fdac77fE89c391c2/79566741ed07b1af.jpg'
                    }
                },
                {
                    id: 5,
                    nickName: '金鲳鱼',
                    name: '翔泰 冷冻无公害金鲳鱼 700g 2条 袋装 海鲜水产',
                    price: '41.9',
                    imgUrl: 'https://img10.360buyimg.com/babel/s300x300_jfs/t15130/311/2592062527/297717/1c027372/5aa9d51dN7cd7d429.jpg!q80.webp',
                    pic: {
                        0: 'https://img14.360buyimg.com/n1/jfs/t1/160098/5/2358/258529/5ffbabb0E34a4fa8f/95f3f90344b6ff13.jpg',
                        1: 'https://img14.360buyimg.com/n1/jfs/t1/81940/35/14069/435145/5db8e878E3055523d/27b6ef250da6ab5d.jpg',
                        2: 'https://img14.360buyimg.com/n1/jfs/t1/167560/11/1989/172441/5ffbabbfEdbee8317/5569ab75ac141f68.jpg',
                        3: 'https://img14.360buyimg.com/n1/jfs/t1/66509/32/14222/665668/5db8e87dEa1a2432b/9d41a98814e392f7.jpg'
                    }
                },
                {
                    id: 6,
                    nickName: '海参 ',
                    name: '皇家麒麟 即食海参 即食大连刺参单个装 500g深海底播野生海参干货 高品质9年参',
                    price: '109.9',
                    imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/159071/24/22066/362822/61aebf2cE4656efc6/d370cbaa3af41b43.jpg',
                    pic: {
                        0: 'https://img10.360buyimg.com/n7/jfs/t1/159071/24/22066/362822/61aebf2cE4656efc6/d370cbaa3af41b43.jpg',
                        1: 'https://img14.360buyimg.com/n1/jfs/t1/138434/4/9364/168756/5f703f0cE38c1dcb6/dbc2e7def39deff2.jpg',
                        2: 'https://img14.360buyimg.com/n1/jfs/t19015/237/2318535336/274956/bedeeb01/5af10c23N0d00388c.jpg',
                        3: 'https://img12.360buyimg.com/n1/jfs/t1/54786/38/125/329766/5cd2d06bE73538af3/ba517e11777fd8b3.jpg'
                    }
                },
                {
                    id: 7,
                    nickName: '龙虾',
                    name: '鲜活波士顿龙虾 450g-550g/1只 大龙虾 波龙加拿大进口',
                    price: '228.9',
                    imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/215740/5/3072/117804/6183b929E99442093/f57928f637ea83e8.jpg',
                    pic: {
                        0: 'https://img10.360buyimg.com/n1/jfs/t1/199444/28/15896/150923/6183b928E8c2abed3/e7eadd669633446f.jpg',
                        1: 'https://img10.360buyimg.com/n1/jfs/t1/215740/5/3072/117804/6183b929E99442093/f57928f637ea83e8.jpg',
                        2: 'https://img10.360buyimg.com/n1/jfs/t1/199087/20/15916/116615/6183b928Eac904b07/48bfcb72050cbdeb.jpg',
                        3: 'https://img10.360buyimg.com/n1/jfs/t1/100578/11/20776/183191/61d5a25dEc5638a7d/224f724513d454c1.jpg'
                    }
                }
            ]
        },
        {
            id: 2,
            name: '精选肉类',
            pic: 'https://seopic.699pic.com/photo/50055/0957.jpg_wh1200.jpg',
            goods: [{
                    id: 0,
                    nickName: '排骨',
                    name: '储山 大别山土猪肉排骨脊骨1kg含腔骨 生鲜黑猪小排煲汤 小排 脊骨 排骨',
                    price: '69.9',
                    imgUrl: 'https://img14.360buyimg.com/n7/jfs/t1/88487/29/17147/150154/5e8352b8Ef9cb42b9/27e7df977a3b0d5f.jpg',
                    pic: {
                        0: 'https://img14.360buyimg.com/n1/jfs/t1/88487/29/17147/150154/5e8352b8Ef9cb42b9/27e7df977a3b0d5f.jpg',
                        1: 'https://img14.360buyimg.com/n1/jfs/t17335/354/1577389900/525094/dc7a19de/5acec8d9N12d67e13.jpg',
                        2: 'https://img14.360buyimg.com/n1/jfs/t17506/196/1517768530/289257/b2bd9a9c/5acec7c3Na0fa7cb1.jpg',
                        3: 'https://img14.360buyimg.com/n1/jfs/t16975/177/1542333538/344576/b154c3d6/5acec7cfNffaeaf35.jpg'
                    }
                },
                {
                    id: 1,
                    nickName: '牛腱子',
                    name: '新鲜现杀牛腱子肉冷冻 农家散养黄牛肉 牛腿腱子肉花腱金钱 国产黄牛腱子 ',
                    price: '149.9',
                    imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/200059/24/15646/139396/61850046E3206bd8a/439dad737f5a6e9c.jpg',
                    pic: {
                        0: 'https://img10.360buyimg.com/n1/jfs/t1/200059/24/15646/139396/61850046E3206bd8a/439dad737f5a6e9c.jpg',
                        1: 'https://img10.360buyimg.com/n1/jfs/t1/206347/18/14129/224624/6185003dE7143a3e8/defba835e60afcd1.jpg',
                        2: 'https://img10.360buyimg.com/n1/jfs/t1/219866/19/3238/86824/61850042Eb192be4e/cee7156b26273c9c.jpg',
                        3: 'https://img10.360buyimg.com/n1/jfs/t1/215354/37/3246/89167/61850044E2d3b06ff/30a189d49d737b32.jpg'
                    }
                },
                {
                    id: 2,
                    nickName: '羊后腿',
                    name: '伊聚德 宁夏盐池滩羊肉 生鲜带骨羊肉块炖煮煲汤涮羊肉火锅食材 500g 羔羊后腿',
                    price: '69.9',
                    imgUrl: 'https://img14.360buyimg.com/n7/jfs/t1/130638/33/4067/300745/5f07e0b4Ea793d3c7/81180eaa3f27ca55.jpg',
                    pic: {
                        0: 'https://img14.360buyimg.com/n1/jfs/t1/130638/33/4067/300745/5f07e0b4Ea793d3c7/81180eaa3f27ca55.jpg',
                        1: 'https://img14.360buyimg.com/n1/jfs/t1/116326/39/11948/559834/5f07e0b5E234b9c56/0116bf0c79927108.jpg',
                        2: 'https://img14.360buyimg.com/n1/jfs/t1/137085/26/12671/169532/5f8a8af7E047f4758/403edc0f69d5f0dd.jpg',
                        3: 'https://img14.360buyimg.com/n1/jfs/t1/149787/30/2544/399702/5f07e0b6E9bb68686/f7c7611a01d11ccd.jpg'
                    }
                },
                {
                    id: 3,
                    nickName: '文昌鸡',
                    name: '两只到手 潭牛文昌鸡 散养土鸡整鸡2斤/只 供港品牌 生鲜鸡肉140天椰子鸡老母鸡',
                    price: '169.9',
                    imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/54576/37/14589/67469/5db932adEcfc2a3be/ea8ab577746bd564.jpg',
                    pic: {
                        0: 'https://img10.360buyimg.com/n1/jfs/t1/54576/37/14589/67469/5db932adEcfc2a3be/ea8ab577746bd564.jpg',
                        1: 'https://img10.360buyimg.com/n1/jfs/t1/153244/12/3344/144498/5f927c89E14e575b5/4ab15022f09df089.jpg',
                        2: 'https://img10.360buyimg.com/n1/jfs/t1/149786/34/11756/131513/5f927c89E891d79e6/c1c6164986bec416.jpg',
                        3: 'https://img10.360buyimg.com/n1/jfs/t1/131967/11/13298/150452/5f927ca6Ef52b56e3/d26dd1be112d03b1.jpg'
                    }
                },
                {
                    id: 4,
                    nickName: '鸭腿',
                    name: '华英 精选樱桃谷鸭 煲鸭汤鸭肉生鲜 新鲜卤煮烤鸭食材 精切鸭腿 1.5Kg ',
                    price: '45.9',
                    imgUrl: 'https://img13.360buyimg.com/n7/jfs/t1/180741/31/9423/197175/60c84995Ef7f4921e/019767b57ce0d7b1.jpg',
                    pic: {
                        0: 'https://img13.360buyimg.com/n1/jfs/t1/180741/31/9423/197175/60c84995Ef7f4921e/019767b57ce0d7b1.jpg',
                        1: 'https://img13.360buyimg.com/n1/jfs/t1/171995/12/13173/151169/60bb26a0E11ad9eaa/d45e48e83044229c.jpg',
                        2: 'https://img13.360buyimg.com/n1/jfs/t1/190128/7/6683/136538/60bb26a1Ef7fba8c4/aaa4bac80a5cd371.jpg',
                        3: 'https://img13.360buyimg.com/n1/jfs/t1/184848/31/7626/184081/60bb26a1Eb3d4f7d6/5c33d1887f677955.jpg'
                    }
                },
                {
                    id: 5,
                    nickName: '牛腿肉',
                    name: '新鲜冷冻原切 牛腿肉 黄牛肉生鲜 牛腱 肉整切大块后腿肉黄牛肉',
                    price: '117.9',
                    imgUrl: 'https://img11.360buyimg.com/n7/jfs/t1/137170/20/23338/126256/6221c6bfE21063662/5a15c9cfa3dddfcc.jpg',
                    pic: {
                        0: 'https://img11.360buyimg.com/n1/jfs/t1/137170/20/23338/126256/6221c6bfE21063662/5a15c9cfa3dddfcc.jpg',
                        1: 'https://img11.360buyimg.com/n1/jfs/t1/92211/40/22392/145987/6221c6beE58d5d571/1baae75247f0e082.jpg',
                        2: 'https://img11.360buyimg.com/n1/jfs/t1/114574/28/21477/184280/6221c6bfE3590297a/4492efefa7ba1663.jpg',
                        3: 'https://img11.360buyimg.com/n1/jfs/t1/151650/5/27488/163215/6221c6beEa6b08072/6ffccf7c3d562cc8.jpg'
                    }
                },
                {
                    id: 6,
                    nickName: '海参 ',
                    name: '皇家麒麟 即食海参 即食大连刺参单个装 500g深海底播野生海参干货 高品质9年参',
                    price: '109.9',
                    imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/159071/24/22066/362822/61aebf2cE4656efc6/d370cbaa3af41b43.jpg',
                    pic: {
                        0: 'https://img10.360buyimg.com/n7/jfs/t1/159071/24/22066/362822/61aebf2cE4656efc6/d370cbaa3af41b43.jpg',
                        1: 'https://img14.360buyimg.com/n1/jfs/t1/138434/4/9364/168756/5f703f0cE38c1dcb6/dbc2e7def39deff2.jpg',
                        2: 'https://img14.360buyimg.com/n1/jfs/t19015/237/2318535336/274956/bedeeb01/5af10c23N0d00388c.jpg',
                        3: 'https://img12.360buyimg.com/n1/jfs/t1/54786/38/125/329766/5cd2d06bE73538af3/ba517e11777fd8b3.jpg'
                    }
                },
                {
                    id: 7,
                    nickName: '龙虾',
                    name: '鲜活波士顿龙虾 450g-550g/1只 大龙虾 波龙加拿大进口',
                    price: '228.9',
                    imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/215740/5/3072/117804/6183b929E99442093/f57928f637ea83e8.jpg',
                    pic: {
                        0: 'https://img10.360buyimg.com/n1/jfs/t1/199444/28/15896/150923/6183b928E8c2abed3/e7eadd669633446f.jpg',
                        1: 'https://img10.360buyimg.com/n1/jfs/t1/215740/5/3072/117804/6183b929E99442093/f57928f637ea83e8.jpg',
                        2: 'https://img10.360buyimg.com/n1/jfs/t1/199087/20/15916/116615/6183b928Eac904b07/48bfcb72050cbdeb.jpg',
                        3: 'https://img10.360buyimg.com/n1/jfs/t1/100578/11/20776/183191/61d5a25dEc5638a7d/224f724513d454c1.jpg'
                    }
                }
            ]
        },
        {
            id: 3,
            name: '冷饮冻食',
            pic: 'https://seopic.699pic.com/photo/50048/4948.jpg_wh1200.jpg',
            goods: [{
                    id: 0,
                    nickName: '手抓饼',
                    name: '葱花味手抓饼家庭装20片正宗老上海葱油饼面饼皮半成品旗舰店 葱油饼',
                    price: '19.9',
                    imgUrl: 'https://img12.360buyimg.com/n7/jfs/t1/60674/12/8991/198255/5d6ca81dEa25c0e77/79d4ac8dfee3b75e.jpg',
                    pic: {
                        0: 'https://img12.360buyimg.com/n1/jfs/t1/60674/12/8991/198255/5d6ca81dEa25c0e77/79d4ac8dfee3b75e.jpg',
                        1: 'https://img12.360buyimg.com/n1/jfs/t1/154662/10/21931/117852/623d733eE3437ae45/f6c395bbcbb19e52.jpg',
                        2: 'https://img12.360buyimg.com/n1/jfs/t1/217734/28/15505/204470/623d733fEd9da7e7f/2a4334b84a7ce457.jpg',
                        3: 'https://img12.360buyimg.com/n1/jfs/t1/190702/27/21584/146758/62397500E9b9987b1/58d1f37cb0742989.jpg'
                    }
                },
                {
                    id: 1,
                    nickName: '火腿卷',
                    name: '梅干菜火腿花卷馒头早餐手工包子儿童速冻食品速食冷冻咸味 梅干菜火腿卷6个',
                    price: '86.9',
                    imgUrl: 'https://img14.360buyimg.com/n7/jfs/t1/132125/30/26141/360793/6226f5c5Ef45581ec/7b14990dbaccbf71.jpg',
                    pic: {
                        0: 'https://img14.360buyimg.com/n1/jfs/t1/132125/30/26141/360793/6226f5c5Ef45581ec/7b14990dbaccbf71.jpg',
                        1: 'https://img14.360buyimg.com/n1/jfs/t1/117214/10/21792/337233/6226f5c9Eae3a68d8/3b65cf904894d94e.jpg',
                        2: 'https://img14.360buyimg.com/n1/jfs/t1/123409/25/25375/182757/6226f5cbE501698b8/c93f880c4751f90e.jpg',
                        3: 'https://img14.360buyimg.com/n1/jfs/t1/219109/5/14094/231191/6226f5cfE32377e55/41ddb21f2b5ee42e.jpg'
                    }
                },
                {
                    id: 2,
                    nickName: '冰淇淋',
                    name: '大红袍奶茶口味冰淇淋含曲奇饼干 大红袍奶茶口味 90g',
                    price: '34.9',
                    imgUrl: 'https://img11.360buyimg.com/n7/jfs/t1/96937/4/22135/100790/620b166bEa3eaf614/6df4040ba6383826.jpg',
                    pic: {
                        0: 'https://img11.360buyimg.com/n1/jfs/t1/96937/4/22135/100790/620b166bEa3eaf614/6df4040ba6383826.jpg',
                        1: 'https://img11.360buyimg.com/n1/jfs/t1/221739/35/10653/105585/620b166cE0d4ce156/e251849e2c2ee7d2.jpg',
                        2: 'https://img11.360buyimg.com/n1/jfs/t1/107374/33/22341/119025/620b166cEdd6e5eda/df8fb4c39079dd56.jpg',
                        3: 'https://img11.360buyimg.com/n1/jfs/t1/95062/25/23135/167013/620b166cE7c59eb81/ea64ba1cbacc2ec6.jpg'
                    }
                },
                {
                    id: 3,
                    nickName: '酸奶',
                    name: '伊利畅轻酸奶250g益生菌风味发酵乳 0添加 燕麦黄桃',
                    price: '69.9',
                    imgUrl: 'https://img14.360buyimg.com/n7/jfs/t1/210090/40/19814/72956/6246fbdbE038af06f/b4ee19c17d520bd2.jpg',
                    pic: {
                        0: 'https://img14.360buyimg.com/n7/jfs/t1/210090/40/19814/72956/6246fbdbE038af06f/b4ee19c17d520bd2.jpg',
                        1: 'https://img14.360buyimg.com/n1/jfs/t1/124831/29/21615/70863/61fe7c8bE0f640c1a/25fb5ae6ea3344d1.jpg',
                        2: 'https://img14.360buyimg.com/n1/jfs/t1/204599/25/20432/47625/624718efE698a2b13/f3a8ad109cd83ce1.jpg',
                        3: 'https://img14.360buyimg.com/n1/jfs/t1/121438/7/21460/74567/61fe7cd5Eae91957a/f79647502acbcb1d.jpg'
                    }
                },
                {
                    id: 4,
                    nickName: '果汁',
                    name: '农夫山泉17.5NFC果汁低温冷藏饮料鲜榨纯果疏汁950ml 950*2橙汁',
                    price: '45.9',
                    imgUrl: 'https://img14.360buyimg.com/n1/jfs/t1/88584/20/13933/33520/5e61ee94E7632f7a4/0a1042eaa7c88f2f.jpg',
                    pic: {
                        0: 'https://img14.360buyimg.com/n1/jfs/t1/88584/20/13933/33520/5e61ee94E7632f7a4/0a1042eaa7c88f2f.jpg',
                        1: 'https://img14.360buyimg.com/n1/jfs/t1/165881/27/14280/92912/6058094aE1fc01642/f3e94f71b4f2119c.jpg',
                        2: 'https://img14.360buyimg.com/n1/jfs/t1/159220/26/14309/83871/60580952E99406674/1c6fb78ce23a4b2e.jpg',
                        3: 'https://img14.360buyimg.com/n1/jfs/t1/167947/35/14019/192017/6058095bE5fe5cd16/ca4066beded5e04a.jpg'
                    }
                },
                {
                    id: 5,
                    nickName: '牛奶',
                    name: '天润新疆巴氏鲜奶杀菌鲜牛奶低温纯牛奶245g*8瓶',
                    price: '57.9',
                    imgUrl: 'https://img11.360buyimg.com/n7/jfs/t1/158791/21/19511/108050/6078f215E9f319588/a5da59acaee6bbaa.jpg',
                    pic: {
                        0: 'https://img11.360buyimg.com/n7/jfs/t1/158791/21/19511/108050/6078f215E9f319588/a5da59acaee6bbaa.jpg',
                        1: 'https://img11.360buyimg.com/n1/jfs/t1/157921/11/19546/118677/6078f20eEde949371/14348c04d2da3703.jpg',
                        2: 'https://img11.360buyimg.com/n1/jfs/t1/163386/21/19116/107635/6078f20eEdfce3a86/52d59f3a762d7b53.jpg',
                        3: 'https://img11.360buyimg.com/n1/jfs/t1/212100/38/4166/93536/618cc24aEdc922060/fda229bbb72312f3.jpg'
                    }
                },
                {
                    id: 6,
                    nickName: '蛋挞 ',
                    name: '大希地 葡式蛋挞皮 家庭装带锡底 烘焙食材烘焙半成品原料 60只装',
                    price: '59.9',
                    imgUrl: 'https://img12.360buyimg.com/n7/jfs/t1/160983/22/5234/75141/60179d09E0b38ebef/50732aa17563913a.jpg',
                    pic: {
                        0: 'https://img12.360buyimg.com/n7/jfs/t1/160983/22/5234/75141/60179d09E0b38ebef/50732aa17563913a.jpg',
                        1: 'https://img12.360buyimg.com/n1/jfs/t1/169105/34/5140/149407/60179d09Eafe54f9f/850a856dbedae530.jpg',
                        2: 'https://img12.360buyimg.com/n1/jfs/t1/166774/28/5024/118594/60179d09E6e537986/4e28551226930989.jpg',
                        3: 'https://img12.360buyimg.com/n1/jfs/t1/161358/36/5160/115991/60179d09Edb39c0ef/c05667fde055c141.jpg'
                    }
                },
                {
                    id: 7,
                    nickName: '披萨',
                    name: '披萨海鲜牛肉烧烤三角披萨早餐食品披萨饼胚速食冷冻早餐半成品',
                    price: '89.9',
                    imgUrl: 'https://img14.360buyimg.com/n7/jfs/t1/56204/23/271/130429/5cd41fa8Ebf0b4a49/7be4b07582dde5b2.jpg',
                    pic: {
                        0: 'https://img14.360buyimg.com/n7/jfs/t1/56204/23/271/130429/5cd41fa8Ebf0b4a49/7be4b07582dde5b2.jpg',
                        1: 'https://img14.360buyimg.com/n1/jfs/t1/83472/1/9848/214251/5d774ffbE05c78863/5bc3447fe5b4f7a4.jpg',
                        2: 'https://img14.360buyimg.com/n1/jfs/t1/53693/37/288/118944/5cd41fcfE8a01d5c4/50a623af7655ccd4.jpg',
                        3: 'https://img14.360buyimg.com/n1/jfs/t1/43845/29/4506/159995/5cd41fcfEfe516fcc/1ab1ee4c872ab21a.jpg'
                    }
                }
            ]
        },
        {
            id: 4,
            name: '蔬菜蛋品',
            pic: 'https://seopic.699pic.com/photo/50078/5467.jpg_wh1200.jpg',
            goods: [{
                    id: 0,
                    nickName: '生菜',
                    name: '云南罗马生菜 600g 简装 新鲜蔬菜 京百味 云南罗马生菜',
                    price: '19.9',
                    imgUrl: 'https://img14.360buyimg.com/n7/jfs/t4708/239/2194549031/282261/9e2e7e70/58ef2381Nd959e3bf.jpg',
                    pic: {
                        0: 'https://img14.360buyimg.com/n7/jfs/t4708/239/2194549031/282261/9e2e7e70/58ef2381Nd959e3bf.jpg',
                        1: 'https://img14.360buyimg.com/n1/jfs/t3364/312/1999589766/148582/80608edb/583aa02aNb7c82b56.jpg',
                        2: 'https://img14.360buyimg.com/n1/jfs/t3391/8/1872807323/152381/c9b3dcef/583aa02dN884e4dec.jpg',
                        3: 'https://img14.360buyimg.com/n1/jfs/t3832/279/1774089106/267571/325b80ae/583aa033N295f10da.jpg'
                    }
                },
                {
                    id: 1,
                    nickName: '西蓝花',
                    name: '新鲜西兰孕妇时令蔬菜新鲜西兰花基地直发鲜嫩西蓝花 净重5斤新鲜西兰花',
                    price: '36.9',
                    imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/207821/26/15648/84950/61dfd6aaEd25c746a/5fd9298b2b76d30e.jpg',
                    pic: {
                        0: 'https://img10.360buyimg.com/n7/jfs/t1/207821/26/15648/84950/61dfd6aaEd25c746a/5fd9298b2b76d30e.jpg',
                        1: 'https://img10.360buyimg.com/n1/jfs/t1/85944/7/21174/86021/61dfd6d1E22c3e7e4/d13aa0934d22ef75.jpg',
                        2: 'https://img10.360buyimg.com/n1/jfs/t1/211988/16/10740/255771/61dfd6d7E6d3080e9/dbaa7fcd80634702.jpg',
                        3: 'https://img10.360buyimg.com/n1/jfs/t1/88289/35/21090/200890/61dfd6d8E3109b9e7/1c7eb123752186e8.jpg'
                    }
                },
                {
                    id: 2,
                    nickName: '山药',
                    name: '聚怀斋 焦作温县沙土铁棍山药 怀山药 3kg ',
                    price: '99.9',
                    imgUrl: 'https://img11.360buyimg.com/n7/jfs/t1/33066/30/5068/284486/5cb94be6E21a12d5c/96b269b58ba3f0da.jpg',
                    pic: {
                        0: 'https://img11.360buyimg.com/n7/jfs/t1/33066/30/5068/284486/5cb94be6E21a12d5c/96b269b58ba3f0da.jpg',
                        1: 'https://img11.360buyimg.com/n1/jfs/t13813/131/2071675467/394483/2a41a5b6/5a30cae0Nbbd0aa09.jpg',
                        2: 'https://img11.360buyimg.com/n1/jfs/t13972/167/2041996571/308496/2062f509/5a30cae3N03a38858.jpg',
                        3: 'https://img11.360buyimg.com/n1/jfs/t13696/187/2037514088/267195/41e19bac/5a30cafcN87d118a8.jpg'
                    }
                },
                {
                    id: 3,
                    nickName: '香菇',
                    name: '西峡新鲜湿香菇 山珍菌菇蘑菇 现摘新鲜蔬菜 1000g装',
                    price: '19.9',
                    imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/100744/11/5147/158176/5deb6989E5bf50894/31c32f17a4a01f6f.jpg',
                    pic: {
                        0: 'https://img10.360buyimg.com/n7/jfs/t1/100744/11/5147/158176/5deb6989E5bf50894/31c32f17a4a01f6f.jpg',
                        1: 'https://img10.360buyimg.com/n1/jfs/t1/88871/38/5106/127456/5deb6989E6a73bf27/ecf16be92e6b0487.jpg',
                        2: 'https://img10.360buyimg.com/n1/jfs/t1/91352/16/5159/145504/5deb6989E17f31da1/15bb17b435513335.jpg',
                        3: 'https://img10.360buyimg.com/n1/jfs/t1/91288/24/5164/142676/5deb6989Ef2a240ca/dd1c1689f57ff78c.jpg'
                    }
                },
                {
                    id: 4,
                    nickName: '玉米',
                    name: '东北黄糯玉米棒 单根200g以上*10根支真空速食 新鲜甜黏玉米粒',
                    price: '39.9',
                    imgUrl: 'https://img11.360buyimg.com/n7/jfs/t1/208682/9/19719/269774/622f4429E2665128d/5e5e2ad26a54b52e.jpg',
                    pic: {
                        0: 'https://img11.360buyimg.com/n7/jfs/t1/208682/9/19719/269774/622f4429E2665128d/5e5e2ad26a54b52e.jpg',
                        1: 'https://img11.360buyimg.com/n1/jfs/t1/165415/2/28635/472076/622f442aEf8708770/04cab7cad8860de5.jpg',
                        2: 'https://img11.360buyimg.com/n1/jfs/t1/211843/1/14884/414114/622f442aE4354a228/ed8b47dce6b4bcb9.jpg',
                        3: 'https://img11.360buyimg.com/n1/jfs/t1/132589/36/25973/417094/622f442aEb09baf07/644616b24cf7a094.jpg'
                    }
                },
                {
                    id: 5,
                    nickName: '西红柿',
                    name: '山东西红柿自然熟番茄新鲜水果蔬菜健康轻食',
                    price: '27.9',
                    imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/90306/18/20337/278542/61f14c42E31d4f62a/fac63e443d00b8ed.jpg',
                    pic: {
                        0: 'https://img10.360buyimg.com/n7/jfs/t1/90306/18/20337/278542/61f14c42E31d4f62a/fac63e443d00b8ed.jpg',
                        1: 'https://img10.360buyimg.com/n1/jfs/t1/91762/34/22474/705372/61f14c42E1c5a13c9/1732f0487b624aec.jpg',
                        2: 'https://img10.360buyimg.com/n1/jfs/t1/100083/14/22933/821351/61f14c42E1f6f3346/554ed54116868951.jpg',
                        3: 'https://img10.360buyimg.com/n1/jfs/t1/107912/19/21043/612232/61f14c43E71d38385/1485f91baf987f32.jpg'
                    }
                },
                {
                    id: 6,
                    nickName: '鸡蛋 ',
                    name: '德青源 柴垛儿鲜鸡蛋 30枚 1.29kg ',
                    price: '59.9',
                    imgUrl: 'https://img13.360buyimg.com/n7/jfs/t1/95037/17/2831/111076/5dd757a8Ed6df3bbd/30cd655744ec3095.jpg',
                    pic: {
                        0: 'https://img13.360buyimg.com/n7/jfs/t1/95037/17/2831/111076/5dd757a8Ed6df3bbd/30cd655744ec3095.jpg',
                        1: 'https://img13.360buyimg.com/n1/jfs/t1/103945/8/9742/124669/5e13e9e4E8de2f663/81f933a94a58c39e.jpg',
                        2: 'https://img13.360buyimg.com/n1/jfs/t1/105100/27/2791/211900/5dd74ca5Eb7c0b461/a208884816e46bd1.jpg',
                        3: 'https://img13.360buyimg.com/n1/jfs/t1/100494/11/2891/292925/5dd74c9eE5d704672/3c7bd186fada7251.jpg'
                    }
                },
                {
                    id: 7,
                    nickName: '鸭蛋',
                    name: '咸鸭蛋 高邮熟鸭蛋麻鸭蛋黄流油松沙真空包装 55g*15枚',
                    price: '29.9',
                    imgUrl: 'https://img14.360buyimg.com/n7/jfs/t1/108955/15/3619/94526/5e12e165E7e515338/e98492475201d2af.jpg',
                    pic: {
                        0: 'https://img14.360buyimg.com/n7/jfs/t1/108955/15/3619/94526/5e12e165E7e515338/e98492475201d2af.jpg',
                        1: 'https://img14.360buyimg.com/n1/jfs/t1/75730/34/6724/135273/5d4d08a7E9ede9db4/542546980e5991b5.jpg',
                        2: 'https://img14.360buyimg.com/n1/jfs/t1/16666/16/7182/478980/5c68fa24Ed4ec9ba5/aacc0deb9c4483fb.jpg',
                        3: 'https://img14.360buyimg.com/n1/jfs/t1/9439/1/14974/255132/5c68fa25E2bfbcce7/87b0f1f252862d02.jpg'
                    }
                }
            ]
        }
    ]
})

Mock.mock('/api/fruit', {
    data: [{
            id: 5,
            nickName: '樱桃',
            name: '大连美早樱桃400g 果径约26-28mm（标准果）',
            price: '99.9',
            imgUrl: 'http://img10.360buyimg.com/babel/s300x300_jfs/t18133/210/591813967/313572/fdbc913a/5a97bad9N902bd478.jpg!q80.webp',
            pic: {
                0: 'https://img11.360buyimg.com/n1/jfs/t1/124420/40/21276/194765/6213132fE57bcdce3/6f967392260cf6bd.jpg',
                1: 'https://img11.360buyimg.com/n1/jfs/t1/124584/13/23352/134742/62131329E61c76fd4/7ec2e4e1a11f029e.jpg',
                2: 'https://img11.360buyimg.com/n1/jfs/t1/117740/21/20529/117218/6213132bE5eb6981a/5c3e36ddbe85baff.jpg',
                3: 'https://img11.360buyimg.com/n1/jfs/t1/124420/40/21276/194765/6213132fE57bcdce3/6f967392260cf6bd.jpg'
            }
        },
        {
            id: 6,
            nickName: '芒果',
            name: '海南三亚台农芒果5斤鸡蛋芒果 新鲜水果',
            price: '29.9',
            imgUrl: 'https://img11.360buyimg.com/n7/jfs/t1/166289/7/11910/58552/6047341cE98ca6637/6b5085249314503c.jpg',
            pic: {
                0: 'https://img11.360buyimg.com/n1/jfs/t1/162206/34/8960/222661/603df24eEa3b50005/5f89b47aeed3ac88.jpg',
                1: 'https://img11.360buyimg.com/n1/jfs/t1/166415/38/8580/95745/603df24eEfefe9624/b92ed17bb2c6f4a5.jpg',
                2: 'https://img11.360buyimg.com/n1/jfs/t1/155236/32/20669/118194/603df24eEfae65e54/8e71d2f95ee17ff3.jpg',
                3: 'https://img11.360buyimg.com/n1/jfs/t14437/261/2471736130/250407/347709b5/5a9ca8cbNeb4b92ff.jpg'
            }
        },
        {
            id: 7,
            nickName: '橙子',
            name: ' 精选 脐橙 鲜甜橙子 2.5kg装 单果140-170g',
            price: '49.9',
            imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/156741/19/23152/366899/6184ed1bE5c0abb34/845b34ad3fd930e2.jpg',
            pic: {
                0: 'https://img10.360buyimg.com/n1/jfs/t1/207123/20/8145/126152/6184ed64E1b42c93e/c6a712e30cb76023.jpg',
                1: 'https://img10.360buyimg.com/n1/jfs/t1/209914/38/8155/208960/6184ed64Ee493b8b8/b6c3c7e21756196b.jpg',
                2: 'https://img10.360buyimg.com/n1/jfs/t1/200488/13/15976/379883/6184ed64E8b4a2692/558b196a73cff4b7.jpg',
                3: 'https://img10.360buyimg.com/n1/jfs/t1/208883/4/8143/442509/6184ed64Eaff243fd/e8c25d5cef95f48f.jpg'
            }
        }, {
            id: 0,
            nickName: '火龙果',
            name: '越南进口白心火龙果4个装 标准果 单果400-550g',
            price: '39.9',
            imgUrl: 'http://img10.360buyimg.com/babel/s300x300_jfs/t18877/40/319533497/486134/171c1d37/5a6aa298N0dd3473a.jpg!q80.webp',
            pic: {
                0: 'https://img11.360buyimg.com/n1/jfs/t24895/22/2257277627/348477/3e148905/5bc69de5N3325c03a.jpg',
                1: 'https://img11.360buyimg.com/n1/jfs/t25375/166/2231559698/461287/7216db3b/5bc69de6N6ec25334.jpg',
                2: 'https://img11.360buyimg.com/n1/jfs/t26167/37/1313965509/463475/ff533d95/5bc69de7N624bb7d5.jpg',
                3: 'https://img11.360buyimg.com/n1/jfs/t27478/333/1164982634/419703/109b6248/5bc69de7N49a3d869.jpg'
            }
        },
        {
            id: 1,
            nickName: '沃柑',
            name: '广西沃柑 柑橘1.5kg 新鲜水果',
            price: '29.9',
            imgUrl: 'http://img11.360buyimg.com/babel/s300x300_jfs/t17323/133/342988625/418250/308f8fdb/5a6e7133N2f10bd9b.jpg!q80.webp',
            pic: {
                0: 'https://img13.360buyimg.com/n1/jfs/t1/111509/36/9288/208240/5ed855cdE03a82032/8452405105118e1d.jpg',
                1: 'https://img13.360buyimg.com/n1/jfs/t1/117354/5/9400/167224/5ed855ceE7412eaa0/e6af5f09f23128ae.jpg',
                2: 'https://img13.360buyimg.com/n1/jfs/t1/123182/35/4039/266300/5ed855cfE7a14b6e5/56c056abdd49852b.jpg',
                3: 'https://img13.360buyimg.com/n1/jfs/t1/125603/26/3995/678348/5ed855d1Ec2f522a5/8234551c31d18fb2.jpg'
            }
        },
        {
            id: 2,
            nickName: '牛油果',
            name: '进口 牛油果 6个装 单果重约130-180g 新鲜水果',
            price: '64.9',
            imgUrl: 'http://img12.360buyimg.com/babel/s300x300_jfs/t10945/175/2172045473/162582/5bf301ef/59f05afdN3c13f6ed.jpg!q80.webp',
            pic: {
                0: 'https://img10.360buyimg.com/n1/jfs/t1/84705/35/8574/504204/5e0566e8E55dafba8/f6d258e3c886fba8.jpg',
                1: 'https://img10.360buyimg.com/n1/jfs/t5884/74/5977514966/130080/e8f2b9c2/5966c834N39aed1a9.jpg',
                2: 'https://img10.360buyimg.com/n1/jfs/t5641/267/5976229511/130665/7d2b278a/5966c83eN25885f9a.jpg',
                3: 'https://img10.360buyimg.com/n1/jfs/t1/186167/11/17356/289471/6108da42E02328da2/1771ca0e6fb389a1.jpg'
            }
        },
        {
            id: 3,
            nickName: '猕猴桃',
            name: '爱奇果/齐峰 徐香猕猴桃 25个 单果约80-100g ',
            price: '69.9',
            imgUrl: 'http://img13.360buyimg.com/babel/s300x300_jfs/t17614/30/217738100/211833/4797208b/5a65595fNa8a140db.jpg!q80.webp',
            pic: {
                0: 'https://img14.360buyimg.com/n1/jfs/t1/207276/14/4189/238197/615fc79eE78a438c6/6dc30d61fac30677.jpg',
                1: 'https://img14.360buyimg.com/n1/jfs/t1/190553/9/19743/337774/61248eb8Eab9d8c7a/fed90d49e03656e9.jpg',
                2: 'https://img14.360buyimg.com/n1/jfs/t1/196238/15/19824/504062/61248eb9E760c6362/6d1907a300d72148.jpg',
                3: 'https://img14.360buyimg.com/n1/jfs/t1/204366/7/2851/764757/61248eb9E077ec851/d76b8aa74a0d9774.jpg'
            }
        },
        {
            id: 4,
            nickName: '山竹',
            name: '泰国进口山竹5A级 500g 新鲜水果',
            price: '219.9',
            imgUrl: 'http://img14.360buyimg.com/babel/s300x300_jfs/t18223/6/229592867/547530/bb4ec612/5a6595afN4cbebc2e.jpg!q80.webp',
            pic: {
                0: 'https://img13.360buyimg.com/n1/jfs/t1/107924/40/18229/141690/60ab3eefEc5765c86/bfb14a5b6e500cc8.jpg',
                1: 'https://img13.360buyimg.com/n1/jfs/t1/182112/10/5670/248028/60ab3eefE74884b74/f5c1d948102a99b6.jpg',
                2: 'https://img13.360buyimg.com/n1/jfs/t1/185676/30/5640/141123/60ab3eefE90536779/2385cb053a9a6ceb.jpg',
                3: 'https://img13.360buyimg.com/n1/jfs/t1/185215/29/5489/211106/60ab3eefE14255110/2c9ef2b0d6eba82e.jpg'
            }
        }

    ]
})

Mock.mock('/api/seafood', {
    data: [{
            id: 0,
            nickName: '三文鱼',
            name: '美威 智利原味三文鱼排 240g/袋 4片装 海鲜年货',
            price: '69.9',
            imgUrl: 'https://img10.360buyimg.com/babel/s300x300_jfs/t3493/253/425253315/176995/19f2a2b2/5808619cN27390691.jpg!q80.webp',
            pic: {
                0: 'https://img11.360buyimg.com/n1/jfs/t1/164348/17/1359/146367/5ff66e3fE1670b56f/0b066adf970a892d.jpg',
                1: 'https://img11.360buyimg.com/n1/jfs/t1/72853/23/6565/195668/5d494aa6Ec8593804/fea87d62ced8deee.jpg',
                2: 'https://img11.360buyimg.com/n1/jfs/t1/78877/1/6486/224483/5d494aa6Efa094f54/80e4eb7bf12d64fa.jpg',
                3: 'https://img11.360buyimg.com/n1/jfs/t1/43834/16/11216/355831/5d494aa6Eaef26dbb/fa358278e510fd2f.jpg'
            }
        },
        {
            id: 1,
            nickName: '黑虎虾',
            name: '海外直采 活冻泰国黑虎虾 400g 16-20只/盒 原装',
            price: '49.9',
            imgUrl: 'https://img11.360buyimg.com/babel/s300x300_jfs/t10255/216/1395629457/558324/dc2739fe/59e094ffNa5d58ce6.jpg!q80.webp',
            pic: {
                0: 'https://img11.360buyimg.com/n1/jfs/t9700/306/1436060266/681052/3c9ac812/59e09500Ndcdb8db5.jpg',
                1: 'https://img11.360buyimg.com/n1/jfs/t9784/341/1408825319/556426/c39bea69/59e09506N1355a960.jpg',
                2: 'https://img11.360buyimg.com/n1/jfs/t9784/341/1408825319/556426/c39bea69/59e09506N1355a960.jpg',
                3: 'https://img11.360buyimg.com/n1/jfs/t7900/289/3101499427/504495/c7817054/59e09507Nf82cf836.jpg'
            }
        },
        {
            id: 2,
            nickName: '黄花鱼',
            name: '三都港 冷冻无公害黄花鱼 700g 2条 袋装 海鲜',
            price: '59.9',
            imgUrl: 'https://img12.360buyimg.com/babel/s300x300_jfs/t3805/133/325945617/116002/e90e0bdf/580df2b5Ncb04c5ac.jpg!q80.webp',
            pic: {
                0: 'https://img13.360buyimg.com/n1/jfs/t1/132602/34/25562/419672/6237ecacE7e31ac5e/fc47fb80a65eba57.jpg',
                1: 'https://img13.360buyimg.com/n1/jfs/t1/56460/28/13789/321811/5da953d9Eb646dfcc/7b44ee9285e98652.jpg',
                2: 'https://img13.360buyimg.com/n1/jfs/t1/171624/12/8008/230462/60934609E48f6247b/d23c75e397284357.jpg',
                3: 'https://img13.360buyimg.com/n1/jfs/t1/125350/30/4463/219427/5eddcaffE3df85d13/a059af8cf32d6233.jpg'
            }
        },
        {
            id: 3,
            nickName: '扇贝',
            name: '獐子岛 冷冻蒜蓉粉丝扇贝 200g 6只 海鲜水产 ',
            price: '29.9',
            imgUrl: 'https://img13.360buyimg.com/babel/s300x300_jfs/t5110/353/325099350/140051/9ced9d32/58fd68baN9149547f.jpg!q80.webp',
            pic: {
                0: 'https://img13.360buyimg.com/n1/jfs/t3034/249/834996576/226720/f9d794ff/57b521ceN291ac0d4.jpg',
                1: 'https://img13.360buyimg.com/n1/jfs/t3166/148/398955613/190679/9412f2e2/57b521b0Nb6a5431e.jpg',
                2: 'https://img13.360buyimg.com/n1/jfs/t1/90261/33/2307/263929/5dcd17f4E2a122e74/01fd6012966c238b.jpg',
                3: 'https://img13.360buyimg.com/n1/jfs/t1/156153/36/3367/44073/5fec3dcaE8d356d84/fa0cf3531ac55b6d.jpg'
            }
        },
        {
            id: 4,
            nickName: '白虾',
            name: '禧美(Seamix) 原装进口冷冻厄瓜多尔白虾 1.8kg',
            price: '109.9',
            imgUrl: 'https://img14.360buyimg.com/babel/s300x300_jfs/t4858/35/34304988/83500/d449ea4e/58d9bb99Nb5d313c2.jpg!q80.webp',
            pic: {
                0: 'https://img11.360buyimg.com/n1/jfs/t1/135808/22/20435/127953/5fdac77eE4896155c/c7ba06171ad2aaaf.jpg',
                1: 'https://img11.360buyimg.com/n1/jfs/t1/133050/39/20444/291211/5fdac77fE3bb6f637/863ba67a6dca7ea5.jpg',
                2: 'https://img11.360buyimg.com/n1/jfs/t1/145510/36/18916/108228/5fdac77fEe2ea2a8b/bfdb55f1ddb093f7.jpg',
                3: 'https://img11.360buyimg.com/n1/jfs/t1/135627/35/20328/89852/5fdac77fE89c391c2/79566741ed07b1af.jpg'
            }
        },
        {
            id: 5,
            nickName: '金鲳鱼',
            name: '翔泰 冷冻无公害金鲳鱼 700g 2条 袋装 海鲜水产',
            price: '41.9',
            imgUrl: 'https://img10.360buyimg.com/babel/s300x300_jfs/t15130/311/2592062527/297717/1c027372/5aa9d51dN7cd7d429.jpg!q80.webp',
            pic: {
                0: 'https://img14.360buyimg.com/n1/jfs/t1/160098/5/2358/258529/5ffbabb0E34a4fa8f/95f3f90344b6ff13.jpg',
                1: 'https://img14.360buyimg.com/n1/jfs/t1/81940/35/14069/435145/5db8e878E3055523d/27b6ef250da6ab5d.jpg',
                2: 'https://img14.360buyimg.com/n1/jfs/t1/167560/11/1989/172441/5ffbabbfEdbee8317/5569ab75ac141f68.jpg',
                3: 'https://img14.360buyimg.com/n1/jfs/t1/66509/32/14222/665668/5db8e87dEa1a2432b/9d41a98814e392f7.jpg'
            }
        },
        {
            id: 6,
            nickName: '海参 ',
            name: '皇家麒麟 即食海参 即食大连刺参单个装 500g深海底播野生海参干货 高品质9年参',
            price: '109.9',
            imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/159071/24/22066/362822/61aebf2cE4656efc6/d370cbaa3af41b43.jpg',
            pic: {
                0: 'https://img10.360buyimg.com/n7/jfs/t1/159071/24/22066/362822/61aebf2cE4656efc6/d370cbaa3af41b43.jpg',
                1: 'https://img14.360buyimg.com/n1/jfs/t1/138434/4/9364/168756/5f703f0cE38c1dcb6/dbc2e7def39deff2.jpg',
                2: 'https://img14.360buyimg.com/n1/jfs/t19015/237/2318535336/274956/bedeeb01/5af10c23N0d00388c.jpg',
                3: 'https://img12.360buyimg.com/n1/jfs/t1/54786/38/125/329766/5cd2d06bE73538af3/ba517e11777fd8b3.jpg'
            }
        },
        {
            id: 7,
            nickName: '龙虾',
            name: '鲜活波士顿龙虾 450g-550g/1只 大龙虾 波龙加拿大进口',
            price: '228.9',
            imgUrl: 'https://img10.360buyimg.com/n7/jfs/t1/215740/5/3072/117804/6183b929E99442093/f57928f637ea83e8.jpg',
            pic: {
                0: 'https://img10.360buyimg.com/n1/jfs/t1/199444/28/15896/150923/6183b928E8c2abed3/e7eadd669633446f.jpg',
                1: 'https://img10.360buyimg.com/n1/jfs/t1/215740/5/3072/117804/6183b929E99442093/f57928f637ea83e8.jpg',
                2: 'https://img10.360buyimg.com/n1/jfs/t1/199087/20/15916/116615/6183b928Eac904b07/48bfcb72050cbdeb.jpg',
                3: 'https://img10.360buyimg.com/n1/jfs/t1/100578/11/20776/183191/61d5a25dEc5638a7d/224f724513d454c1.jpg'
            }
        }
    ]
})