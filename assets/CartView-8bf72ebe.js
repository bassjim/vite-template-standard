import{S as E}from"./sweetalert2.all-d67b6fba.js";import{_ as I,r as b,o as r,c as d,b as l,w as V,a as t,n as h,F as v,e as C,g as $,t as _,d as x,h as T,v as k}from"./index-d0be0462.js";const{VITE_URL:L,VITE_PATH:O}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"bassjim",BASE_URL:"/vite-template-standard/",MODE:"production",DEV:!1,PROD:!0},P={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{isPhone(e){return/^(09)[0-9]{8}$/.test(e)?!0:"需要正確的電話號碼"},createOrder(){this.$http.post(`${L}/api/${O}/order`,{data:this.form}).then(e=>{alert(e.data.message),this.getCarts(),this.$refs.form.resetForm(),this.clearCart("")}).catch(e=>{console.log(e)})}},props:["getCart","cart"]},R={class:"my-5 row justify-content-center"},U={class:"mb-3"},q=t("label",{for:"email",class:"form-label"},"Email",-1),w={class:"mb-3"},D=t("label",{for:"name",class:"form-label"},"收件人姓名",-1),A={class:"mb-3"},S=t("label",{for:"tel",class:"form-label"},"收件人電話",-1),F={class:"mb-3"},N=t("label",{for:"address",class:"form-label"},"收件人地址",-1),B=t("div",{class:"mb-3"},[t("label",{for:"message",class:"form-label"},"留言"),t("textarea",{id:"message",class:"form-control",cols:"30",rows:"10"})],-1),H={class:"text-end"};function j(e,a,g,u,o,n){const i=b("v-field"),s=b("error-message"),c=b("v-form");return r(),d("div",R,[l(c,{ref:"form",class:"col-md-6"},{default:V(({errors:m})=>[t("div",U,[q,l(i,{id:"email",name:"email",type:"email",class:h(["form-control",{"is-invalid":m.email}]),placeholder:"請輸入 Email",rules:"required|email"},null,8,["class"]),l(s,{name:"email",class:"invalid-feedback"})]),t("div",w,[D,l(i,{id:"name",name:"姓名",type:"text",class:h(["form-control",{"is-invalid":m.姓名}]),placeholder:"請輸入姓名",rules:"required"},null,8,["class"]),l(s,{name:"姓名",class:"invalid-feedback"})]),t("div",A,[S,l(i,{id:"tel",name:"電話",type:"tel",class:h(["form-control",{"is-invalid":m.電話}]),placeholder:"請輸入電話",rules:n.isPhone},null,8,["class","rules"]),l(s,{name:"電話",class:"invalid-feedback"})]),t("div",F,[N,l(i,{id:"address",name:"地址",type:"text",class:h(["form-control",{"is-invalid":m.地址}]),placeholder:"請輸入地址",rules:"required"},null,8,["class"]),l(s,{name:"地址",class:"invalid-feedback"})]),B,t("div",H,[t("button",{type:"submit",class:"btn btn-danger",onSubmit:a[0]||(a[0]=(...y)=>n.createOrder&&n.createOrder(...y))},"送出訂單",32)])]),_:1},512)])}const M=I(P,[["render",j]]),{VITE_URL:p,VITE_PATH:f}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"bassjim",BASE_URL:"/vite-template-standard/",MODE:"production",DEV:!1,PROD:!0},z={data(){return{products:[],itemId:"",product:{},cart:{},loadingItem:"",isLoading:!1}},methods:{getCarts(){this.$http.get(`${p}/api/${f}/cart`).then(e=>{this.cart=e.data.data}).catch(e=>{console.log(e)})},updateCartItem(e){const a={product_id:e.product.id,qty:e.qty};this.loadingItem=e.id;const g=`${p}/api/${f}/cart/${e.id}`;this.$http.put(`${g}`,{data:a}).then(u=>{this.cart=u.data.data,this.getCarts(),this.loadingItem=""}).catch(u=>{console.log(u)})},deleteItem(e){this.loadingItem=e,this.$http.delete(`${p}/api/${f}/cart/${e}`).then(a=>{this.getCarts(),this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},300)}).catch(a=>{console.log(a)})},clearCart(){this.$http.delete(`${p}/api/${f}/carts`).then(e=>{E.fire({title:"購物車目前沒有商品",icon:"question"}),this.getCarts(),this.loadingItem=""}).catch(e=>{console.log(e)})}},mounted(){this.getCarts()},components:{OrderForm:M}},G={class:"text-end"},J=t("h3",{class:"mt-5 mb-3 text-center"},"購物車",-1),K={class:"table align-middle"},Q=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"單價")])],-1),W=["disabled","onClick"],X={key:0,class:"fas fa-spinner fa-pulse"},Y=t("div",{class:"text-success"}," 已套用優惠券 ",-1),Z={class:"input-group input-group-sm"},tt=["onUpdate:modelValue","disabled","onChange"],et=["value"],st={class:"input-group-text",id:"basic-addon2"},at={class:"text-end"},ot=t("small",{class:"text-success"},"折扣價：",-1),lt=t("td",{colspan:"3",class:"text-end"},"總計",-1),nt={class:"text-end"},ct={key:0},rt=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),dt={class:"text-end text-success"};function it(e,a,g,u,o,n){const i=b("OrderForm");return r(),d(v,null,[t("div",G,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:a[0]||(a[0]=(...s)=>n.clearCart&&n.clearCart(...s))},"清空購物車")]),J,t("table",K,[Q,t("tbody",null,[o.cart.carts?(r(!0),d(v,{key:0},C(o.cart.carts,s=>(r(),d("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:s.id===o.loadingItem,onClick:c=>n.deleteItem(s.id)},[o.isLoading?(r(),d("i",X)):$("",!0),x(" x ")],8,W)]),t("td",null,[x(_(s.product.title)+" ",1),Y]),t("td",null,[t("div",Z,[T(t("select",{class:"form-select","onUpdate:modelValue":c=>s.qty=c,disabled:s.id===o.loadingItem,onChange:c=>n.updateCartItem(s)},[(r(),d(v,null,C(20,c=>t("option",{value:c,key:c+"123456"},_(c),9,et)),64))],40,tt),[[k,s.qty]]),t("span",st,_(s.product.unit),1)])]),t("td",at,[ot,x(" "+_(s.total),1)])]))),128)):$("",!0)]),t("tfoot",null,[t("tr",null,[lt,t("td",nt,_(o.cart.total),1)]),o.cart.final_total!==o.cart.total?(r(),d("tr",ct,[rt,t("td",dt,_(o.cart.final_total),1)])):$("",!0)])]),l(i,{cart:o.cart,"get-cart":n.getCarts},null,8,["cart","get-cart"])],64)}const mt=I(z,[["render",it]]);export{mt as default};