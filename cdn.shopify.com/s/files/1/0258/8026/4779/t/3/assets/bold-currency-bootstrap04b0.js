typeof BOLDCURRENCY!="undefined"&&BOLDCURRENCY.converter&&typeof BOLD_mc_bootstrapSettings!="undefined"&&BOLD_mc_bootstrap(BOLD_mc_bootstrapSettings);function BOLD_mc_bootstrap(o){u([s(o.flagsAssetUrl),s(o.pickerCssAssetUrl)]),BOLDCURRENCY.converter.requestRates=function(t,e){BOLD.helpers.js.get(o.shopDomainUrl+"/rates").then(function(n){if(n.hasOwnProperty("error"))throw BOLDCURRENCY.enabled=!1,console.info("Bold MultiCurrency: "+n.error),n.error;t(n,e),BOLDCURRENCY.converter.enableAggressiveRefresh()}).catch(function(n){o.debug===!0&&console.log(n),BOLDCURRENCY.converter.hideAllInstances()})},BOLDCURRENCY.converter.postCartDataToCashier=function(t,e,n){BOLD.helpers.js.post(o.shopDomainUrl+"/rates",{cart_id:t}).then(function(r){if(r.hasOwnProperty("error"))throw BOLDCURRENCY.enabled=!1,console.info("Bold MultiCurrency: "+r.error),r.error;typeof e=="function"&&(e(r,n),BOLDCURRENCY.converter.enableAggressiveRefresh())}).catch(function(r){o.debug===!0&&console.log(r),BOLDCURRENCY.converter.hideAllInstances()})},BOLD&&typeof BOLD.helpers!="undefined"&&(BOLD.helpers.setupMutationObservers=function(t,e){var n=new MutationObserver(function(c){c.forEach(function(l){var i=parseInt(document.querySelector("select[name=id]").value);BOLD.helpers.shopify.getVariant(BOLD.helpers.shopify.getProductHandleById(i),i).then(function(h){BOLD.common.eventEmitter.emit(e,{selector:t,variant:h,originalProductPrice:o.productOriginalPrice})})})}),r={attributes:!0,childList:!0,characterData:!0};n.observe(t,r)}),document.addEventListener("DOMContentLoaded",function(t){window.jQuery&&jQuery().on&&jQuery(".bold_product_page_price").parent().each(function(e,n){BOLD.helpers.setupMutationObservers(n,"BOLD_CURRENCY_product_price_updated")}),BOLDCURRENCY.converter.initialize(d())});function u(t){t.forEach(function(e){document.head.appendChild(e)})}function d(){var t=document.getElementById("bold-currency-picker-template"),e=document.getElementById("bold-currency-picker-mount-template");if(t===null)throw"No picker template found";if(e===null)throw"No mountpoint template found";var n=document.getElementsByClassName("BOLD-mc-picker-mnt");if(n.length===0){var r=document.body.appendChild(a(e));p(r,"injected")}var c=[];return Array.prototype.forEach.call(n,function(l){var i=l.appendChild(a(t));i.style.display="",c.push(i)}),c}function s(t){var e=document.createElement("link");return e.type="text/css",e.rel="stylesheet",e.href=t,e}function a(t){var e=document.createElement("div");return e.innerHTML=t.innerHTML.trim(),e.firstChild}function f(t,e){return(" "+t.className+" ").indexOf(" "+e+" ")>-1}function p(t,e){if(!f(t,e))return t.className+=" "+e}}
//# sourceMappingURL=/s/files/1/0258/8026/4779/t/3/assets/bold-currency-bootstrap.js.map?v=172784488555041320471564068775
