import{J as y,v as x,f as n,b as a,a as s,u as e,d as r,w as m,i as h,s as V,g as f,T as b,e as k,o as u,l as w}from"./app-2a6e726e.js";import{a as p,b as _,_ as v}from"./TextInput-e5607f4f.js";import{_ as S}from"./PrimaryButton-76ae3fd4.js";const N=a("header",null,[a("h2",{class:"text-lg font-medium text-gray-900"},"Profile Information"),a("p",{class:"mt-1 text-sm text-gray-600"}," Update your account's profile information and email address. ")],-1),$={key:0},B={class:"text-sm mt-2 text-gray-800"},E={class:"mt-2 font-medium text-sm text-green-600"},U={class:"flex items-center gap-4"},C={key:0,class:"text-sm text-gray-600"},P={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:Boolean,status:String},setup(g){const d=g,l=y().props.auth.user,t=x({name:l.name,email:l.email});return(c,o)=>(u(),n("section",null,[N,a("form",{onSubmit:o[2]||(o[2]=k(i=>e(t).patch(c.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[a("div",null,[s(v,{for:"name",value:"Name"}),s(p,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=i=>e(t).name=i),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),s(_,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),a("div",null,[s(v,{for:"email",value:"Email"}),s(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":o[1]||(o[1]=i=>e(t).email=i),required:"",autocomplete:"username"},null,8,["modelValue"]),s(_,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),d.mustVerifyEmail&&e(l).email_verified_at===null?(u(),n("div",$,[a("p",B,[r(" Your email address is unverified. "),s(e(w),{href:c.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:m(()=>[r(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),h(a("div",E," A new verification link has been sent to your email address. ",512),[[V,d.status==="verification-link-sent"]])])):f("",!0),a("div",U,[s(S,{disabled:e(t).processing},{default:m(()=>[r("Save")]),_:1},8,["disabled"]),s(b,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:m(()=>[e(t).recentlySuccessful?(u(),n("p",C,"Saved.")):f("",!0)]),_:1})])],32)]))}};export{P as default};
