_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"6R4B":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/return",function(){return t("70vD")}])},"70vD":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return b}));var r=t("o0o1"),c=t.n(r),o=t("HaE+"),a=t("q1tI"),u=t.n(a),s=t("nOHt"),i=(t("ODXe"),t("ml1f")),f=t("UdIf"),p=t("fO3t"),d="https://secure.stitch.money/connect/token";function _(e,n){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(c.a.mark((function e(n,t){var r,o,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={grant_type:"authorization_code",client_id:f.b,code:n,redirect_uri:f.a,code_verifier:t},o=Object(i.c)(r),e.next=4,fetch(d,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o});case 4:return a=e.sent,e.next=7,a.json();case 7:return u=e.sent,console.log("Tokens: ",u),Object(p.e)(u.access_token),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=t("5M6V"),w=u.a.createElement;function b(){var e=Object(s.useRouter)(),n=e.query.code,t=null;return t=Object(p.a)(),Object(a.useEffect)((function(){function r(){return(r=Object(o.a)(c.a.mark((function e(){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n||!t){e.next=5;break}return e.next=3,_("".concat(n),t);case 3:r=e.sent,Object(p.e)(r.access_token);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){return r.apply(this,arguments)})().then((function(n){Object(p.b)()&&e.push("/report").then((function(e){}),(function(e){}))}),(function(){}))}),[e,n,t]),w(h.a,null,w("progress",{className:"progress is-large is-info",max:"100"},"60%"))}}},[["6R4B",0,1,2,3]]]);