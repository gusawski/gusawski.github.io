// Compiled by ClojureScript 1.10.773 {}
goog.provide('website.beregninger');
goog.require('cljs.core');
goog.require('reagent.core');
if((typeof website !== 'undefined') && (typeof website.beregninger !== 'undefined') && (typeof website.beregninger.hundreds !== 'undefined')){
} else {
website.beregninger.hundreds = reagent.core.atom.call(null,(0));
}
if((typeof website !== 'undefined') && (typeof website.beregninger !== 'undefined') && (typeof website.beregninger.ones !== 'undefined')){
} else {
website.beregninger.ones = reagent.core.atom.call(null,(0));
}
if((typeof website !== 'undefined') && (typeof website.beregninger !== 'undefined') && (typeof website.beregninger.thousands !== 'undefined')){
} else {
website.beregninger.thousands = reagent.core.atom.call(null,(0));
}
website.beregninger.min_funktion = (function website$beregninger$min_funktion(){
cljs.core.swap_BANG_.call(null,website.beregninger.ones,cljs.core.inc);

if((cljs.core.deref.call(null,website.beregninger.ones) > (99))){
cljs.core.swap_BANG_.call(null,website.beregninger.hundreds,cljs.core.inc);

cljs.core.reset_BANG_.call(null,website.beregninger.ones,(0));
} else {
}

if((cljs.core.deref.call(null,website.beregninger.hundreds) > (9))){
cljs.core.swap_BANG_.call(null,website.beregninger.thousands,cljs.core.inc);

return cljs.core.reset_BANG_.call(null,website.beregninger.hundreds,(0));
} else {
return null;
}
});
website.beregninger.old_high = reagent.core.atom.call(null,(0));
website.beregninger.current_score = (function website$beregninger$current_score(var_args){
var G__26315 = arguments.length;
switch (G__26315) {
case 0:
return website.beregninger.current_score.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return website.beregninger.current_score.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(website.beregninger.current_score.cljs$core$IFn$_invoke$arity$0 = (function (){
return website.beregninger.current_score.call(null,null);
}));

(website.beregninger.current_score.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ((cljs.core.deref.call(null,website.beregninger.ones) + (cljs.core.deref.call(null,website.beregninger.hundreds) * (100))) + (cljs.core.deref.call(null,website.beregninger.thousands) * (1000)));
}));

(website.beregninger.current_score.cljs$lang$maxFixedArity = 1);

website.beregninger.high_funktion = (function website$beregninger$high_funktion(){
if((website.beregninger.current_score.call(null) > cljs.core.deref.call(null,website.beregninger.old_high))){
return cljs.core.swap_BANG_.call(null,website.beregninger.old_high,website.beregninger.current_score);
} else {
return cljs.core.deref.call(null,website.beregninger.old_high);
}
});
website.beregninger.high_funktion.call(null);

cljs.core.println.call(null,"highscore",cljs.core.deref.call(null,website.beregninger.old_high));

//# sourceMappingURL=beregninger.js.map
