import{S as c}from"./sweetalert2.all-1b0220ca.js";import{M as V,P as C,D as I}from"./DelModal-664ebc2b.js";import{_ as y,o as i,c as a,a as t,j as n,l as m,F as P,f as U,m as L,d as x,r as p,b as _,t as f}from"./index-d761a16c.js";const{VITE_URL:T,VITE_PATH:E}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"bassjim",BASE_URL:"/vite-template-standard/",MODE:"production",DEV:!1,PROD:!0},D={props:["tempProduct","operateType"],emits:["saveProduct"],data(){return{productModal:""}},methods:{addImg(){this.innerProduct.imagesUrl.push("")},deleteImg(){this.innerProduct.imagesUrl.pop()},createImg(){this.innerProduct.imagesUrl||(this.innerProduct.imagesUrl=[]),this.innerProduct.imagesUrl.push("")},showModal(){this.productModal.show()},hideModal(){this.productModal.hide()},uploadFile(){const l=new FormData;l.append("file-to-upload",this.$refs.fileInput.files[0]);const e=`${T}/api/${E}/admin/upload`;c.fire({title:"上傳圖片中",timer:2e3,timerProgressBar:!0,didOpen:()=>{c.showLoading()},willClose:()=>{this.$http.post(e,l,{headers:{"Content-Type":"multipart/form-data"}}).then(d=>{d.data.success&&(this.innerProduct.imageUrl=d.data.imageUrl),this.$refs.fileInput.value=""}).catch(d=>{c.fire({icon:"error",title:d.response.data.message}),this.$refs.fileInput.value=""})}})}},mounted(){this.productModal=new V(this.$refs.productModal,{keyboard:!1})},computed:{innerProduct(){return this.tempProduct}}},$={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},B={class:"modal-dialog modal-xl"},A={class:"modal-content border-0"},R={class:"modal-header bg-dark text-white"},F={id:"productModalLabel",class:"modal-title"},S={key:0},N={key:1},H=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),O={class:"modal-body"},j={class:"row"},q={class:"col-sm-4"},z={class:"mb-2"},G={class:"mb-3"},J=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),K={class:"mb-3"},Q=t("label",{for:"uploadFile",class:"form-label"},"或 上傳圖片",-1),W=["src"],X=t("h3",{class:"mb-3"},"多圖新增",-1),Y={key:0},Z={class:"mb-3"},tt=t("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),et=["onUpdate:modelValue"],ot=["src"],st={key:0},lt={key:1},it={key:1},at={class:"col-sm-8"},dt={class:"mb-3"},rt=t("label",{for:"title",class:"form-label"},"標題",-1),nt={class:"row"},ct={class:"mb-3 col-md-6"},ut=t("label",{for:"category",class:"form-label"},"分類",-1),mt={class:"mb-3 col-md-6"},ht=t("label",{for:"price",class:"form-label"},"單位",-1),pt={class:"row"},_t={class:"mb-3 col-md-6"},ft=t("label",{for:"origin_price",class:"form-label"},"原價",-1),bt={class:"mb-3 col-md-6"},gt=t("label",{for:"price",class:"form-label"},"售價",-1),Pt=x(`<hr><div class="mb-3"><label for="description" class="form-label">產品描述</label><textarea id="description" type="text" class="form-control" placeholder="請輸入產品描述">\r
                        </textarea></div><div class="mb-3"><label for="content" class="form-label">說明內容</label><textarea id="description" type="text" class="form-control" placeholder="請輸入說明內容">\r
                        </textarea></div>`,3),vt={class:"mb-3"},yt={class:"form-check"},Ut=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Mt={class:"modal-footer"},kt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function wt(l,e,d,M,u,o){return i(),a("div",$,[t("div",B,[t("div",A,[t("div",R,[t("h5",F,[d.operateType?(i(),a("span",S,"新增產品")):(i(),a("span",N,"編輯產品"))]),H]),t("div",O,[t("div",j,[t("div",q,[t("div",z,[t("div",G,[J,n(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結",id:"imageUrl","onUpdate:modelValue":e[0]||(e[0]=s=>o.innerProduct.imagesUrl=s)},null,512),[[m,o.innerProduct.imagesUrl]])]),t("div",K,[Q,t("input",{type:"file",id:"uploadFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...s)=>o.uploadFile&&o.uploadFile(...s))},null,544)]),t("img",{class:"img-fluid",src:o.innerProduct.imagesUrl,alt:""},null,8,W)]),X,Array.isArray(o.innerProduct.imagesUrl)?(i(),a("div",Y,[(i(!0),a(P,null,U(o.innerProduct.imagesUrl,(s,h)=>(i(),a(P,{key:h},[t("div",Z,[tt,n(t("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結",id:"imagesUrl","onUpdate:modelValue":v=>o.innerProduct.imagesUrl[h]=v},null,8,et),[[m,o.innerProduct.imagesUrl[h]]])]),t("img",{class:"img-fluid",src:o.innerProduct.imagesUrl[h]},null,8,ot)],64))),128)),!o.innerProduct.imagesUrl||!o.innerProduct.imagesUrl.length||o.innerProduct.imagesUrl[o.innerProduct.imagesUrl.length-1]?(i(),a("div",st,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=(...s)=>o.addImg&&o.addImg(...s))}," 新增圖片 ")])):(i(),a("div",lt,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=(...s)=>o.deleteImg&&o.deleteImg(...s))}," 刪除圖片 ")]))])):(i(),a("div",it,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=(...s)=>l.createImages&&l.createImages(...s))}," 新增圖片 ")]))]),t("div",at,[t("div",dt,[rt,n(t("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":e[5]||(e[5]=s=>o.innerProduct.title=s)},null,512),[[m,o.innerProduct.title]])]),t("div",nt,[t("div",ct,[ut,n(t("input",{id:"category",type:"text",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=s=>o.innerProduct.category=s),placeholder:"請輸入分類"},null,512),[[m,o.innerProduct.category]])]),t("div",mt,[ht,n(t("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":e[7]||(e[7]=s=>o.innerProduct.unit=s)},null,512),[[m,o.innerProduct.unit]])])]),t("div",pt,[t("div",_t,[ft,n(t("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":e[8]||(e[8]=s=>o.innerProduct.origin_price=s)},null,512),[[m,o.innerProduct.origin_price,void 0,{number:!0}]])]),t("div",bt,[gt,n(t("input",{id:"price",type:"number",min:"0",class:"form-control","onUpdate:modelValue":e[9]||(e[9]=s=>o.innerProduct.price=s),placeholder:"請輸入售價"},null,512),[[m,o.innerProduct.price,void 0,{number:!0}]])])]),Pt,t("div",vt,[t("div",yt,[n(t("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=s=>o.innerProduct.is_enabled=s),"true-value":1,"false-value":0},null,512),[[L,o.innerProduct.is_enabled]]),Ut])])])])]),t("div",Mt,[kt,t("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=s=>l.$emit("saveProduct",o.innerProduct))}," 確認 ")])])])],512)}const Vt=y(D,[["render",wt]]),{VITE_URL:b,VITE_PATH:g}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"bassjim",BASE_URL:"/vite-template-standard/",MODE:"production",DEV:!1,PROD:!0},Ct={data(){return{isLoading:!1,products:[],operateType:"",tempProduct:{imagesUrl:[]},pagination:{},pageNum:1}},methods:{getProducts(l=1){this.isLoading=!0,this.pageNum=l,this.$http.get(`${b}/api/${g}/admin/products?page=${l}`).then(e=>{this.products=e.data.products,this.pagination=e.data.pagination,this.isLoading=!1}).catch(e=>{c.fire({icon:"error",title:e.response.data.message,showConfirmButton:!1,timer:1500}),this.isLoading=!1})},saveProduct(l){this.isLoading=!0;let e=`${b}/api/${g}/admin/product`;this.operateType==="modify"&&(e=`${b}/api/${g}/admin/product/${l.id}`),this.$http[this.operateType==="create"?"post":"put"](`${e}`,{data:l}).then(d=>{this.$refs.productModal.hideModal(),c.fire({icon:"success",title:d.data.message,showConfirmButton:!1,timer:1500}),this.getProducts(this.pageNum),this.isLoading=!1}).catch(d=>{c.fire({icon:"error",title:d.response.data.message,showConfirmButton:!1,timer:1500}),this.isLoading=!1})},deleteProduct(){this.isLoading=!0,this.$http.delete(`${b}/api/${g}/admin/product/${this.tempProduct.id}`,{data:this.tempProduct}).then(l=>{this.$refs.delModal.hideModal(),c.fire({icon:"success",title:l.data.message,showConfirmButton:!1,timer:1500}),this.getProducts(this.pageNum),this.isLoading=!1}).catch(l=>{c.fire({icon:"error",title:l.response.data.message,showConfirmButton:!1,timer:1500}),this.isLoading=!1})},openModal(l,e){this.operateType=l,l==="create"?(this.tempProduct={imagesUrl:[]},this.$refs.productModal.showModal()):l==="modify"?(this.tempProduct={...e},this.$refs.productModal.showModal()):l==="delete"&&(this.tempProduct={...e},this.$refs.delModal.showModal())}},components:{PaginationComponent:C,ProductModal:Vt,DelModal:I},mounted(){this.getProducts(),this.$showLoading()}},It={class:"container"},Lt={class:"text-end mt-4"},xt={class:"table table-hover mt-4"},Tt=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),Et={class:"text-end"},Dt={class:"text-end"},$t={key:0,class:"text-success"},Bt={key:1},At={class:"btn-group"},Rt=["onClick"],Ft=["onClick"];function St(l,e,d,M,u,o){const s=p("VueLoading"),h=p("PaginationComponent"),v=p("ProductModal"),k=p("DelModal");return i(),a(P,null,[_(s,{active:u.isLoading},null,8,["active"]),t("div",It,[t("div",Lt,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=r=>o.openModal("create"))}," 建立新的產品 ")]),t("table",xt,[Tt,t("tbody",null,[(i(!0),a(P,null,U(u.products,r=>(i(),a("tr",{key:r.id},[t("td",null,f(r.category),1),t("td",null,f(r.title),1),t("td",Et,f(r.origin_price),1),t("td",Dt,f(r.price),1),t("td",null,[r.is_enabled?(i(),a("span",$t,"啟用")):(i(),a("span",Bt,"未啟用"))]),t("td",null,[t("div",At,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:w=>o.openModal("modify",r)}," 編輯 ",8,Rt),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:w=>o.openModal("delete",r)}," 刪除 ",8,Ft)])])]))),128))])]),_(h,{pagination:u.pagination,onChangePage:o.getProducts},null,8,["pagination","onChangePage"])]),_(v,{ref:"productModal","temp-product":u.tempProduct,"operate-type":u.operateType,onSaveProduct:o.saveProduct},null,8,["temp-product","operate-type","onSaveProduct"]),_(k,{ref:"delModal","temp-item":u.tempProduct,onDeleteItem:o.deleteProduct},null,8,["temp-item","onDeleteItem"])],64)}const jt=y(Ct,[["render",St]]);export{jt as default};
