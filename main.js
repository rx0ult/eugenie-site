const C=CONFIG,$=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const T={
en:{nav_story:"Story",nav_menu:"Menu",nav_gallery:"Gallery",nav_visit:"Visit",order:"Order",directions:"Directions",call:"Call",wa:"WhatsApp",ig:"Instagram",
 h1:"Where elegance meets every cup",sub:"A velvet-red parlor of old memories in the heart of Cairo.",
 story_h:"Come as Eugénie's guest",story_p1:"In 1869, Empress Eugénie, the most admired beauty of her age, arrived in Egypt for the opening of the Suez Canal. Over 150 years later, her name still greets you at our door.",
 story_p2:"Velvet-red walls. Antique plates. Gilded frames. A warm croissant beside your coffee. You came for a café, and walked into her salon.",
 menu_h:"The Menu",menu_alt:"المِنيو",c1:"The red corner",c2:"The plate wall",c3:"Croissant & coffee",c4:"Evening in the salon",menu_note:"Prices in EGP · 12% service charge added",ask:"Ask our staff",gallery_h:"The atmosphere",
 rev_h:"Guest voices",rev_score:"4.8",rev_sub:"on Google from 391 reviews",rev_rev_link:"Read all reviews on Google",rev_note:"Selected Google reviews",
 visit_h:"Visit us",address:"Ismailia, Qasr El Nil, Cairo",hours:"Open 7 AM to 2 AM",modes:"Dine-in · Drive-through · Delivery",
 open:"Open now",closed:"Closed · opens 7 AM",waText:"Hello Eugénie, I'd like to order",credit:"Website by "},
ar:{nav_story:"قصتنا",nav_menu:"المنيو",nav_gallery:"المعرض",nav_visit:"زورونا",order:"اطلب",directions:"الاتجاهات",call:"اتصل",wa:"واتساب",ig:"إنستجرام",
 h1:"حيث تلتقي الأناقة بكل فنجان",sub:"صالون مخملي أحمر من الذكريات القديمة في قلب القاهرة.",
 story_h:"تفضّلوا في ضيافة أوجيني",story_p1:"عام ١٨٦٩ وصلت الإمبراطورة أوجيني، أجمل سيدات عصرها، إلى مصر لتشهد افتتاح قناة السويس. وبعد أكثر من مئة وخمسين عاماً، ما زال اسمها يستقبلك عند الباب.",
 story_p2:"حيطان بلون المخمل، وأطباق قديمة، وإطارات مذهّبة، وكرواسون دافئ بجانب قهوتك. جئتَ إلى كافيه، فدخلتَ صالونها.",
 menu_h:"المِنيو",menu_alt:"MENU",c1:"الركن الأحمر",c2:"حائط الأطباق",c3:"كرواسون وقهوة",c4:"مساءً في الصالون",menu_note:"الأسعار بالجنيه المصري · تضاف خدمة 12٪",ask:"اسأل الفريق",gallery_h:"الأجواء",
 rev_h:"آراء ضيوفنا",rev_score:"٤٫٨",rev_sub:"على جوجل من ٣٩١ تقييم",rev_rev_link:"اقرأ كل التقييمات على جوجل",rev_note:"مقتطفات من تقييمات جوجل (مترجمة عن الإنجليزية)",
 visit_h:"زورونا",address:"الإسماعيلية، قصر النيل، القاهرة",hours:"من ٧ صباحاً حتى ٢ بعد منتصف الليل",modes:"في المكان · درايف ثرو · توصيل",
 open:"مفتوح الآن",closed:"مغلق · يفتح ٧ صباحاً",waText:"مرحباً أوجيني، أريد أن أطلب",credit:"تصميم الموقع: "}};
const REV=[{n:"Salma",en:"The decor is super cute and nostalgic.",ar:"الديكور لطيف جداً ومليء بالحنين."},
{n:"Amr",en:"Calm and classy atmosphere.",ar:"أجواء هادئة وراقية."},
{n:"Heba",en:"Polite, friendly staff and excellent service.",ar:"فريق مهذب ودود وخدمة ممتازة."}];
let L="en",cat=0;
try{L=localStorage.getItem("lang")}catch(e){}
if(!T[L])L=navigator.language.startsWith("ar")?"ar":"en";
const isOpen=()=>{const h=+new Intl.DateTimeFormat("en-GB",{hour:"numeric",hour12:false,timeZone:"Africa/Cairo"}).format(new Date());return h>=C.openHour||h<C.closeHour};
function menu(){const ar=L=="ar",M=MENU.categories;
 $("#chips").innerHTML=M.map(c=>`<a href="#c-${c.id}">${ar?c.name_ar:c.name_en}</a>`).join("");
 $("#cats").innerHTML=M.map(c=>`<section class="cat" id="c-${c.id}"><h3>${ar?c.name_ar:c.name_en}<small>${ar?c.name_en:c.name_ar}</small></h3><div class="items">${c.items.map(i=>`<div class="it"><div class="row"><span>${ar?i.ar:i.en}${i.signature?' <em class="sig">★</em>':""}</span><i class="dots"></i><b>${i.price==null?T[L].ask:i.price}</b></div><small>${ar?i.en:i.ar}</small></div>`).join("")}</div></section>`).join("");
 const first=$("#chips a");if(first)first.classList.add("on");spy()}
function spy(){if(!window.IntersectionObserver)return;const links=[...$$("#chips a")];
 if(window.io)window.io.disconnect();
 window.io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")=="#"+e.target.id));const on=$("#chips a.on");if(on&&innerWidth<800)on.scrollIntoView({inline:"center",block:"nearest"})}}),{rootMargin:"-30% 0px -60% 0px"});
 $$(".cat").forEach(x=>io.observe(x))}
function render(){const t=T[L],d=document.documentElement;
 d.lang=L;d.dir=L=="ar"?"rtl":"ltr";
 $$("[data-i18n]").forEach(e=>e.textContent=t[e.dataset.i18n]);
 $("#lang").textContent=L=="ar"?"EN":"العربية";
 const o=isOpen(),b=$("#open");b.className="open"+(o?" on":"");b.textContent=o?t.open:t.closed;
 const set=(s,f)=>$$(s).forEach(a=>a.href=f);
 set(".wa",`https://wa.me/${C.whatsapp}?text=${encodeURIComponent(t.waText)}`);set(".dir",C.maps);set(".call","tel:"+C.phone);set(".igp","https://www.instagram.com/"+C.instagram);
 $("#revs").innerHTML=REV.map(r=>`<blockquote class="rev"><p>${r[L]}</p><span class="stars">★★★★★</span><cite>${r.n}</cite></blockquote>`).join("");
 $("#credit").textContent=t.credit+C.credit;menu()}
$("#lang").onclick=()=>{L=L=="ar"?"en":"ar";try{localStorage.setItem("lang",L)}catch(e){}render()};
render();
