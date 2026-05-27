// ─── Translation Dictionary ───────────────────────────────────────
const TRANS = {
  th: {
    nav_about:'ประวัติบริษัท', nav_services:'บริการ', nav_mgmt:'ผู้บริหาร',
    nav_customers:'ลูกค้า', nav_contact:'ติดต่อเรา',
    hero_badge:'✦ ก่อตั้งปี 2533 · Est. 1990',
    hero_desc:'ผู้นำด้านบริการขนส่งผู้โดยสารคุณภาพสูง ด้วยประสบการณ์กว่า 35 ปี มุ่งมั่นให้บริการด้วยความปลอดภัยและมาตรฐานระดับมืออาชีพ',
    stat_exp:'ปีประสบการณ์<br>Years of Experience',
    stat_clients:'ลูกค้าองค์กร<br>Corporate Clients',
    stat_vehicles:'ประเภทรถ<br>Vehicle Types',
    btn_services:'ดูบริการของเรา →',
    btn_contact:'ติดต่อสอบถาม',
    label_about:'ประวัติบริษัท · History',
    title_about:'กว่า 35 ปีแห่งความไว้วางใจ',
    sub_about:'35年以上的信赖与卓越服务',
    label_services:'บริการของเรา · Our Services',
    title_services:'รถที่ให้บริการ',
    sub_services:'',
    label_mgmt:'ผู้บริหาร · Management',
    title_mgmt:'ทีมผู้บริหาร',
    sub_mgmt:'',
    label_customers:'ลูกค้าหลัก · Main Customers',
    title_customers:'ลูกค้าองค์กรที่ไว้วางใจเรา',
    sub_customers:'',
    label_contact:'ติดต่อเรา',
    title_contact:'ติดต่อสอบถามและจองบริการ',
    sub_contact:'',
    fleet1_title:'รถโค้ชปรับอากาศ',
    fleet2_title:'รถบัสพัดลม (NGV)',
    fleet3_title:'รถตู้ปรับอากาศ',
    pos_md:'กรรมการผู้จัดการ',
    pos_dmd:'รองกรรมการผู้จัดการ',
    ct_addr:'ที่อยู่ · Address',
    ct_phone:'โทรศัพท์ · Phone',
    ct_hours:'เวลาทำการ · Business Hours',
  },
  en: {
    nav_about:'About Us', nav_services:'Services', nav_mgmt:'Management',
    nav_customers:'Clients', nav_contact:'Contact Us',
    hero_badge:'✦ Established 1990 · 35+ Years of Service',
    hero_desc:'Leading provider of high-quality passenger transport services with over 35 years of experience, committed to safety and professional standards.',
    stat_exp:'Years of<br>Experience',
    stat_clients:'Corporate<br>Clients',
    stat_vehicles:'Vehicle<br>Types',
    btn_services:'Our Services →',
    btn_contact:'Contact Us',
    label_about:'About Us · History',
    title_about:'35+ Years of Trust',
    sub_about:'35年以上的信赖与卓越服务',
    label_services:'Our Services · Fleet',
    title_services:'Our Fleet',
    sub_services:'',
    label_mgmt:'Management · Leadership',
    title_mgmt:'Our Leadership Team',
    sub_mgmt:'',
    label_customers:'Main Clients · Partners',
    title_customers:'Trusted by Leading Organizations',
    sub_customers:'',
    label_contact:'Contact Us',
    title_contact:'Get in Touch & Book Our Services',
    sub_contact:'',
    fleet1_title:'Air-Conditioned Coach',
    fleet2_title:'NGV Fan Bus',
    fleet3_title:'Air-Conditioned Van',
    pos_md:'Managing Director',
    pos_dmd:'Deputy Managing Director',
    ct_addr:'Address',
    ct_phone:'Phone',
    ct_hours:'Business Hours',
  },
  zh: {
    nav_about:'公司简介', nav_services:'服务项目', nav_mgmt:'管理层',
    nav_customers:'合作客户', nav_contact:'联系我们',
    hero_badge:'✦ 创立于1990年 · 泰历佛历2533年',
    hero_desc:'泰国领先的高品质旅客运输服务提供商，拥有超过35年的丰富经验，始终以安全第一、专业至上为服务宗旨。',
    stat_exp:'年丰富<br>经验',
    stat_clients:'企业<br>客户',
    stat_vehicles:'车辆<br>类型',
    btn_services:'查看我们的服务 →',
    btn_contact:'联系我们',
    label_about:'公司简介 · Company History',
    title_about:'35年以上的信赖与卓越',
    sub_about:'35年以上的信赖与卓越服务',
    label_services:'服务项目 · Our Services',
    title_services:'服务车辆',
    sub_services:'',
    label_mgmt:'管理层 · Leadership',
    title_mgmt:'管理团队',
    sub_mgmt:'',
    label_customers:'合作客户 · Our Clients',
    title_customers:'值得信赖的合作伙伴',
    sub_customers:'',
    label_contact:'联系我们',
    title_contact:'联系与预订服务',
    sub_contact:'',
    fleet1_title:'空调客运大巴',
    fleet2_title:'普通巴士 (NGV)',
    fleet3_title:'空调厢式客车',
    pos_md:'总经理',
    pos_dmd:'副总经理',
    ct_addr:'地址',
    ct_phone:'电话',
    ct_hours:'营业时间',
  }
};

