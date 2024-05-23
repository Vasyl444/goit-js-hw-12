import{a as L,S as C,i as y}from"./assets/vendor-4d51048b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const h of s.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const g=function(t){const i=[];return t.forEach(a=>{i.push(`<li class="gallery-item">
            <a class="gallery-link" href="${a.largeImageURL}">
            <div class="wrapper">
            <img class="gallery-image" src="${a.webformatURL}" alt="${a.tags}">
            <div class="title-wrapper">
            <p class="title">Likes<span>${a.likes}</span></p>
            <p class="title">Views<span>${a.views}</span></p>
            <p class="title">Comments<span>${a.comments}</span></p>
            <p class="title">Downloads<span>${a.downloads}</span></p>
            </div>
            </div>
            </a>
            </li>`)}),i.join("")},v=15;async function O(o,t){const i=await L.get("https://pixabay.com/api/?",{params:{key:"43830110-6528f7a21182a7b65b70041af",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:v,page:t}});if(i.status===200)return i.data}const n=document.querySelector(".gallery-button"),u=document.querySelector(".gallery-list"),m=document.querySelector(".loader"),l=document.querySelector(".search-input"),f=document.querySelector(".message"),c=document.querySelector(".search-form");let r=1,p,b,d=new C(".gallery a",{overlayOpacity:.8,captionSelector:"img",captionDelay:250,captionPosition:"bottom",captionsData:"alt",className:"simple-lightbox"});c.addEventListener("submit",async o=>{if(o.preventDefault(),r=1,f.classList.add("is-hidden"),l.value.trim()===""){c.reset();return}else m.classList.remove("is-hidden"),u.innerHTML="",n.classList.add("is-hidden"),await O(l.value,r).then(t=>{b=Math.ceil(t.total/v),t.hits.length===0?(l.value="",y.show({id:null,class:".izi-toast",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"14px",messageLineHeight:"",backgroundColor:"#e49b63",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:"",maxWidth:430,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"topRight",target:"",targetFirst:!0,timeout:4e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}})):r===b?(n.classList.add("is-hidden"),c.reset(),u.insertAdjacentHTML("afterbegin",g(t.hits)),d.refresh(),d.on("open.simplelightbox"),f.classList.remove("is-hidden"),l.value=""):(f.classList.add("is-hidden"),u.insertAdjacentHTML("afterbegin",g(t.hits)),d.refresh(),d.on("open.simplelightbox"),n.classList.remove("is-hidden"),p=document.querySelector(".gallery-item").getBoundingClientRect().height,r=1)}).catch(t=>{c.reset(),y.show({id:null,class:".izi-toast",message:`ERROR: ${t.message}`,messageColor:"#fff",messageSize:"14px",messageLineHeight:"",backgroundColor:"#EF4040",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:"",maxWidth:430,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"topRight",target:"",targetFirst:!0,timeout:4e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}})});m.classList.add("is-hidden")});n.addEventListener("click",async()=>{m.classList.remove("is-hidden"),n.classList.add("is-hidden"),r+=1,window.scrollBy({top:p*2,left:0,behavior:"smooth"}),await O(l.value,r).then(o=>{r===b?(u.insertAdjacentHTML("beforeend",g(o.hits)),window.scrollBy({top:p*2,left:0,behavior:"smooth"}),f.classList.remove("is-hidden"),n.classList.add("is-hidden"),l.value="",c.reset()):(u.insertAdjacentHTML("beforeend",g(o.hits)),window.scrollBy({top:p*2,left:0,behavior:"smooth"}),d.refresh(),d.on("open.simplelightbox"),n.classList.remove("is-hidden"))}).catch(o=>{c.reset(),y.show({id:null,class:".izi-toast",message:`ERROR: ${o.message}`,messageColor:"#fff",messageSize:"14px",messageLineHeight:"",backgroundColor:"#EF4040",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:"",maxWidth:430,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"topRight",target:"",targetFirst:!0,timeout:4e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}})}),m.classList.add("is-hidden")});
//# sourceMappingURL=commonHelpers.js.map