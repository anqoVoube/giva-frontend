(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07101727"],{"6ca7":function(t,e,i){},8547:function(t,e,i){"use strict";var a=i("2b0e"),s=i("80d2");e["a"]=a["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:s["j"]}}})},ac7c:function(t,e,i){"use strict";i("6ca7"),i("ec29");var a=i("9d26"),s=i("c37a"),n=(i("14d9"),i("5607")),l=i("2b0e"),o=l["a"].extend({name:"rippleable",directives:{ripple:n["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),r=i("8547"),u=i("58df");function c(t){t.preventDefault()}var h=Object(u["a"])(s["a"],o,r["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=s["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:c},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:c},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}});e["a"]=h.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(a["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...e,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},c83c:function(t,e,i){"use strict";i.r(e),i.d(e,"default",(function(){return m}));var a=i("8336"),s=i("ac7c"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex flex-column",class:{"justify-space-between":t.$vuetify.breakpoint.mobile}},[e("div",[e(s["a"],{attrs:{label:"Attach BOL to Invoices"},model:{value:t.form.values.attach_bol_in_invoice,callback:function(e){t.$set(t.form.values,"attach_bol_in_invoice",e)},expression:"form.values.attach_bol_in_invoice"}}),e(s["a"],{attrs:{label:"Add pickup/delivery dates to BOL"},model:{value:t.form.values.add_pickup_delivery_date_to_bol,callback:function(e){t.$set(t.form.values,"add_pickup_delivery_date_to_bol",e)},expression:"form.values.add_pickup_delivery_date_to_bol"}})],1),e(a["a"],{staticClass:"mt-2 font-weight-bold",attrs:{width:t.$vuetify.breakpoint.mobile?"100%":100,height:t.$vuetify.breakpoint.mobile?50:35,color:"primary",depressed:""},on:{click:t.submitBillingForm}},[t._v(" Save ")])],1)},l=[],o=i("2f62"),r=i("b74d");const{mapState:u,mapActions:c}=Object(o["a"])("settings");var h={name:"SettingsBilling",data:()=>({form:{values:{attach_bol_in_invoice:null,add_pickup_delivery_date_to_bol:null}}}),computed:{...u({billing:t=>t.billingSettings.data})},beforeMount(){this.form.values={attach_bol_in_invoice:this.billing.attach_bol_in_invoice,add_pickup_delivery_date_to_bol:this.billing.add_pickup_delivery_date_to_bol}},methods:{...c({addSettingsBilling:r["a"].ADD_BILLING_SETTINGS}),submitBillingForm(){this.addSettingsBilling({data:this.form.values}).then(()=>{this.$notificationSuccess("Settings was saved")}).catch(()=>{this.$notificationError("Settings was'nt saved deleted")})}}},d=h,p=i("2877"),v=Object(p["a"])(d,n,l,!1,null,null,null),m=v.exports},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-07101727.7857afa4.js.map