(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["load"],{1681:function(t,a,e){},"210b":function(t,a,e){},"250e":function(t,a,e){},3832:function(t,a,e){"use strict";e("65ef")},"39f5":function(t,a,e){"use strict";var s=e("56b0"),i=e("da13"),o=e("5d23"),n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"panel-dropdown"},[a(s["a"],{staticClass:"pa-0",attrs:{ripple:!1,value:t.expand},scopedSlots:t._u([{key:"activator",fn:function(){return[a(i["a"],{staticClass:"pa-0"},[a(o["c"],[a("h3",{staticClass:"mr-7 font-weight-semi-bold body-1"},[t._v(" "+t._s(t.title)+" ")])])],1)]},proxy:!0}])},[a("div",{staticClass:"panel-dropdown-content"},[t._t("default")],2)])],1)},l=[],d={name:"PanelDropdown",props:{title:{type:String,default:""},expand:{type:Boolean,default:!1}}},r=d,c=(e("5ac6"),e("2877")),p=Object(c["a"])(r,n,l,!1,null,"fd9e38ca",null);a["a"]=p.exports},"3d45":function(t,a,e){"use strict";e("7cfe")},4169:function(t,a,e){"use strict";var s=e("8336"),i=e("169a"),o=e("132d"),n=(e("20f6"),e("e8f2")),l=Object(n["a"])("layout"),d=function(){var t=this,a=t._self._c;return a("div",{staticClass:"d-flex flex-align-center"},[a(i["a"],t._g(t._b({attrs:{"max-width":t.maxWidth},on:{"click:outside":t.close,keydown:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"esc",27,a.key,["Esc","Escape"])?null:t.close.apply(null,arguments)}},model:{value:t.modalOpened,callback:function(a){t.modalOpened=a},expression:"modalOpened"}},"v-dialog",t.$attrs,!1),t.$listeners),[a(l,{staticClass:"white d-flex flex-column px-5 py-3"},[t.isCloseButtonExist?a("div",{staticClass:"d-flex justify-end"},[a(s["a"],{staticClass:"btn-close",attrs:{icon:""},on:{click:t.close}},[a(o["a"],[t._v("mdi-close")])],1)],1):t._e(),t._t("default")],2)],1)],1)},r=[],c={name:"Modal",props:{modalOpened:{type:Boolean,required:!0},maxWidth:{type:String,required:!1,default:"800px"},isCloseButtonExist:{type:Boolean,required:!1,default:!0}},data(){return{isOpened:this.modalOpened}},methods:{close(){this.$emit("modal:close")}}},p=c,_=(e("3832"),e("2877")),h=Object(_["a"])(p,d,r,!1,null,null,null);a["a"]=h.exports},"5ac6":function(t,a,e){"use strict";e("85e8")},"65ef":function(t,a,e){},7975:function(t,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return R}));var s=e("8336"),i=e("b0af"),o=e("62ad"),n=e("a523"),l=e("ce7e"),d=e("132d"),r=e("8860"),c=e("da13"),p=e("5d23"),_=e("e449"),h=e("0fd9"),u=e("1f4f"),m=e("a844"),v=function(){var t=this,a=t._self._c;return a("base-layout",{attrs:{"white-background":t.$vuetify.breakpoint.mobile,loading:t.load.loading,"no-shadow":""},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"d-flex flex-lg-row flex-column full-width align-lg-center"},[a(o["a"],{staticClass:"px-0 py-xs-3",attrs:{cols:"12",sm:"2"}},[a(s["a"],{staticClass:"btn-no-bg text-capitalize pa-0 primary--text",attrs:{depressed:"",text:"",to:{name:t.$constants.ROUTE_NAMES.LOADS,query:{...t.query,page:1}},ripple:!1}},[a(d["a"],{attrs:{left:""}},[t._v(" mdi-arrow-left ")]),t._v(" Loads ")],1)],1),t.load.loading||404===t.load.error?t._e():a(o["a"],{staticClass:"d-flex justify-sm-end pa-0"},[a(s["a"],{staticClass:"primary px-md-4 px-lg-2 px-xl-4",attrs:{depressed:""},on:{click:function(a){t.$root.$emit("loads-list-item:dispatch-drawer-open",{loadId:t.load.data.load_id,loadStatus:t.load.data.status.toLowerCase(),fromList:!1})}}},[t._v(" "+t._s(t.load.data.driver?"Redispatch":"Dispatch")+" ")]),a(_["a"],{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({attrs:e,on:i}){return[a(s["a"],t._g(t._b({staticClass:"primary--text ml-2 ml-sm-4 px-md-4 px-lg-2 px-xl-4",attrs:{depressed:"",width:"100"}},"v-btn",e,!1),i),[t._v(" Options ")])]}}],null,!1,2439716615)},[a(r["a"],{attrs:{dense:""}},[a(c["a"],{staticClass:"body-2 font-weight-medium",attrs:{href:`https://givadispatch.com/loads/${t.load.data.id}/info`,target:"_blank",link:""}},[t._v(" Print ")]),a(c["a"],{staticClass:"body-2 font-weight-medium",attrs:{link:"",to:{name:t.$constants.ROUTE_NAMES.LOAD_SEND_BOL}}},[t._v(" Send BOL ")]),a(c["a"],{staticClass:"body-2 font-weight-medium",attrs:{link:"",to:{name:t.$constants.ROUTE_NAMES.LOAD_SEND_INVOICE,params:{id:t.id}}}},[t._v(" Send Invoice ")]),a(c["a"],{staticClass:"body-2 font-weight-medium",attrs:{link:"",to:{name:t.$constants.ROUTE_NAMES.LOAD_SEND_RECEIPT,params:{id:t.id}}}},[t._v(" Send Receipt ")]),t.load.data.status&&t.load.data.status.toLowerCase()===t.$constants.LOAD_STATUSES.BILLED.toLowerCase()?a(c["a"],{staticClass:"body-2 font-weight-medium",attrs:{link:""},on:{click:()=>t.updateLoadStatus(t.$constants.LOAD_STATUSES.PAID,t.loadStatus)}},[t._v(" Mark as Paid ")]):t._e(),t.load.data.status&&t.load.data.status.toLowerCase()===t.$constants.LOAD_STATUSES.BILLED.toLowerCase()?a(c["a"],{staticClass:"body-2 font-weight-medium",attrs:{link:""},on:{click:()=>t.updateLoadStatus(t.$constants.LOAD_STATUSES.PAST_DUE,t.loadStatus)}},[t._v(" Mark as Past Due ")]):t._e(),a(l["a"]),t.load.data.status&&t.load.data.status.toLowerCase()!==t.$constants.LOAD_STATUSES.ARCHIVED.toLowerCase()?a(c["a"],{staticClass:"body-2 font-weight-medium",attrs:{link:""},on:{click:()=>t.updateStatus(t.$constants.LOAD_STATUSES.ARCHIVED)}},[t._v(" Archive ")]):t._e(),t.load.data.status&&t.load.data.status.toLowerCase()!==t.$constants.LOAD_STATUSES.DELETED.toLowerCase()?a(c["a"],{staticClass:"body-2 font-weight-medium",attrs:{link:""},on:{click:()=>t.updateStatus(t.$constants.LOAD_STATUSES.DELETED)}},[t._v(" Delete ")]):t._e()],1)],1),a(s["a"],{staticClass:"primary--text ml-2 ml-sm-4 px-md-4 px-lg-2 px-xl-4",attrs:{depressed:"",width:"100",to:{name:t.$constants.ROUTE_NAMES.LOAD_EDIT,params:{id:t.id}},exact:""}},[t._v(" Edit ")])],1)],1)]},proxy:!0},{key:"content",fn:function(){return[404!==t.load.error?[a(n["a"],{staticClass:"pb-16",staticStyle:{padding:"30px 30px"},attrs:{fluid:""}},[a(h["a"],{staticClass:"px-2"},[a(o["a"],{attrs:{cols:"12",sm:"12",md:"12",lg:"8"}},[a(i["a"],{staticClass:"form__card"},[a(h["a"],[a(o["a"],{attrs:{cols:"12",sm:"6"}},[t._v(" Load ID: "),a("b",[t._v(t._s(t.load.data.load_id))]),t.load.data.status?a("status-load",{staticClass:"ml-3",attrs:{status:t.load.data.status}}):t._e()],1),a(o["a"],{staticClass:"text-sm-right",attrs:{cols:"12",sm:"5"}},[t.load.data.carrier_fee&&t.load.data.payment_method_name?a("p",{staticClass:"ma-0"},[t._v(" Price: "),a("b",[t._v("$"+t._s(t.load.data.carrier_fee))]),t._v(" ("+t._s(t.load.data.payment_method_name)+") ")]):a("p",{staticClass:"ma-0 font-weight-medium body-2 load-card-grey--text"},[t._v(" Payment information is not available yet ")])])],1),a(h["a"],[a(o["a"],{attrs:{cols:"12"}},[a("h3",{staticClass:"primary-dark--text font-weight-semi-bold mb-2 mb-2"},[t._v(" "+t._s(t.load.data&&t.load.data.vehicles&&t.load.data.vehicles.length?"Vehicles":"")+" "),t.load.data.enclosed?a("status-load",{staticClass:"ma-1",attrs:{status:"enclosed"}}):t._e()],1),t.load.data&&t.load.data.vehicles&&t.load.data.vehicles.length?a(u["a"],{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticClass:"px-1"},[t._v(" INOP ")]),a("th",{staticClass:"px-1"},[t._v(" Year ")]),a("th",{staticClass:"px-1"},[t._v(" Make ")]),a("th",{staticClass:"px-1"},[t._v(" Model ")]),a("th",{staticClass:"px-1"},[t._v(" Type ")]),a("th",{staticClass:"px-1"},[t._v(" VIN ")]),a("th",{staticClass:"px-1"},[t._v(" Plate ")]),a("th",{staticClass:"px-1"},[t._v(" Color ")]),a("th",{staticClass:"px-1"},[t._v(" Lot Number ")]),a("th",{staticClass:"px-1"},[t._v(" Additional info ")]),a("th",{staticClass:"px-1"})])]),a("tbody",t._l(t.load.data.vehicles,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"px-1 py-4"},[a("status-load",{staticClass:"label-inop d-inline-block px-2 py-1 font-weight-black",attrs:{uppercase:"",status:e.inop?"inop":"oper"}})],1),a("td",{staticClass:"px-1 py-4"},[t._v(" "+t._s(e.year)+" ")]),a("td",{staticClass:"px-1 py-4"},[t._v(" "+t._s(e.make_name)+" ")]),a("td",{staticClass:"px-1 py-4"},[t._v(" "+t._s(e.model_name)+" ")]),a("td",{staticClass:"px-1 py-4"},[t._v(" "+t._s(e.type_name)+" ")]),a("td",{staticClass:"px-1 py-4"},[t._v(" "+t._s(e.vin)+" ")]),a("td",{staticClass:"px-1 py-4"},[t._v(" "+t._s(e.plate)+" ")]),a("td",{staticClass:"px-1 py-4"},[t._v(" "+t._s(e.color)+" ")]),a("td",{staticClass:"px-1 py-4"},[t._v(" "+t._s(e.lot)+" ")]),a("td",{staticClass:"px-1 py-4"},[a("p",{staticClass:"additional-info"},[t._v(" "+t._s(e.additional_info)+" ")])])])})),0)]):t._e()],1)],1)],1),a(h["a"],[a(o["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[a("div",{staticClass:"info-panel"},[a("div",{staticClass:"info-panel-header pt-3 pr-5 pb-3 pl-5"},[a("h3",{staticClass:"info-panel-header-title mr-7 body-1 font-weight-semi-bold"},[t._v(" Pickup ")])]),t.load.data.pickup_address?[a("div",{staticClass:"info-panel-item pa-5"},[a("ul",[a("li",{staticClass:"font-weight-bold"},[t._v(" "+t._s(t.load.data.pickup_company_name)+" ")]),a("li",[t._v(" "+t._s(t.load.data.pickup_address)+" ")]),a("li",[t._v(" "+t._s(t.load.data.pickup_city)+", "+t._s(t.load.data.pickup_state_name)+" "+t._s(t.load.data.pickup_zip)+" ")])])]),a("div",{staticClass:"info-panel-item pa-5"},[a("ul",[t.load.data.pickup_email?a("li",[t._v(" Email: "+t._s(t.load.data.pickup_email)+" ")]):t._e(),t.load.data.pickup_contact_name?a("li",[t._v(" Contact: "+t._s(t.load.data.pickup_contact_name)+" ")]):t._e(),t.load.data.pickup_phone?a("li",[t._v(" Phone: "+t._s(t.load.data.pickup_phone)+" ")]):t._e(),t.load.data.scheduled_pickup_date?a("li",[t._v(" Scheduled for: "+t._s(t._f("formatDate")(t.load.data.scheduled_pickup_date&&t.load.data.scheduled_pickup_date))+" ")]):t._e(),t.load.data.actual_pickup_date?a("li",[t._v(" Actual pickup date: "+t._s(t._f("formatDate")(t.load.data.actual_pickup_date&&t.load.data.actual_pickup_date.split(" ")[0]))+" ")]):t._e(),t.load.data.buyer_number?a("li",[t._v(" Buyer Number: "+t._s(t.load.data.buyer_number)+" ")]):t._e()])])]:a("div",{staticClass:"pa-5 d-flex justify-center align-center text-center"},[a("span",{staticClass:"font-weight-medium load-card-grey--text"},[t._v(" Pickup information is not available yet ")])])],2)]),a(o["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[a("div",{staticClass:"info-panel"},[a("div",{staticClass:"info-panel-header pt-3 pr-5 pb-3 pl-5"},[a("h3",{staticClass:"info-panel-header-title mr-7 body-1 font-weight-semi-bold"},[t._v(" Delivery ")])]),t.load.data.delivery_address?[a("div",{staticClass:"info-panel-item pa-5"},[a("ul",[a("li",{staticClass:"font-weight-bold"},[t._v(" "+t._s(t.load.data.delivery_company_name)+" ")]),a("li",[t._v(" "+t._s(t.load.data.delivery_address)+" ")]),a("li",[t._v(" "+t._s(t.load.data.delivery_city)+", "+t._s(t.load.data.delivery_state_name)+" "+t._s(t.load.data.delivery_zip)+" ")])])]),a("div",{staticClass:"info-panel-item pa-5"},[a("ul",[t.load.data.delivery_email?a("li",[t._v(" Email: "+t._s(t.load.data.delivery_email)+" ")]):t._e(),t.load.data.delivery_contact_name?a("li",[t._v(" Contact: "+t._s(t.load.data.delivery_contact_name)+" ")]):t._e(),t.load.data.delivery_phone?a("li",[t._v(" Phone: "+t._s(t.load.data.delivery_phone)+" ")]):t._e(),t.load.data.scheduled_delivery_date?a("li",[t._v(" Scheduled for: "+t._s(t._f("formatDate")(t.load.data.scheduled_delivery_date&&t.load.data.scheduled_delivery_date))+" ")]):t._e(),t.load.data.actual_delivery_date?a("li",[t._v(" Actual delivery date: "+t._s(t._f("formatDate")(t.load.data.actual_delivery_date&&t.load.data.actual_delivery_date.split(" ")[0]))+" ")]):t._e()])])]:a("div",{staticClass:"pa-5 d-flex justify-center align-center text-center"},[a("span",{staticClass:"font-weight-medium load-card-grey--text"},[t._v(" Delivery information is not available yet ")])])],2)])],1),a(h["a"],[a(o["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[a("div",{staticClass:"info-panel"},[a("div",{staticClass:"info-panel-header pt-3 pr-5 pb-3 pl-5"},[a("h3",{staticClass:"info-panel-header-title mr-7 body-1 font-weight-semi-bold"},[t._v(" Payment Information ")])]),a("div",{staticClass:"info-panel-item pa-5"},[a("ul",[t.load.data.payment_method_name?a("li",[t._v(" Payment Method: "+t._s(t.load.data.payment_method_name)+" ")]):t._e(),t.load.data.carrier_fee?a("li",[t._v(" Carrier Fee: $"+t._s(t.load.data.carrier_fee)+" ")]):t._e(),t.load.data.broker_fee?a("li",[t._v(" Broker Fee: $"+t._s(t.load.data.broker_fee)+" ")]):t._e(),t.load.data.payment_additional_info?a("li",[t._v(" Additional Info: "+t._s(t.load.data.payment_additional_info)+" ")]):t._e(),parseInt(t.load.data.delivery_payment)?a("li",[t._v(" Payment on Delivery: $"+t._s(t.load.data.delivery_payment)+" ")]):t._e(),parseInt(t.load.data.pickup_payment)?a("li",[t._v(" Payment on Pickup: $"+t._s(t.load.data.pickup_payment)+" ")]):t._e()])]),t.load.data.payment_terms?a("div",{staticClass:"info-panel-item pa-5"},[a("span",{staticClass:"label-notes d-inline-block px-2 py-1 font-weight-black body-2"},[t._v(" Payment notes: ")]),t._v(" "+t._s(t.load.data.payment_terms)+" ")]):t._e()])]),a(o["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[a("div",{staticClass:"info-panel"},[a("div",{staticClass:"info-panel-header pt-3 pr-5 pb-3 pl-5"},[a("h3",{staticClass:"info-panel-header-title mr-7 body-1 font-weight-semi-bold"},[t._v(" Shipper/Customer ")])]),[a("div",{staticClass:"info-panel-item pa-5"},[a("ul",[a("li",{staticClass:"font-weight-bold"},[t._v(" "+t._s(t.load.data.customer_company_name)+" ")]),a("li",[t._v(" "+t._s(t.load.data.customer_address)+" ")]),a("li",[t._v(" "+t._s(t.load.data.customer_city)+", "+t._s(t.load.data.customer_state_name)+" "+t._s(t.load.data.customer_zip)+" ")])])]),a("div",{staticClass:"info-panel-item pa-5"},[a("ul",[t.load.data.customer_email?a("li",[t._v(" Email: "+t._s(t.load.data.customer_email)+" ")]):t._e(),t.load.data.customer_contact_name?a("li",[t._v(" Contact: "+t._s(t.load.data.customer_contact_name)+" ")]):t._e(),t.load.data.customer_phone?a("li",[t._v(" Phone: "+t._s(t.load.data.customer_phone)+" ")]):t._e(),t.load.data.customer_fax?a("li",[t._v(" Fax: "+t._s(t.load.data.customer_fax)+" ")]):t._e()])])]],2)])],1),a(h["a"],[a(o["a"],{attrs:{cols:"12",sm:"6",md:"6"}},[a("div",{staticClass:"info-panel"},[a("div",{staticClass:"info-panel-header pt-3 pr-5 pb-3 pl-5"},[a("h3",{staticClass:"info-panel-header-title mr-7 body-1 font-weight-semi-bold"},[t._v(" Invoice Information ")])]),a("div",{staticClass:"info-panel-item pa-5"},[t.load.data.invoice?[a("ul",[a("li",[t._v("Invoice ID: "+t._s(t.load.data.invoice.id))]),a("li",[t._v(" Invoice date: "+t._s(t._f("formatDate")(t.load.data.invoice.date.split(" ")[0]))+" ")])])]:[a("span",{staticClass:"font-weight-medium load-card-grey--text"},[t._v(" Invoice information is not available yet ")])]],2),t.load.data.invoice&&t.load.data.invoice.notes?a("div",{staticClass:"info-panel-item pa-5"},[a("span",{staticClass:"label-notes d-inline-block px-2 py-1 font-weight-black body-2"},[t._v(" Invoice notes: ")]),t._v(" "+t._s(t.load.data.invoice.notes)+" ")]):t._e()])])],1),t.load.data.driver_instructions?[a(h["a"],[a(o["a"],{attrs:{cols:"12"}},[a("div",{staticClass:"info-panel"},[a("div",{staticClass:"info-panel-header pt-3 pr-5 pb-3 pl-5"},[a("h3",{staticClass:"info-panel-header-title mr-7 body-1 font-weight-semi-bold"},[t._v(" Driver's Instructions ")])]),a("div",{staticClass:"pa-5 info-panel-item"},[t._v(" "+t._s(t.load.data.driver_instructions)+" ")])])])],1)]:t._e(),a(h["a"],[a(o["a"],{attrs:{cols:"12"}},[a(i["a"],{staticClass:"form__card"},[a("h3",{staticClass:"primary-dark--text font-weight-semi-bold mb-2"},[t._v(" Expenses ")]),t.load.data&&t.load.data.expenses&&t.load.data.expenses.length?a(u["a"],{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticClass:"py-3"},[t._v(" # ")]),a("th",{staticClass:"py-3"},[t._v(" Type ")]),a("th",{staticClass:"py-3"},[t._v(" Price ")]),a("th",{staticClass:"py-3"},[t._v(" Date ")]),a("th",{staticClass:"py-3 text-no-wrap"},[t._v(" Show in invoice ")]),a("th",{staticClass:"py-3 text-no-wrap"},[t._v(" Deduct from driver pay ")]),a("th",{staticClass:"py-3"},[t._v(" Receipt ")])])]),a("tbody",t._l(t.load.data.expenses,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"py-3"},[t._v(" "+t._s(s+1)+" ")]),a("td",{staticClass:"py-3 text-no-wrap"},[t._v(" "+t._s(e.type_name)+" ")]),a("td",{staticClass:"py-3"},[t._v(" "+t._s(e.price)+" ")]),a("td",{staticClass:"py-3 text-no-wrap"},[t._v(" "+t._s(t._f("formatDate")(e.date))+" ")]),a("td",{staticClass:"py-3 font-weight-bold",class:{"success--text":!0===e.show_in_invoice,"color-red--text":!1===e.show_in_invoice}},[t._v(" "+t._s(e.show_in_invoice?"Yes":"No")+" ")]),a("td",{staticClass:"py-3 font-weight-bold",class:{"success--text":!0===e.deduct_from_driver,"color-red--text":!1===e.deduct_from_driver}},[t._v(" "+t._s(e.deduct_from_driver?"Yes":"No")+" ")]),a("td",{staticClass:"py-3"},[e.receipt?[a("a",{attrs:{href:e.receipt,target:"_blank",rel:"noopener noreferrer"}},[t._v(" View ")])]:t._e()],2)])})),0)]):a("p",{staticClass:"ma-0 mt-3 mr-7 mb-5 font-weight-medium body-2 load-card-grey--text"},[t._v(" No expenses ")])],1)],1)],1),t._e(),a(h["a"],[a(o["a"],{attrs:{cols:"12"}},[a(i["a"],{staticClass:"form__card"},[a("h3",{staticClass:"primary-dark--text font-weight-semi-bold mb-2"},[t._v(" Attachments ")]),t.load.attachments.length?a(u["a"],{staticClass:"table-attachment",attrs:{dense:""}},[a("tbody",t._l(t.load.attachments,(function(e,s){return a("tr",{key:s},[a("td",{staticClass:"pa-2"},[a(d["a"],{staticClass:"mr-1"},[t._v(" mdi-paperclip ")]),a("a",{staticClass:"text-no-wrap",attrs:{href:e.file,target:"_blank"}},[t._v(t._s(e.name))])],1),a("td",{staticClass:"table-attachment-td-size pa-2"},[a("span",{staticClass:"text-no-wrap"},[t._v(" "+t._s(e.size)+" ")])])])})),0)]):a("p",{staticClass:"ma-0 mt-3 mr-7 mb-5 font-weight-medium body-2 load-card-grey--text"},[t._v(" No attachments ")])],1)],1)],1),a(h["a"],[a(o["a"],{attrs:{cols:"12"}},[a(i["a"],{staticClass:"form__card"},[a("h3",{staticClass:"primary-dark--text font-weight-semi-bold mb-2"},[t._v(" BOL and Invoice and Receipt ")]),a("div",[a(s["a"],{staticClass:"primary--text mr-2",attrs:{depressed:"",width:"135",href:t.bolLink,target:"_blank"}},[t._v(" View BOL ")]),a(s["a"],{staticClass:"primary--text mr-2",attrs:{depressed:"",width:"135",href:t.invoiceLink,target:"_blank"}},[t._v(" View Invoice ")]),a(s["a"],{staticClass:"primary--text mr-2",attrs:{depressed:"",width:"135",href:t.receiptLink,target:"_blank"}},[t._v(" View Receipt ")])],1)])],1)],1),a(h["a"],[a(o["a"],{attrs:{cols:"12"}},[t.inspections.length?a("photo-inspection",{attrs:{"load-id":t.load.data.id,inspections:t.inspections}}):t._e()],1)],1)],2),a(o["a"],{attrs:{cols:"12",sm:"12",md:"12",lg:"4"}},[a(h["a"],{staticClass:"mb-md-11 mb-6"},[a(o["a"],{staticClass:"col-12 py-0"},[t.load.data.driver?a("p",{staticClass:"ma-0 mt-3 mr-7 font-weight-medium body-2 mb-0 mr-7 primary-dark--text text--accent-1"},[t._v(" Dispatched to "+t._s(t.load.data.driver)+" "+t._s(t.load.data.driver_phone?"| Phone: ":"")+" "),t.load.data.driver_phone?a("a",{attrs:{href:"tel:"+t.load.data.driver_phone}},[t._v(" "+t._s(t.load.data.driver_phone)+" ")]):t._e()]):t._e(),t.load.data.invoice&&t.load.data.status&&t.load.data.status.toLowerCase()===t.$constants.LOAD_STATUSES.BILLED?a("p",{staticClass:"ma-0 mt-3 mr-7 font-weight-medium body-2 mb-0 mr-7 success--text text--darken-1"},[t._v(" Invoice is sent on "+t._s(t._f("formatDate")(t.load.data.invoice&&t.load.data.invoice.created.split(" ")[0]))+" "+t._s(t.load.data.invoice.created.split(" ")[1])+" ")]):t._e(),t.load.data.payment_received_date?a("p",{staticClass:"ma-0 mt-3 mr-7 font-weight-medium body-2 mb-0 mr-7 success--text text--darken-1"},[t._v(" Payment is received on "+t._s(t._f("formatDate")(t.load.data.payment_received_date.split(" ")[0]))+" "+t._s(t.load.data.payment_received_date.split(" ")[1])+" ")]):t._e(),t.load.data.status&&t.load.data.status.toLowerCase()===t.$constants.LOAD_STATUSES.BILLED?a("p",{staticClass:"ma-0 mt-3 mr-7 font-weight-medium body-2 mb-0 mr-7 load-card-grey--text"},[t._v(" No payment received ")]):t._e(),t.load.data.status&&"past due"===t.load.data.status.toLowerCase()?a("p",{staticClass:"ma-0 mt-3 mr-7 font-weight-medium body-2 mb-0 mr-7 error--text"},[t._v(" Payment is past due ")]):t._e()])],1),a(h["a"],{staticClass:"mb-md-11 mb-6"},[a(o["a"],{staticClass:"py-0",attrs:{cols:"12"}},[a("div",{staticClass:"info-panel"},[a("div",{staticClass:"info-panel-header pt-2 pr-5 pb-2 pl-5 d-flex justify-space-between align-center"},[a("h3",{staticClass:"font-weight-semi-bold body-1 mr-7"},[t._v(" Internal Notes ")]),a(s["a"],{staticClass:"primary--text",attrs:{depressed:"","min-width":100},on:{click:function(a){t.modalOpened=!0}}},[t._v(" "+t._s(t.load.data.internal_notes?"Edit ":"Add ")+" notes "),a("Modal",{attrs:{"modal-opened":t.modalOpened},on:{"modal:close":t.closeInternalNotesModal}},[a("h3",{staticClass:"pb-3 primary-dark--text"},[t._v(" Add a new internal note to the order ")]),a(m["a"],{staticClass:"textarea",attrs:{outlined:"",rows:"6","row-height":"20",shaped:""},model:{value:t.internal_notes,callback:function(a){t.internal_notes=a},expression:"internal_notes"}}),a("div",{staticClass:"d-flex justify-end"},[a(s["a"],{staticClass:"primary-text mr-2",attrs:{depressed:""},on:{click:t.closeInternalNotesModal}},[t._v(" Close ")]),a(s["a"],{staticClass:"font-weight-semi-bold",attrs:{depressed:"",color:"primary"},on:{click:t.updateInternalNotes}},[t._v(" Save ")])],1)],1)],1)],1),a("div",{staticClass:"pa-5 info-panel-item"},[a("p",{staticClass:"ma-0 mr-7 font-weight-medium",class:{"load-card-grey--text":!t.load.data.internal_notes}},[t._v(" "+t._s(t.load.data.internal_notes?t.load.data.internal_notes:"Add your first internal note for this load")+" ")])])])])],1),t.load.activities.length?a(h["a"],[a(o["a"],{staticClass:"py-0",attrs:{cols:"12"}},[a("panel-dropdown",{attrs:{title:"Activities",expand:""}},t._l(t.load.activities,(function(e){return a(c["a"],{key:e.activityDate,staticClass:"panel-activities-item pa-5"},[a(p["a"],[a("ul",[a("li",[t._v(" "+t._s(e.title)+" ")]),e.created?a("li",{staticClass:"body-2 load-card-grey--text"},[t._v(" "+t._s(t._f("formatDate")(e.created&&e.created.split(" ")[0]))+" "+t._s(e.created&&e.created.split(" ")[1])+" ")]):t._e()])])],1)})),1)],1)],1):t._e()],1)],1)],1)]:[a("page-not-found-content",{staticClass:"page-wrapper"})]]},proxy:!0}])})},f=[],y=e("2f62"),C=e("60e5"),x=e("4169"),b=e("c437"),g=e("a9af"),w=e("39f5"),k=e("6367"),S=e("d63e"),I=e("922b"),A=e("aee7");const{mapActions:D,mapState:L,mapGetters:E,mapMutations:O}=Object(y["a"])("loads"),{mapActions:P,mapState:$}=Object(y["a"])("drivers");var T={name:"Load",components:{PanelDropdown:w["a"],StatusLoad:g["a"],Modal:x["a"],PhotoInspection:b["a"],BaseLayout:k["a"],PageNotFoundContent:A["a"]},filters:{formatDate:I["a"]},props:{id:{type:String,required:!0}},data:()=>({modalOpened:!1,internal_notes:null}),computed:{...L(["load","inspections","query"]),...E({invoiceLink:C["d"].INVOICE_LINK,receiptLink:C["d"].RECEIPT_LINK,bolLink:C["d"].BOL_LINK}),...$(["drivers"])},methods:{updateStatus(t){this.updateLoadStatus({loadId:this.id,nextStatus:t}).then(()=>this.$notificationSuccess("Load status was updated")).catch(t=>{400===t.response.status?this.$notificationError(t.response.data[0]):this.$notificationError("Load data wasn't updated")})},closeInternalNotesModal(){this.modalOpened=!1,this.internal_notes=this.load.data.internal_notes},updateInternalNotes(){const t={internal_notes:this.internal_notes};this.updateLoadData({id:this.id,data:t}).then(()=>{this.$notificationSuccess("Internal notes was updated"),this.updateLoadPropData({prop:"data",data:t}),this.closeInternalNotesModal()}).catch(()=>this.$notificationSuccess("Internal notes was not updated"))},...D({getLoad:C["c"].GET_LOAD,getLoadAttachments:C["c"].GET_LOAD_ATTACHMENTS,dispatchToDriver:C["c"].DISPATCH_LOAD_TO_DRIVER,getLoadVehicleInspections:C["c"].GET_LOAD_VEHICLE_INSPECTIONS,updateLoadData:C["c"].UPDATE_LOAD_DATA,updateLoadStatus:C["c"].UPDATE_LOAD_STATUS,getLoadActivities:C["c"].GET_LOAD_ACTIVTIES}),...O({}),...P({getDrivers:S["a"].GET_DRIVERS})},mounted(){this.getDrivers({query:"?status=active"}),this.getLoad({id:this.id}).then(()=>{this.internal_notes=this.load.data.internal_notes,this.getLoadAttachments({id:this.id}),this.getLoadVehicleInspections({loadId:this.id}),this.getLoadActivities({id:this.id})})}},N=T,B=(e("a126"),e("2877")),j=Object(B["a"])(N,v,f,!1,null,"5c944162",null),R=j.exports},"7cfe":function(t,a,e){},"85e8":function(t,a,e){},a126:function(t,a,e){"use strict";e("250e")},a844:function(t,a,e){"use strict";e("1681");var s=e("8654"),i=e("58df");const o=Object(i["a"])(s["a"]);a["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick(()=>{var a;t?this.calculateInputHeight():null===(a=this.$refs.input)||void 0===a||a.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const a=t.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(e,a)+"px"},genInput(){const t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},a9af:function(t,a,e){"use strict";var s=e("cc20"),i=function(){var t=this,a=t._self._c;return a(s["a"],{staticClass:"status-load",class:"color-"+t.computedStatus,attrs:{label:"",pill:""}},[a("span",{staticClass:"font-weight-bold text-capitalize",class:{"text-uppercase":t.uppercase}},[t._v(t._s(t.status.replace("-"," ")))])])},o=[],n={name:"StatusLoad",props:{status:{type:String,required:!0},uppercase:{type:Boolean,default:!1}},computed:{computedStatus(){return this.status.toLowerCase().replace(" ","-")}}},l=n,d=(e("3d45"),e("2877")),r=Object(d["a"])(l,i,o,!1,null,"055ee2cc",null);a["a"]=r.exports},c437:function(t,a,e){"use strict";var s=e("8336"),i=e("a523"),o=e("4e82"),n=e("3206"),l=e("80d2"),d=e("58df"),r=Object(d["a"])(Object(o["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(n["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(t){this.content=t},unregisterContent(){this.content=null},registerHeader(t){this.header=t,t.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(t){t.detail&&this.header.$el.blur(),this.$emit("click",t),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick(()=>this.$emit("change"))}},render(t){return t("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(l["o"])(this))}}),c=e("0789"),p=e("9d65"),_=e("a9ad");const h=Object(d["a"])(p["a"],_["a"],Object(n["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));var u=h.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(t,a){t&&(this.isBooted=!0),null==a?this.isActive=t:this.$nextTick(()=>this.isActive=t)}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(t){return t(c["a"],this.showLazyContent(()=>[t("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[t("div",{class:"v-expansion-panel-content__wrap"},Object(l["o"])(this))])]))}}),m=e("9d26"),v=e("5607");const f=Object(d["a"])(_["a"],Object(n["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));var y=f.extend().extend({name:"v-expansion-panel-header",directives:{ripple:v["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(t){this.$emit("click",t)},genIcon(){const t=Object(l["o"])(this,"actions")||[this.$createElement(m["a"],this.expandIcon)];return this.$createElement(c["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},t)])}},render(t){return t("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[Object(l["o"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),C=(e("210b"),e("604c")),x=e("d9bd"),b=C["a"].extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...C["a"].options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(x["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(x["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(t,a){const e=this.getValue(t,a),s=this.getValue(t,a+1);t.isActive=this.toggleMethod(e),t.nextIsActive=this.toggleMethod(s)}}}),g=function(){var t=this,a=t._self._c;return a("div",t._l(t.inspections,(function(e,o){return a(i["a"],{key:o,staticClass:"pa-0 mb-4 mt-10",attrs:{fluid:""}},[t.hasPhotos(e)?a("h3",{staticClass:"primary-dark--text font-weight-semi-bold mb-2"},[t._v(" "+t._s(e.vehicle.year)+" "+t._s(e.vehicle.name)+" "),e.vehicle.vin?[t._v(" – "+t._s(e.vehicle.vin)+" ")]:t._e()],2):t._e(),t.hasPhotos(e)?a(b,[e.pickup.photos.length?a(r,[a(y,[t._v(" Damages photos – Pick Up Inspection photos ")]),a(u,[a("photo-gallery",{attrs:{photos:t.getPhotos(e,"pickup","photos")}})],1)],1):t._e(),e.delivery.photos.length?a(r,[a(y,[t._v(" Damages photos – Delivery Inspection photos ")]),a(u,[a("photo-gallery",{attrs:{photos:t.getPhotos(e,"delivery","photos")}})],1)],1):t._e()],1):t._e(),t.hasSourcePhotos(e)?a(b,{staticClass:"mt-4"},[e.pickup.source_photos.length?a(r,[a(y,[t._v(" Source photos – Pick Up Inspection photos ")]),a(u,[a("photo-gallery",{attrs:{photos:t.getPhotos(e,"pickup","source_photos")}})],1)],1):t._e(),e.delivery.source_photos.length?a(r,[a(y,[t._v(" Source photos – Delivery Inspection photos ")]),a(u,[a("photo-gallery",{attrs:{photos:t.getPhotos(e,"delivery","source_photos")}})],1)],1):t._e()],1):t._e(),t.hasPhotos(e)||t.hasSourcePhotos(e)?a(s["a"],{key:o,staticClass:"mt-5",attrs:{depressed:"",color:"success",disabled:t.disabled},on:{click:()=>t.downloadPhotos(e.vehicle.vin,o)}},[t._v(" "+t._s(t.loading[o]?`Archiving photos - ${t.intervals[o]||"30"}s`:"Download photos")+" ")]):t._e()],1)})),1)},w=[],k=e("bc3a"),S=e.n(k),I=e("9af7"),A={name:"PhotoInspection",components:{PhotoGallery:I["a"]},props:{loadId:{type:[String,Number],required:!0},inspections:{type:Array,required:!0}},data(){return{disabled:!1,loading:[],intervals:[]}},methods:{hasPhotos({delivery:t,pickup:a}){return t.photos.length||a.photos.length},hasSourcePhotos({delivery:t,pickup:a}){return t.source_photos.length||a.source_photos.length},getPhotos(t,a,e){const s="photos"===e?"damages".toUpperCase():"source".toUpperCase(),i=String(t.vehicle.vin).toUpperCase(),o=t[a][e];return o.length?o.map((t,a)=>({url:t,filename:`${i}-${s}-${a}`})):[]},downloadPhotos(t,a){this.$set(this.loading,a,!0);let e=30,s=setInterval(()=>{this.$set(this.intervals,a,e-=1)},1e3);this.disabled=!0,S.a.get(`https://04bep3odzj.execute-api.us-east-1.amazonaws.com/prod/inspection-archive?internal_id=${encodeURIComponent(this.loadId)}&vehicle_vin=${encodeURIComponent(t)}`,{timeout:0}).then(t=>{const a=document.createElement("a");a.href=t.data.url,a.download=t.data.url.split("/").reverse()[0],document.body.appendChild(a),a.click(),document.body.removeChild(a)}).catch(t=>{throw t}).finally(()=>{this.$set(this.loading,a,!1),this.$set(this.intervals,a,null),clearInterval(s),s=null,this.disabled=!1})}}},D=A,L=e("2877"),E=Object(L["a"])(D,g,w,!1,null,null,null);a["a"]=E.exports}}]);
//# sourceMappingURL=load.ee5a36d7.js.map