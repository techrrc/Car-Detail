/* ==========================================================================
   VELOCITY — data
   ========================================================================== */
const CARS = [
  { id:1, brand:"Lamborghini", name:"Revuelto", year:2024, price:608000, hp:1001, top:350, accel:2.5, torque:725, weight:1772, engine:"6.5L V12 Hybrid", trans:"8-spd DCT", drive:"AWD", desc:"Lamborghini's first series-production hybrid supercar, pairing a naturally aspirated V12 with three electric motors for a 1,001-horsepower total system output." },
  { id:2, brand:"Lamborghini", name:"Aventador SVJ", year:2019, price:517770, hp:759, top:350, accel:2.8, torque:720, weight:1525, engine:"6.5L V12", trans:"7-spd ISR", drive:"AWD", desc:"The final and most extreme evolution of the Aventador line, once the fastest production car around the Nürburgring Nordschleife." },
  { id:3, brand:"Lamborghini", name:"Huracán STO", year:2021, price:327838, hp:631, top:310, accel:3.0, torque:565, weight:1339, engine:"5.2L V10", trans:"7-spd DCT", drive:"RWD", desc:"Super Trofeo Omologata — a road-legal race car derived directly from Lamborghini's one-make racing series." },
  { id:4, brand:"Ferrari", name:"SF90 Stradale", year:2020, price:507300, hp:986, top:340, accel:2.5, torque:800, weight:1570, engine:"4.0L V8 Hybrid", trans:"8-spd DCT", drive:"AWD", desc:"Ferrari's first series-production plug-in hybrid, named for the Scuderia's 90th anniversary, combining a twin-turbo V8 with three electric motors." },
  { id:5, brand:"Ferrari", name:"296 GTB", year:2022, price:322986, hp:819, top:330, accel:2.9, torque:740, weight:1470, engine:"3.0L V6 Hybrid", trans:"8-spd DCT", drive:"RWD", desc:"A compact mid-engined hybrid taking its name from the 2.9-litre V6 displacement and six cylinders, echoing Ferrari's Dino heritage." },
  { id:6, brand:"Ferrari", name:"12Cilindri", year:2024, price:423000, hp:819, top:340, accel:2.9, torque:678, weight:1560, engine:"6.5L V12", trans:"8-spd DCT", drive:"RWD", desc:"A front-engined V12 grand tourer that celebrates naturally aspirated Ferrari heritage with sharp, wedge-shaped modern design." },
  { id:7, brand:"McLaren", name:"750S", year:2023, price:324500, hp:740, top:332, accel:2.8, torque:800, weight:1389, engine:"4.0L V8 Twin-Turbo", trans:"7-spd DCT", drive:"RWD", desc:"The spiritual successor to the 720S, sharpened for driver engagement with more power and 30kg less weight." },
  { id:8, brand:"McLaren", name:"765LT", year:2020, price:358000, hp:765, top:330, accel:2.7, torque:800, weight:1339, engine:"4.0L V8 Twin-Turbo", trans:"7-spd DCT", drive:"RWD", desc:"Longtail — McLaren's most track-focused road car of its generation, with 80% new or modified parts versus the 720S." },
  { id:9, brand:"McLaren", name:"Artura", year:2022, price:237500, hp:671, top:330, accel:3.0, torque:720, weight:1498, engine:"3.0L V6 Hybrid", trans:"8-spd DCT", drive:"RWD", desc:"McLaren's first series-production hybrid supercar, built on an all-new carbon architecture designed from a blank sheet." },
  { id:10, brand:"Porsche", name:"911 GT3 RS", year:2022, price:241300, hp:518, top:296, accel:3.0, torque:465, weight:1450, engine:"4.0L Flat-6", trans:"7-spd PDK", drive:"RWD", desc:"A road-legal race car built around aerodynamics first, generating more downforce than a 911 GT3 Cup racer at top speed." },
  { id:11, brand:"Porsche", name:"918 Spyder", year:2015, price:845000, hp:887, top:345, accel:2.6, torque:944, weight:1634, engine:"4.6L V8 Hybrid", trans:"7-spd PDK", drive:"AWD", desc:"Porsche's landmark hybrid hypercar and one third of the celebrated 'Holy Trinity' alongside the McLaren P1 and Ferrari LaFerrari." },
  { id:12, brand:"Bugatti", name:"Chiron", year:2016, price:2998000, hp:1500, top:420, accel:2.4, torque:1600, weight:1996, engine:"8.0L W16 Quad-Turbo", trans:"7-spd DCT", drive:"AWD", desc:"The successor to the Veyron, powered by an 8.0-litre quad-turbo W16 engine producing 1,500 horsepower." },
  { id:13, brand:"Bugatti", name:"Tourbillon", year:2024, price:3800000, hp:1800, top:445, accel:2.0, torque:1000, weight:1995, engine:"8.3L V16 Hybrid", trans:"7-spd DCT", drive:"AWD", desc:"Bugatti's next-generation hypercar, pairing a naturally aspirated V16 with three electric motors for a combined 1,800 horsepower." },
  { id:14, brand:"Koenigsegg", name:"Jesko", year:2020, price:3400000, hp:1600, top:483, accel:2.5, torque:1500, weight:1420, engine:"5.0L V8 Twin-Turbo", trans:"9-spd Multi-Clutch", drive:"RWD", desc:"Named after founder Christian von Koenigsegg's father, engineered to be Koenigsegg's ultimate track-capable hypercar." },
  { id:15, brand:"Koenigsegg", name:"Gemera", year:2020, price:1700000, hp:1700, top:400, accel:1.9, torque:3500, weight:1850, engine:"2.0L Twin-Turbo Hybrid", trans:"Direct Drive", drive:"AWD", desc:"A four-seat 'mega-GT' hybrid hypercar built to prove that four doors and four seats need not compromise performance." },
  { id:16, brand:"Pagani", name:"Huayra", year:2011, price:1400000, hp:730, top:383, accel:3.2, torque:1000, weight:1350, engine:"6.0L V12 Twin-Turbo", trans:"7-spd Automated Manual", drive:"RWD", desc:"Named after a Quechua wind god, the Huayra pairs a bespoke AMG V12 with active aerodynamic flaps at each corner." },
  { id:17, brand:"Aston Martin", name:"Valkyrie", year:2021, price:3000000, hp:1160, top:402, accel:2.5, torque:900, weight:1030, engine:"6.5L V12 Hybrid", trans:"7-spd Automated Manual", drive:"RWD", desc:"Co-developed with Red Bull Advanced Technologies, built around F1-derived aerodynamics and an ultra-high-revving V12." },
  { id:18, brand:"Rimac", name:"Nevera", year:2021, price:2400000, hp:1914, top:412, accel:1.85, torque:2360, weight:2150, engine:"Quad-Motor Electric", trans:"Single-Speed", drive:"AWD", desc:"An all-electric Croatian hypercar and one of the quickest-accelerating production cars ever built." },
  { id:19, brand:"Mercedes-AMG", name:"GT Black Series", year:2020, price:325000, hp:730, top:325, accel:3.1, torque:800, weight:1540, engine:"4.0L V8 Twin-Turbo", trans:"7-spd DCT", drive:"RWD", desc:"The most powerful V8 AMG has ever built for the road, wearing a fixed rear wing borrowed from the GT3 race car." },
  { id:20, brand:"Ford", name:"GT", year:2017, price:500000, hp:660, top:347, accel:2.9, torque:746, weight:1385, engine:"3.5L V6 EcoBoost Twin-Turbo", trans:"7-spd DCT", drive:"RWD", desc:"A Le Mans-winning race car for the road, built around a carbon fibre tub and a twin-turbo V6 rather than a traditional V8." },
];

