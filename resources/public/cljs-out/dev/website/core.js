// Compiled by ClojureScript 1.10.773 {}
goog.provide('website.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.dom');
goog.require('website.komponenter');
cljs.core.println.call(null,"This text is printed from src/website/core.cljs. Go ahead and edit it and see reloading in action.");
website.core.get_app_element = (function website$core$get_app_element(){
return goog.dom.getElement("app");
});
website.core.mount = (function website$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.komponenter.start_komponent], null),el);
});
website.core.mount_app_element = (function website$core$mount_app_element(){
var temp__5720__auto__ = website.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return website.core.mount.call(null,el);
} else {
return null;
}
});
website.core.mount_app_element.call(null);
website.core.on_reload = (function website$core$on_reload(){
return website.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
