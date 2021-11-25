// Compiled by ClojureScript 1.10.773 {}
goog.provide('website.komponenter');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('website.beregninger');
if((typeof website !== 'undefined') && (typeof website.komponenter !== 'undefined') && (typeof website.komponenter.app_state !== 'undefined')){
} else {
website.komponenter.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697)," Click-counter!"], null));
}
website.komponenter.knap = (function website$komponenter$knap(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"bottom ",new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),(150),new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),website.beregninger.min_funktion], null)], null);
});
website.komponenter.copyright = (function website$komponenter$copyright(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(13)], null)], null),"Copyright \u00A9 gusawski 2021"], null)], null);
});
website.komponenter.indhold = (function website$komponenter$indhold(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your highscore is: ",website.beregninger.high_funktion.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Current Score is: ",website.beregninger.current_score.call(null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30)], null)], null)," Ones: ",cljs.core.deref.call(null,website.beregninger.ones),"   Hundreds: ",cljs.core.deref.call(null,website.beregninger.hundreds),"   Thousands: ",cljs.core.deref.call(null,website.beregninger.thousands)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.komponenter.knap], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.komponenter.copyright], null)], null);
});
website.komponenter.start_komponent = (function website$komponenter$start_komponent(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,website.komponenter.app_state))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [website.komponenter.indhold], null)], null);
});
website.komponenter.tastelyt = (function website$komponenter$tastelyt(e){
if(cljs.core._EQ_.call(null,(32),e.keyCode)){
return website.beregninger.min_funktion.call(null);
} else {
return null;
}
});
website.komponenter.add_listeners = (function website$komponenter$add_listeners(){
return document.body.addEventListener("keyup",website.komponenter.tastelyt);
});
if((typeof website !== 'undefined') && (typeof website.komponenter !== 'undefined') && (typeof website.komponenter.initialize !== 'undefined')){
} else {
website.komponenter.initialize = (function (){
website.komponenter.add_listeners.call(null);

return true;
})()
;
}

//# sourceMappingURL=komponenter.js.map
