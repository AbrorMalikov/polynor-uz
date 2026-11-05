/**
 * POLYNOR UZBEKISTAN — OFFICIAL DEALER INTERACTIVE SCRIPT
 * Includes: Product Data, Catalog Filtering/Search, Thermal Insulation Calculator,
 * Order/Callback Modal, FAQ Accordion, and Form Submission Handlers.
 */

const POLYNOR_PRODUCTS = [
  {
    id: 'polynor-pro',
    title: 'POLYNOR PRO (Purkagichli PPU isitgich)',
    category: 'insulation',
    categoryLabel: 'Purkagichli isitgich (NPU)',
    badge: 'XIT SOTUV',
    badgeClass: 'product-card__badge--hit',
    price: 118000,
    image: 'assets/img/products/polynor-pro.png',
    desc: 'Professional pistolet yordamida sepiladigan bir komponentli poliuretan issiqlik va shovqin izolyatsiyasi. Devor, tom, pol, fasad va murakkab konstruksiyalar uchun.',
    specs: {
      'Chiqish hajmi': '3 sm qalinlikda 2 m² (5 sm da 1.2 m²)',
      'Issiqlik o‘tkazuvchanlik': '0.025 Vt/(m·K)',
      'Idish hajmi': '1000 ml (750 ml to‘ldirilgan)'
    }
  },
  {
    id: 'polynor-3d',
    title: 'POLYNOR 3D (Kuchaytirilgan formula)',
    category: 'insulation',
    categoryLabel: 'Purkagichli isitgich (NPU)',
    badge: 'YANGI FORMULA',
    badgeClass: 'product-card__badge--pro',
    price: 126000,
    image: 'assets/img/products/polynor-3d.png',
    desc: 'Kengaytirilgan 3D hujayrali tuzilmaga ega purkagichli poliuretan isitgich. Yuqori unumdorlik va yanada zichroq issiqlik qatlami hosil qiladi.',
    specs: {
      'Chiqish hajmi': '2.2 m² gacha (3 sm qatlamda)',
      'Harorat diapazoni': '-80°C dan +115°C gacha',
      'Yopishqoqlik (Adgeziya)': 'Beton, g‘isht, yog‘och, metall'
    }
  },
  {
    id: 'polynor-home',
    title: 'POLYNOR HOME (Maishiy purkagichli isitgich)',
    category: 'insulation',
    categoryLabel: 'Purkagichli isitgich (NPU)',
    badge: 'PISTOLETSIZ',
    badgeClass: '',
    price: 112000,
    image: 'assets/img/products/polynor-home.png',
    desc: 'Maxsus adapter-naycha bilan jihozlangan maishiy versiya. Professional montaj pistoletisiz balkon, lodjiya va quvurlarni mustaqil isitish uchun ideal.',
    specs: {
      'Qo‘llash turi': 'Tayyor naycha-adapter bilan',
      'Qoplama maydoni': '1.8 - 2.0 m² (3 sm qalinlikda)',
      'Qotish vaqti': '40 daqiqada to‘liq polimerizatsiya'
    }
  },
  {
    id: 'home-box',
    title: 'POLYNOR HOME BOX (12 dona quti + nasadkalar)',
    category: 'kits',
    categoryLabel: 'Tayyor to‘plamlar (BOX)',
    badge: 'ULGURJI QUTI',
    badgeClass: 'product-card__badge--hit',
    price: 1280000,
    image: 'assets/img/products/home-box.png',
    desc: '12 ta Polynor ballonidan iborat korobka. Katta hajmdagi obyektlarni (tom, kottedj devorlari, angarlar) tejamkor narxda izolyatsiya qilish uchun.',
    specs: {
      'Qutidagi soni': '12 dona ballon + burchakli nasadkalar',
      'Umumiy qoplama': '24 m² gacha (3 sm qalinlikda)',
      'Tejamkorlik': 'Donabay xaridga nisbatan 8% arzon'
    }
  },
  {
    id: 'kit-roof',
    title: 'POLYNOR Tom va Mansarda to‘plami (10 m²)',
    category: 'kits',
    categoryLabel: 'Tayyor to‘plamlar (BOX)',
    badge: 'TOM UCHUN',
    badgeClass: 'product-card__badge--pro',
    price: 1150000,
    image: 'assets/img/products/kit-roof.png',
    desc: 'Tom va mansardani 10 m² maydonda choksiz issiqlik izolyatsiya qilish uchun barcha kerakli vositalar jamlangan tayyor qurilish komplekti.',
    specs: {
      'Mo‘ljallangan maydon': '10 m² (5 sm qalinlikda)',
      'To‘plam tarkibi': 'Polynor ballonlari + Tozalagich + Burchak nasadka',
      'Qo‘llash joyi': 'Tom, shift va mansarda konstruksiyasi'
    }
  },
  {
    id: 'kit-floor',
    title: 'POLYNOR Pol va Poydevor to‘plami (15 m²)',
    category: 'kits',
    categoryLabel: 'Tayyor to‘plamlar (BOX)',
    badge: 'POL UCHUN',
    badgeClass: 'product-card__badge--pro',
    price: 1190000,
    image: 'assets/img/products/kit-floor.png',
    desc: 'Birinchi qavat pollari, yerto‘la va poydevorlarni sovuq hamda namlikdan himoyalash uchun mo‘ljallangan 15 m² tayyor izolyatsiya komplekti.',
    specs: {
      'Mo‘ljallangan maydon': '15 m² (3-4 sm qalinlikda)',
      'Namlikka chidamlilik': 'Suv shimishi < 1% (Gidroizolyatsiya effekti)',
      'Xizmat muddati': '45-50 yildan ortiq'
    }
  },
  {
    id: '60sec',
    title: 'POLYNOR 60 SEKUND (Universal ko‘pik-yelim)',
    category: 'adhesives',
    categoryLabel: 'Ko‘pik-yelim va Polimerlar',
    badge: '60 SONIYADA',
    badgeClass: 'product-card__badge--hit',
    price: 105000,
    image: 'assets/img/products/60sec.png',
    desc: 'Tezkor polimerizatsiyaga ega ko‘p maqsadli poliuretan yelim. Gipsokarton, penoplast, XPS, yog‘och, plitka va dekorativ panellarni 60 soniyada mahkamlaydi.',
    specs: {
      'Boshlang‘ich ushlash': '60 soniya ichida',
      'Chiqish ko‘rsatkichi': '1 ballon = 25 kg quruq yelim qopiga teng',
      'Qo‘llash harorati': '-5°C dan +35°C gacha'
    }
  },
  {
    id: '60sec-pro',
    title: 'POLYNOR 60 SEKUND PRO (Professional yelim)',
    category: 'adhesives',
    categoryLabel: 'Ko‘pik-yelim va Polimerlar',
    badge: 'PRO SERIYA',
    badgeClass: 'product-card__badge--pro',
    price: 114000,
    image: 'assets/img/products/60sec-pro.png',
    desc: 'Yuqori yuklamaga chidamli professional ko‘pik-yelim. Og‘ir fasad plitalari, zinapoya elementlari va deraza tokchalarini o‘rnatish uchun.',
    specs: {
      'Mustahkamlik': '500 kg/dm² gacha yuklama',
      'Kengayish darajasi': 'Ikkilamchi kengayish deyarli yo‘q (<5%)',
      'Hajmi': '1000 ml (pistolet ostiga)'
    }
  },
  {
    id: 'm500',
    title: 'POLYNOR M-500 (Ko‘pik-sement kladka uchun)',
    category: 'adhesives',
    categoryLabel: 'Ko‘pik-yelim va Polimerlar',
    badge: 'M-500 KUCHI',
    badgeClass: 'product-card__badge--hit',
    price: 129000,
    image: 'assets/img/products/m500.png',
    desc: 'Gazoblok, penoblok, keramika va silikat bloklarni terish uchun innovatsion ko‘pik-sement. Oddiy sement qorishmasidan 5 barobar tez va issiqroq.',
    specs: {
      'O‘rnini bosadi': '1 ballon = 2 qop (50 kg) quruq sement-yelim',
      'Chok qalinligi': '≤ 2 mm ("sovuq ko‘priklari"siz)',
      'Mustahkamlik markasi': 'M-500 analogi'
    }
  },
  {
    id: '2arm',
    title: 'POLYNOR Qo‘shaloq Armirovka (Ko‘pik-sement)',
    category: 'adhesives',
    categoryLabel: 'Ko‘pik-yelim va Polimerlar',
    badge: '2X ARMIROVKA',
    badgeClass: 'product-card__badge--pro',
    price: 138000,
    image: 'assets/img/products/2arm.png',
    desc: 'Qo‘shimcha armaturalovchi polimer tolalarga ega ko‘pik-sement. Seysmik hududlar (Toshkent va viloyatlar) uchun maksimal kladka mustahkamligini beradi.',
    specs: {
      'Xususiyati': 'Mikro-armirovkalovchi polimer tolalar',
      'Ishlash harorati': '-10°C dan +35°C gacha (qishki/yozgi)',
      'Qoplama hajmi': '10-12 m² devor kladkasi'
    }
  },
  {
    id: 'thermoblock',
    title: 'POLYNOR THERMOBLOCK (G‘isht va blok yelimi)',
    category: 'adhesives',
    categoryLabel: 'Ko‘pik-yelim va Polimerlar',
    badge: '',
    badgeClass: '',
    price: 109000,
    image: 'assets/img/products/thermoblock.png',
    desc: 'G‘isht, gazobeton va keramoblok devorlarni tez va toza ko‘tarish uchun maxsus poliuretan kladka yelimi.',
    specs: {
      'Qotish vaqti': '2 soatda keyingi qatorga tayyor',
      'Issiqlik saqlash': 'Sement chokka nisbatan 80% kam issiqlik yo‘qotish',
      'Hajmi': '850 ml'
    }
  },
  {
    id: 'fixo-pro',
    title: 'POLYNOR FIXO PRO (Izolyatsiya plitalar yelimi)',
    category: 'adhesives',
    categoryLabel: 'Ko‘pik-yelim va Polimerlar',
    badge: 'FASAD UCHUN',
    badgeClass: '',
    price: 102000,
    image: 'assets/img/products/fixo-pro.png',
    desc: 'Penopolistirol (EPS/XPS), bazalt va mineral paxta plitalarini fasad hamda poydevorga yopishtirish uchun professional yelim-ko‘pik.',
    specs: {
      'Yopishtirish maydoni': '1 ballon = 10-14 m² fasad plitasi',
      'Dyubel qoqish': '2 soatdan so‘ng ruxsat etiladi',
      'Namlikka chidamlilik': '100% suv o‘tkazmaydi'
    }
  },
  {
    id: 'purln1',
    title: 'POLYNOR PUR LN №1 (Suyuq mixlar)',
    category: 'adhesives',
    categoryLabel: 'Ko‘pik-yelim va Polimerlar',
    badge: 'SUYUQ MIX',
    badgeClass: '',
    price: 89000,
    image: 'assets/img/products/purln1.png',
    desc: 'Poliuretan asosidagi o‘ta kuchli "suyuq mixlar". Yog‘och, metall, tosh, keramika va ПВХ qismlarni mix va shuruplarsiz biriktiradi.',
    specs: {
      'Yopishish kuchi': 'O‘ta yuqori dastlabki adgeziya',
      'Qo‘llanilishi': 'Ichki va tashqi pardozlash ishlari',
      'Hajmi': '500 ml'
    }
  },
  {
    id: '70mega',
    title: 'POLYNOR 70 MEGA THERM (Montaj ko‘pigi)',
    category: 'foams',
    categoryLabel: 'Professional montaj ko‘piklari',
    badge: '70 LITR CHIQISH',
    badgeClass: 'product-card__badge--hit',
    price: 98000,
    image: 'assets/img/products/70mega.png',
    desc: 'Oshirilgan 70 litr chiqish hajmiga ega professional issiqlik saqlovchi montaj ko‘pigi. Deraza va eshik romlarini o‘rnatish uchun eng yuqori standart.',
    specs: {
      'Chiqish hajmi': '70 litrgacha tayyor ko‘pik',
      'Shovqin izolyatsiyasi': '62 dB gacha',
      'Qo‘llash mavsumi': 'Barcha mavsumlar uchun (-10°C ... +35°C)'
    }
  },
  {
    id: '65all',
    title: 'POLYNOR 65 ALL SEASON (Mavsumiy montaj ko‘pigi)',
    category: 'foams',
    categoryLabel: 'Professional montaj ko‘piklari',
    badge: 'ALL SEASON',
    badgeClass: '',
    price: 92000,
    image: 'assets/img/products/65all.png',
    desc: 'O‘zbekistonning issiq yozi va sovuq qishida birdek barqaror ishlovchi 65 litrli professional montaj ko‘pigi.',
    specs: {
      'Chiqish hajmi': '65 litrgacha',
      'Harorat rejimi': '-10°C dan +35°C gacha',
      'Tuzilishi': 'Mayda g‘ovakli, cho‘kmas'
    }
  },
  {
    id: '65premium',
    title: 'POLYNOR 65 PREMIUM (Premium montaj ko‘pigi)',
    category: 'foams',
    categoryLabel: 'Professional montaj ko‘piklari',
    badge: 'PREMIUM',
    badgeClass: 'product-card__badge--pro',
    price: 95000,
    image: 'assets/img/products/65premium.png',
    desc: 'Deraza konstruksiyalariga bosim o‘tkazmaydigan (past ikkilamchi kengayishli) Premium toifadagi professional montaj ko‘pigi.',
    specs: {
      'Chiqish hajmi': '65 litr aniq chiqish',
      'Kesish vaqti': '25-30 daqiqa',
      'Zichligi': '18-22 kg/m³'
    }
  },
  {
    id: 'polyguard',
    title: 'POLYGUARD (Olovbardosh himoya eritmasi)',
    category: 'accessories',
    categoryLabel: 'Himoya vositalari va Aksessuarlar',
    badge: 'OLOVDAN HIMOYA',
    badgeClass: 'product-card__badge--pro',
    price: 110000,
    image: 'assets/img/products/polyguard.png',
    desc: 'Polynor purkagichli isitgichi ustidan sepiladigan maxsus antipiren (olovdan himoyalovchi tarkib). Yong‘in xavfsizligi sinfini oshiradi.',
    specs: {
      'Vazifasi': 'Olovga chidamlilik sinfini oshirish',
      'Sarfi': '1 flakon = 10-15 m² PPU yuzasi',
      'Qo‘llash usuli': 'Pulverizator yoki cho‘tka yordamida'
    }
  },
  {
    id: 'cleaner',
    title: 'POLYNOR CLEANER (Ko‘pik va pistolet tozalagich)',
    category: 'accessories',
    categoryLabel: 'Himoya vositalari va Aksessuarlar',
    badge: '',
    badgeClass: '',
    price: 49000,
    image: 'assets/img/products/cleaner.png',
    desc: 'Montaj pistoletlarini ichki va tashqi tozalash, shuningdek qotmagan poliuretan ko‘pik va yelim izlarini ketkazish uchun maxsus erituvchi.',
    specs: {
      'Hajmi': '500 ml aerozol ballon',
      'Komplektda': 'Purkash klapani + pistolet rezbasi',
      'Vazifasi': 'Pistolet xizmat muddatini 5x uzaytiradi'
    }
  },
  {
    id: 'gun',
    title: 'POLYNOR PREMIUM GUN (Teflon montaj pistoleti)',
    category: 'accessories',
    categoryLabel: 'Himoya vositalari va Aksessuarlar',
    badge: 'ORIGINAL ASBOB',
    badgeClass: 'product-card__badge--hit',
    price: 345000,
    image: 'assets/img/products/gun.png',
    desc: 'Polynor purkagichli isitgichlari va montaj ko‘piklarini sepish uchun teflon qoplamali original professional pistolet.',
    specs: {
      'Qoplamasi': 'To‘liq teflon (PTFE) — ko‘pik yopishmaydi',
      'Korpus': 'Zanglamas po‘lat va ergonomik tutqich',
      'Kafolat': 'Rasmiy diler kafolati 12 oy'
    }
  },
  {
    id: 'nozzle',
    title: 'Burchakli nasadka (Shift va pol uchun adapter)',
    category: 'accessories',
    categoryLabel: 'Himoya vositalari va Aksessuarlar',
    badge: '',
    badgeClass: '',
    price: 22000,
    image: 'assets/img/products/nozzle.png',
    desc: 'Shift, pol, karkas orqasi va borish qiyin bo‘lgan burchaklarga Polynor isitgichini 45°/90° burchak ostida qulay sepish uchun original nasadka.',
    specs: {
      'Burchak': 'Vertikal va gorizontal yuzalar uchun',
      'Mosligi': 'Barcha Polynor pistoletlariga tushadi',
      'Material': 'Mustahkam sanoat plastigi'
    }
  }
];

function formatUZS(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " so'm";
}

function createProductCardHTML(product) {
  const specsHTML = Object.entries(product.specs)
    .map(([k, v]) => `<div class="product-card__spec-row"><span>${k}:</span><strong>${v}</strong></div>`)
    .join('');

  const badgeHTML = product.badge
    ? `<span class="product-card__badge ${product.badgeClass}">${product.badge}</span>`
    : '';

  return `
    <article class="product-card" data-category="${product.category}">
      ${badgeHTML}
      <div class="product-card__thumb">
        <img src="${product.image}" alt="${product.title} - Polynor Uzbekistan" class="product-card__img" loading="lazy">
      </div>
      <div class="product-card__body">
        <div class="product-card__cat">${product.categoryLabel}</div>
        <h3 class="product-card__title">${product.title}</h3>
        <p class="product-card__desc">${product.desc}</p>
        <div class="product-card__specs">
          ${specsHTML}
        </div>
        <div class="product-card__footer">
          <div>
            <span class="product-card__price-label">Rasmiy diler narxi:</span>
            <span class="product-card__price">${formatUZS(product.price)}</span>
          </div>
          <button type="button" class="btn btn--primary btn--sm js-order-btn" data-product="${product.title}" data-price="${formatUZS(product.price)}">
            Buyurtma
          </button>
        </div>
      </div>
    </article>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header & Mobile Navigation
  const header = document.querySelector('.header');
  const burger = document.getElementById('burgerBtn');
  const nav = document.getElementById('mainNav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      burger.setAttribute('aria-expanded', expanded);
    });
  }

  // 2. Render Featured Products on Home Page (if container exists)
  const featuredContainer = document.getElementById('featuredProductsGrid');
  if (featuredContainer) {
    const featuredIds = ['polynor-pro', 'polynor-3d', '60sec', 'm500', '2arm', '70mega', 'polyguard', 'gun'];
    const featuredList = POLYNOR_PRODUCTS.filter(p => featuredIds.includes(p.id));
    featuredContainer.innerHTML = featuredList.map(createProductCardHTML).join('');
  }

  // 3. Render Full Catalog & Filters on Catalog Page (if container exists)
  const catalogContainer = document.getElementById('catalogProductsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('catalogSearchInput');
  const countBadge = document.getElementById('catalogCount');

  let activeCategory = 'all';
  let searchQuery = '';

  function renderCatalog() {
    if (!catalogContainer) return;
    const filtered = POLYNOR_PRODUCTS.filter(item => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      const matchesQuery =
        item.title.toLowerCase().includes(searchQuery) ||
        item.desc.toLowerCase().includes(searchQuery) ||
        item.categoryLabel.toLowerCase().includes(searchQuery);
      return matchesCat && matchesQuery;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} ta mahsulot topildi`;
    }

    if (filtered.length === 0) {
      catalogContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 12px; border: 1px solid #e5e7eb;">
          <h3 style="margin-bottom: 10px;">Qidiruv bo‘yicha mahsulot topilmadi</h3>
          <p style="color: #6b7280; margin-bottom: 20px;">Boshqa kalit so‘z kiriting yoki barcha toifalarni tanlang.</p>
          <button type="button" class="btn btn--outline btn--sm" id="resetCatalogBtn">Barcha mahsulotlarni ko‘rsatish</button>
        </div>
      `;
      document.getElementById('resetCatalogBtn')?.addEventListener('click', () => {
        activeCategory = 'all';
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
        renderCatalog();
      });
      return;
    }

    catalogContainer.innerHTML = filtered.map(createProductCardHTML).join('');
  }

  if (catalogContainer) {
    // Check URL hash or query param for initial category
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('cat');
    if (catParam) {
      activeCategory = catParam;
      filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === catParam));
    }
    renderCatalog();

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.filter || 'all';
        renderCatalog();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', e => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderCatalog();
      });
    }
  }

  // 4. Thermal Insulation Calculator (Polynor Sarf Kalkulyatori)
  const areaInput = document.getElementById('calcArea');
  const areaValDisplay = document.getElementById('calcAreaVal');
  const thicknessBtns = document.querySelectorAll('.calc-opt[data-thickness]');
  const resultCans = document.getElementById('calcResultCans');
  const resultBoxes = document.getElementById('calcResultBoxes');
  const resultPrice = document.getElementById('calcResultPrice');
  const calcOrderBtn = document.getElementById('calcOrderBtn');

  let currentThickness = 5; // default 5 cm

  function updateCalculator() {
    if (!areaInput || !resultCans) return;
    const area = parseInt(areaInput.value, 10) || 20;
    if (areaValDisplay) areaValDisplay.textContent = `${area} m²`;

    // 1 can of Polynor PRO covers:
    // 3 cm -> 2.0 m² (0.5 cans per m²)
    // 5 cm -> 1.2 m² (0.84 cans per m²)
    // 8 cm -> 0.75 m² (1.34 cans per m²)
    let coveragePerCan = 1.2;
    if (currentThickness === 3) coveragePerCan = 2.0;
    if (currentThickness === 5) coveragePerCan = 1.2;
    if (currentThickness === 8) coveragePerCan = 0.75;

    const cansNeeded = Math.ceil(area / coveragePerCan);
    const boxesNeeded = (cansNeeded / 12).toFixed(1);
    const totalPrice = cansNeeded * 118000;

    resultCans.textContent = `${cansNeeded} ta ballon`;
    if (resultBoxes) {
      resultBoxes.textContent = `≈ ${boxesNeeded} quti (BOX 12 donadan) • Qalinlik: ${currentThickness} sm`;
    }
    if (resultPrice) {
      resultPrice.textContent = `Taxminiy summa: ${formatUZS(totalPrice)}`;
    }
    if (calcOrderBtn) {
      calcOrderBtn.dataset.product = `Polynor PRO hisobi: ${area} m² (${currentThickness} sm) — ${cansNeeded} ballon`;
      calcOrderBtn.dataset.price = formatUZS(totalPrice);
    }
  }

  if (areaInput) {
    areaInput.addEventListener('input', updateCalculator);
    thicknessBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        thicknessBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentThickness = parseInt(btn.dataset.thickness, 10);
        updateCalculator();
      });
    });
    updateCalculator();
  }

  // 5. FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
      if (!isOpen) item.classList.add('active');
    });
  });

  // 6. Order & Callback Modal Logic
  const modalBackdrop = document.getElementById('orderModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalProductTitle = document.getElementById('modalProductTitle');
  const modalProductInput = document.getElementById('modalProductInput');

  function openModal(productName = 'Umumiy maslahat va buyurtma', priceStr = '') {
    if (!modalBackdrop) return;
    const labelText = priceStr ? `${productName} (${priceStr})` : productName;
    if (modalProductTitle) modalProductTitle.textContent = labelText;
    if (modalProductInput) modalProductInput.value = labelText;
    modalBackdrop.classList.add('open');
  }

  function closeModal() {
    modalBackdrop?.classList.remove('open');
  }

  document.body.addEventListener('click', e => {
    const orderBtn = e.target.closest('.js-order-btn');
    if (orderBtn) {
      e.preventDefault();
      openModal(orderBtn.dataset.product, orderBtn.dataset.price);
    }
  });

  modalCloseBtn?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', e => {
    if (e.target === modalBackdrop) closeModal();
  });

  // 7. Universal Form Handler (Toast feedback)
  const forms = document.querySelectorAll('.js-lead-form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : 'Yuborish';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Yuborilmoqda...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '✓ Ariza qabul qilindi!';
          submitBtn.style.background = '#10B981';
        }
        form.reset();

        // Show status message inside form
        let msgEl = form.querySelector('.form-success-msg');
        if (!msgEl) {
          msgEl = document.createElement('div');
          msgEl.className = 'form-success-msg';
          msgEl.style.cssText = 'margin-top: 14px; padding: 12px 16px; background: #ECFDF5; border: 1px solid #10B981; color: #065F46; border-radius: 6px; font-weight: 600; font-size: 0.9rem;';
          form.appendChild(msgEl);
        }
        msgEl.textContent = "Rahmat! Sizning so'rovingiz Toshkentdagi rasmiy dilerlik markaziga yuborildi. Mutaxassisimiz 15 daqiqa ichida bog'lanadi.";

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
          }
          closeModal();
        }, 2800);
      }, 600);
    });
  });
});
