function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1ibO":function(e,t,r){"use strict";r.r(t);var n,i=r("ofXK"),s=r("3Pt+"),c=r("tyNb"),l=r("Tlfu"),a=r("fXoL"),o=r("jhN1"),u=r("veTR"),f=["drawerContent"],p=[{displayName:"\u793a\u4f8b",source:"sample"}],d=((n=function(){function e(t,r){_classCallCheck(this,e),this.title=t,this.activatedRoute=r,this.items=p,this.currentUrl="/skilltree",this.urlPrefix="skilltrees"}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.activatedRoute.paramMap.subscribe((function(t){var r=t.get("skilltree"),n=e.items.find((function(e){return e.source===r}));e.title.setTitle("\u5f00\u6e90 ".concat(n.displayName," \u6280\u80fd\u56fe\u8c31 - \u5f00\u6e90\u77e5\u8bc6\u5e73\u53f0")),e.currentSource=r}))}}]),e}()).\u0275fac=function(e){return new(e||n)(a.Ob(o.d),a.Ob(c.a))},n.\u0275cmp=a.Ib({type:n,selectors:[["app-skill-tree"]],viewQuery:function(e,t){var r;1&e&&a.Lc(f,!0),2&e&&a.sc(r=a.dc())&&(t.drawerContent=r.first)},decls:1,vars:4,consts:[[3,"items","currentUrl","urlPrefix","source"]],template:function(e,t){1&e&&a.Pb(0,"ledge-multiple-docs",0),2&e&&a.lc("items",t.items)("currentUrl",t.currentUrl)("urlPrefix",t.urlPrefix)("source",t.currentSource)},directives:[u.b],styles:[""]}),n),h=r("PCNd");r.d(t,"SkillTreeModule",(function(){return v}));var b,m=[{path:":skilltree",component:d},{path:"",pathMatch:"full",redirectTo:"sample"}],v=((b=function e(){_classCallCheck(this,e)}).\u0275mod=a.Mb({type:b}),b.\u0275inj=a.Lb({factory:function(e){return new(e||b)},imports:[[i.c,s.d,h.a,l.b,c.h.forChild(m)]]}),b)}}]);