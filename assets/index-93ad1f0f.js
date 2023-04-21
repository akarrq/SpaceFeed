(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function u(t){const{id:e,title:s,image_url:o,summary:r,url:n,news_site:i,published_at:d}=t;return`
    <img src="${o}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${s}</h5>
      <p class="card-text">${r}</p>
      <a href="${n}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Go to article</a>
      <button type="button" class="btn btn-secondary addToLibrary ${e}">Add to library</button>
    </div>
    <div class="d-flex justify-content-between card-footer">
      <small class="text-body-secondary">Site: ${i}</small>
      <small class="text-body-secondary">${new Date(d).toLocaleString()}</small>
    </div>
  `}function f(t){const e=document.createElement("article");e.classList.add(`art${t.id}`,"card","flex-grow-1","m-2"),e.style="width: 20rem;",e.innerHTML=u(t),document.querySelector("#articlesList").appendChild(e)}function m(t){t.forEach(e=>{f(e)})}async function p(t=5){const e=`https://api.spaceflightnewsapi.net/v4/articles/?limit=${t}`;return await fetch(e).then(o=>{if(o.ok)return o.json();throw Error(o.status)})}function y(){const t=document.querySelector("#name");localStorage.getItem("name")!==null&&(t.value=localStorage.getItem("name")),t.addEventListener("input",e=>{localStorage.setItem("name",t.value)})}function c(t){switch(t){case"ADD":const e=document.createElement("div");e.classList.add("my-5","mx-5","w-100","spinner"),e.innerHTML=`
        <div class="d-flex align-items-center mx-5">
          <strong>Loading... </strong>
          <div
            class="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
        `,document.querySelector("#articlesList").appendChild(e);break;case"REMOVE":document.querySelector(".spinner").remove();break}}function g(t){document.querySelectorAll(".addToLibrary").forEach(s=>{s.addEventListener("click",b)});let e=[...t];console.log(e)}function b(t){t.target.classList[3]}const l=15;function h(t,e){const s=document.querySelector("#artCounter");s.textContent=`On site: ${t} of ${e} articles.`}function L(){const t=document.querySelector("#nbrOfArticles");t.value=l,t.addEventListener("input",e=>{let s=e.target.value;document.querySelector("#articlesList").innerHTML="",a(s)})}function v(t){c("ADD");let e=!1;document.addEventListener("scroll",s=>{window.innerHeight+Math.ceil(window.pageYOffset)>=document.body.offsetHeight-50&&!e&&(e=!0,a(t.split("limit=")[1]))}),e=!1}function a(t=l){p(t).then(e=>{m(e.results),h(t,e.count),v(e.next),g(e.results),c("REMOVE")})}L();y();c("ADD");a();