const LANGS = ['th', 'en', 'zh'];
const LANG_BTN = { th: '🇬🇧 EN', en: '🇨🇳 中文', zh: '🇹🇭 ไทย' };
let currentLang = 'th';

function toggleLang() {
  const idx = LANGS.indexOf(currentLang);
  currentLang = LANGS[(idx + 1) % LANGS.length];
  const btn = document.getElementById('lang-toggle');
  btn.textContent = LANG_BTN[currentLang];
  document.documentElement.lang = currentLang;

  const dict = TRANS[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // Hero h2
  const h2 = document.querySelector('.hero h2');
  if(h2) h2.textContent = currentLang === 'th' ? 'หจก.เสรีทรานสปอร์ต เอส.อาร์.ที.'
    : currentLang === 'en' ? 'Seree Transport S.R.T. · Est. 1990'
    : '斯瑞运输有限公司';

  // About paragraphs
  const aboutPs = document.querySelectorAll('.about-text p');
  if(aboutPs.length >= 3) {
    if(currentLang === 'en') {
      aboutPs[0].innerHTML = '<strong>Seree Transport S.R.T.</strong> was registered as a legal entity on <strong>June 12, 1990</strong>, with a vision to provide passenger transport services with the highest standards of safety, quality, and customer satisfaction.';
      aboutPs[1].innerHTML = 'Over more than 35 years, the company has continuously developed service quality, supported by a team of professionally trained drivers and a fully stocked spare parts warehouse ensuring vehicles are always maintained in top condition.';
      aboutPs[2].style.display = 'none';
    } else if(currentLang === 'zh') {
      aboutPs[0].innerHTML = '<strong>斯瑞交通运输有限公司（Seree Transport S.R.T.）</strong>于<strong>1990年6月12日</strong>正式登记注册，致力于以安全、品质和客户满意度为核心，提供卓越的旅客运输服务。';
      aboutPs[1].innerHTML = '经过35年以上的持续发展，公司不断提升服务质量，拥有经过专业安全培训的驾驶员团队，以及完善的备件仓库，确保车辆始终保持最佳状态。';
      aboutPs[2].style.display = 'none';
    } else {
      aboutPs[0].innerHTML = '<strong>หจก.เสรีทรานสปอร์ต เอส.อาร์.ที.</strong> ได้จดทะเบียนนิติบุคคลเมื่อวันที่ <strong>12 มิถุนายน พ.ศ. 2533</strong> โดยมีวิสัยทัศน์ในการให้บริการขนส่งผู้โดยสาร ด้วยความปลอดภัย คุณภาพ และความพึงพอใจสูงสุดแก่ผู้ใช้บริการ';
      aboutPs[1].innerHTML = 'ตลอดระยะเวลากว่า 35 ปี บริษัทได้สั่งสมประสบการณ์และพัฒนาคุณภาพการให้บริการอย่างต่อเนื่อง พร้อมด้วยทีมงานพนักงานขับรถมืออาชีพที่ผ่านการอบรมด้านความปลอดภัยอย่างสม่ำเสมอ และระบบคลังอะไหล่ที่พร้อมบำรุงรักษายานพาหนะตลอดเวลา';
      aboutPs[2].style.display = '';
    }
  }

  // Policy strip
  const policyTitles = document.querySelectorAll('.policy-item h3');
  const policyDescs  = document.querySelectorAll('.policy-item p');
  const policies = currentLang === 'en' ? [
    ['Quality Service with a Smile','Delivering the highest satisfaction to every passenger with warmth and professionalism.'],
    ['Highest Safety Standards','Systematic and continuous safety protocols to ensure every journey is safe.'],
    ['Continuous Staff Training','Regular driver training to build a safety-first mindset across all operations.'],
  ] : currentLang === 'zh' ? [
    ['微笑优质服务','以热忱与专业精神，为每一位乘客提供最高满意度的服务体验。'],
    ['最高安全标准','采用系统化、持续性的安全规范，确保每一次旅程安全无忧。'],
    ['持续员工培训','定期对驾驶员进行安全培训，在所有运营环节建立安全第一的意识。'],
  ] : [
    ['บริการด้วยคุณภาพและรอยยิ้ม','Quality Service with a Smile — สร้างความพึงพอใจสูงสุดแก่ผู้ใช้บริการทุกท่าน'],
    ['มาตรฐานความปลอดภัยสูงสุด','Systematic Safety Standards — มีมาตรฐานความปลอดภัยอย่างเป็นระบบและต่อเนื่อง'],
    ['พัฒนาบุคลากรอย่างต่อเนื่อง','Continuous Driver Training — อบรมพนักงานขับรถให้มีจิตสำนึกด้านความปลอดภัย'],
  ];
  policyTitles.forEach((el,i) => { if(policies[i]) el.textContent = policies[i][0]; });
  policyDescs.forEach((el,i)  => { if(policies[i]) el.textContent = policies[i][1]; });

  // Highlight card labels
  const hlLabels = document.querySelectorAll('.highlight-card .label');
  const hlEN = ['Founded','Years Exp.','Clients','Available'];
  const hlTH = ['ปีที่ก่อตั้ง<br>Founded','ปีประสบการณ์<br>Years Exp.','ลูกค้าองค์กร<br>Clients','พร้อมให้บริการ<br>Available'];
  const hlZH = ['创立年份','年丰富经验','企业客户','随时为您服务'];
  hlLabels.forEach((el,i) => {
    el.innerHTML = currentLang === 'en' ? hlEN[i] : currentLang === 'zh' ? hlZH[i] : hlTH[i];
  });

  // Fleet card descriptions
  const fleetDescs = document.querySelectorAll('.fleet-card-body p');
  const fleetEN = [
    'Sunlong air-conditioned coach with automatic doors, comfortable seating, seatbelts, and in-vehicle CCTV for maximum safety.',
    'NGV-powered bus with CCTV cameras installed both inside and outside, ensuring safety and comfort for group travel.',
    'Toyota Hiace air-conditioned van with premium leather seating, ideal for executives and short-to-medium distance trips.',
  ];
  const fleetTH = [
    'รถโค้ชปรับอากาศ Sunlong รุ่นใหม่ พร้อมระบบประตูอัตโนมัติ ที่นั่งสบาย เข็มขัดนิรภัย และกล้องวงจรปิดภายในรถ',
    'รถบัส ขับเคลื่อนด้วยก๊าซ NGV ติดตั้งกล้องวงจรปิดทั้งภายนอกและภายในรถ ที่นั่งสะดวกสบาย',
    'Toyota Hiace สีขาว ปรับอากาศ ที่นั่งหนังคุณภาพสูง เหมาะสำหรับกลุ่มผู้บริหารและการเดินทางระยะสั้น-กลาง',
  ];
  const fleetZH = [
    '申龙空调大巴，配备自动门、舒适座椅、安全带及车内闭路电视，最大程度保障乘客安全。',
    '天然气（NGV）大巴，车身内外均配备闭路电视，安全舒适，适合大型团体出行。',
    '丰田海狮空调厢式客车，高级皮质座椅，适合企业高管及中短途商务出行。',
  ];
  fleetDescs.forEach((el,i) => {
    if(i<3) el.innerHTML = currentLang === 'en' ? fleetEN[i] : currentLang === 'zh' ? fleetZH[i] : fleetTH[i];
  });

  // Customers intro
  const custIntro = document.querySelector('.customers-intro');
  if(custIntro) custIntro.textContent = currentLang === 'en'
    ? 'We are proud to serve leading domestic and international companies with consistent, reliable service quality for over three decades.'
    : currentLang === 'zh'
    ? '我们自豪地为泰国及国际众多知名企业提供运输服务，三十余年来始终维持稳定、可靠的服务水准。'
    : 'เราภูมิใจที่ได้ให้บริการแก่บริษัทชั้นนำทั้งในประเทศและต่างประเทศ ด้วยมาตรฐานการบริการที่สม่ำเสมอและเชื่อถือได้มากว่า 3 ทศวรรษ';

  // Contact info
  const addrP = document.querySelector('.contact-item-body p');
  if(addrP) addrP.innerHTML = currentLang === 'en'
    ? '24/24 Moo 8, Khu Khlong Sib Rd.,<br>Khu Fang Nuea, Nong Chok,<br>Bangkok 10530'
    : currentLang === 'zh'
    ? '24/24 第8村，库坤十路，<br>库方讷区，农乍区，<br>曼谷 10530'
    : '24/24 หมู่ที่ 8 ถนนคู้คลองสิบ<br>แขวงคู้ฝั่งเหนือ เขตหนองจอก<br>กรุงเทพมหานคร 10530';

  const hoursP = document.querySelectorAll('.contact-item-body p');
  if(hoursP[1]) hoursP[1].innerHTML = currentLang === 'en'
    ? 'Mon – Sat: 08:00 – 18:00<br>จ–ส: 08.00 – 18.00 น.'
    : currentLang === 'zh'
    ? '周一至周六：08:00 – 18:00<br>Mon – Sat: 08:00 – 18:00'
    : 'จันทร์ – เสาร์: 08:00 – 18:00 น.<br>Mon – Sat: 08:00 – 18:00';

  // Footer
  const footer = document.querySelector('footer .footer-logo');
  if(footer) footer.textContent = currentLang === 'en'
    ? 'Seree Transport S.R.T. · Established 1990'
    : currentLang === 'zh'
    ? '斯里交通运输有限公司 · Seree Transport S.R.T. · 创立于1990年'
    : 'Seree Transport S.R.T. · หจก.เสรีทรานสปอร์ต เอส.อาร์.ที.';

  // Google Maps button
  const mapsBtn = document.querySelector('a[href*="maps.app.goo.gl"]');
  if(mapsBtn) {
    const pinSvg = mapsBtn.innerHTML.includes('svg') ? mapsBtn.innerHTML.split('</svg>')[0] + '</svg>' : '📍';
    const label = currentLang === 'en' ? 'Open Google Maps' : currentLang === 'zh' ? '打开 Google 地图' : 'เปิด Google Maps';
    mapsBtn.innerHTML = (mapsBtn.innerHTML.includes('svg') ? mapsBtn.innerHTML.split('</svg>')[0] + '</svg> ' : '📍 ') + label;
  }
}

// ─── Scroll Nav Highlight ───────────────────────────────────────
// Smooth active nav highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 90) {
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.style.background = '';
      if (link.getAttribute('href') === '#' + current) {
        link.style.background = 'rgba(255,255,255,0.15)';
      }
    });
  });

  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fleet-card, .mgmt-card, .highlight-card, .customer-chip, .policy-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });