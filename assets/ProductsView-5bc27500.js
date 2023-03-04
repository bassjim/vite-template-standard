import{_ as b,R as f,L,r as c,o,c as n,b as r,a as t,F as d,e as $,t as k,w as T,d as l}from"./index-7d26e65e.js";import{S as V}from"./sweetalert2.all-ff6ef0f1.js";const{VITE_URL:u,VITE_PATH:p}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"bassjim",BASE_URL:"/vite-template-standard/",MODE:"production",DEV:!1,PROD:!0},v={data(){return{products:[],isLoading:!1}},components:{RouterLink:f,Loading:L},methods:{getProducts(){const e=this.$loading.show();this.$http.get(`${u}/api/${p}/products/all`).then(s=>{this.products=s.data.products,e.hide()})},addTOCart(e){const s={product_id:e,qty:1};this.$http.post(`${u}/api/${p}/cart`,{data:s}).then(_=>V.fire("成功加入購物車"))},async loadData(){this.isLoading=!0,this.data=null;const s=await(await fetch("https://api.example.com/data")).json();this.data=s,this.isLoading=!1}},mounted(){this.getProducts()}},w=t("div",null,"產品列表",-1),y={class:"table"},E=["src"],x=["onClick"],C=t("i",{class:"bi bi-cart-check"},null,-1);function P(e,s,_,R,i,h){const m=c("loading"),g=c("router-link");return o(),n(d,null,[r(m,{active:i.isLoading,"can-cancel":!0},null,8,["active"]),w,t("table",y,[t("tbody",null,[(o(!0),n(d,null,$(i.products,a=>(o(),n("tr",{key:a.id},[t("td",null,k(a.title),1),t("td",null,[t("img",{src:a.imageUrl,width:"200",alt:""},null,8,E)]),t("td",null,[r(g,{to:`product/${a.id}`,class:"btn btn-secondary"},{default:T(()=>[l("查看單一產品")]),_:2},1032,["to"]),t("button",{type:"button",class:"btn btn-primary",onClick:D=>h.addTOCart(a.id)},[C,l("加入購物車")],8,x)])]))),128))])])],64)}const O=b(v,[["render",P]]);export{O as default};
