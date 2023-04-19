(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();function l(t){const{title:e,image_url:o,summary:s,url:r,news_site:n,published_at:c}=t;return`
    <img src="${o}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${e}</h5>
      <p class="card-text">${s}</p>
      <a href="${r}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Go to article</a>
      <button type="button" class="btn btn-secondary">Add to library</button>
    </div>
    <div class="d-flex justify-content-between card-footer">
      <small class="text-body-secondary">Site: ${n}</small>
      <small class="text-body-secondary">${new Date(c).toLocaleString()}</small>
    </div>
  `}function u(t){const e=document.createElement("article");e.classList.add(`art${t.id}`,"card","flex-grow-1","m-2"),e.style="width: 20rem;",e.innerHTML=l(t),document.querySelector("#articlesList").appendChild(e)}function d(t){document.querySelector("#articlesList").innerHTML="",t.forEach(e=>{u(e)})}async function f(t=5){const e=`https://api.spaceflightnewsapi.net/v4/articles/?limit=${t}`;return await fetch(e).then(s=>{if(s.ok)return s.json();throw Error(s.status)})}function m(){const t=document.querySelector("#name");localStorage.getItem("name")!==null&&(t.value=localStorage.getItem("name")),t.addEventListener("input",e=>{localStorage.setItem("name",t.value)})}const a=15;function p(t,e){const o=document.querySelector("#artCounter");o.textContent=`On site: ${t} of ${e} articles.`}function y(){const t=document.querySelector("#nbrOfArticles");t.value=a,t.addEventListener("input",e=>{let o=e.target.value;i(o)})}function i(t=a){f(t).then(e=>{d(e.results),p(t,e.count)})}y();m();i();
