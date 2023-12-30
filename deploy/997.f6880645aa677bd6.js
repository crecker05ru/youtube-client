"use strict";(self.webpackChunkyoutube=self.webpackChunkyoutube||[]).push([[997],{5997:(I,u,c)=>{c.r(u),c.d(u,{AuthModule:()=>A});var g=c(6814),a=c(7133),e=c(6223);const _=n=>i=>{const s={matchUpper:!/([A-Z]+)/g.test(i.value),matchLower:!/([a-z]+)/g.test(i.value),matchDigits:!/\d+/.test(i.value),matchSpecials:!/[!@#?]+/.test(i.value),matchLength:i.value?.length<n};return s.matchUpper||s.matchLower||s.matchDigits||s.matchSpecials||s.matchLength?{matchUpper:s.matchUpper,matchLower:s.matchLower,matchDigits:s.matchDigits,matchSpecials:s.matchSpecials,matchLength:s.matchLength}:null};var o=c(5879),m=c(6983);function f(n,i){1&n&&(o.TgZ(0,"div",11),o._uU(1,"Please enter a login email"),o.qZA())}function h(n,i){1&n&&(o.TgZ(0,"div",11),o._uU(1,"The login email is invalid"),o.qZA())}function v(n,i){1&n&&(o.TgZ(0,"div",11),o._uU(1,"Please enter a password"),o.qZA())}function x(n,i){1&n&&(o.TgZ(0,"div",11),o._uU(1,"Your password isn't strong enough:"),o.qZA())}function w(n,i){1&n&&(o.TgZ(0,"div",11),o._uU(1,"at least 8 characters"),o.qZA())}function b(n,i){1&n&&(o.TgZ(0,"div",11),o._uU(1,"at least 1 uppercase letter"),o.qZA())}function F(n,i){1&n&&(o.TgZ(0,"div",11),o._uU(1,"at least 1 lowercase letter"),o.qZA())}function L(n,i){1&n&&(o.TgZ(0,"div",11),o._uU(1,"at least 1 digit"),o.qZA())}function Z(n,i){1&n&&(o.TgZ(0,"div",11),o._uU(1,"inclusion of at least one special character, e.g., ! # ? ]"),o.qZA())}function C(n,i){if(1&n){const t=o.EpF();o.TgZ(0,"div")(1,"h1",4),o._uU(2,"Login"),o.qZA(),o.TgZ(3,"form",5),o.NdJ("submit",function(){o.CHM(t);const l=o.oxw();return o.KtG(l.formSubmit())}),o.TgZ(4,"label",6),o._uU(5,"login "),o.YNc(6,f,2,0,"div",7),o.YNc(7,h,2,0,"div",7),o._UZ(8,"input",8),o.qZA(),o.TgZ(9,"label",6),o._uU(10,"password "),o.YNc(11,v,2,0,"div",7),o.YNc(12,x,2,0,"div",7),o.YNc(13,w,2,0,"div",7),o.YNc(14,b,2,0,"div",7),o.YNc(15,F,2,0,"div",7),o.YNc(16,L,2,0,"div",7),o.YNc(17,Z,2,0,"div",7),o._UZ(18,"input",9),o.qZA(),o.TgZ(19,"button",10),o._uU(20,"Login"),o.qZA()()()}if(2&n){const t=o.oxw();o.xp6(3),o.Q6J("formGroup",t.loginForm),o.xp6(3),o.Q6J("ngIf",(null==t.loginForm.controls.login.errors?null:t.loginForm.controls.login.errors.required)&&t.loginForm.controls.login.touched),o.xp6(1),o.Q6J("ngIf",t.loginForm.controls.login.invalid&&t.loginForm.controls.login.touched),o.xp6(4),o.Q6J("ngIf",(null==t.loginForm.controls.password.errors?null:t.loginForm.controls.password.errors.required)&&t.loginForm.controls.password.touched),o.xp6(1),o.Q6J("ngIf",t.loginForm.controls.password.invalid&&t.loginForm.controls.password.touched),o.xp6(1),o.Q6J("ngIf",(null==t.loginForm.controls.password.errors?null:t.loginForm.controls.password.errors.matchLength)&&t.loginForm.controls.password.touched),o.xp6(1),o.Q6J("ngIf",(null==t.loginForm.controls.password.errors?null:t.loginForm.controls.password.errors.matchUpper)&&t.loginForm.controls.password.touched),o.xp6(1),o.Q6J("ngIf",(null==t.loginForm.controls.password.errors?null:t.loginForm.controls.password.errors.matchLower)&&t.loginForm.controls.password.touched),o.xp6(1),o.Q6J("ngIf",(null==t.loginForm.controls.password.errors?null:t.loginForm.controls.password.errors.matchDigits)&&t.loginForm.controls.password.touched),o.xp6(1),o.Q6J("ngIf",(null==t.loginForm.controls.password.errors?null:t.loginForm.controls.password.errors.matchSpecials)&&t.loginForm.controls.password.touched),o.xp6(2),o.Q6J("disabled",!t.loginForm.valid)}}function T(n,i){if(1&n){const t=o.EpF();o.TgZ(0,"div",12)(1,"button",13),o.NdJ("click",function(){o.CHM(t);const l=o.oxw();return o.KtG(l.logout())}),o._uU(2,"Logout"),o.qZA()()}}let p=(()=>{class n{constructor(t,r,l,d){this.loginService=t,this.router=r,this.activatedRoute=l,this.location=d,this.isLogged=!1,this.loginForm=new e.cw({login:new e.NI("",[e.kI.required,e.kI.pattern(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),password:new e.NI("",[e.kI.required,_(8)])}),this.isLogged=t.isLoggedIn}formSubmit(){null!==this.loginForm.value.login&&null!==this.loginForm.value.password&&this.loginService.login(this.loginForm.value).subscribe(()=>{this.loginService.isLoggedIn&&(alert("Successfull loged in"),setTimeout(()=>{this.router.navigateByUrl("/")},1200))}),this.loginForm.reset()}logout(){this.loginService.logout(),this.isLogged=!1}static#o=this.\u0275fac=function(r){return new(r||n)(o.Y36(m.r),o.Y36(a.F0),o.Y36(a.gz),o.Y36(g.Ye))};static#t=this.\u0275cmp=o.Xpm({type:n,selectors:[["app-login"]],standalone:!0,features:[o.jDz],decls:4,vars:2,consts:[[1,"login"],[1,"login__inner"],[4,"ngIf"],["class","logout",4,"ngIf"],[1,"login__title"],[1,"login__form",3,"formGroup","submit"],[1,"login__label"],["class","login__validation-message",4,"ngIf"],["formControlName","login",1,"login__input"],["formControlName","password",1,"login__input"],["type","submit",1,"login__button",3,"disabled"],[1,"login__validation-message"],[1,"logout"],[1,"logout__button",3,"click"]],template:function(r,l){1&r&&(o.TgZ(0,"section",0)(1,"div",1),o.YNc(2,C,21,11,"div",2),o.YNc(3,T,3,0,"div",3),o.qZA()()),2&r&&(o.xp6(2),o.Q6J("ngIf",!l.isLogged),o.xp6(1),o.Q6J("ngIf",l.isLogged))},dependencies:[e.UX,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,g.O5],styles:[".login[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:calc(100% - 80px)}.login__inner[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;padding:20px;width:350px;background:#f2f2f2;border-radius:5px}.login__title[_ngcontent-%COMP%]{color:#000;font-family:Roboto;font-size:18px;font-style:normal;font-weight:700;line-height:normal}.login__form[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;margin-bottom:11px}.login__label[_ngcontent-%COMP%]{margin-bottom:4px;color:#828282;font-family:Roboto;font-size:10px;font-style:normal;font-weight:400;line-height:normal}.login__input[_ngcontent-%COMP%]{margin-bottom:5px;margin-top:5px;width:100%;height:37px;background:#e0e0e0;border:none;border:1px solid transparent}.login__button[_ngcontent-%COMP%]{margin-top:22px;margin-left:auto;width:124px;height:30px;color:#fff;background-color:#85b9ff;border:none;border-radius:5px;cursor:pointer}button[disabled][_ngcontent-%COMP%]{cursor:default;opacity:.5}input[_ngcontent-%COMP%], .ng-invalid[_ngcontent-%COMP%]{border-color:red}.logout[_ngcontent-%COMP%]{display:flex;justify-content:center}.logout__button[_ngcontent-%COMP%]{width:124px;height:30px;color:#fff;background-color:#573dff;border:none;border-radius:5px;cursor:pointer}"]})}return n})();var U=c(8059);const y=[{path:"",component:p}];let A=(()=>{class n{static#o=this.\u0275fac=function(r){return new(r||n)};static#t=this.\u0275mod=o.oAB({type:n});static#n=this.\u0275inj=o.cJS({providers:[m.r],imports:[g.ez,p,U._,a.Bz.forChild(y),a.Bz]})}return n})()}}]);