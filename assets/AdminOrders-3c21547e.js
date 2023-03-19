import{S as h}from"./sweetalert2.all-1b0220ca.js";import{M as w,P as L,D}from"./DelModal-664ebc2b.js";import{_ as g,o,c as a,a as e,t as l,g as x,F as m,f as b,j as M,m as O,r as u,b as _,n as P}from"./index-d761a16c.js";const V={props:["tempOrder"],emits:["updatePaid"],data(){return{isLoading:!1,orderModal:""}},methods:{showModal(){this.orderModal.show()},hideModal(){this.orderModal.hide()}},mounted(){this.orderModal=new w(this.$refs.orderModal,{keyboard:!1})},computed:{innerOrder(){return this.tempOrder}}},E={id:"orderModal",ref:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"},B={class:"modal-dialog modal-xl"},U={class:"modal-content border-0"},Y=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{id:"orderModalLabel",class:"modal-title"},[e("span",null,"訂單細節")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),H={class:"modal-body"},I={class:"row"},N={class:"col-md-4"},T=e("h3",null,"用戶資料",-1),A={class:"table"},R={key:0},S=e("th",{style:{width:"100px"}},"姓名",-1),j=e("th",null,"Email",-1),q=e("th",null,"電話",-1),F=e("th",null,"地址",-1),z={class:"col-md-8"},G=e("h3",null,"訂單細節",-1),J={class:"table"},K=e("th",{style:{width:"100px"}},"訂單編號",-1),Q=e("th",null,"下單時間",-1),W=e("th",null,"付款狀態",-1),X={key:0,class:"text-success"},Z={key:1,class:"text-muted"},ee=e("th",null,"總金額",-1),te=e("h3",null,"選購商品",-1),se={class:"table"},ne=e("thead",null,[e("tr")],-1),le={class:"text-end"},oe={class:"d-flex justify-content-end"},ae={class:"form-check"},de={class:"form-check-label",for:"flexCheckDefault"},ie={key:0},re={key:1},ce={class:"modal-footer"},he=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ue(s,n,y,k,c,t){return o(),a("div",E,[e("div",B,[e("div",U,[Y,e("div",H,[e("div",I,[e("div",N,[T,e("table",A,[t.innerOrder.user?(o(),a("tbody",R,[e("tr",null,[S,e("td",null,l(t.innerOrder.user.name),1)]),e("tr",null,[j,e("td",null,l(t.innerOrder.user.email),1)]),e("tr",null,[q,e("td",null,l(t.innerOrder.user.tel),1)]),e("tr",null,[F,e("td",null,l(t.innerOrder.user.address),1)])])):x("",!0)])]),e("div",z,[G,e("table",J,[e("tbody",null,[e("tr",null,[K,e("td",null,l(t.innerOrder.id),1)]),e("tr",null,[Q,e("td",null,l(s.$moment(new Date(t.innerOrder.create_at*1e3)).format("YYYY-MM-DD HH:mm")),1)]),e("tr",null,[W,e("td",null,[t.innerOrder.is_paid?(o(),a("strong",X,"已付款")):(o(),a("span",Z,"尚未付款"))])]),e("tr",null,[ee,e("td",null,l(t.innerOrder.total),1)])])]),te,e("table",se,[ne,e("tbody",null,[(o(!0),a(m,null,b(t.innerOrder.products,i=>(o(),a("tr",{key:i.id},[e("th",null,l(i.product.title),1),e("td",null,l(i.qty)+" / "+l(i.product.unit),1),e("td",le,l(i.final_total),1)]))),128))])]),e("div",oe,[e("div",ae,[M(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":n[0]||(n[0]=i=>t.innerOrder.is_paid=i)},null,512),[[O,t.innerOrder.is_paid]]),e("label",de,[t.innerOrder.is_paid?(o(),a("span",ie,"已付款")):(o(),a("span",re,"未付款"))])])])])])]),e("div",ce,[he,e("button",{type:"button",class:"btn btn-primary",onClick:n[1]||(n[1]=i=>s.$emit("updatePaid",t.innerOrder))}," 修改付費狀態 ")])])])],512)}const _e=g(V,[["render",ue]]),{VITE_URL:p,VITE_PATH:f}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"bassjim",BASE_URL:"/vite-template-standard/",MODE:"production",DEV:!1,PROD:!0},me={data(){return{isLoading:!1,orders:[],operateType:"",tempOrder:{},pagination:{},pageNum:1}},methods:{getOrders(s=1){this.isLoading=!0,this.pageNum=s,this.$http.get(`${p}/api/${f}/admin/orders?page=${s}`).then(n=>{this.orders=n.data.orders,this.pagination=n.data.pagination,this.isLoading=!1}).catch(n=>{h.fire({icon:"error",title:n.response.data.message,showConfirmButton:!1,timer:1500}),this.isLoading=!1})},updatePaid(s){this.isLoading=!0,this.$http.put(`${p}/api/${f}/admin/order/${s.id}`,{data:{is_paid:s.is_paid}}).then(n=>{this.$refs.orderModal.hideModal(),h.fire({icon:"success",title:n.data.message,showConfirmButton:!1,timer:1500}),this.getOrders(this.pageNum),this.isLoading=!1}).catch(n=>{h.fire({icon:"error",title:n.response.data.message,showConfirmButton:!1,timer:1500}),this.isLoading=!1})},deleteOrder(){this.isLoading=!0,this.$http.delete(`${p}/api/${f}/admin/order/${this.tempOrder.id}`,{data:this.tempOrder}).then(s=>{this.$refs.delModal.hideModal(),h.fire({icon:"success",title:s.data.message,showConfirmButton:!1,timer:1500}),this.getOrders(this.pageNum),this.isLoading=!1}).catch(s=>{h.fire({icon:"error",title:s.response.data.message,showConfirmButton:!1,timer:1500}),this.isLoading=!1})},openModal(s,n){this.operateType=s,s==="view"?(this.tempOrder={...n},this.$refs.orderModal.showModal()):s==="delete"&&(this.tempOrder={...n},this.$refs.delModal.showModal())}},components:{PaginationComponent:L,OrderModal:_e,DelModal:D},mounted(){this.getOrders(),this.$showLoading()}},pe={class:"container"},fe={class:"mt-4"},be={class:"table align-middle"},ge=e("thead",null,[e("tr",null,[e("th",null,"購買時間"),e("th",null,"Email"),e("th",null,"購買款項"),e("th",null,"應付金額"),e("th",null,"是否付款"),e("th",null,"編輯")])],-1),Me={class:"list-unstyled"},Oe={class:"text-end"},ye={class:"form-check form-switch"},ke=["id","onUpdate:modelValue","onChange"],ve=["for"],Ce={key:0},$e={key:1},we={class:"btn-group"},Le=["onClick"],De=["onClick"];function xe(s,n,y,k,c,t){const i=u("VueLoading"),v=u("PaginationComponent"),C=u("OrderModal"),$=u("DelModal");return o(),a(m,null,[_(i,{active:c.isLoading},null,8,["active"]),e("div",pe,[e("div",fe,[e("table",be,[ge,e("tbody",null,[(o(!0),a(m,null,b(c.orders,d=>(o(),a("tr",{key:d.id,class:P({"text-secondary":!d.is_paid})},[e("td",null,l(s.$moment(new Date(d.create_at*1e3)).format("YYYY-MM-DD HH:mm")),1),e("td",null,l(d.user.email),1),e("td",null,[e("ul",Me,[(o(!0),a(m,null,b(d.products,r=>(o(),a("li",{key:r.id},l(r.product.title)+" 數量："+l(r.qty)+" "+l(r.product.unit),1))),128))])]),e("td",Oe,l(d.total),1),e("td",null,[e("div",ye,[M(e("input",{class:"form-check-input",type:"checkbox",role:"switch",id:d.id,"onUpdate:modelValue":r=>d.is_paid=r,onChange:r=>t.updatePaid(d)},null,40,ke),[[O,d.is_paid]]),e("label",{class:"form-check-label",for:d.id},[d.is_paid?(o(),a("span",Ce,"已付款")):(o(),a("span",$e,"未付款"))],8,ve)])]),e("td",null,[e("div",we,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:r=>t.openModal("view",d)}," 檢視 ",8,Le),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:r=>t.openModal("delete",d)}," 刪除 ",8,De)])])],2))),128))])]),_(v,{pagination:c.pagination,onChangePage:t.getOrders},null,8,["pagination","onChangePage"])]),_(C,{ref:"orderModal","temp-order":c.tempOrder,onUpdatePaid:t.updatePaid},null,8,["temp-order","onUpdatePaid"]),_($,{ref:"delModal","temp-item":c.tempOrder,onDeleteItem:t.deleteOrder},null,8,["temp-item","onDeleteItem"])])],64)}const Be=g(me,[["render",xe]]);export{Be as default};
