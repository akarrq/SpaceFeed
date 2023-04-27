import{r as c,b as a,a as l}from"./bootstrap.esm-30b798d6.js";async function u(t=5){const e=`https://api.spaceflightnewsapi.net/v4/articles/?limit=${t}`;return await fetch(e).then(r=>{if(r.ok)return r.json();throw Error(r.status)})}function d(){const t=document.querySelector("#name");localStorage.getItem("name")!==null&&(t.value=localStorage.getItem("name")),t.addEventListener("input",e=>{localStorage.setItem("name",t.value)})}function i(t){switch(t){case"ADD":const e=document.createElement("div");e.classList.add("my-5","mx-5","w-100","spinner"),e.innerHTML=`
        <div class="d-flex align-items-center mx-5">
          <strong>Loading... </strong>
          <div
            class="spinner-border ms-auto"
            role="status"
            aria-hidden="true"
          ></div>
        </div>
        `,document.querySelector("#articlesList").appendChild(e);break;case"REMOVE":document.querySelector(".spinner").remove();break}}const o=15;function m(t){const e=document.querySelector("#artCounter"),n=document.querySelectorAll("article").length;e.textContent=`On site: ${n} of ${t} articles.`}function f(t,e=300){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>{t.apply(this,r)},e)}}function p(){const t=document.querySelector("#nbrOfArticles");t.value=o,t.addEventListener("input",f(e=>{let n=e.target.value;document.querySelector("#articlesList").innerHTML="",i("ADD"),s(n)}))}function g(t){i("ADD");let e=!1;document.addEventListener("scroll",n=>{window.innerHeight+Math.ceil(window.pageYOffset)>=document.body.offsetHeight-50&&!e&&(e=!0,s(t.split("limit=")[1]))}),e=!1}function s(t=o){u(t).then(e=>{c(e.results),m(e.count),g(e.next),a(),l(e.results),i("REMOVE")})}p();d();i("ADD");s();
