// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1423){
var map__1424 = p__1423;
var map__1424__$1 = (((((!((map__1424 == null))))?(((((map__1424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1424):map__1424);
var m = map__1424__$1;
var n = cljs.core.get.call(null,map__1424__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1424__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
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
var seq__1426_1458 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1427_1459 = null;
var count__1428_1460 = (0);
var i__1429_1461 = (0);
while(true){
if((i__1429_1461 < count__1428_1460)){
var f_1462 = cljs.core._nth.call(null,chunk__1427_1459,i__1429_1461);
cljs.core.println.call(null,"  ",f_1462);


var G__1463 = seq__1426_1458;
var G__1464 = chunk__1427_1459;
var G__1465 = count__1428_1460;
var G__1466 = (i__1429_1461 + (1));
seq__1426_1458 = G__1463;
chunk__1427_1459 = G__1464;
count__1428_1460 = G__1465;
i__1429_1461 = G__1466;
continue;
} else {
var temp__5735__auto___1467 = cljs.core.seq.call(null,seq__1426_1458);
if(temp__5735__auto___1467){
var seq__1426_1468__$1 = temp__5735__auto___1467;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1426_1468__$1)){
var c__4609__auto___1469 = cljs.core.chunk_first.call(null,seq__1426_1468__$1);
var G__1470 = cljs.core.chunk_rest.call(null,seq__1426_1468__$1);
var G__1471 = c__4609__auto___1469;
var G__1472 = cljs.core.count.call(null,c__4609__auto___1469);
var G__1473 = (0);
seq__1426_1458 = G__1470;
chunk__1427_1459 = G__1471;
count__1428_1460 = G__1472;
i__1429_1461 = G__1473;
continue;
} else {
var f_1474 = cljs.core.first.call(null,seq__1426_1468__$1);
cljs.core.println.call(null,"  ",f_1474);


var G__1475 = cljs.core.next.call(null,seq__1426_1468__$1);
var G__1476 = null;
var G__1477 = (0);
var G__1478 = (0);
seq__1426_1458 = G__1475;
chunk__1427_1459 = G__1476;
count__1428_1460 = G__1477;
i__1429_1461 = G__1478;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1479 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1479);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1479)))?cljs.core.second.call(null,arglists_1479):arglists_1479));
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
var seq__1430_1480 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1431_1481 = null;
var count__1432_1482 = (0);
var i__1433_1483 = (0);
while(true){
if((i__1433_1483 < count__1432_1482)){
var vec__1444_1484 = cljs.core._nth.call(null,chunk__1431_1481,i__1433_1483);
var name_1485 = cljs.core.nth.call(null,vec__1444_1484,(0),null);
var map__1447_1486 = cljs.core.nth.call(null,vec__1444_1484,(1),null);
var map__1447_1487__$1 = (((((!((map__1447_1486 == null))))?(((((map__1447_1486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1447_1486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1447_1486):map__1447_1486);
var doc_1488 = cljs.core.get.call(null,map__1447_1487__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1489 = cljs.core.get.call(null,map__1447_1487__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1485);

cljs.core.println.call(null," ",arglists_1489);

if(cljs.core.truth_(doc_1488)){
cljs.core.println.call(null," ",doc_1488);
} else {
}


var G__1490 = seq__1430_1480;
var G__1491 = chunk__1431_1481;
var G__1492 = count__1432_1482;
var G__1493 = (i__1433_1483 + (1));
seq__1430_1480 = G__1490;
chunk__1431_1481 = G__1491;
count__1432_1482 = G__1492;
i__1433_1483 = G__1493;
continue;
} else {
var temp__5735__auto___1494 = cljs.core.seq.call(null,seq__1430_1480);
if(temp__5735__auto___1494){
var seq__1430_1495__$1 = temp__5735__auto___1494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1430_1495__$1)){
var c__4609__auto___1496 = cljs.core.chunk_first.call(null,seq__1430_1495__$1);
var G__1497 = cljs.core.chunk_rest.call(null,seq__1430_1495__$1);
var G__1498 = c__4609__auto___1496;
var G__1499 = cljs.core.count.call(null,c__4609__auto___1496);
var G__1500 = (0);
seq__1430_1480 = G__1497;
chunk__1431_1481 = G__1498;
count__1432_1482 = G__1499;
i__1433_1483 = G__1500;
continue;
} else {
var vec__1449_1501 = cljs.core.first.call(null,seq__1430_1495__$1);
var name_1502 = cljs.core.nth.call(null,vec__1449_1501,(0),null);
var map__1452_1503 = cljs.core.nth.call(null,vec__1449_1501,(1),null);
var map__1452_1504__$1 = (((((!((map__1452_1503 == null))))?(((((map__1452_1503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1452_1503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1452_1503):map__1452_1503);
var doc_1505 = cljs.core.get.call(null,map__1452_1504__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1506 = cljs.core.get.call(null,map__1452_1504__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1502);

cljs.core.println.call(null," ",arglists_1506);

if(cljs.core.truth_(doc_1505)){
cljs.core.println.call(null," ",doc_1505);
} else {
}


var G__1507 = cljs.core.next.call(null,seq__1430_1495__$1);
var G__1508 = null;
var G__1509 = (0);
var G__1510 = (0);
seq__1430_1480 = G__1507;
chunk__1431_1481 = G__1508;
count__1432_1482 = G__1509;
i__1433_1483 = G__1510;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__1454 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1455 = null;
var count__1456 = (0);
var i__1457 = (0);
while(true){
if((i__1457 < count__1456)){
var role = cljs.core._nth.call(null,chunk__1455,i__1457);
var temp__5735__auto___1511__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___1511__$1)){
var spec_1512 = temp__5735__auto___1511__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1512));
} else {
}


var G__1513 = seq__1454;
var G__1514 = chunk__1455;
var G__1515 = count__1456;
var G__1516 = (i__1457 + (1));
seq__1454 = G__1513;
chunk__1455 = G__1514;
count__1456 = G__1515;
i__1457 = G__1516;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__1454);
if(temp__5735__auto____$1){
var seq__1454__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1454__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__1454__$1);
var G__1517 = cljs.core.chunk_rest.call(null,seq__1454__$1);
var G__1518 = c__4609__auto__;
var G__1519 = cljs.core.count.call(null,c__4609__auto__);
var G__1520 = (0);
seq__1454 = G__1517;
chunk__1455 = G__1518;
count__1456 = G__1519;
i__1457 = G__1520;
continue;
} else {
var role = cljs.core.first.call(null,seq__1454__$1);
var temp__5735__auto___1521__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___1521__$2)){
var spec_1522 = temp__5735__auto___1521__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1522));
} else {
}


var G__1523 = cljs.core.next.call(null,seq__1454__$1);
var G__1524 = null;
var G__1525 = (0);
var G__1526 = (0);
seq__1454 = G__1523;
chunk__1455 = G__1524;
count__1456 = G__1525;
i__1457 = G__1526;
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
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
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
var G__1527 = cljs.core.conj.call(null,via,t);
var G__1528 = cljs.core.ex_cause.call(null,t);
via = G__1527;
t = G__1528;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
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
var map__1531 = datafied_throwable;
var map__1531__$1 = (((((!((map__1531 == null))))?(((((map__1531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1531):map__1531);
var via = cljs.core.get.call(null,map__1531__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1531__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1531__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1532 = cljs.core.last.call(null,via);
var map__1532__$1 = (((((!((map__1532 == null))))?(((((map__1532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1532):map__1532);
var type = cljs.core.get.call(null,map__1532__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1532__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1532__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1533 = data;
var map__1533__$1 = (((((!((map__1533 == null))))?(((((map__1533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1533):map__1533);
var problems = cljs.core.get.call(null,map__1533__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1533__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1533__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1534 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1534__$1 = (((((!((map__1534 == null))))?(((((map__1534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1534):map__1534);
var top_data = map__1534__$1;
var source = cljs.core.get.call(null,map__1534__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1539 = phase;
var G__1539__$1 = (((G__1539 instanceof cljs.core.Keyword))?G__1539.fqn:null);
switch (G__1539__$1) {
case "read-source":
var map__1540 = data;
var map__1540__$1 = (((((!((map__1540 == null))))?(((((map__1540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1540):map__1540);
var line = cljs.core.get.call(null,map__1540__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1540__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1542 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1542__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1542,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1542);
var G__1542__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1542__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1542__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1542__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1542__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1543 = top_data;
var G__1543__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1543,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1543);
var G__1543__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1543__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1543__$1);
var G__1543__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1543__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1543__$2);
var G__1543__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1543__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1543__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1543__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1543__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1544 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1544,(0),null);
var method = cljs.core.nth.call(null,vec__1544,(1),null);
var file = cljs.core.nth.call(null,vec__1544,(2),null);
var line = cljs.core.nth.call(null,vec__1544,(3),null);
var G__1547 = top_data;
var G__1547__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1547,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1547);
var G__1547__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1547__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1547__$1);
var G__1547__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__1547__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1547__$2);
var G__1547__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1547__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1547__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1547__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1547__$4;
}

break;
case "execution":
var vec__1548 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1548,(0),null);
var method = cljs.core.nth.call(null,vec__1548,(1),null);
var file = cljs.core.nth.call(null,vec__1548,(2),null);
var line = cljs.core.nth.call(null,vec__1548,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__1530_SHARP_){
var or__4185__auto__ = (p1__1530_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1530_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__1551 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1551__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1551,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1551);
var G__1551__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1551__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1551__$1);
var G__1551__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1551__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1551__$2);
var G__1551__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1551__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1551__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1551__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1551__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1539__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1555){
var map__1556 = p__1555;
var map__1556__$1 = (((((!((map__1556 == null))))?(((((map__1556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1556):map__1556);
var triage_data = map__1556__$1;
var phase = cljs.core.get.call(null,map__1556__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1556__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1556__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1556__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1556__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1556__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1556__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1556__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1558 = phase;
var G__1558__$1 = (((G__1558 instanceof cljs.core.Keyword))?G__1558.fqn:null);
switch (G__1558__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1559_1568 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1560_1569 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1561_1570 = true;
var _STAR_print_fn_STAR__temp_val__1562_1571 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1561_1570);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1562_1571);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1553_SHARP_){
return cljs.core.dissoc.call(null,p1__1553_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1560_1569);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1559_1568);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
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
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1563_1572 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1564_1573 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1565_1574 = true;
var _STAR_print_fn_STAR__temp_val__1566_1575 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1565_1574);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1566_1575);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__1554_SHARP_){
return cljs.core.dissoc.call(null,p1__1554_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1564_1573);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1563_1572);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1558__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
