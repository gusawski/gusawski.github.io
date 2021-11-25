// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20590){
var map__20591 = p__20590;
var map__20591__$1 = (((((!((map__20591 == null))))?(((((map__20591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20591):map__20591);
var m = map__20591__$1;
var n = cljs.core.get.call(null,map__20591__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20591__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20593_20625 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20594_20626 = null;
var count__20595_20627 = (0);
var i__20596_20628 = (0);
while(true){
if((i__20596_20628 < count__20595_20627)){
var f_20629 = cljs.core._nth.call(null,chunk__20594_20626,i__20596_20628);
cljs.core.println.call(null,"  ",f_20629);


var G__20630 = seq__20593_20625;
var G__20631 = chunk__20594_20626;
var G__20632 = count__20595_20627;
var G__20633 = (i__20596_20628 + (1));
seq__20593_20625 = G__20630;
chunk__20594_20626 = G__20631;
count__20595_20627 = G__20632;
i__20596_20628 = G__20633;
continue;
} else {
var temp__5720__auto___20634 = cljs.core.seq.call(null,seq__20593_20625);
if(temp__5720__auto___20634){
var seq__20593_20635__$1 = temp__5720__auto___20634;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20593_20635__$1)){
var c__4556__auto___20636 = cljs.core.chunk_first.call(null,seq__20593_20635__$1);
var G__20637 = cljs.core.chunk_rest.call(null,seq__20593_20635__$1);
var G__20638 = c__4556__auto___20636;
var G__20639 = cljs.core.count.call(null,c__4556__auto___20636);
var G__20640 = (0);
seq__20593_20625 = G__20637;
chunk__20594_20626 = G__20638;
count__20595_20627 = G__20639;
i__20596_20628 = G__20640;
continue;
} else {
var f_20641 = cljs.core.first.call(null,seq__20593_20635__$1);
cljs.core.println.call(null,"  ",f_20641);


var G__20642 = cljs.core.next.call(null,seq__20593_20635__$1);
var G__20643 = null;
var G__20644 = (0);
var G__20645 = (0);
seq__20593_20625 = G__20642;
chunk__20594_20626 = G__20643;
count__20595_20627 = G__20644;
i__20596_20628 = G__20645;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20646 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20646);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20646)))?cljs.core.second.call(null,arglists_20646):arglists_20646));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20597_20647 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20598_20648 = null;
var count__20599_20649 = (0);
var i__20600_20650 = (0);
while(true){
if((i__20600_20650 < count__20599_20649)){
var vec__20611_20651 = cljs.core._nth.call(null,chunk__20598_20648,i__20600_20650);
var name_20652 = cljs.core.nth.call(null,vec__20611_20651,(0),null);
var map__20614_20653 = cljs.core.nth.call(null,vec__20611_20651,(1),null);
var map__20614_20654__$1 = (((((!((map__20614_20653 == null))))?(((((map__20614_20653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20614_20653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20614_20653):map__20614_20653);
var doc_20655 = cljs.core.get.call(null,map__20614_20654__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20656 = cljs.core.get.call(null,map__20614_20654__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20652);

cljs.core.println.call(null," ",arglists_20656);

if(cljs.core.truth_(doc_20655)){
cljs.core.println.call(null," ",doc_20655);
} else {
}


var G__20657 = seq__20597_20647;
var G__20658 = chunk__20598_20648;
var G__20659 = count__20599_20649;
var G__20660 = (i__20600_20650 + (1));
seq__20597_20647 = G__20657;
chunk__20598_20648 = G__20658;
count__20599_20649 = G__20659;
i__20600_20650 = G__20660;
continue;
} else {
var temp__5720__auto___20661 = cljs.core.seq.call(null,seq__20597_20647);
if(temp__5720__auto___20661){
var seq__20597_20662__$1 = temp__5720__auto___20661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20597_20662__$1)){
var c__4556__auto___20663 = cljs.core.chunk_first.call(null,seq__20597_20662__$1);
var G__20664 = cljs.core.chunk_rest.call(null,seq__20597_20662__$1);
var G__20665 = c__4556__auto___20663;
var G__20666 = cljs.core.count.call(null,c__4556__auto___20663);
var G__20667 = (0);
seq__20597_20647 = G__20664;
chunk__20598_20648 = G__20665;
count__20599_20649 = G__20666;
i__20600_20650 = G__20667;
continue;
} else {
var vec__20616_20668 = cljs.core.first.call(null,seq__20597_20662__$1);
var name_20669 = cljs.core.nth.call(null,vec__20616_20668,(0),null);
var map__20619_20670 = cljs.core.nth.call(null,vec__20616_20668,(1),null);
var map__20619_20671__$1 = (((((!((map__20619_20670 == null))))?(((((map__20619_20670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20619_20670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20619_20670):map__20619_20670);
var doc_20672 = cljs.core.get.call(null,map__20619_20671__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20673 = cljs.core.get.call(null,map__20619_20671__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20669);

cljs.core.println.call(null," ",arglists_20673);

if(cljs.core.truth_(doc_20672)){
cljs.core.println.call(null," ",doc_20672);
} else {
}


var G__20674 = cljs.core.next.call(null,seq__20597_20662__$1);
var G__20675 = null;
var G__20676 = (0);
var G__20677 = (0);
seq__20597_20647 = G__20674;
chunk__20598_20648 = G__20675;
count__20599_20649 = G__20676;
i__20600_20650 = G__20677;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__20621 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20622 = null;
var count__20623 = (0);
var i__20624 = (0);
while(true){
if((i__20624 < count__20623)){
var role = cljs.core._nth.call(null,chunk__20622,i__20624);
var temp__5720__auto___20678__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___20678__$1)){
var spec_20679 = temp__5720__auto___20678__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20679));
} else {
}


var G__20680 = seq__20621;
var G__20681 = chunk__20622;
var G__20682 = count__20623;
var G__20683 = (i__20624 + (1));
seq__20621 = G__20680;
chunk__20622 = G__20681;
count__20623 = G__20682;
i__20624 = G__20683;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__20621);
if(temp__5720__auto____$1){
var seq__20621__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20621__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__20621__$1);
var G__20684 = cljs.core.chunk_rest.call(null,seq__20621__$1);
var G__20685 = c__4556__auto__;
var G__20686 = cljs.core.count.call(null,c__4556__auto__);
var G__20687 = (0);
seq__20621 = G__20684;
chunk__20622 = G__20685;
count__20623 = G__20686;
i__20624 = G__20687;
continue;
} else {
var role = cljs.core.first.call(null,seq__20621__$1);
var temp__5720__auto___20688__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___20688__$2)){
var spec_20689 = temp__5720__auto___20688__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20689));
} else {
}


var G__20690 = cljs.core.next.call(null,seq__20621__$1);
var G__20691 = null;
var G__20692 = (0);
var G__20693 = (0);
seq__20621 = G__20690;
chunk__20622 = G__20691;
count__20623 = G__20692;
i__20624 = G__20693;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20694 = cljs.core.conj.call(null,via,t);
var G__20695 = cljs.core.ex_cause.call(null,t);
via = G__20694;
t = G__20695;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20698 = datafied_throwable;
var map__20698__$1 = (((((!((map__20698 == null))))?(((((map__20698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20698):map__20698);
var via = cljs.core.get.call(null,map__20698__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__20698__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__20698__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20699 = cljs.core.last.call(null,via);
var map__20699__$1 = (((((!((map__20699 == null))))?(((((map__20699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20699):map__20699);
var type = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20700 = data;
var map__20700__$1 = (((((!((map__20700 == null))))?(((((map__20700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20700):map__20700);
var problems = cljs.core.get.call(null,map__20700__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__20700__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__20700__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20701 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__20701__$1 = (((((!((map__20701 == null))))?(((((map__20701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20701):map__20701);
var top_data = map__20701__$1;
var source = cljs.core.get.call(null,map__20701__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__20706 = phase;
var G__20706__$1 = (((G__20706 instanceof cljs.core.Keyword))?G__20706.fqn:null);
switch (G__20706__$1) {
case "read-source":
var map__20707 = data;
var map__20707__$1 = (((((!((map__20707 == null))))?(((((map__20707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20707):map__20707);
var line = cljs.core.get.call(null,map__20707__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20707__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20709 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__20709__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20709,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20709);
var G__20709__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20709__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20709__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20709__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20709__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20710 = top_data;
var G__20710__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20710,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20710);
var G__20710__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20710__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20710__$1);
var G__20710__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20710__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20710__$2);
var G__20710__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20710__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20710__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20710__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20710__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20711 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20711,(0),null);
var method = cljs.core.nth.call(null,vec__20711,(1),null);
var file = cljs.core.nth.call(null,vec__20711,(2),null);
var line = cljs.core.nth.call(null,vec__20711,(3),null);
var G__20714 = top_data;
var G__20714__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__20714,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20714);
var G__20714__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__20714__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20714__$1);
var G__20714__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__20714__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20714__$2);
var G__20714__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20714__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20714__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20714__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20714__$4;
}

break;
case "execution":
var vec__20715 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20715,(0),null);
var method = cljs.core.nth.call(null,vec__20715,(1),null);
var file = cljs.core.nth.call(null,vec__20715,(2),null);
var line = cljs.core.nth.call(null,vec__20715,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__20697_SHARP_){
var or__4126__auto__ = (p1__20697_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__20697_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__20718 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20718__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__20718,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20718);
var G__20718__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20718__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20718__$1);
var G__20718__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__20718__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20718__$2);
var G__20718__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__20718__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20718__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20718__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20718__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20706__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20722){
var map__20723 = p__20722;
var map__20723__$1 = (((((!((map__20723 == null))))?(((((map__20723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20723):map__20723);
var triage_data = map__20723__$1;
var phase = cljs.core.get.call(null,map__20723__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__20723__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__20723__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20723__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__20723__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__20723__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__20723__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__20723__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20725 = phase;
var G__20725__$1 = (((G__20725 instanceof cljs.core.Keyword))?G__20725.fqn:null);
switch (G__20725__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20726_20735 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20727_20736 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20728_20737 = true;
var _STAR_print_fn_STAR__temp_val__20729_20738 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20728_20737);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20729_20738);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20720_SHARP_){
return cljs.core.dissoc.call(null,p1__20720_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20727_20736);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20726_20735);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20730_20739 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20731_20740 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20732_20741 = true;
var _STAR_print_fn_STAR__temp_val__20733_20742 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20732_20741);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20733_20742);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__20721_SHARP_){
return cljs.core.dissoc.call(null,p1__20721_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20731_20740);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20730_20739);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20725__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
