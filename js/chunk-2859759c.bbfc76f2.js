(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2859759c"],{"21be":function(t,e,i){"use strict";i("14d9");var s=i("2b0e"),a=i("80d2");e["a"]=s["a"].extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(a["q"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex(t=[]){const e=this.$el,i=[this.stackMinZIndex,Object(a["q"])(e)],s=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let n=0;n<s.length;n++)t.includes(s[n])||i.push(Object(a["q"])(s[n]));return Math.max(...i)}}})},"25f5":function(t,e,i){"use strict";var s=i("7604");i.d(e,"a",(function(){return s["a"]}))},"3a2f":function(t,e,i){"use strict";i("9734");var s=i("4ad4"),a=i("a9ad"),n=i("16b7"),o=i("b848"),r=i("f573"),c=i("80d2"),h=i("d9bd"),l=i("58df");e["a"]=Object(l["a"])(a["a"],n["a"],o["a"],r["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let a=0;return this.top||this.bottom||i?a=s+t.width/2-e.width/2:(this.left||this.right)&&(a=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),this.calcXOverflow(a,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),!1===this.attach&&(s+=this.pageYOffset),this.calcYOverflow(s)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(c["g"])(this.maxWidth),minWidth:Object(c["g"])(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(c["p"])(this,"activator",!0)&&Object(h["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=s["a"].options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===c["t"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}})},"3a60":function(t,e,i){(function(e,i){t.exports=i()})(0,(function(){return function(t){function e(s){if(i[s])return i[s].exports;var a=i[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,s){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,i){"use strict";function s(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var a=i(2),n=i(0),o=i.n(n);e.a=function(t,e){var n=e.value;if((Array.isArray(n)||"string"==typeof n)&&(n={mask:n,tokens:o.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var r=t.getElementsByTagName("input");if(1!==r.length)throw new Error("v-mask directive requires 1 input, found "+r.length);t=r[0]}t.oninput=function(e){if(e.isTrusted){var o=t.selectionEnd,r=t.value[o-1];for(t.value=i.i(a.a)(t.value,n.mask,!0,n.tokens);o<t.value.length&&t.value.charAt(o-1)!==r;)o++;t===document.activeElement&&(t.setSelectionRange(o,o),setTimeout((function(){t.setSelectionRange(o,o)}),0)),t.dispatchEvent(s("input"))}};var c=i.i(a.a)(t.value,n.mask,!0,n.tokens);c!==t.value&&(t.value=c,t.dispatchEvent(s("input")))}},function(t,e,i){"use strict";var s=i(6),a=i(5);e.a=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments[3];return Array.isArray(e)?i.i(a.a)(s.a,e,o)(t,e,n,o):i.i(s.a)(t,e,n,o)}},function(t,e,i){"use strict";function s(t){t.component(c.a.name,c.a),t.directive("mask",o.a)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(0),n=i.n(a),o=i(1),r=i(7),c=i.n(r);i.d(e,"TheMask",(function(){return c.a})),i.d(e,"mask",(function(){return o.a})),i.d(e,"tokens",(function(){return n.a})),i.d(e,"version",(function(){return h}));var h="0.11.1";e.default=s,"undefined"!=typeof window&&window.Vue&&window.Vue.use(s)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(1),a=i(0),n=i.n(a),o=i(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return n.a}}},directives:{mask:s.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t;t=i.i(o.a)(t,this.mask,this.masked,this.tokens);t!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,i){"use strict";function s(t,e,i){return e=e.sort((function(t,e){return t.length-e.length})),function(s,a){for(var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=0;o<e.length;){var r=e[o];o++;var c=e[o];if(!(c&&t(s,c,!0,i).length>r.length))return t(s,r,n,i)}return""}}e.a=s},function(t,e,i){"use strict";function s(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments[3];t=t||"",e=e||"";for(var a=0,n=0,o="";a<e.length&&n<t.length;){var r=e[a],c=s[r],h=t[n];c&&!c.escape?(c.pattern.test(h)&&(o+=c.transform?c.transform(h):h,a++),n++):(c&&c.escape&&(a++,r=e[a]),i&&(o+=r),h===r&&n++,a++)}for(var l="";a<e.length&&i;){r=e[a];if(s[r]){l="";break}l+=r,a++}return o+l}e.a=s},function(t,e,i){var s=i(8)(i(4),i(9),null,null);t.exports=s.exports},function(t,e){t.exports=function(t,e,i,s){var a,n=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,n=t.default);var r="function"==typeof n?n.options:n;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),i&&(r._scopeId=i),s){var c=r.computed||(r.computed={});Object.keys(s).forEach((function(t){var e=s[t];c[t]=function(){return e}}))}return{esModule:a,exports:n,options:r}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,i){t.exports=i(3)}])}))},"4ad4":function(t,e,i){"use strict";var s=i("16b7"),a=i("f2e7"),n=i("58df"),o=i("80d2"),r=i("d9bd");const c=Object(n["a"])(s["a"],a["a"]);e["a"]=c.extend({name:"activatable",props:{activator:{default:null,validator:t=>["string","object"].includes(typeof t)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const t=Object(o["p"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(r["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const t=Object.keys(this.listeners);for(const e of t)this.getActivator().addEventListener(e,this.listeners[e])},genActivator(){const t=Object(o["o"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const t={};return this.openOnHover?(t.mouseenter=t=>{this.getActivator(t),this.runDelay("open")},t.mouseleave=t=>{this.getActivator(t),this.runDelay("close")}):this.openOnClick&&(t.click=t=>{const e=this.getActivator(t);e&&e.focus(),t.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(t.focus=t=>{this.getActivator(t),t.stopPropagation(),this.isActive=!this.isActive}),t},getActivator(t){if(this.activatorElement)return this.activatorElement;let e=null;if(this.activator){const t=this.internalActivator?this.$el:document;e="string"===typeof this.activator?t.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){const t=this.activatorNode[0].componentInstance;e=t&&t.$options.mixins&&t.$options.mixins.some(t=>t.options&&["activatable","menuable"].includes(t.options.name))?t.getActivator():this.activatorNode[0].elm}else t&&(e=t.currentTarget||t.target);return this.activatorElement=(null===e||void 0===e?void 0:e.nodeType)===Node.ELEMENT_NODE?e:null,this.activatorElement},getContentSlot(){return Object(o["o"])(this,"default",this.getValueProxy(),!0)},getValueProxy(){const t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const t=Object.keys(this.listeners);for(const e of t)this.activatorElement.removeEventListener(e,this.listeners[e]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"615b":function(t,e,i){},"6a2a":function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return b}));var s=i("8336"),a=i("b0af"),n=i("4bd4"),o=function(){var t=this,e=t._self._c;return e(a["a"],{staticClass:"user-card py-lg-5 py-md-12 pt-12 pb-7 mx-lg-2 mx-md-2 mx-5 px-lg-5 px-sm-12",attrs:{width:"100%",height:t.$vuetify.breakpoint.mobile?"100%":"fit-content",flat:t.$vuetify.breakpoint.mobile}},[e("div",{class:[t.$vuetify.breakpoint.mobile?"d-flex flex-column justify-space-between":"","form-wrapper full-height"]},[e(n["a"],{ref:"form",attrs:{"lazy-validation":""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onSubmit.apply(null,arguments)}},model:{value:t.form.valid,callback:function(e){t.$set(t.form,"valid",e)},expression:"form.valid"}},[e("div",[e("base-field-input",{attrs:{label:"Full Name","is-required":!0,rules:t.form.nameRules},model:{value:t.form.values.name,callback:function(e){t.$set(t.form.values,"name",e)},expression:"form.values.name"}}),e("base-field-input",{attrs:{label:"Email","is-required":!0,rules:t.form.emailRules,error:Boolean(t.serverErrors&&t.serverErrors.email||t.serverError),"error-messages":t.serverErrors.email},model:{value:t.form.values.email,callback:function(e){t.$set(t.form.values,"email",e)},expression:"form.values.email"}}),e("base-field-input",{attrs:{mask:"+1 (###) ###-####",label:"Phone","is-required":!0,rules:t.form.phoneRules},model:{value:t.form.values.phone,callback:function(e){t.$set(t.form.values,"phone",e)},expression:"form.values.phone"}})],1),e(s["a"],{staticClass:"mt-2",class:{"font-weight-bold":t.$vuetify.breakpoint.mobile},attrs:{depressed:"",width:t.$vuetify.breakpoint.mobile?"100%":100,height:t.$vuetify.breakpoint.mobile?50:35,disabled:!t.form.valid||!t.form.edited,color:"primary"},on:{click:t.onSubmit}},[t._v(" Save ")])],1)],1)])},r=[],c=(i("14d9"),i("25f5")),h=i("42e9"),l=i("2f62"),u=i("87c3");const{mapGetters:d,mapActions:f}=Object(l["a"])("dispatchers");var p={name:"DispatcherEdit",watch:{"form.values":{deep:!0,handler(){this.form.edited=!!this.getShallowDifferenceKeys(this.form.values,this.form.initialValues).length,this.serverError="",Object.keys(this.serverErrors).forEach(t=>{this.serverErrors[t]=""})}}},components:{BaseFieldInput:c["a"]},data:()=>({form:{valid:!0,initialValues:null,edited:!1,values:{name:"",email:"",phone:""},nameRules:[Object(h["j"])("Full Name")],emailRules:[Object(h["j"])("Email")],phoneRules:[Object(h["j"])("Phone")]},serverErrors:{},serverError:""}),computed:{...d({activeDispatcher:u["b"].ACTIVE_DISPATCHER})},methods:{onSubmit(){const t=this.$refs.form.validate();if(!t)return void this.$notificationError("Form not valid");const e={};this.getShallowDifferenceKeys(this.form.values,this.form.initialValues).forEach(t=>{e[t]=this.form.values[t]}),this.editDispatcher({id:this.activeDispatcher.id,data:e}).then(()=>{this.form.edited=!1,this.form.initialValues={...this.form.values},this.getDispatchers(),this.$router.push({name:this.$constants.ROUTE_NAMES.DISPATCHERS}),this.$notificationSuccess("Dispatcher's information was updated")}).catch(t=>{this.$notificationError("Dispatcher's information wasn't updated"),Array.isArray(t)?this.serverError=t:this.serverErrors=t})},getShallowDifferenceKeys(t,e){return Object.keys(t).filter(i=>e[i]!==t[i])},...f({editDispatcher:u["a"].EDIT_DISPATCHER,getDispatchers:u["a"].GET_DISPATCHERS})},mounted(){this.activeDispatcher&&(this.form.values={name:this.activeDispatcher.name,email:this.activeDispatcher.email,phone:this.activeDispatcher.phone.startsWith("+1")?this.activeDispatcher.phone.slice(2):this.activeDispatcher.phone}),this.form.initialValues={...this.form.values}}},v=p,m=i("2877"),g=Object(m["a"])(v,o,r,!1,null,null,null),b=g.exports},"75eb":function(t,e,i){"use strict";var s=i("9d65"),a=i("80d2"),n=i("58df"),o=i("d9bd");function r(t){const e=typeof t;return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function c(t){t.forEach(t=>{t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)})}e["a"]=Object(n["a"])(s["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:r},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick(()=>{if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];t.forEach(t=>{if(!t.elm)return;if(!this.$el.parentNode)return;const e=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(t.elm,e)})}})},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const t=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const e=new MutationObserver(i=>{i.some(t=>Array.from(t.removedNodes).includes(this.$el))&&(e.disconnect(),c(t))});e.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else c(t)}},methods:{getScopeIdAttrs(){const t=Object(a["m"])(this.$vnode,"context.$options._scopeId");return t&&{[t]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let t;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(o["c"])("Unable to locate target "+(this.attach||"[data-app]"),this)}}})},7604:function(t,e,i){"use strict";var s=i("8654"),a=function(){var t=this,e=t._self._c;return e("base-field-label-wrapper",{attrs:{text:t.label,"info-text":t.infoText,"label-for":t.id,"is-required":t.isRequired}},[t.mask?[e(s["a"],t._g(t._b({directives:[{name:"mask",rawName:"v-mask",value:t.mask,expression:"mask"}],staticClass:"body-2 font-weight-semi-bold",attrs:{id:t.id,"clear-icon":"mdi-close-circle",dense:"",outlined:""},scopedSlots:t._u([{key:"message",fn:function({message:t}){return[e("base-field-error",{attrs:{message:t}})]}}],null,!1,1823132289)},"v-text-field",t.$attrs,!1),t.$listeners),[t._t("append",null,{slot:"append"}),t._t("default"),t._t("append-outer",null,{slot:"append-outer"})],2)]:[e(s["a"],t._g(t._b({staticClass:"body-2 font-weight-semi-bold",attrs:{id:t.id,"clear-icon":"mdi-close-circle",dense:"",outlined:""},scopedSlots:t._u([{key:"message",fn:function({message:t}){return[e("base-field-error",{attrs:{message:t}})]}}])},"v-text-field",t.$attrs,!1),t.$listeners),[t._t("append",null,{slot:"append"}),t._t("default"),t._t("append-outer",null,{slot:"append-outer"})],2)]],2)},n=[],o=i("3a60"),r=i("3509"),c=i("6437"),h={name:"BaseFieldInput",inheritAttrs:!1,components:{BaseFieldLabelWrapper:r["a"],BaseFieldError:c["a"]},directives:{mask:o["mask"]},props:{label:{type:String,default:""},infoText:{type:String,default:""},isRequired:{type:Boolean,default:!1},mask:{type:[String,Array,Boolean],default:null}},computed:{id(){return this.label+Math.random()}}},l=h,u=i("2877"),d=Object(u["a"])(l,a,n,!1,null,null,null);e["a"]=d.exports},9734:function(t,e,i){},"9d65":function(t,e,i){"use strict";var s=i("d9bd"),a=i("2b0e");e["a"]=a["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&Object(s["e"])("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},b0af:function(t,e,i){"use strict";i("615b");var s=i("10d2"),a=i("297c"),n=i("1c87"),o=i("58df");e["a"]=Object(o["a"])(a["a"],n["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...n["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s["a"].options.computed.classes.call(this)}},styles(){const t={...s["a"].options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=a["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:i}=this.generateRouteLink();return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},f573:function(t,e,i){"use strict";var s=i("21be"),a=i("fe6c"),n=i("4ad4"),o=i("75eb"),r=i("58df"),c=i("80d2");const h=Object(r["a"])(s["a"],Object(a["b"])(["top","right","bottom","left","absolute"]),n["a"],o["a"]);e["a"]=h.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,s=Math.max(t.width,e.width);let a=0;if(a+=i,(this.left||this.$vuetify.rtl&&!this.right)&&(a-=s-t.width),this.offsetX){const e=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));a+=this.left?-e:t.width}return this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),a},computedTop(){const t=this.dimensions.activator,e=this.dimensions.content;let i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled(t){t&&this.callDeactivate()},isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(t){return Object(c["g"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop(){return Object(c["g"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(t,e){const i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow(t){const e=this.getInnerHeight(),i=this.absoluteYOffset+e,s=this.dimensions.activator,a=this.dimensions.content.height,n=t+a,o=i<n;return o&&this.offsetOverflow&&s.top>a?t=this.pageYOffset+(s.top-a):o&&!this.allowOverflow?t=i-a-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate(){this.hasWindow&&this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(!1!==this.attach)return void(this.activatorFixed=!1);let t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const t=n["a"].options.methods.genActivatorListeners.call(this),e=t.click;return e&&(t.click=t=>{this.openOnClick&&e&&e(t),this.absoluteX=t.clientX,this.absoluteY=t.clientY}),t},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(t){const e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure(t){if(!t||!this.hasWindow)return null;const e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){const i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek(t){requestAnimationFrame(()=>{const e=this.$refs.content;e&&"none"===e.style.display?(e.style.display="inline-block",t(),e.style.display="none"):t()})},startTransition(){return new Promise(t=>requestAnimationFrame(()=>{this.isContentActive=this.hasJustFocused=this.isActive,t()}))},updateDimensions(){this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const t={activator:{...this.dimensions.activator},content:{...this.dimensions.content}};if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition();else{const e=this.getActivator();if(!e)return;t.activator=this.measure(e),t.activator.offsetLeft=e.offsetLeft,!1!==this.attach?t.activator.offsetTop=e.offsetTop:t.activator.offsetTop=0}this.sneakPeek(()=>{if(this.$refs.content){if(this.$refs.content.offsetParent){const e=this.getRoundedBoundedClientRect(this.$refs.content.offsetParent);this.relativeYOffset=window.pageYOffset+e.top,t.activator.top-=this.relativeYOffset,t.activator.left-=window.pageXOffset+e.left}t.content=this.measure(this.$refs.content)}this.dimensions=t})}}})}}]);
//# sourceMappingURL=chunk-2859759c.bbfc76f2.js.map