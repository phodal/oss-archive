(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{GxpE:function(e,t,r){"use strict";r.r(t);var s=r("ofXK"),c=r("PCNd"),o=r("KYhu"),n=r("tyNb"),i=r("fXoL"),a=r("jhN1"),u=r("veTR");const l=["drawerContent"],p=[{displayName:"\u5f00\u6e90\u8f6f\u4ef6\u53d1\u5e03\u68c0\u67e5\u6e05\u5355",source:"opensource-release"},{displayName:"\u5f00\u6e90\u5b89\u5168\u68c0\u67e5\u6e05\u5355",source:"opensource-security"},{displayName:"\u5f00\u6e90\u5f00\u53d1\u68c0\u67e5\u6e05\u5355",source:"opensource-development"},{displayName:"\u5f00\u6e90\u90e8\u7f72\u68c0\u67e5\u6e05\u5355",source:"opensource-deployment"}],d=[{path:":name",component:(()=>{class e{constructor(e,t){this.title=e,this.activatedRoute=t,this.items=p,this.currentUrl="/checklists",this.urlPrefix="checklists"}ngOnInit(){this.activatedRoute.paramMap.subscribe(e=>{const t=e.get("name"),r=this.items.find(e=>e.source===t);this.title.setTitle(`\u5f00\u6e90\u8f6f\u4ef6 ${r.displayName} \u68c0\u67e5\u6e05\u5355 - \u5f00\u6e90\u77e5\u8bc6\u5e73\u53f0`),this.currentSource=t})}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(a.d),i.Ob(n.a))},e.\u0275cmp=i.Ib({type:e,selectors:[["app-checklists"]],viewQuery:function(e,t){var r;1&e&&i.Lc(l,!0),2&e&&i.sc(r=i.dc())&&(t.drawerContent=r.first)},decls:1,vars:4,consts:[["baseUrl","https://github.com/phodal/opensource/edit/master/src/assets/docs/",3,"items","currentUrl","urlPrefix","source"]],template:function(e,t){1&e&&i.Pb(0,"ledge-multiple-docs",0),2&e&&i.lc("items",t.items)("currentUrl",t.currentUrl)("urlPrefix",t.urlPrefix)("source",t.currentSource)},directives:[u.b],styles:[".checklists[_ngcontent-%COMP%]{width:80%;max-width:1200px;margin:2em auto}.checklist-block[_ngcontent-%COMP%]{background:#fff;padding:2em;margin-bottom:1em;border-radius:2px;box-shadow:0 1px 0 0 #e0e1e9}"]}),e})()},{path:"",pathMatch:"full",redirectTo:"opensource-release"}];let m=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},imports:[[n.h.forChild(d)],n.h]}),e})();var h=r("Tlfu");r.d(t,"ChecklistsModule",(function(){return f}));let f=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},imports:[[s.c,c.a,o.a,h.b,m]]}),e})()}}]);