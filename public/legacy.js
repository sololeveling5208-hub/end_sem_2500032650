const KEYS={users:"driveease_users_v2",cars:"driveease_cars_v2",bookings:"driveease_bookings_v2",session:"driveease_session_v2",activity:"driveease_activity_v2"};
const ASSET="assets/";
const defaultCars=[
{id:"c1",name:"Hyundai Creta",make:"Hyundai",model:"Creta",year:2025,category:"SUV",price:3200,seats:5,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c1.jpg",fallbackImage:"assets/cars/c1.jpg",description:"Comfortable compact SUV for family trips."},
{id:"c2",name:"Honda City",make:"Honda",model:"City",year:2025,category:"Sedan",price:2600,seats:5,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c2.jpg",fallbackImage:"assets/cars/c2.jpg",description:"A refined sedan for everyday city and highway drives."},
{id:"c3",name:"Maruti Swift",make:"Maruti Suzuki",model:"Swift",year:2025,category:"Hatchback",price:1800,seats:5,transmission:"Manual",fuel:"Petrol",status:"Available",image:"assets/cars/c3.jpg",fallbackImage:"assets/cars/c3.jpg",description:"Compact, agile, and easy to park around town."},
{id:"c4",name:"Toyota Fortuner",make:"Toyota",model:"Fortuner",year:2025,category:"SUV",price:5200,seats:7,transmission:"Automatic",fuel:"Diesel",status:"Available",image:"assets/cars/c4.jpg",fallbackImage:"assets/cars/c4.jpg",description:"Spacious SUV suited to longer group journeys."},
{id:"c5",name:"BMW 3 Series",make:"BMW",model:"3 Series",year:2025,category:"Luxury",price:6800,seats:5,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c5.jpg",fallbackImage:"assets/cars/c5.jpg",description:"A premium driving experience for special occasions."},
{id:"c6",name:"Tata Tiago",make:"Tata",model:"Tiago",year:2025,category:"Hatchback",price:1500,seats:5,transmission:"Manual",fuel:"Petrol",status:"Available",image:"assets/cars/c6.jpg",fallbackImage:"assets/cars/c6.jpg",description:"A practical, budget-friendly city car."},
{id:"c7",name:"MG ZS EV",make:"MG",model:"ZS EV",year:2025,category:"Electric",price:3900,seats:5,transmission:"Automatic",fuel:"Electric",status:"Available",image:"assets/cars/c7.jpg",fallbackImage:"assets/cars/c7.jpg",description:"A quiet electric SUV for a modern city drive."},
{id:"c8",name:"Kia Seltos",make:"Kia",model:"Seltos",year:2025,category:"SUV",price:3300,seats:5,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c8.jpg",fallbackImage:"assets/cars/c8.jpg",description:"A confident compact SUV for everyday adventures."},
{id:"c9",name:"Mahindra XUV700",make:"Mahindra",model:"XUV700",year:2025,category:"SUV",price:4800,seats:7,transmission:"Automatic",fuel:"Diesel",status:"Available",image:"assets/cars/c9.jpg",fallbackImage:"assets/cars/c9.jpg",description:"A spacious, feature-rich SUV for longer journeys."},
{id:"c10",name:"Mahindra Scorpio-N",make:"Mahindra",model:"Scorpio-N",year:2025,category:"SUV",price:4600,seats:7,transmission:"Manual",fuel:"Diesel",status:"Available",image:"assets/cars/c10.jpg",fallbackImage:"assets/cars/c10.jpg",description:"A bold SUV built for road trips and group travel."},
{id:"c11",name:"Hyundai Venue",make:"Hyundai",model:"Venue",year:2025,category:"Crossover",price:2700,seats:5,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c11.jpg",fallbackImage:"assets/cars/c11.jpg",description:"A compact crossover that suits city plans."},
{id:"c12",name:"Kia Sonet",make:"Kia",model:"Sonet",year:2025,category:"Crossover",price:2800,seats:5,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c12.jpg",fallbackImage:"assets/cars/c12.jpg",description:"A practical compact SUV with a modern cabin."},
{id:"c13",name:"Toyota Innova Crysta",make:"Toyota",model:"Innova Crysta",year:2025,category:"MPV",price:4300,seats:7,transmission:"Manual",fuel:"Diesel",status:"Available",image:"assets/cars/c13.jpg",fallbackImage:"assets/cars/c13.jpg",description:"Comfortable space for family and group travel."},
{id:"c14",name:"Maruti Suzuki Baleno",make:"Maruti Suzuki",model:"Baleno",year:2025,category:"Hatchback",price:1900,seats:5,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c14.jpg",fallbackImage:"assets/cars/c14.jpg",description:"An easy-going hatchback for daily city drives."},
{id:"c15",name:"Hyundai i20",make:"Hyundai",model:"i20",year:2025,category:"Hatchback",price:2100,seats:5,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c15.jpg",fallbackImage:"assets/cars/c15.jpg",description:"A premium hatchback with a comfortable ride."},
{id:"c16",name:"Volkswagen Virtus",make:"Volkswagen",model:"Virtus",year:2025,category:"Sedan",price:3100,seats:5,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c16.jpg",fallbackImage:"assets/cars/c16.jpg",description:"A composed sedan for business and weekend drives."},
{id:"c17",name:"Skoda Slavia",make:"Skoda",model:"Slavia",year:2025,category:"Sedan",price:3000,seats:5,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c17.jpg",fallbackImage:"assets/cars/c17.jpg",description:"A refined sedan with generous cabin comfort."},
{id:"c18",name:"Hyundai Verna",make:"Hyundai",model:"Verna",year:2025,category:"Sedan",price:2900,seats:5,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c18.jpg",fallbackImage:"assets/cars/c18.jpg",description:"A sleek sedan for city commutes and highway miles."},
{id:"c19",name:"Tata Nexon",make:"Tata",model:"Nexon",year:2025,category:"SUV",price:2600,seats:5,transmission:"Manual",fuel:"Petrol",status:"Available",image:"assets/cars/c19.jpg",fallbackImage:"assets/cars/c19.jpg",description:"A versatile compact SUV for everyday use."},
{id:"c20",name:"Tata Nexon EV",make:"Tata",model:"Nexon EV",year:2025,category:"Electric",price:3500,seats:5,transmission:"Automatic",fuel:"Electric",status:"Available",image:"assets/cars/c20.jpg",fallbackImage:"assets/cars/c20.jpg",description:"A practical electric SUV for quieter city travel."},
{id:"c21",name:"Mahindra Thar",make:"Mahindra",model:"Thar",year:2025,category:"SUV",price:4900,seats:4,transmission:"Automatic",fuel:"Diesel",status:"Available",image:"assets/cars/c21.jpg",fallbackImage:"assets/cars/c21.jpg",description:"An adventurous SUV for memorable road trips."},
{id:"c22",name:"Jeep Compass",make:"Jeep",model:"Compass",year:2025,category:"SUV",price:4400,seats:5,transmission:"Automatic",fuel:"Diesel",status:"Available",image:"assets/cars/c22.jpg",fallbackImage:"assets/cars/c22.jpg",description:"A premium SUV with a confident road presence."},
{id:"c23",name:"Mercedes-Benz C-Class",make:"Mercedes-Benz",model:"C-Class",year:2025,category:"Luxury",price:8200,seats:5,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c23.jpg",fallbackImage:"assets/cars/c23.jpg",description:"A sophisticated executive sedan for special occasions."},
{id:"c24",name:"Audi A4",make:"Audi",model:"A4",year:2025,category:"Luxury",price:7900,seats:5,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c24.jpg",fallbackImage:"assets/cars/c24.jpg",description:"Understated luxury for business and leisure."},
{id:"c25",name:"Kia Carens",make:"Kia",model:"Carens",year:2025,category:"MPV",price:3600,seats:7,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c25.jpg",fallbackImage:"assets/cars/c25.jpg",description:"Flexible seating for families and group outings."},
{id:"c26",name:"Renault Kwid",make:"Renault",model:"Kwid",year:2025,category:"Hatchback",price:1400,seats:5,transmission:"Manual",fuel:"Petrol",status:"Available",image:"assets/cars/c26.jpg",fallbackImage:"assets/cars/c26.jpg",description:"An economical choice for short city trips."},
{id:"c27",name:"Maruti Suzuki Dzire",make:"Maruti Suzuki",model:"Dzire",year:2025,category:"Sedan",price:1700,seats:5,transmission:"Manual",fuel:"Petrol",status:"Available",image:"assets/cars/c27.jpg",fallbackImage:"assets/cars/c27.jpg",description:"A compact sedan for practical everyday travel."},
{id:"c28",name:"Honda Amaze",make:"Honda",model:"Amaze",year:2025,category:"Sedan",price:1850,seats:5,transmission:"Automatic",fuel:"Petrol",status:"Available",image:"assets/cars/c28.jpg",fallbackImage:"assets/cars/c28.jpg",description:"A compact sedan that balances comfort and value."},
{id:"c29",name:"Tata Punch",make:"Tata",model:"Punch",year:2025,category:"Crossover",price:2000,seats:5,transmission:"Manual",fuel:"Petrol",status:"Available",image:"assets/cars/c29.jpg",fallbackImage:"assets/cars/c29.jpg",description:"A compact crossover for urban errands and getaways."},
{id:"c30",name:"BYD Atto 3",make:"BYD",model:"Atto 3",year:2025,category:"Electric",price:5600,seats:5,transmission:"Automatic",fuel:"Electric",status:"Available",image:"assets/cars/c30.jpg",fallbackImage:"assets/cars/c30.jpg",description:"A modern electric SUV with a spacious cabin."}
];
const $=id=>document.getElementById(id);
const read=(key,fallback)=>{try{const v=JSON.parse(localStorage.getItem(key));return v??fallback}catch{return fallback}};
const write=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
const now=()=>new Date().toISOString();
const fmtDate=value=>value?new Date(value).toLocaleString(undefined,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}):"—";
const fmtDay=value=>value?new Date(value+"T00:00:00").toLocaleDateString(undefined,{day:"numeric",month:"short",year:"numeric"}):"—";
const money=n=>"₹"+Number(n||0).toLocaleString("en-IN");
const escapeHTML=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const today=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`};
let users=read(KEYS.users,[]),cars=read(KEYS.cars,null),bookings=read(KEYS.bookings,[]),session=read(KEYS.session,null),activity=read(KEYS.activity,[]);
if(!cars){cars=defaultCars.map(c=>({...c}));write(KEYS.cars,cars)}
// One-time inventory migration: add the expanded starter fleet to existing Local Storage data.
if(localStorage.getItem("driveease_inventory_version")!=="5"){
  defaultCars.forEach(c=>{if(!cars.some(x=>x.id===c.id))cars.push({...c})});
  // Built-in cars use bundled local artwork so the fleet remains visible offline.
  const defaultsById=new Map(defaultCars.map(c=>[c.id,c]));
  cars=cars.map(car=>{
    const builtIn=defaultsById.get(car.id);
    if(builtIn) {
      return {...car,image:builtIn.image,fallbackImage:builtIn.fallbackImage};
    }
    return car;
  });
  write(KEYS.cars,cars);localStorage.setItem("driveease_inventory_version","5");
}
if(!users.some(u=>u.email==="admin@driveease.com")){users.push({id:"admin-001",name:"DriveEase Administrator",email:"admin@driveease.com",password:"admin123",role:"admin",createdAt:now(),preferences:{favorites:[],views:{},categories:{},searches:[]},lastLoginAt:null,lastLogoutAt:null,loginCount:0});write(KEYS.users,users)}
users=users.map(u=>({...u,id:u.id||("U"+Math.random().toString(36).slice(2,9).toUpperCase()),role:u.role||"user",createdAt:u.createdAt||now(),preferences:{favorites:Array.isArray(u.preferences?.favorites)?u.preferences.favorites:[],views:u.preferences?.views&&typeof u.preferences.views==="object"?u.preferences.views:{},categories:u.preferences?.categories&&typeof u.preferences.categories==="object"?u.preferences.categories:{},searches:Array.isArray(u.preferences?.searches)?u.preferences.searches:[]},loginCount:u.loginCount||0}));
write(KEYS.users,users);
let authMode="login",toastTimer=null,selectedAdminTab="fleet";
let compareIds=[];
let favoritesOnly=false;
function saveAll(){write(KEYS.users,users);write(KEYS.cars,cars);write(KEYS.bookings,bookings);write(KEYS.activity,activity);if(session)write(KEYS.session,session)}
function currentUser(){return session?users.find(u=>u.email===session.email)||null:null}
function isAdmin(){return currentUser()?.role==="admin"}
function addActivity(type,detail="",email=currentUser()?.email||session?.email||""){
  if(!email)return;
  activity.unshift({id:"A"+Date.now()+Math.random().toString(36).slice(2,5),email,type,detail,at:now(),sessionId:session?.sessionId||null});
  activity=activity.slice(0,500);write(KEYS.activity,activity);
}
function notify(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2600)}
function openModal(id){$(id).classList.remove("hidden")}function closeModal(id){$(id).classList.add("hidden")}
function setPage(page){
 if(page==="myBookings"&&!currentUser()){showAuth("login");notify("Log in to see your bookings.");return}
 if(page==="profile"&&!currentUser()){showAuth("login");notify("Log in to open your profile.");return}
 if(page==="admin"&&!isAdmin()){showAuth("login");notify("Admin access is required.");return}
 $("hero").classList.toggle("hidden",page!=="home");document.querySelector(".search-wrap").classList.toggle("hidden",page!=="home");$("fleetSection").classList.toggle("hidden",page!=="home");$("homeExtras")?.classList.toggle("hidden",page!=="home");$("bookingsSection").classList.toggle("hidden",page!=="myBookings");$("profileSection").classList.toggle("hidden",page!=="profile");$("adminSection").classList.toggle("hidden",page!=="admin");
 document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
 if(page==="home")renderCars();if(page==="myBookings")renderBookings();if(page==="profile")renderProfile();if(page==="admin")renderAdmin();window.scrollTo({top:0,behavior:"smooth"});
}
function updateHeader(){const u=currentUser();$("headerActions").innerHTML=u?`<span class="muted" style="font-size:11px">Hi, ${escapeHTML(u.name.split(" ")[0])}</span><button class="btn btn-ghost" id="logoutBtn">Log out</button>`:`<button class="btn btn-ghost" id="loginBtn">Log in</button><button class="btn btn-primary" id="signupBtn">Create account</button>`;
 $("bookingsNav").classList.toggle("hidden",!u||u.role==="admin");$("profileNav").classList.toggle("hidden",!u);$("adminNav").classList.toggle("hidden",!u||u.role!=="admin");
 $("headerActions").querySelector("#loginBtn")?.addEventListener("click",()=>showAuth("login"));$("headerActions").querySelector("#signupBtn")?.addEventListener("click",()=>showAuth("signup"));$("headerActions").querySelector("#logoutBtn")?.addEventListener("click",logout)}
function showAuth(mode){authMode=mode;$("authTitle").textContent=mode==="signup"?"Create your account":"Welcome back";$("authSubtitle").textContent=mode==="signup"?"Create a profile to save preferences and manage reservations.":"Log in to continue to your DriveEase account.";$("nameField").classList.toggle("hidden",mode!=="signup");$("authName").required=mode==="signup";$("authSubmit").textContent=mode==="signup"?"Create account":"Log in";$("switchAuthText").innerHTML=mode==="signup"?'Already registered? <button id="switchAuth">Log in</button>':'New to DriveEase? <button id="switchAuth">Create an account</button>';$("authError").textContent="";$("switchAuth").addEventListener("click",()=>showAuth(authMode==="signup"?"login":"signup"));$("forgotLinkRow")?.classList.toggle("hidden",mode!=="login");openModal("authModal")}
function login(user){const timestamp=now();user.lastLoginAt=timestamp;user.loginCount=(user.loginCount||0)+1;session={email:user.email,role:user.role,sessionId:"S"+Date.now(),loginAt:timestamp};write(KEYS.session,session);addActivity("Login","Signed in successfully",user.email);saveAll();updateHeader();closeModal("authModal");setPage(user.role==="admin"?"admin":"home");notify("Welcome back, "+user.name.split(" ")[0]+".")}
function logout(){const u=currentUser();if(u){u.lastLogoutAt=now();addActivity("Logout","Signed out",u.email);saveAll()}session=null;favoritesOnly=false;localStorage.removeItem(KEYS.session);if($("favoritesOnly")){$("favoritesOnly").setAttribute("aria-pressed","false");$("favoritesOnly").classList.remove("active");$("favoritesOnly").textContent="♡ Favorites"}updateHeader();setPage("home");notify("You have logged out. Your session end time was saved.")}
$("authForm").addEventListener("submit",e=>{e.preventDefault();const email=$("authEmail").value.trim().toLowerCase(),password=$("authPassword").value;
 if(authMode==="signup"){const name=$("authName").value.trim();if(!name){$("authError").textContent="Enter your full name.";return}if(users.some(u=>u.email===email)){$("authError").textContent="An account with this email already exists.";return}const user={id:"U"+Date.now().toString().slice(-8),name,email,password,role:"user",createdAt:now(),lastLoginAt:null,lastLogoutAt:null,loginCount:0,preferences:{favorites:[],views:{},categories:{},searches:[]}};users.push(user);addActivity("Signup","Created account",email);login(user);notify("Account created successfully.");}
 else{const user=users.find(u=>u.email===email&&u.password===password);if(!user){$("authError").textContent="Email or password is incorrect.";addActivity("Failed login","Incorrect credentials",email);return}login(user)}
});
function carAvailability(carId,start,end){return !bookings.some(b=>b.carId===carId&&!["Cancelled","Rejected"].includes(b.status)&&start<b.returnDate&&end>b.pickupDate)}
function renderCars(){
 const term=$("searchInput").value.trim().toLowerCase(),cat=$("categoryFilter").value,start=$("pickupDate").value,end=$("returnDate").value,u=currentUser();
 let list=cars.filter(c=>{
  const searchable=[c.name,c.make,c.model,c.category,c.fuel,c.transmission].join(" ").toLowerCase();
  const matchesTerm=searchable.includes(term),matchesCategory=cat==="All"||c.category===cat;
  const matchesFavorite=!favoritesOnly||!!u?.preferences?.favorites?.includes(c.id);
  const matchesDates=!(start&&end&&end>start)||carAvailability(c.id,start,end);
  return matchesTerm&&matchesCategory&&matchesFavorite&&matchesDates;
 });
 const sort=$("sortCars")?.value||"recommended";
 if(sort==="price-low")list.sort((a,b)=>a.price-b.price);
 if(sort==="price-high")list.sort((a,b)=>b.price-a.price);
 if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
 $("resultCount").textContent=`${list.length} of ${cars.length} vehicles`;
 if(!list.length){$("carGrid").innerHTML='<div class="empty-state">No vehicles match your current filters. Try changing the dates, category, search, or favorites filter.</div>';renderCompareTray();return}
 $("carGrid").innerHTML=list.map(c=>{
  const fav=!!u?.preferences?.favorites?.includes(c.id),maint=c.status==="Maintenance",dateUnavailable=start&&end&&end>start&&!carAvailability(c.id,start,end),selected=compareIds.includes(c.id),unavailable=maint||dateUnavailable;
  return `<article class="car-card ${selected?"compare-selected":""}"><div class="car-image"><img src="${escapeHTML(c.image)}" alt="${escapeHTML(c.name)} photo" loading="lazy" onerror="this.onerror=null;this.src='${escapeHTML(c.fallbackImage||'assets/fleet-hero.svg')}'"><span class="car-tag">${escapeHTML(c.category)}</span><button class="favorite-btn ${fav?"fav":""}" title="${fav?"Remove favorite":"Add favorite"}" aria-label="Toggle favorite" onclick="toggleFavorite('${c.id}')">${fav?"♥":"♡"}</button></div><div class="car-body"><div class="car-title-row"><div><h3>${escapeHTML(c.name)}</h3><div class="car-subtitle">${c.year||"—"} · ${escapeHTML(c.fuel||"Fuel not specified")} · ${escapeHTML(c.transmission||"Transmission not specified")}</div></div><div class="car-price">${money(c.price)}<small>per day</small></div></div><div class="car-meta"><span>♙ ${Number(c.seats)||5} seats</span><span>◈ ${escapeHTML(c.category)}</span><span>✓ Fleet checked</span></div><p class="muted car-description">${escapeHTML(c.description||"Comfortable vehicle for your next journey.")}</p><div class="car-bottom"><span class="availability ${unavailable?"busy":""}">${maint?"Under maintenance":dateUnavailable?"Dates unavailable":"● Available to request"}</span><button class="btn btn-primary btn-small" ${unavailable?"disabled":""} onclick="startBooking('${c.id}')">Reserve →</button></div><button class="compare-toggle ${selected?"selected":""}" onclick="toggleCompare('${c.id}')" aria-pressed="${selected}">${selected?"✓ Added to compare":"＋ Compare vehicle"}</button></div></article>`
 }).join("");
 renderCompareTray();
}
function toggleCompare(id){
 if(compareIds.includes(id)){compareIds=compareIds.filter(x=>x!==id)}
 else{if(compareIds.length>=3){notify("You can compare up to 3 vehicles at a time.");return}if(!cars.some(c=>c.id===id))return;compareIds.push(id)}
 renderCars();
}
function renderCompareTray(){
 const tray=$("compareTray");if(!tray)return;
 tray.classList.toggle("hidden",compareIds.length===0);
 $("compareCount").textContent=`${compareIds.length} vehicle${compareIds.length===1?"":"s"} selected`;
 $("compareNow").disabled=compareIds.length<2;
}
function clearCompare(){compareIds=[];renderCars()}
function openComparison(){
 const selected=compareIds.map(id=>cars.find(c=>c.id===id)).filter(Boolean);
 if(selected.length<2){notify("Select at least two vehicles to compare.");return}
 const rows=[
  ["Daily rate",c=>money(c.price)],
  ["Category",c=>c.category||"—"],
  ["Seats",c=>`${c.seats||5} seats`],
  ["Transmission",c=>c.transmission||"—"],
  ["Fuel type",c=>c.fuel||"—"],
  ["Model year",c=>c.year||"—"],
  ["Fleet status",c=>c.status||"Available"],
  ["Estimated 3-day rental",c=>money((Number(c.price)||0)*3)]
 ];
 $("compareTable").innerHTML=`<table class="compare-table"><thead><tr><th>Specification</th>${selected.map(c=>`<th>${escapeHTML(c.name)}</th>`).join("")}</tr></thead><tbody>${rows.map(([label,get])=>`<tr><th>${label}</th>${selected.map(c=>`<td>${escapeHTML(get(c))}</td>`).join("")}</tr>`).join("")}</tbody></table><p class="notice">Estimates are based on listed daily rates and exclude any real-world fees or payments.</p>`;
 openModal("compareModal");
}
function toggleFavorite(id){const u=currentUser();if(!u){showAuth("login");notify("Log in to save favorites.");return}u.preferences=u.preferences||{favorites:[],views:{},categories:{},searches:[]};u.preferences.favorites=u.preferences.favorites||[];if(u.preferences.favorites.includes(id)){u.preferences.favorites=u.preferences.favorites.filter(x=>x!==id);addActivity("Favorite removed",cars.find(c=>c.id===id)?.name||id)}else{u.preferences.favorites.push(id);addActivity("Favorite added",cars.find(c=>c.id===id)?.name||id)}saveAll();renderCars();if(! $("profileSection").classList.contains("hidden"))renderProfile()}
function startBooking(id){const u=currentUser();if(!u){showAuth("login");notify("Please log in before reserving a car.");return}if(isAdmin()){notify("Use a customer account to make a reservation.");return}const car=cars.find(c=>c.id===id);if(!car||car.status==="Maintenance")return;
 u.preferences.views[id]=(u.preferences.views[id]||0)+1;u.preferences.categories[car.category]=(u.preferences.categories[car.category]||0)+1;addActivity("Vehicle viewed",car.name);saveAll();
 $("bookingCarId").value=id;$("bookingCarTitle").textContent=car.name;$("bookingCarInfo").textContent=`${car.category} · ${car.seats} seats · ${money(car.price)} per day`;
 $("bookingPickup").value=$("pickupDate").value||today();const d=new Date();d.setDate(d.getDate()+1);$("bookingReturn").value=$("returnDate").value||`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;$("bookingPickup").min=today();$("bookingReturn").min=$("bookingPickup").value;$("bookingError").textContent="";updateBookingPrice();openModal("bookingModal")}
function daysBetween(a,b){return Math.round((new Date(b+"T00:00:00")-new Date(a+"T00:00:00"))/86400000)}
function updateBookingPrice(){const c=cars.find(x=>x.id===$("bookingCarId").value),s=$("bookingPickup").value,e=$("bookingReturn").value,d=s&&e?daysBetween(s,e):0;$("priceDays").textContent=d>0?`${d} day${d===1?"":"s"} × ${money(c?.price||0)}`:"Choose a return date after pickup";$("priceTotal").textContent=money(d>0?d*(c?.price||0):0)}
$("bookingPickup").addEventListener("change",()=>{$("bookingReturn").min=$("bookingPickup").value;updateBookingPrice()});$("bookingReturn").addEventListener("change",updateBookingPrice);
$("bookingForm").addEventListener("submit",e=>{e.preventDefault();const c=cars.find(x=>x.id===$("bookingCarId").value),s=$("bookingPickup").value,r=$("bookingReturn").value,d=daysBetween(s,r);if(!c){$("bookingError").textContent="Vehicle not found.";return}if(s<today()||d<1){$("bookingError").textContent="Choose a future pickup date and a return date at least one day later.";return}if(c.status==="Maintenance"||!carAvailability(c.id,s,r)){$("bookingError").textContent="This vehicle is not available for those dates.";return}
 const b={id:"DE"+Date.now().toString().slice(-8),carId:c.id,carName:c.name,email:currentUser().email,pickupDate:s,returnDate:r,days:d,total:d*c.price,status:"Confirmed",createdAt:now()};bookings.unshift(b);addActivity("Booking confirmed",`${b.id} · ${c.name}`);saveAll();closeModal("bookingModal");renderCars();notify("Reservation confirmed · "+b.id);setPage("myBookings")});
function renderBookings(){const u=currentUser(),mine=bookings.filter(b=>b.email===u?.email),active=mine.filter(b=>b.status==="Confirmed"),spent=active.reduce((s,b)=>s+b.total,0);
 $("bookingSummary").innerHTML=`<div class="summary-item"><span>Total reservations</span><strong>${mine.length}</strong></div><div class="summary-item"><span>Active reservations</span><strong>${active.length}</strong></div><div class="summary-item"><span>Confirmed rental value</span><strong>${money(spent)}</strong></div>`;
 $("bookingsList").innerHTML=mine.length?mine.map(b=>`<div class="booking-card"><div><h3>${escapeHTML(b.carName)} <span class="status ${b.status.toLowerCase()}">${escapeHTML(b.status)}</span></h3><p>Reference: ${escapeHTML(b.id)}<br>${fmtDay(b.pickupDate)} → ${fmtDay(b.returnDate)} · ${b.days} day(s)<br>Total: <b>${money(b.total)}</b> · Created ${fmtDate(b.createdAt)}</p></div><div class="booking-actions"><button class="btn btn-ghost btn-small" onclick="downloadReceipt('${b.id}')">Download receipt</button>${b.status==="Confirmed"?`<button class="btn btn-ghost btn-small" onclick="cancelBooking('${b.id}')">Cancel reservation</button>`:""}</div></div>`).join(""):'<div class="empty-state">No reservations yet. Explore the fleet to book your first car.</div>'}
function downloadReceipt(id){const b=bookings.find(x=>x.id===id);if(!b||b.email!==currentUser()?.email){notify("Reservation not found for this account.");return}const receipt=`DRIVEEASE — BOOKING RECEIPT
================================
Reference: ${b.id}
Customer: ${currentUser().name}
Email: ${b.email}
Vehicle: ${b.carName}
Pickup: ${b.pickupDate}
Return: ${b.returnDate}
Duration: ${b.days} day(s)
Daily rate: ${money(b.days?b.total/b.days:0)}
Total estimate: ${money(b.total)}
Status: ${b.status}
Created: ${fmtDate(b.createdAt)}

Academic demo receipt only. No real payment was processed.`;const blob=new Blob([receipt],{type:"text/plain;charset=utf-8"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=`DriveEase-${b.id}-receipt.txt`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);addActivity("Receipt downloaded",b.id);notify("Booking receipt downloaded.")}
function cancelBooking(id){const b=bookings.find(x=>x.id===id);if(!b||b.email!==currentUser()?.email||b.status!=="Confirmed")return;if(!confirm("Cancel this reservation?"))return;b.status="Cancelled";addActivity("Booking cancelled",`${b.id} · ${b.carName}`);saveAll();renderBookings();renderCars();notify("Reservation cancelled.")}
function renderProfile(){const u=currentUser();if(!u)return;u.preferences=u.preferences||{favorites:[],views:{},categories:{},searches:[]};const mine=bookings.filter(b=>b.email===u.email),confirmed=mine.filter(b=>b.status==="Confirmed"),spend=confirmed.reduce((s,b)=>s+b.total,0),letters=u.name.trim().split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase();
 $("profileCard").innerHTML=`<div class="avatar">${escapeHTML(letters)}</div><h3>${escapeHTML(u.name)}</h3><div class="email">${escapeHTML(u.email)}</div><span class="profile-badge">${u.role==="admin"?"ADMINISTRATOR":"REGISTERED CUSTOMER"}</span><div class="profile-info"><div><span>Customer ID</span><strong>${escapeHTML(u.id)}</strong></div><div><span>Member since</span><strong>${fmtDay(u.createdAt.slice(0,10))}</strong></div><div><span>Login count</span><strong>${u.loginCount||0}</strong></div><div><span>Last login</span><strong>${fmtDate(u.lastLoginAt)}</strong></div><div><span>Last logout</span><strong>${fmtDate(u.lastLogoutAt)}</strong></div></div>`;
 $("profileStats").innerHTML=`<div class="stat-card"><span>Total bookings</span><strong>${mine.length}</strong></div><div class="stat-card"><span>Active bookings</span><strong>${confirmed.length}</strong></div><div class="stat-card"><span>Confirmed rental value</span><strong>${money(spend)}</strong></div><div class="stat-card"><span>Saved favorites</span><strong>${u.preferences.favorites.length}</strong></div>`;
 const prefs=Object.entries(u.preferences.views||{}).map(([id,count])=>({car:cars.find(c=>c.id===id),count})).filter(x=>x.car).sort((a,b)=>b.count-a.count);
 const cats=Object.entries(u.preferences.categories||{}).sort((a,b)=>b[1]-a[1]);
 const favorites=(u.preferences.favorites||[]).map(id=>cars.find(c=>c.id===id)).filter(Boolean);
 $("preferencesList").innerHTML=(favorites.length?`<div class="preference-row"><div><strong>♡ Saved favorites</strong><small>${favorites.map(c=>escapeHTML(c.name)).join(", ")}</small></div><span class="pref-count">${favorites.length}</span></div>`:"")+(prefs.length?prefs.slice(0,4).map(x=>`<div class="preference-row"><div><strong>${escapeHTML(x.car.name)}</strong><small>${escapeHTML(x.car.category)} · viewed</small></div><span class="pref-count">${x.count} view${x.count===1?"":"s"}</span></div>`).join(""):"")+(cats.length?cats.slice(0,3).map(([cat,count])=>`<div class="preference-row"><div><strong>${escapeHTML(cat)} preference</strong><small>Category interest from vehicle views</small></div><span class="pref-count">${count}</span></div>`).join(""):"")||'<p class="muted" style="font-size:11px">Your preferences will appear as you explore and favorite cars.</p>';
 const mineActivity=activity.filter(a=>a.email===u.email).slice(0,7);
 $("userActivity").innerHTML=mineActivity.length?mineActivity.map(a=>`<div class="activity-row"><div><strong>${escapeHTML(a.type)}</strong><small>${escapeHTML(a.detail||"Account activity")}</small></div><small>${fmtDate(a.at)}</small></div>`).join(""):'<p class="muted" style="font-size:11px">No activity recorded yet.</p>';
 $("sessionDetails").innerHTML=`<div class="session-row"><div><strong>Current session started</strong><small>${fmtDate(session?.loginAt)}</small></div><span class="status">Active</span></div><div class="session-row"><div><strong>Current session ID</strong><small>${escapeHTML(session?.sessionId||"No active session")}</small></div><button class="btn btn-ghost btn-small" onclick="copySession()">Copy ID</button></div><div class="session-row"><div><strong>Last login recorded</strong><small>${fmtDate(u.lastLoginAt)}</small></div></div><div class="session-row"><div><strong>Last completed logout</strong><small>${fmtDate(u.lastLogoutAt)}</small></div></div>`;
}
function copySession(){if(!session)return;const text=session.sessionId;if(navigator.clipboard?.writeText)navigator.clipboard.writeText(text).then(()=>notify("Session ID copied."),()=>notify("Session ID: "+text));else notify("Session ID: "+text)}
$("editProfileBtn")?.addEventListener("click",()=>{const u=currentUser();if(!u)return;$("profileEditName").value=u.name||"";$("profileEditEmail").value=u.email||"";$("profileEditError").textContent="";openModal("profileEditModal")});
$("profileEditForm")?.addEventListener("submit",e=>{e.preventDefault();const u=currentUser(),name=$("profileEditName").value.trim();if(!u)return;if(name.length<2){$("profileEditError").textContent="Enter a name with at least two characters.";return}u.name=name;addActivity("Profile updated","Updated account display name",u.email);saveAll();updateHeader();renderProfile();closeModal("profileEditModal");notify("Profile updated successfully.")});
$("exportDataBtn").addEventListener("click",()=>{const u=currentUser();if(!u)return;const data={profile:{id:u.id,name:u.name,email:u.email,role:u.role,createdAt:u.createdAt,lastLoginAt:u.lastLoginAt,lastLogoutAt:u.lastLogoutAt,loginCount:u.loginCount,preferences:u.preferences},bookings:bookings.filter(b=>b.email===u.email),activity:activity.filter(a=>a.email===u.email)};const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="driveease-my-activity.json";a.click();URL.revokeObjectURL(url);addActivity("Data exported","Downloaded profile, booking and activity data");notify("Activity export prepared.")});
function renderAdmin(){const active=bookings.filter(b=>b.status==="Confirmed"),rev=active.reduce((s,b)=>s+b.total,0),customers=users.filter(u=>u.role==="user");$("adminStats").innerHTML=`<div class="stat-card"><span>Fleet vehicles</span><strong>${cars.length}</strong></div><div class="stat-card"><span>Active reservations</span><strong>${active.length}</strong></div><div class="stat-card"><span>Customer accounts</span><strong>${customers.length}</strong></div><div class="stat-card"><span>Confirmed rental value</span><strong>${money(rev)}</strong></div>`;
 $("fleetAdminCount").textContent=`${cars.length} vehicles`; $("adminCars").innerHTML=cars.map(c=>`<tr><td><strong>${escapeHTML(c.name)}</strong><small>${c.seats} seats · ${escapeHTML(c.transmission)}</small></td><td>${escapeHTML(c.category)}</td><td>${money(c.price)}</td><td><span class="status ${c.status==="Maintenance"?"pending":""}">${escapeHTML(c.status)}</span></td><td><div class="table-actions"><button class="btn btn-ghost" onclick="editCar('${c.id}')">Edit</button><button class="btn btn-ghost" onclick="toggleMaintenance('${c.id}')">${c.status==="Maintenance"?"Available":"Maintenance"}</button><button class="btn btn-danger" onclick="deleteCar('${c.id}')">Delete</button></div></td></tr>`).join("");
 $("adminBookings").innerHTML=bookings.length?bookings.map(b=>`<tr><td><strong>${escapeHTML(b.id)}</strong><small>${escapeHTML(b.carName)}</small></td><td>${escapeHTML(b.email)}</td><td>${fmtDay(b.pickupDate)}<small>to ${fmtDay(b.returnDate)}</small></td><td>${money(b.total)}</td><td><span class="status ${b.status.toLowerCase()}">${escapeHTML(b.status)}</span><div class="table-actions" style="margin-top:7px">${b.status==="Confirmed"?`<button class="btn btn-danger" onclick="adminBooking('${b.id}','Cancelled')">Cancel</button>`:""}${b.status==="Pending"?`<button class="btn btn-primary" onclick="adminBooking('${b.id}','Confirmed')">Approve</button><button class="btn btn-danger" onclick="adminBooking('${b.id}','Rejected')">Reject</button>`:""}</div></td></tr>`).join(""):'<tr><td colspan="5">No reservations recorded.</td></tr>';
 $("adminCustomers").innerHTML=customers.length?customers.map(u=>{const ub=bookings.filter(b=>b.email===u.email),most=Object.entries(u.preferences?.views||{}).sort((a,b)=>b[1]-a[1])[0],car=most?cars.find(c=>c.id===most[0]):null;return `<tr><td><strong>${escapeHTML(u.name)}</strong><small>${escapeHTML(u.email)} · ${escapeHTML(u.id)}</small></td><td>${fmtDay((u.createdAt||"").slice(0,10))}</td><td>${fmtDate(u.lastLoginAt)}</td><td>${car?escapeHTML(car.name):"Not enough data"}</td><td>${ub.length}</td></tr>`}).join(""):'<tr><td colspan="5">No customers registered yet.</td></tr>';
 document.querySelectorAll(".admin-tab").forEach(t=>t.classList.toggle("active",t.dataset.adminTab===selectedAdminTab));["fleet","bookings","customers"].forEach(tab=>$("admin"+tab[0].toUpperCase()+tab.slice(1)+"Panel").classList.toggle("hidden",tab!==selectedAdminTab))}
function selectAdminTab(tab){selectedAdminTab=tab;renderAdmin()}
function openCarForm(car=null){$("carForm").reset();$("editCarId").value=car?.id||"";$("carModalTitle").textContent=car?"Edit vehicle":"Add vehicle";$("carName").value=car?.name||"";$("carCategory").value=car?.category||"Sedan";$("carPrice").value=car?.price||"";$("carSeats").value=car?.seats||5;$("carTransmission").value=car?.transmission||"Automatic";$("carImage").value=car?.image||"";$("carError").textContent="";openModal("carModal")}
function editCar(id){const c=cars.find(x=>x.id===id);if(c)openCarForm(c)}
$("addCarBtn").addEventListener("click",()=>openCarForm());
$("carForm").addEventListener("submit",e=>{e.preventDefault();const id=$("editCarId").value,name=$("carName").value.trim(),price=Number($("carPrice").value),seats=Number($("carSeats").value);if(!name||price<=0||seats<2){$("carError").textContent="Enter a valid model, price and seat count.";return}const d={name,make:name.split(" ")[0],model:name,category:$("carCategory").value,price,seats,transmission:$("carTransmission").value,image:$("carImage").value.trim()||"assets/fleet-hero.svg",year:new Date().getFullYear(),fuel:"Petrol",description:"Managed fleet vehicle."};if(id){const old=cars.find(c=>c.id===id);Object.assign(old,d)}else cars.push({id:"c"+Date.now(),...d,status:"Available"});saveAll();closeModal("carModal");renderAdmin();renderCars();notify(id?"Vehicle details updated.":"Vehicle added to fleet.")});
function toggleMaintenance(id){const c=cars.find(x=>x.id===id);if(!c)return;c.status=c.status==="Maintenance"?"Available":"Maintenance";saveAll();renderAdmin();renderCars();notify(`${c.name} marked ${c.status.toLowerCase()}.`)}
function deleteCar(id){const c=cars.find(x=>x.id===id);if(!c)return;if(bookings.some(b=>b.carId===id&&b.status==="Confirmed")){notify("Cannot remove a car with a confirmed reservation.");return}if(!confirm(`Remove ${c.name} from the fleet?`))return;cars=cars.filter(x=>x.id!==id);saveAll();renderAdmin();renderCars();notify("Vehicle removed.")}
function adminBooking(id,status){const b=bookings.find(x=>x.id===id);if(!b)return;b.status=status;addActivity("Admin booking update",`${b.id} set to ${status}`,b.email);saveAll();renderAdmin();renderCars();notify("Reservation status updated.")}
document.querySelectorAll("[data-page]").forEach(el=>el.addEventListener("click",e=>{e.preventDefault();setPage(el.dataset.page)}));
document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",()=>closeModal(el.dataset.close)));
document.querySelectorAll(".modal-backdrop").forEach(el=>el.addEventListener("click",e=>{if(e.target===el)closeModal(el.id)}));
document.querySelectorAll(".admin-tab").forEach(el=>el.addEventListener("click",()=>selectAdminTab(el.dataset.adminTab)));
$("loginBtn")?.addEventListener("click",()=>showAuth("login"));$("signupBtn")?.addEventListener("click",()=>showAuth("signup"));
$("searchInput").addEventListener("input",()=>{const u=currentUser();if(u){u.preferences.searches=u.preferences.searches||[];const term=$("searchInput").value.trim();if(term){u.preferences.searches.unshift({term,at:now()});u.preferences.searches=u.preferences.searches.slice(0,20);write(KEYS.users,users)}}renderCars()});
$("categoryFilter").addEventListener("change",()=>{const u=currentUser();if(u){const c=$("categoryFilter").value;if(c!=="All"){u.preferences.categories[c]=(u.preferences.categories[c]||0)+1;write(KEYS.users,users);addActivity("Category filtered",c)}}renderCars()});
$("searchBtn").addEventListener("click",()=>{const s=$("pickupDate").value,e=$("returnDate").value;if(s&&e&&e<=s){notify("Return date must be after pickup.");return}if(s&&s<today()){notify("Pickup date cannot be in the past.");return}renderCars();$("fleetSection").scrollIntoView({behavior:"smooth"})});
$("clearFilters").addEventListener("click",()=>{$("searchInput").value="";$("categoryFilter").value="All";$("pickupDate").value="";$("returnDate").value="";renderCars()});
$("exploreBtn").addEventListener("click",()=>$("fleetSection").scrollIntoView({behavior:"smooth"}));
$("pickupDate").min=today();$("returnDate").min=today();$("bookingPickup").min=today();$("bookingReturn").min=today();
$("pickupDate").addEventListener("change",()=>{$("returnDate").min=$("pickupDate").value||today();if($("returnDate").value&&$("returnDate").value<$("returnDate").min){$("returnDate").value=""}});
$("bookingPickup").addEventListener("change",()=>{$("bookingReturn").min=$("bookingPickup").value||today();if($("bookingReturn").value&&$("bookingReturn").value<$("bookingReturn").min){$("bookingReturn").value=""}updateBookingPrice()});
// Advanced fleet controls and local backup tools.
$("sortCars")?.addEventListener("change",renderCars);
$("favoritesOnly")?.addEventListener("click",()=>{if(!currentUser()){showAuth("login");notify("Log in to view saved favorites.");return}favoritesOnly=!favoritesOnly;$("favoritesOnly").setAttribute("aria-pressed",String(favoritesOnly));$("favoritesOnly").classList.toggle("active",favoritesOnly);$("favoritesOnly").textContent=favoritesOnly?"♥ Favorites only":"♡ Favorites";renderCars();});
$("clearCompare")?.addEventListener("click",clearCompare);
$("compareNow")?.addEventListener("click",openComparison);
$("exportBackupBtn")?.addEventListener("click",()=>{
 if(!isAdmin()){notify("Admin access is required.");return}
 const payload={app:"DriveEase",formatVersion:1,exportedAt:now(),cars,bookings,users:users.map(u=>({...u})),activity};
 const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=`driveease-backup-${today()}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);addActivity("Admin backup exported","Fleet, users, bookings and activity backup");notify("Backup exported. Store it privately because it contains demo account data.");
});
$("importBackupBtn")?.addEventListener("click",()=>{if(!isAdmin()){notify("Admin access is required.");return}$("backupFile").click()});
$("backupFile")?.addEventListener("change",async e=>{
 const file=e.target.files?.[0];if(!file)return;
 try{
  const data=JSON.parse(await file.text());
  if(data.app!=="DriveEase"||!Array.isArray(data.cars)||!Array.isArray(data.bookings)||!Array.isArray(data.users)||!Array.isArray(data.activity))throw new Error("This is not a valid DriveEase backup.");
  if(!data.users.some(u=>u.email==="admin@driveease.com"&&u.role==="admin"))throw new Error("Backup must include the DriveEase administrator account.");
  if(!confirm(`Import backup with ${data.cars.length} vehicles, ${data.bookings.length} bookings and ${data.users.length} users? Current demo data will be replaced.`))return;
  cars=data.cars;bookings=data.bookings;users=data.users;activity=data.activity;saveAll();updateHeader();renderAdmin();renderCars();notify("Backup imported successfully.");
 }catch(err){notify(err.message||"Could not import this backup.")}
 finally{e.target.value=""}
});
// Accessibility and multi-tab synchronization for the browser-based demo.
document.addEventListener("keydown",e=>{if(e.key==="Escape")document.querySelectorAll(".modal-backdrop:not(.hidden)").forEach(m=>closeModal(m.id))});
window.addEventListener("storage",e=>{if(!Object.values(KEYS).includes(e.key))return;users=read(KEYS.users,users);cars=read(KEYS.cars,cars);bookings=read(KEYS.bookings,bookings);activity=read(KEYS.activity,activity);session=read(KEYS.session,null);updateHeader();renderCars();if(!$("adminSection").classList.contains("hidden"))renderAdmin();if(!$("bookingsSection").classList.contains("hidden"))renderBookings();if(!$("profileSection").classList.contains("hidden"))renderProfile()});
const heroImage=document.querySelector(".hero-visual > img");if(heroImage)heroImage.onerror=()=>{heroImage.onerror=null;heroImage.src="assets/cars/c23.jpg"};
// Keep the Local Storage session across page refreshes. The explicit Log out button records lastLogoutAt.
updateHeader();renderCars();

// Homepage category rail and CTA shortcuts.
document.querySelectorAll("[data-category]").forEach(btn=>btn.addEventListener("click",()=>{
  $("categoryFilter").value=btn.dataset.category;
  document.querySelectorAll(".category-chip").forEach(chip=>chip.classList.toggle("active",chip===btn));
  renderCars();
  if(btn.dataset.category!=="All")$("fleetSection").scrollIntoView({behavior:"smooth",block:"start"});
}));
$("howExploreBtn")?.addEventListener("click",()=>$("fleetSection").scrollIntoView({behavior:"smooth"}));
$("finalExploreBtn")?.addEventListener("click",()=>$("fleetSection").scrollIntoView({behavior:"smooth"}));

$("forgotPasswordLink")?.addEventListener("click",()=>{window.location.href="/forgot-password";});
