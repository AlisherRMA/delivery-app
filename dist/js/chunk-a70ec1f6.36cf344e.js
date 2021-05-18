(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a70ec1f6"],{9734:function(t,e,i){},"9d01":function(t,e,i){},c136:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.item?i("section",[i("div",{staticClass:"app-label-lg text-center mt-4"},[t._v("Редактирование товара")]),i("v-card",{staticClass:"pa-4 mx-auto",attrs:{"max-width":"600"}},[i("label",{staticClass:"app-label-md lightBlue--text"},[t._v("Группа товара")]),i("v-select",{staticClass:"pt-0 mt-0",attrs:{items:t.groups,"item-text":"name","item-value":"category_id"},model:{value:t.item.category_id,callback:function(e){t.$set(t.item,"category_id",e)},expression:"item.category_id"}}),i("v-divider"),i("div",[i("label",{staticClass:"app-label-md lightBlue--text"},[t._v("Название товара")]),i("v-text-field",{staticClass:"pt-0 mt-0",model:{value:t.item.product_name,callback:function(e){t.$set(t.item,"product_name",e)},expression:"item.product_name"}})],1),i("v-divider"),i("div",[i("div",{staticClass:"d-flex align-center justify-space-between"},[i("label",{staticClass:"app-label-md lightBlue--text"},[t._v("Изображение")]),i("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){t.isImgEditing=!0}}},[i("v-icon",[t._v("mdi-pencil")])],1)],1),t.isImgEditing?i("div",[i("v-textarea",{attrs:{label:"Вставьте ссылку на изображение",autofocus:t.isImgEditing,rows:"1"},model:{value:t.tempImgLink,callback:function(e){t.tempImgLink=e},expression:"tempImgLink"}}),i("v-img",{staticClass:"mx-auto",staticStyle:{"border-radius":"5px"},attrs:{src:t.tempImgLink,"max-width":"250px"}}),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.tempImgLink,expression:"tempImgLink"}],staticClass:"full-width mt-2",attrs:{color:"primary"},on:{click:t.onSaveImage}},[t._v("Применить")]),i("v-btn",{staticClass:"full-width mt-2",attrs:{color:"primary",outlined:""},on:{click:function(e){t.tempImgLink=null,t.isImgEditing=!1}}},[t._v("Отмена")])],1):i("v-img",{staticStyle:{"border-radius":"5px"},attrs:{src:t.item.image_link,"max-width":"500px"}})],1),i("v-divider",{staticClass:"mt-2"}),i("div",[i("div",{staticClass:"d-flex align-center justify-space-between"},[i("label",{staticClass:"app-label-md lightBlue--text"},[t._v("Описание")]),i("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){t.isDescEditing=!0}}},[i("v-icon",[t._v("mdi-pencil")])],1)],1),t.isDescEditing?i("div",[i("TextEditor",{model:{value:t.tempDesc,callback:function(e){t.tempDesc=e},expression:"tempDesc"}}),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.tempDesc&&t.tempDesc!=="<p>"+t.item.description+"</p>",expression:"tempDesc && tempDesc !== `<p>${item.description}</p>`"}],staticClass:"full-width mt-2",attrs:{color:"primary"},on:{click:t.onSaveDesc}},[t._v("Применить")]),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.tempDesc,expression:"tempDesc"}],staticClass:"full-width mt-2",attrs:{color:"primary",outlined:""},on:{click:function(e){t.tempDesc=null,t.isDescEditing=!1}}},[t._v("Отмена")])],1):i("div",[i("ReadMore",{attrs:{text:t.item.description,maxChars:400}})],1)]),i("v-divider",{staticClass:"mt-2"}),i("div",[i("label",{staticClass:"app-label-md lightBlue--text"},[t._v("Граммаж")]),i("EditPrices",{attrs:{isNew:t.isNew,prices:t.prices,productId:t.productId},on:{onPricesUpdated:t.onPricesUpdated}})],1),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.tempDesc&&t.tempDesc!=="<p>"+t.item.description+"</p>",expression:"tempDesc && tempDesc !== `<p>${item.description}</p>`"}],staticClass:"full-width mt-2",attrs:{color:"primary"},on:{click:t.onSaveProduct}},[i("v-icon",{staticClass:"mr-2"},[t._v("mdi-content-save-outline")]),t._v(" Сохранить изменения ")],1)],1)],1):t._e()},n=[],a=i("9ab4"),o=i("60a3"),r=i("22e2"),c=i("bbe6"),l=i("fc88"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("v-btn",{attrs:{color:"lightBlue"},on:{click:t.onAddItem}},[t._v("Добавить позицию")]),i("v-data-table",{attrs:{headers:t.headers,items:t.prices,"disable-sort":"","mobile-breakpoint":"md"},scopedSlots:t._u([{key:"item.is_default",fn:function(e){var i=e.item;return[t._v(" "+t._s(0==i.is_default?"Нет":"Да")+" ")]}},{key:"item.actions",fn:function(e){var s=e.item;return[i("v-btn",{attrs:{icon:"","x-small":""},on:{click:function(e){return t.onEditItem(s)}}},[i("v-icon",[t._v("mdi-pencil")])],1),i("v-btn",{attrs:{icon:"","x-small":""},on:{click:function(e){return t.onDeleteItem(s)}}},[i("v-icon",[t._v("mdi-delete")])],1)]}}],null,!0)}),i("ConfirmDialog",{ref:"confirmDialogRef",attrs:{text:"Вы действительно хотите удалить позицию с весом "+(t.selectedItem?t.selectedItem.weight:"")+" и с ценой "+(t.selectedItem?t.selectedItem.price:""),color:"error"}}),i("EditPriceDialog",{ref:"editPriceRef",attrs:{isDefaultPriceSet:t.isDefaultPriceSet,isNew:"new"===t.dialogMode},on:{onPricesUpdated:t.onPricesUpdated}}),i("AddPriceToNewProduct",{ref:"addPriceToNewProductRef",attrs:{isDefaultPriceSet:t.isDefaultPriceSet,isEditMode:"edit"===t.dialogMode},on:{onPricesAddedToNewProduct:t.onPricesAddedToNewProduct,onPriceUpdatedOnNewProduct:t.onPriceUpdatedOnNewProduct}})],1)},d=[],h=i("7d40"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{"max-width":"600"},model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[t.item?i("v-card",{staticClass:"pa-4"},[t._v(" STARAYA "),i("v-text-field",{attrs:{label:"Цена",type:"number"},model:{value:t.item.price,callback:function(e){t.$set(t.item,"price",t._n(e))},expression:"item.price"}}),i("v-text-field",{attrs:{label:"Вес",type:"number"},model:{value:t.item.weight,callback:function(e){t.$set(t.item,"weight",t._n(e))},expression:"item.weight"}}),i("v-switch",{attrs:{disabled:t.cannotSetDefaultPrice,hint:"Для данного товара уже задана цена по умолчанию","persistent-hint":t.cannotSetDefaultPrice,label:"Является основной ценой"},model:{value:t.item.is_default,callback:function(e){t.$set(t.item,"is_default",e)},expression:"item.is_default"}}),i("v-btn",{staticClass:"full-width my-2",attrs:{color:"primary"},on:{click:t.onSubmit}},[t._v("Применить")]),i("v-btn",{staticClass:"full-width",attrs:{color:"primary",outlined:""},on:{click:t.onClose}},[t._v("Отмена")])],1):t._e()],1)},m=[],v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.item=null,e.isVisible=!1,e}return Object(a["d"])(e,t),Object.defineProperty(e.prototype,"cannotSetDefaultPrice",{get:function(){var t;return this.isDefaultPriceSet&&0==(null===(t=this.item)||void 0===t?void 0:t.is_default)},enumerable:!1,configurable:!0}),e.prototype.show=function(t){this.item=Object(a["a"])({},t),this.item.is_default=1===t.is_default,this.isVisible=!0},e.prototype.onClose=function(){this.isVisible=!1},e.prototype.onSubmit=function(){return Object(a["b"])(this,void 0,void 0,(function(){return Object(a["e"])(this,(function(t){switch(t.label){case 0:return this.isNew?[4,r["a"].createPrice(this.item)]:[3,2];case 1:return t.sent(),[3,4];case 2:return[4,r["a"].updatePrice(this.item)];case 3:t.sent(),t.label=4;case 4:return this.isVisible=!1,this.clear(),this.$emit("onPricesUpdated"),[2]}}))}))},e.prototype.clear=function(){this.item=null},Object(a["c"])([Object(o["b"])({default:!1,type:Boolean})],e.prototype,"isDefaultPriceSet",void 0),Object(a["c"])([Object(o["b"])({default:!1,type:Boolean})],e.prototype,"isNew",void 0),e=Object(a["c"])([o["a"]],e),e}(o["c"]),f=v,b=f,g=i("2877"),w=i("6544"),y=i.n(w),_=i("8336"),x=i("b0af"),P=i("169a"),C=(i("ec29"),i("9d01"),i("c37a")),O=i("5607"),j=i("2b0e"),D=j["a"].extend({name:"rippleable",directives:{ripple:O["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),k=i("8547"),S=i("58df");function V(t){t.preventDefault()}var I=Object(S["a"])(C["a"],D,k["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=C["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:V},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:V},ref:"input"})},onBlur(){this.isFocused=!1},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}}),A=i("c3f0"),$=i("0789"),E=i("490a"),N=i("80d2"),T=I.extend({name:"v-switch",directives:{Touch:A["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...C["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...this.attrs$}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement($["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(E["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===N["w"].left&&this.isActive||t.keyCode===N["w"].right&&!this.isActive)&&this.onChange()}}}),B=i("8654"),L=Object(g["a"])(b,p,m,!1,null,null,null),M=L.exports;y()(L,{VBtn:_["a"],VCard:x["a"],VDialog:P["a"],VSwitch:T,VTextField:B["a"]});var R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{"max-width":"600"},model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[t.item?i("v-card",{staticClass:"pa-4"},[t._v(" NOVAYA "+t._s(t.isEditMode)+" "),i("v-text-field",{attrs:{label:"Цена",type:"number",autocomplete:"off"},model:{value:t.item.price,callback:function(e){t.$set(t.item,"price",t._n(e))},expression:"item.price"}}),i("v-text-field",{attrs:{label:"Вес",type:"number",autocomplete:"off"},model:{value:t.item.weight,callback:function(e){t.$set(t.item,"weight",t._n(e))},expression:"item.weight"}}),i("v-switch",{attrs:{disabled:t.cannotSetDefaultPrice,hint:"Для данного товара уже задана цена по умолчанию","persistent-hint":t.cannotSetDefaultPrice,label:"Является основной ценой"},model:{value:t.item.is_default,callback:function(e){t.$set(t.item,"is_default",e)},expression:"item.is_default"}}),t._v(" "+t._s(t.item)+" "),i("v-btn",{staticClass:"full-width my-2",attrs:{color:"primary"},on:{click:t.onSubmit}},[t._v("Применить")]),i("v-btn",{staticClass:"full-width",attrs:{color:"primary",outlined:""},on:{click:t.onClose}},[t._v("Отмена")])],1):t._e()],1)},U=[],F=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.item=null,e.isVisible=!1,e}return Object(a["d"])(e,t),Object.defineProperty(e.prototype,"cannotSetDefaultPrice",{get:function(){var t,e;return this.isDefaultPriceSet&&(0==(null===(t=this.item)||void 0===t?void 0:t.is_default)||0==(null===(e=this.item)||void 0===e?void 0:e.is_default))},enumerable:!1,configurable:!0}),e.prototype.show=function(t){this.item=Object(a["a"])({},t),"boolean"!==typeof this.item.is_default&&(this.item.is_default=1===t.is_default),this.isVisible=!0},e.prototype.onClose=function(){this.isVisible=!1},e.prototype.onSubmit=function(){return Object(a["b"])(this,void 0,void 0,(function(){return Object(a["e"])(this,(function(t){return this.isVisible=!1,this.isEditMode?this.$emit("onPriceUpdatedOnNewProduct",this.item):this.$emit("onPricesAddedToNewProduct",this.item),this.clear(),[2]}))}))},e.prototype.clear=function(){this.item=null},Object(a["c"])([Object(o["b"])({default:!1,type:Boolean})],e.prototype,"isDefaultPriceSet",void 0),Object(a["c"])([Object(o["b"])({default:!1})],e.prototype,"isEditMode",void 0),e=Object(a["c"])([o["a"]],e),e}(o["c"]),z=F,q=z,W=Object(g["a"])(q,R,U,!1,null,null,null),Y=W.exports;y()(W,{VBtn:_["a"],VCard:x["a"],VDialog:P["a"],VSwitch:T,VTextField:B["a"]});var G=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.selectedItem=null,e.dialogMode="edit",e}return Object(a["d"])(e,t),Object.defineProperty(e.prototype,"headers",{get:function(){return[{text:"Цена",value:"price"},{text:"Вес",value:"weight"},{text:"Основная цена",value:"is_default"},{text:"Действия",value:"actions"}]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isDefaultPriceSet",{get:function(){return this.prices.some((function(t){return 1==t.is_default}))},enumerable:!1,configurable:!0}),e.prototype.onEditItem=function(t){if(this.dialogMode="edit",this.isNew)return this.$refs.addPriceToNewProductRef.show(t);this.$refs.editPriceRef.show(t)},e.prototype.onAddItem=function(){this.dialogMode="new";var t={discount:0,is_default:0,price:0,price_id:null,product_id:this.productId?this.productId:null,weight:0};if(this.isNew)return this.$refs.addPriceToNewProductRef.show(t);this.$refs.editPriceRef.show(t)},e.prototype.onDeleteItem=function(t){return Object(a["b"])(this,void 0,void 0,(function(){var e,i;return Object(a["e"])(this,(function(s){switch(s.label){case 0:return this.selectedItem=t,[4,this.$refs.confirmDialogRef.show()];case 1:return e=s.sent(),this.selectedItem=null,e?this.isNew?(i=this.prices.findIndex((function(e){return e.price_id==t.price_id})),this.prices.splice(i,1),[3,4]):[3,2]:[2];case 2:return[4,r["a"].deletePrice(t.price_id)];case 3:s.sent(),this.onPricesUpdated(),s.label=4;case 4:return[2]}}))}))},e.prototype.onPricesUpdated=function(){this.$emit("onPricesUpdated")},e.prototype.onPricesAddedToNewProduct=function(t){this.prices.push(t)},e.prototype.onPriceUpdatedOnNewProduct=function(t){var e=this.prices.findIndex((function(e){return e.price_id==t.price_id}));this.$set(this.prices,e,t)},Object(a["c"])([Object(o["b"])({required:!0})],e.prototype,"prices",void 0),Object(a["c"])([Object(o["b"])()],e.prototype,"productId",void 0),Object(a["c"])([Object(o["b"])({default:!1})],e.prototype,"isNew",void 0),e=Object(a["c"])([Object(o["a"])({components:{ConfirmDialog:h["a"],EditPriceDialog:M,AddPriceToNewProduct:Y}})],e),e}(o["c"]),K=G,H=K,J=i("8fea"),X=i("132d"),Z=Object(g["a"])(H,u,d,!1,null,null,null),Q=Z.exports;y()(Z,{VBtn:_["a"],VDataTable:J["a"],VIcon:X["a"]});var tt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.id=null,e.isNew=!1,e.item=null,e.isImgEditing=!1,e.tempImgLink=null,e.isDescEditing=!1,e.tempDesc=null,e.prices=[],e.groups=[],e}return Object(a["d"])(e,t),e.prototype.mounted=function(){return Object(a["b"])(this,void 0,void 0,(function(){return Object(a["e"])(this,(function(t){return this.init(),!this.isNew&&this.id&&this.getProduct(),this.getGroups(),[2]}))}))},e.prototype.init=function(){this.id=this.$route.query.productId,this.isNew="true"==this.$route.query.isNew,this.isNew&&(this.item={category_id:null,category_name:null,description:void 0,id:null,image_link:null,product_name:null,prices:[],overallUserSelectionCount:0})},e.prototype.getProduct=function(){var t;return Object(a["b"])(this,void 0,void 0,(function(){var e;return Object(a["e"])(this,(function(i){switch(i.label){case 0:return e=this,[4,r["a"].getProductById(this.id)];case 1:return e.item=i.sent(),this.tempDesc=null===(t=this.item)||void 0===t?void 0:t.description,[4,this.getPrices()];case 2:return i.sent(),[2]}}))}))},e.prototype.getPrices=function(){return Object(a["b"])(this,void 0,void 0,(function(){var t;return Object(a["e"])(this,(function(e){switch(e.label){case 0:return t=this,[4,r["a"].getProductsPrices(this.id)];case 1:return t.prices=e.sent(),[2]}}))}))},e.prototype.getGroups=function(){return Object(a["b"])(this,void 0,void 0,(function(){var t;return Object(a["e"])(this,(function(e){switch(e.label){case 0:return t=this,[4,r["a"].getGroups()];case 1:return t.groups=e.sent(),[2]}}))}))},Object.defineProperty(e.prototype,"productId",{get:function(){var t;return null===(t=this.item)||void 0===t?void 0:t.id},enumerable:!1,configurable:!0}),e.prototype.onPricesUpdated=function(){this.getPrices()},e.prototype.onSaveImage=function(){this.item&&(this.item.image_link=this.tempImgLink),this.isImgEditing=!1},e.prototype.onSaveDesc=function(){this.item&&(this.item.description=this.tempDesc),this.isDescEditing=!1},e.prototype.onSaveProduct=function(){return Object(a["b"])(this,void 0,void 0,(function(){return Object(a["e"])(this,(function(t){switch(t.label){case 0:return this.isNew&&this.item?(this.item.prices=this.prices,[4,r["a"].createProduct(this.item)]):[3,2];case 1:return t.sent(),[3,4];case 2:return[4,r["a"].updateProduct(this.item)];case 3:t.sent(),t.label=4;case 4:return[2]}}))}))},e=Object(a["c"])([Object(o["a"])({components:{TextEditor:c["a"],ReadMore:l["a"],EditPrices:Q}})],e),e}(o["c"]),et=tt,it=et,st=i("ce7e"),nt=i("adda"),at=i("b974"),ot=i("a844"),rt=Object(g["a"])(it,s,n,!1,null,null,null);e["default"]=rt.exports;y()(rt,{VBtn:_["a"],VCard:x["a"],VDivider:st["a"],VIcon:X["a"],VImg:nt["a"],VSelect:at["a"],VTextField:B["a"],VTextarea:ot["a"]})},ec29:function(t,e,i){},fc88:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("p",[i("span",{domProps:{innerHTML:t._s(t.formattedString)}}),i("span",{directives:[{name:"show",rawName:"v-show",value:t.text&&t.text.length>t.maxChars,expression:"text && text.length > maxChars"}]},[i("v-tooltip",{attrs:{bottom:"","open-delay":"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[t.isReadMore?t._e():i("button",t._g(t._b({on:{click:function(e){t.isReadMore=!0}}},"button",n,!1),s),[t._v(" "+t._s(t.activator)+" ")])]}}])},[i("span",[t._v("Развернуть")])])],1)])])},n=[],a=i("9ab4"),o=i("60a3"),r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.isReadMore=!1,e}return Object(a["d"])(e,t),Object.defineProperty(e.prototype,"formattedString",{get:function(){if(!this.text)return"";var t=this.text;return!this.isReadMore&&this.text.length>this.maxChars&&(t=t.substring(0,this.maxChars)+"  "),t},enumerable:!1,configurable:!0}),Object(a["c"])([Object(o["b"])({required:!0})],e.prototype,"text",void 0),Object(a["c"])([Object(o["b"])({default:"..."})],e.prototype,"activator",void 0),Object(a["c"])([Object(o["b"])({default:100})],e.prototype,"maxChars",void 0),e=Object(a["c"])([Object(o["a"])({components:{}})],e),e}(o["c"]),c=r,l=c,u=i("2877"),d=i("6544"),h=i.n(d),p=(i("9734"),i("4ad4")),m=i("a9ad"),v=i("16b7"),f=i("b848"),b=i("75eb"),g=i("f573"),w=i("f2e7"),y=i("80d2"),_=i("d9bd"),x=i("58df"),P=Object(x["a"])(m["a"],v["a"],f["a"],b["a"],g["a"],w["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let n=0;return this.top||this.bottom||i?n=s+t.width/2-e.width/2:(this.left||this.right)&&(n=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),this.calcXOverflow(n,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),this.calcYOverflow(s+this.pageYOffset)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(y["g"])(this.maxWidth),minWidth:Object(y["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(y["s"])(this,"activator",!0)&&Object(_["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=p["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===y["w"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}}),C=Object(u["a"])(l,s,n,!1,null,null,null);e["a"]=C.exports;h()(C,{VTooltip:P})}}]);
//# sourceMappingURL=chunk-a70ec1f6.36cf344e.js.map