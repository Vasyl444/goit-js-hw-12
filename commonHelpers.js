import{a as y,S as L,i as v}from"./assets/vendor-4d51048b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&e(f)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const h=function(a){const t=[];return a.forEach(e=>{t.push(`<li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
            <div class="wrapper">
            <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
            <div class="title-wrapper">
            <p class="title">Likes<span>${e.likes}</span></p>
            <p class="title">Views<span>${e.views}</span></p>
            <p class="title">Comments<span>${e.comments}</span></p>
            <p class="title">Downloads<span>${e.downloads}</span></p>
            </div>
            </div>
            </a>
            </li>`)}),t.join("")},m=15;async function g(l,a){let t=[];console.log(a);const e=await y.get("https://pixabay.com/api/?",{params:{key:"43830110-6528f7a21182a7b65b70041af",q:`${l}`,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:a}});if(e.status===200)return Math.ceil(e.data.total/m),t=t.concat(e.data.hits),e.data.hits.length<m||(a+=1),t}const o=document.querySelector(".gallery-button"),d=document.querySelector(".gallery-list"),c=document.querySelector(".loader"),r=document.querySelector(".search-input"),u=document.querySelector(".message");let n=new L(".gallery a",{overlayOpacity:.8,captionSelector:"img",captionDelay:250,captionPosition:"bottom",captionsData:"alt",className:"simple-lightbox"});const p=document.querySelector(".search-form");p.addEventListener("submit",async l=>{l.preventDefault();let a=1;if(u.classList.add("is-hidden"),r.value.trim()===""){p.reset();return}else c.classList.remove("is-hidden"),d.innerHTML="",o.classList.add("is-hidden"),g(r.value,a).then(t=>{console.log(g),t.length===0?(r.value="",v.show({id:null,class:".izi-toast",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fff",messageSize:"14px",messageLineHeight:"",backgroundColor:"#EF4040",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:"",maxWidth:430,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"topRight",target:"",targetFirst:!0,timeout:3e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}})):t.length<15?(u.classList.remove("is-hidden"),o.classList.add("is-hidden"),r.value="",p.reset(),d.insertAdjacentHTML("afterbegin",h(t)),n.refresh(),n.on("open.simplelightbox"),r.value=""):(u.classList.add("is-hidden"),d.insertAdjacentHTML("afterbegin",h(t)),n.refresh(),n.on("open.simplelightbox"),o.classList.remove("is-hidden"),o.addEventListener("click",async()=>{c.classList.remove("is-hidden"),o.classList.add("is-hidden"),a+=1,g(r.value,a).then(e=>{console.log(e),e.length<15?(u.classList.remove("is-hidden"),o.classList.add("is-hidden"),r.value="",p.reset()):(d.insertAdjacentHTML("beforeend",h(e)),n.refresh(),n.on("open.simplelightbox"),o.classList.remove("is-hidden"))}).catch(e=>{console.error()}).finally(()=>{c.classList.add("is-hidden")})})),c.classList.add("is-hidden")}).catch(t=>{console.error()}).finally(()=>{});c.classList.add("is-hidden")});
//# sourceMappingURL=commonHelpers.js.map
