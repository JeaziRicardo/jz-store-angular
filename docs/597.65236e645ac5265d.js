"use strict";(self.webpackChunkjz_store_angular=self.webpackChunkjz_store_angular||[]).push([[597],{597:(b,a,r)=>{r.r(a),r.d(a,{ProductsModule:()=>h});var d=r(895),s=r(736),t=r(256);const l=[{id:1,description:"Mouse gamer",price:439,descriptionPrice:"\xc0 vista no PIX",image:"./assets/mouse-3.jpg"},{id:2,description:"Monitor muito bom",price:1200.5,descriptionPrice:"\xc0 vista no PIX",image:"./assets/monitor-1.jpg"},{id:3,description:"Teclado excelente",price:749.99,descriptionPrice:"\xc0 vista no PIX",image:"./assets/teclado-1.jpg"},{id:4,description:"Fone para quem joga FPS",price:599.99,descriptionPrice:"\xc0 vista no PIX",image:"./assets/fone-de-ouvido-2.jpg"},{id:5,description:"Fone de ouvido",price:299.99,descriptionPrice:"\xc0 vista no PIX",image:"./assets/fone-de-ouvido-1.jpg"},{id:6,description:"Fone de ouvido bom",price:399.99,descriptionPrice:"\xc0 vista no PIX",image:"./assets/fone-de-ouvido-3.jpg"},{id:7,description:"HD 1TB",price:499.99,descriptionPrice:"\xc0 vista no PIX",image:"./assets/hd.jpg"},{id:8,description:"Combo de placa de v\xeddeos",price:18449.99,descriptionPrice:"\xc0 vista no PIX",image:"./assets/placa-video.jpg"},{id:9,description:"Processador Ryzen",price:1e3,descriptionPrice:"\xc0 vista no PIX",image:"./assets/processador.jpg"},{id:10,description:"Notebook bom",price:2500,descriptionPrice:"\xc0 vista no PIX",image:"./assets/laptop-1.jpg"},{id:11,description:"Notebook excelente",price:4500,descriptionPrice:"\xc0 vista no PIX",image:"./assets/laptop-2.jpg"},{id:12,description:"Mouse barato",price:20,descriptionPrice:"\xc0 vista no PIX",image:"./assets/mouse-1.png"},{id:13,description:"Mouse \xf3timo",price:200,descriptionPrice:"\xc0 vista no PIX",image:"./assets/mouse-2.jpg"},{id:14,description:"Mouse pequeno",price:50,descriptionPrice:"\xc0 vista no PIX",image:"./assets/mouse-4.jpg"},{id:15,description:"Teclado bom",price:159.99,descriptionPrice:"\xc0 vista no PIX",image:"./assets/teclado-2.jpg"}];let u=(()=>{class o{constructor(){this.productList=l}getAll(){return this.productList}getOne(e){return this.productList.find(i=>i.id===e)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function g(o,n){if(1&o&&(t.TgZ(0,"div",2)(1,"a",3),t._UZ(2,"img",4),t.TgZ(3,"h2",5),t._uU(4),t.qZA(),t.TgZ(5,"p",6),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.qZA(),t.TgZ(10,"button",8),t._uU(11,"Comprar"),t.qZA()()()),2&o){const e=n.$implicit;t.xp6(1),t.MGl("routerLink","/products/",e.id,""),t.xp6(1),t.Q6J("src",e.image,t.LSH)("alt",e.description),t.xp6(2),t.hij(" ",e.description," "),t.xp6(2),t.hij(" ",t.xi3(7,6,e.price,"BRL")," "),t.xp6(3),t.hij(" ",e.descriptionPrice," ")}}let m=(()=>{class o{constructor(e,i){this.productsService=e,this.route=i}ngOnInit(){this.route.queryParams.subscribe(e=>{const i=e.description?.toLowerCase()||"";this.productsList=i?this.productsService.getAll().filter(p=>p.description.toLowerCase().includes(i)):this.productsService.getAll()})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u),t.Y36(s.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-products"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src","alt"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"product-item__buy-button"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0),t.YNc(1,g,12,9,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",i.productsList))},dependencies:[d.sg,s.rH,d.H9],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:-moz-fit-content;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:var(--blue)}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__price-deion[_ngcontent-%COMP%]{color:var(--gray);font-size:12px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]}),o})();var _=r(705),c=r(433);const P=[{path:"",component:m},{path:":id",component:(()=>{class o{constructor(e,i,p){this.productsService=e,this.route=i,this.cartService=p,this.quantity=1}ngOnInit(){const e=Number(this.route.snapshot.paramMap.get("id"));this.product=this.productsService.getOne(e)}addCart(){const e={...this.product,quantity:this.quantity};this.cartService.addToCart(e),alert("Produto adicionado ao carrinho!")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u),t.Y36(s.gz),t.Y36(_.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-details"]],decls:19,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],[3,"src","alt"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["for","quantity"],["type","number","id","quantity","min","0",3,"ngModel","ngModelChange"],[1,"product__availability"],["type","button",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h2",4),t._uU(5),t.qZA(),t.TgZ(6,"h3",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"label",6),t._uU(10," Quantidade: "),t.TgZ(11,"input",7),t.NdJ("ngModelChange",function(v){return i.quantity=v}),t.qZA(),t._uU(12," unidade(s) "),t.qZA(),t.TgZ(13,"p"),t._uU(14,"Estoque dispon\xedvel:"),t.qZA(),t.TgZ(15,"p",8),t._uU(16," 10 unidade(s) em estoque "),t.qZA(),t.TgZ(17,"button",9),t.NdJ("click",function(){return i.addCart()}),t._uU(18,"Adicionar ao carrinho"),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("src",null==i.product?null:i.product.image,t.LSH)("alt",null==i.product?null:i.product.description),t.xp6(3),t.Oqu(null==i.product?null:i.product.description),t.xp6(2),t.hij(" ",t.xi3(8,5,null==i.product?null:i.product.price,"BRL")," "),t.xp6(4),t.Q6J("ngModel",i.quantity))},dependencies:[c.Fj,c.wV,c.JJ,c.qQ,c.On,d.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}.product__availability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]}),o})()}];let f=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(P),s.Bz]}),o})(),h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,f,c.u5]}),o})()}}]);