const BRANDS = [
  { name:"Ferrari", desc:"Prancing Horse luxury and motorsport pedigree from Maranello." },
  { name:"Lamborghini", desc:"Raggio-sharp Italian design built around theatrical excess." },
  { name:"Porsche", desc:"Stuttgart precision engineering, obsessively refined since 1963." },
  { name:"McLaren", desc:"Formula 1 technology transferred directly to the road." },
  { name:"Bugatti", desc:"French Grand Tourer excess at the absolute limit of speed." },
  { name:"Koenigsegg", desc:"Swedish megacar engineering built in vanishingly small numbers." },
  { name:"Pagani", desc:"Modenese art and carbon-titanium craftsmanship, hand-built." },
  { name:"Aston Martin", desc:"British GT elegance sharpened by Formula 1 aerodynamics." },
  { name:"Rimac", desc:"Croatian electric hypercar engineering, built from a blank page." },
  { name:"Mercedes-AMG", desc:"Affalterbach's V8 performance division, race-bred since 1967." },
];

const fmtPrice = n => "$" + n.toLocaleString("en-US");

/* slug used to look up a real photo, e.g. images/lamborghini-revuelto.jpg */
const slugify = car => `${car.brand}-${car.name}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const carVisualSilhouette = () => `
  <svg viewBox="0 0 900 320" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 230 C60 180 120 170 175 168 C210 130 260 95 330 90 C400 84 470 90 520 105 C560 60 640 45 700 60 C760 74 800 110 835 150 C860 155 875 175 875 200 C875 220 862 232 840 234 L 800 234 C800 205 776 182 748 182 C720 182 696 205 696 234 L 250 234 C250 205 226 182 198 182 C170 182 146 205 146 234 L 70 234 C50 234 38 224 40 230 Z" stroke="currentColor" stroke-width="3"/>
    <circle cx="198" cy="234" r="34" stroke="currentColor" stroke-width="3.5"/>
    <circle cx="748" cy="234" r="34" stroke="currentColor" stroke-width="3.5"/>
    <path d="M330 90 C360 128 400 140 460 140 C520 140 560 120 590 95" stroke="currentColor" stroke-width="1.5" opacity="0.5"/>
  </svg>`;

/* Renders a real <img> for the car if a photo exists at images/<slug>.jpg (or .jpg/.png/.webp),
   and silently falls back to the drawn silhouette if it 404s or none has been added yet. */
function carVisualMarkup(car, opts){
  const slug = slugify(car);
  const lazy = opts && opts.eager ? '' : 'loading="lazy"';
  return `
    <div class="car-photo-wrap">
      <img class="car-photo" src="images/${slug}.jpg" alt="${car.brand} ${car.name}" ${lazy}
           onerror="this.closest('.car-photo-wrap').classList.add('photo-missing'); this.remove();">
      <div class="car-photo-fallback">${carVisualSilhouette()}</div>
    </div>`;
}

let state = { filtered: [...CARS] };

/* ==========================================================================
   NAV
   ========================================================================== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
}, { passive:true });

document.querySelectorAll('[data-target]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const target = document.getElementById(el.dataset.target);
    if (target) target.scrollIntoView({ behavior:'smooth' });
    closeMobileMenu();
  });
});

const sections = document.querySelectorAll('main > section, .hero');
const navLinkMap = {};
document.querySelectorAll('.nav-link').forEach(l => navLinkMap[l.dataset.target] = l);
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      Object.values(navLinkMap).forEach(l => l.classList.remove('active'));
      const link = navLinkMap[e.target.id];
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => navObserver.observe(s));

/* mobile menu */
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
function closeMobileMenu(){ menuToggle.classList.remove('open'); mobileMenu.classList.remove('open'); }
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

/* search toggle */
const searchToggle = document.getElementById('searchToggle');
const navSearch = document.getElementById('navSearch');
const navSearchInput = document.getElementById('navSearchInput');
searchToggle.addEventListener('click', () => {
  navSearch.classList.toggle('open');
  if (navSearch.classList.contains('open')) setTimeout(() => navSearchInput.focus(), 300);
});
document.getElementById('navSearchClose').addEventListener('click', () => navSearch.classList.remove('open'));
navSearchInput.addEventListener('input', () => {
  document.getElementById('collectionSearch').value = navSearchInput.value;
  applyFilters();
  if (navSearchInput.value.trim()) {
    navSearch.classList.remove('open');
    document.getElementById('collection').scrollIntoView({ behavior:'smooth' });
  }
});

/* ==========================================================================
   REVEAL ON SCROLL
   ========================================================================== */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); } });
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ==========================================================================
   HERO TELEMETRY COUNTERS
   ========================================================================== */
document.querySelectorAll('.tel-value').forEach(el => {
  const target = parseFloat(el.dataset.count);
  const decimals = el.dataset.decimal ? 1 : 0;
  let started = false;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !started) {
        started = true;
        const duration = 1600, start = performance.now();
        function tick(now){
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * eased).toFixed(decimals);
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
    });
  });
  obs.observe(el);
});

/* ==========================================================================
   RENDER: COLLECTION
   ========================================================================== */
const carGrid = document.getElementById('carGrid');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');

function renderGrid(list){
  carGrid.innerHTML = '';
  noResults.hidden = list.length !== 0;
  resultsCount.textContent = `${list.length} car${list.length===1?'':'s'} shown of ${CARS.length}`;
  list.forEach((car, i) => {
    const glow = i % 2 === 0 ? 'rgba(61,90,254,.18)' : 'rgba(230,57,70,.16)';
    const card = document.createElement('article');
    card.className = 'car-card';
    card.style.setProperty('--glow', glow);
    card.innerHTML = `
      <div class="car-card-top">
        <span class="car-brand">${car.brand}</span>
        <span class="car-year">${car.year}</span>
      </div>
      <div class="car-visual">${carVisualMarkup(car)}</div>
      <h3 class="car-name">${car.name}</h3>
      <p class="car-price">${fmtPrice(car.price)}</p>
      <div class="car-specs-mini">
        <div class="mini-stat"><b>${car.hp}</b><span>HP</span></div>
        <div class="mini-stat"><b>${car.top}</b><span>KM/H</span></div>
        <div class="mini-stat"><b>${car.accel}s</b><span>0-100</span></div>
      </div>
      <button class="card-view-btn">View Details</button>
    `;
    card.addEventListener('click', () => openModal(car.id));
    carGrid.appendChild(card);
  });
}

/* filters populate */
const filterBrand = document.getElementById('filterBrand');
const filterEngine = document.getElementById('filterEngine');
[...new Set(CARS.map(c => c.brand))].sort().forEach(b => {
  filterBrand.insertAdjacentHTML('beforeend', `<option value="${b}">${b}</option>`);
});
[...new Set(CARS.map(c => c.engine.replace(/^[\d.]+L\s*/, '').replace(/Twin-Turbo|Quad-Turbo/,'').trim()))].sort().forEach(e => {
  if (e) filterEngine.insertAdjacentHTML('beforeend', `<option value="${e}">${e}</option>`);
});

const collectionSearch = document.getElementById('collectionSearch');
const sortBy = document.getElementById('sortBy');
const priceRange = document.getElementById('priceRange');
const hpRange = document.getElementById('hpRange');
const accelRange = document.getElementById('accelRange');

function applyFilters(){
  const q = collectionSearch.value.trim().toLowerCase();
  const brandVal = filterBrand.value;
  const engineVal = filterEngine.value;
  const maxPrice = parseInt(priceRange.value, 10);
  const minHp = parseInt(hpRange.value, 10);
  const maxAccel = parseFloat(accelRange.value);

  let list = CARS.filter(c => {
    const matchesQ = !q || [c.name, c.brand, c.engine, String(c.year)].join(' ').toLowerCase().includes(q);
    const matchesBrand = !brandVal || c.brand === brandVal;
    const matchesEngine = !engineVal || c.engine.includes(engineVal);
    const matchesPrice = c.price <= maxPrice;
    const matchesHp = c.hp >= minHp;
    const matchesAccel = c.accel <= maxAccel;
    return matchesQ && matchesBrand && matchesEngine && matchesPrice && matchesHp && matchesAccel;
  });

  switch (sortBy.value) {
    case 'fastest': list.sort((a,b) => b.top - a.top); break;
    case 'power': list.sort((a,b) => b.hp - a.hp); break;
    case 'accel': list.sort((a,b) => a.accel - b.accel); break;
    case 'cheap': list.sort((a,b) => a.price - b.price); break;
    case 'expensive': list.sort((a,b) => b.price - a.price); break;
    case 'newest': list.sort((a,b) => b.year - a.year); break;
  }
  state.filtered = list;
  renderGrid(list);
}

[collectionSearch, filterBrand, filterEngine, sortBy].forEach(el => el.addEventListener('input', applyFilters));
priceRange.addEventListener('input', () => {
  document.getElementById('priceOut').textContent = priceRange.value >= 5000000 ? '$5,000,000+' : fmtPrice(+priceRange.value);
  applyFilters();
});
hpRange.addEventListener('input', () => { document.getElementById('hpOut').textContent = `${hpRange.value} hp`; applyFilters(); });
accelRange.addEventListener('input', () => { document.getElementById('accelOut').textContent = `${parseFloat(accelRange.value).toFixed(1)}s`; applyFilters(); });

document.getElementById('advFilterToggle').addEventListener('click', function(){
  this.classList.toggle('open');
  document.getElementById('advFilters').classList.toggle('open');
});

renderGrid(CARS);

/* ==========================================================================
   BRANDS
   ========================================================================== */
const brandGrid = document.getElementById('brandGrid');
BRANDS.forEach(b => {
  const count = CARS.filter(c => c.brand === b.name).length;
  const el = document.createElement('div');
  el.className = 'brand-card';
  el.innerHTML = `
    <div class="brand-mark">${b.name}</div>
    <p>${b.desc}</p>
    <div class="brand-count"><b>${count}</b> model${count===1?'':'s'} featured</div>
  `;
  el.addEventListener('click', () => {
    filterBrand.value = b.name;
    applyFilters();
    document.getElementById('collection').scrollIntoView({ behavior:'smooth' });
  });
  brandGrid.appendChild(el);
});

/* ==========================================================================
   MODAL
   ========================================================================== */
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');

function openModal(id){
  const car = CARS.find(c => c.id === id);
  if (!car) return;
  modalContent.innerHTML = `
    <div class="modal-visual">${carVisualMarkup(car, { eager: true })}</div>
    <p class="modal-brand">${car.brand}</p>
    <h2 class="modal-name">${car.name}</h2>
    <p class="modal-desc">${car.desc}</p>
    <div class="modal-specs">
      ${specBox('Engine', car.engine)}
      ${specBox('Horsepower', car.hp + ' hp', true)}
      ${specBox('Torque', car.torque + ' Nm', true)}
      ${specBox('0–100 km/h', car.accel + ' sec', true, 1)}
      ${specBox('Top Speed', car.top + ' km/h', true)}
      ${specBox('Transmission', car.trans)}
      ${specBox('Drivetrain', car.drive)}
      ${specBox('Weight', car.weight + ' kg', true)}
      ${specBox('Price', fmtPrice(car.price))}
      ${specBox('Production Year', car.year)}
    </div>
  `;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  animateSpecCounters();
}
function specBox(label, value, animate, decimals){
  return `<div class="spec-box" data-animate="${animate?1:0}" data-decimals="${decimals||0}"><span>${label}</span><b>${value}</b></div>`;
}
function animateSpecCounters(){
  modalContent.querySelectorAll('.spec-box[data-animate="1"] b').forEach(b => {
    const raw = b.textContent;
    const num = parseFloat(raw);
    const suffix = raw.replace(/^[\d.,]+/, '');
    const decimals = parseInt(b.parentElement.dataset.decimals, 10) || 0;
    const duration = 900, start = performance.now();
    function tick(now){
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      b.textContent = (num * eased).toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}
function closeModal(){
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalBack').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ==========================================================================
   COMPARE
   ========================================================================== */
const selectA = document.getElementById('selectA');
const selectB = document.getElementById('selectB');
CARS.forEach(c => {
  const opt = `<option value="${c.id}">${c.brand} ${c.name}</option>`;
  selectA.insertAdjacentHTML('beforeend', opt);
  selectB.insertAdjacentHTML('beforeend', opt);
});
selectA.value = 4; // SF90
selectB.value = 1; // Revuelto

const COMPARE_METRICS = [
  { key:'hp', label:'HORSEPOWER', unit:'hp', higherBetter:true },
  { key:'top', label:'TOP SPEED', unit:'km/h', higherBetter:true },
  { key:'accel', label:'0–100 KM/H', unit:'s', higherBetter:false },
  { key:'torque', label:'TORQUE', unit:'Nm', higherBetter:true },
  { key:'weight', label:'WEIGHT', unit:'kg', higherBetter:false },
];

function renderCompare(){
  const a = CARS.find(c => c.id === +selectA.value);
  const b = CARS.find(c => c.id === +selectB.value);
  document.getElementById('cardA').innerHTML = compareCardHTML(a);
  document.getElementById('cardB').innerHTML = compareCardHTML(b);

  const bars = document.getElementById('compareBars');
  bars.innerHTML = '';
  COMPARE_METRICS.forEach(m => {
    const va = a[m.key], vb = b[m.key];
    const max = Math.max(va, vb) || 1;
    let widthA, widthB;
    if (m.higherBetter) { widthA = (va/max)*100; widthB = (vb/max)*100; }
    else { widthA = (Math.min(va,vb)/va)*100; widthB = (Math.min(va,vb)/vb)*100; }
    const row = document.createElement('div');
    row.className = 'compare-bar-row';
    row.innerHTML = `
      <div class="compare-bar-label">${m.label}</div>
      <div>
        <div class="bar-track reverse"><div class="bar-fill a" style="width:0%" data-w="${widthA}"></div></div>
        <div class="bar-value">${va}${m.unit}</div>
      </div>
      <div>
        <div class="bar-track"><div class="bar-fill b" style="width:0%" data-w="${widthB}"></div></div>
        <div class="bar-value">${vb}${m.unit}</div>
      </div>
    `;
    bars.appendChild(row);
  });
  requestAnimationFrame(() => {
    bars.querySelectorAll('.bar-fill').forEach(f => { f.style.width = f.dataset.w + '%'; });
  });
}
function compareCardHTML(car){
  return `
    <div class="car-visual">${carVisualMarkup(car)}</div>
    <span class="car-brand">${car.brand}</span>
    <h3 class="car-name">${car.name}</h3>
    <p class="car-price">${fmtPrice(car.price)}</p>
  `;
}
selectA.addEventListener('change', renderCompare);
selectB.addEventListener('change', renderCompare);
renderCompare();

/* ==========================================================================
   PERFORMANCE GAUGES
   ========================================================================== */
const perfCarSelect = document.getElementById('perfCarSelect');
CARS.forEach(c => perfCarSelect.insertAdjacentHTML('beforeend', `<option value="${c.id}">${c.brand} ${c.name}</option>`));
perfCarSelect.value = 18; // Nevera

const PERF_GAUGES = [
  { key:'hp', label:'Horsepower', unit:'hp', max:2000 },
  { key:'top', label:'Top Speed', unit:'km/h', max:500 },
  { key:'accel', label:'0–100', unit:'s', max:5, invert:true },
  { key:'torque', label:'Torque', unit:'Nm', max:3600 },
  { key:'weight', label:'Weight', unit:'kg', max:2200, invert:true },
];
const CIRC = 2 * Math.PI * 60;

function renderGauges(){
  const car = CARS.find(c => c.id === +perfCarSelect.value);
  const wrap = document.getElementById('perfGauges');
  wrap.innerHTML = '';
  PERF_GAUGES.forEach((g, i) => {
    let pct = car[g.key] / g.max;
    if (g.invert) pct = 1 - pct;
    pct = Math.max(0.04, Math.min(1, pct));
    const color = i % 2 === 0 ? '#3d5afe' : '#e63946';
    const el = document.createElement('div');
    el.className = 'gauge';
    el.innerHTML = `
      <div class="gauge-wrap">
        <svg viewBox="0 0 140 140">
          <circle class="gauge-track" cx="70" cy="70" r="60"/>
          <circle class="gauge-fill" cx="70" cy="70" r="60" stroke="${color}" data-offset="${CIRC * (1-pct)}"/>
        </svg>
        <div class="gauge-center"><b>${car[g.key]}</b><span>${g.unit}</span></div>
      </div>
      <div class="gauge-label">${g.label}</div>
    `;
    wrap.appendChild(el);
  });
  requestAnimationFrame(() => {
    wrap.querySelectorAll('.gauge-fill').forEach(c => { c.style.strokeDashoffset = c.dataset.offset; });
  });
}
perfCarSelect.addEventListener('change', renderGauges);
renderGauges();

/* ==========================================================================
   SOUND TOGGLE (synthesized UI click, no audio files, off by default)
   ========================================================================== */
let audioCtx = null;
let soundOn = false;
const soundToggle = document.getElementById('soundToggle');
const soundState = document.getElementById('soundState');
soundToggle.addEventListener('click', () => {
  soundOn = !soundOn;
  soundToggle.setAttribute('aria-pressed', soundOn);
  soundState.textContent = soundOn ? 'on' : 'off';
  if (soundOn) playClick();
});
function playClick(){
  if (!soundOn) return;
  try{
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator(), gain = audioCtx.createGain();
    o.type = 'sine'; o.frequency.value = 720;
    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.12);
    o.connect(gain).connect(audioCtx.destination);
    o.start(); o.stop(audioCtx.currentTime + 0.12);
  }catch(e){ /* ignore */ }
}
document.querySelectorAll('.btn, .nav-link, .card-view-btn, .brand-card').forEach(el => {
  el.addEventListener('click', playClick);
});

/* ==========================================================================
   THREE.JS AMBIENT PARTICLE BACKGROUND
   ========================================================================== */
(function initBG(){
  const canvas = document.getElementById('bg-canvas');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!window.THREE || reduceMotion) return;

  const isMobile = window.innerWidth < 760;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.3 : 1.8));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.z = 60;

  const count = isMobile ? 250 : 700;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++){
    positions[i*3] = (Math.random()-0.5) * 220;
    positions[i*3+1] = (Math.random()-0.5) * 140;
    positions[i*3+2] = (Math.random()-0.5) * 120;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    size: 0.55, color: 0x9aa4ff, transparent: true, opacity: 0.5, depthWrite: false,
  });
  const points = new THREE.Points(geometry, material);
  scene.add(points);

  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
  window.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth - 0.5);
    mouseY = (e.clientY / window.innerHeight - 0.5);
  }, { passive:true });

  let raf;
  function animate(){
    raf = requestAnimationFrame(animate);
    targetX += (mouseX - targetX) * 0.02;
    targetY += (mouseY - targetY) * 0.02;
    points.rotation.y += 0.00025;
    points.rotation.x = targetY * 0.15;
    camera.position.x += (targetX * 8 - camera.position.x) * 0.02;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }
  animate();

  // pause when tab hidden to save resources
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf); else animate();
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
