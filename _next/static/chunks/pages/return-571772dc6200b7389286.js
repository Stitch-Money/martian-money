_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"6R4B":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/return",function(){return n("70vD")}])},"70vD":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n("q1tI"),o=n.n(r),c=n("nOHt"),u=n("VtrM"),a=n("5M6V"),i=n("Hv0e"),s=o.a.createElement;function l(){var e,t=Object(c.useRouter)().query,n=t.code,r=t.scope,o=t.state,l=t.session_state;if(e=localStorage.getItem("stitchVerifier")){var p=Object(u.a)([n,e],i.a),f=p.data,d=p.error;if(f)return s(a.a,null,s("p",null,JSON.stringify(f)));if(d)return s(a.a,null,JSON.stringify(d))}return s(a.a,null,s("p",null," ",n," "),s("p",null," ",r," "),s("p",null," ",o," "),s("p",null," ",l," "))}},Hv0e:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("ODXe");var r=n("o0o1"),o=n.n(r),c=n("HaE+"),u=n("ml1f"),a=n("UdIf"),i=n("fO3t"),s="https://secure.stitch.money/connect/token";function l(e,t){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(o.a.mark((function e(t,n){var r,c,l,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={grant_type:"authorization_code",client_id:a.b,code:t,redirect_uri:a.a,code_verifier:n},c=Object(u.c)(r),e.next=4,fetch(s,{method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:c});case 4:return l=e.sent,e.next=7,l.json();case 7:return p=e.sent,console.log("Tokens: ",p),Object(i.d)(p.access_token),e.abrupt("return",p);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}},[["6R4B",0,2,1,3]]]);