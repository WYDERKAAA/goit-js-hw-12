import{a as w,i as m,S}from"./assets/vendor-c493984e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const E="44946151-dc02d84f49eea13b7d5c48659",T="https://pixabay.com/api/",x=document.querySelector(".search-form"),g=document.querySelector(".input-field"),f=document.querySelector(".gallery-result-list"),P=document.querySelector(".query-word"),$=document.querySelector(".more"),C=document.querySelector(".top"),u=t=>({enable:()=>document.querySelector(t).classList.remove("disabled"),disable:()=>document.querySelector(t).classList.add("disabled")}),n=u(".spinner"),l=u(".loading-text"),v=u(".query-text"),c=u(".more"),d=u(".top");x.addEventListener("submit",t=>{t.preventDefault(),h=g.value,p=1,q(h,p),P.textContent=g.value});let p=1,L=0,y=30,h="";async function q(t,s=1){n.enable(),l.enable(),s===1&&(f.innerHTML="");try{const r=await w.get(T,{params:{key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:y}}),i=Math.ceil(r.data.totalHits/y);return r.data.hits?(L=r.data.totalHits,B(r.data.hits),n.disable(),l.disable(),v.enable(),p=s):s>i?(c.disable(),d.disable(),l.disable,n.disable(),m.warning({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):(c.disable(),d.disable(),m.warning({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#fff"})),r.data}catch(r){throw n.disable(),l.disable(),c.disable(),d.disable(),console.error(r),m.warning({title:"Error",message:"An error occurred while fetching images"}),new Error(`Error! status: ${res.status}`)}}const M="Sorry, there are no images matching your search query. Please try again!";function B(t,s){if(s===1&&(f.innerHTML=""),L>t.length&&(c.enable(),d.enable()),t.length===0){n.disable(),l.disable(),v.disable(),c.disable(),d.disable(),m.warning({message:M,backgroundColor:"#EF4040",messageColor:"#fff",position:"topRight",timeout:2e3}),setTimeout(b,2e3);return}const r=t.map(I).join("");f.insertAdjacentHTML("beforeend",r),setTimeout(b,500),H.refresh()}function b(){g.value=""}const H=new S(".gallery-result-list a",{captions:!0,captionsData:"alt",captionDelay:250,close:!0,className:"simpleLightboxGallery",doubleTapZoom:2,scrollZoom:!0,overlay:!0});function I({webformatURL:t,largeImageURL:s,tags:r,downloads:i,likes:e,comments:o,views:a}){return`<li class="list-container">
    <div>
      <div class="image-container">
        <a href="${s}">
          <img src="${t}" alt="${r}" />
        </a>
      </div>
      <div class="descr-element">
        <ul class="descr-list">
          <li>
            <h3>Likes</h3>
              <p>${e}</p>
          </li>
          <li>
            <h3>Views</h3>
              <p>${a}</p>
          </li>
          <li>
            <h3>Comments</h3>
            <p>${o}</p>
          </li>
          <li>
            <h3>Downloads</h3>
              <p>${i}</p>
          </li>
        </ul>
      </div>
    </div>
  </li>`}$.addEventListener("click",()=>{q(h,p+1)});f.getBoundingClientRect();C.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
