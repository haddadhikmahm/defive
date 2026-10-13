/**
 * DE FIVE SPA & WELLNESS BANDUNG - MAIN INTERACTIVE SCRIPT
 * Handles booking modal, WhatsApp dispatch, treatment detail modals,
 * menu category filtering, promo code copy, FAQ accordions, and animations.
 */

// Data Catalogue for Treatments
const TREATMENT_DATA = {
  body: {
    categoryName: 'Body Treatment',
    title: 'Body Massage & Healing Therapies',
    image: '/assets/images/hero-spa.jpg',
    lead: 'Kombinasi teknik pijat tradisional Nusantara dan minyak esensial aromaterapi murni untuk mengendurkan otot tegang, melancarkan peredaran darah, serta menenangkan pikiran Anda.',
    highlights: [
      'Minyak esensial nabati 100% murni (Lavender, Frangipani, Sandalwood).',
      'Pijatan mendalam untuk meredakan pegal, kaku otot, dan migrain.',
      'Rendaman kaki air hangat dengan garam laut & bunga sebelum sesi.',
      'Ruangan privat beraroma terapi dan selimut pemanas nyaman.'
    ],
    pricing: 'Mulai dari Rp 185.000 (Pilihan 60m, 90m, hingga 120m)',
    services: [
      { name: 'Traditional Balinese Body Massage (90 Menit)', price: 195000 },
      { name: 'Hot Stone Relaxing Therapy (105 Menit)', price: 245000 },
      { name: 'Deep Tissue Muscle Relief Massage (90 Menit)', price: 215000 },
      { name: 'Aromatherapy Relaxation Massage (60 Menit)', price: 175000 },
      { name: 'Herbal Compress Warm Massage (90 Menit)', price: 225000 }
    ]
  },
  hair: {
    categoryName: 'Hair Treatment',
    title: 'Hair Spa Creambath & Scalp Care',
    image: '/assets/images/hair-treatment.jpg',
    lead: 'Perawatan rambut dan kulit kepala eksklusif menggunakan bahan alami kaya nutrisi untuk memperbaiki batang rambut rusak, mengatasi kerontokan, serta memanjakan leher dan bahu Anda.',
    highlights: [
      'Masker creambath botanical pilihan (Alpukat, Ginseng, Lidah Buaya, Kemiri).',
      'Pijat akupresur kepala, tengkuk, dan pundak untuk relaksasi mendalam.',
      'Steaming hangat membuka pori-pori folikel rambut agar nutrisi meresap optimal.',
      'Sudah termasuk cuci rambut dan blow dry natural segar.'
    ],
    pricing: 'Mulai dari Rp 160.000 (Durasi 60m - 75m)',
    services: [
      { name: 'Luxury Hair Spa Creambath & Scalp (60 Menit)', price: 160000 },
      { name: 'Scalp Detox & Anti Hair-Fall Treatment (75 Menit)', price: 210000 },
      { name: 'Keratin Smooth & Deep Moisture Hair Mask (75 Menit)', price: 235000 },
      { name: 'Anti-Dandruff Herbal Scalp Therapy (60 Menit)', price: 185000 }
    ]
  },
  face: {
    categoryName: 'Face Treatment',
    title: 'Organic Facial & Totok Aura Wajah',
    image: '/assets/images/face-treatment.jpg',
    lead: 'Kembalikan kilau alami dan elastisitas kulit wajah Anda dengan perawatan facial organik higienis serta totok aura titik meridian untuk relaksasi wajah maksimal.',
    highlights: [
      'Pembersihan mendalam (Double cleansing) & ekstraksi lembut higienis.',
      'Totok aura wajah melancarkan sirkulasi darah dan meredakan stres.',
      'Masker botanikal peel-off & cooling jade roller / gua sha batu giok.',
      'Serum pencerah dan pelindung skin-barrier berbahan natural.'
    ],
    pricing: 'Mulai dari Rp 185.000 (Durasi 60m - 90m)',
    services: [
      { name: 'Radiant Glow Organic Facial (75 Menit)', price: 185000 },
      { name: 'Anti-Aging Collagen Lift & Gua Sha (90 Menit)', price: 230000 },
      { name: 'Acne Purifying & Calming Facial (75 Menit)', price: 195000 },
      { name: 'Express Refresh Facial & Totok Aura (45 Menit)', price: 140000 }
    ]
  },
  reflexology: {
    categoryName: 'Reflexology',
    title: 'Herbal Foot Reflexology',
    image: '/assets/images/reflexology.jpg',
    lead: 'Stimulasi titik akupresur pada telapak kaki yang terhubung dengan organ vital tubuh, dipadukan rendaman kelopak bunga hangat untuk kebugaran seketika.',
    highlights: [
      'Floral foot bath dengan garam epsom dan minyak aromatik.',
      'Pijatan titik refleksi kaki hingga betis.',
      'Peregangan relaksasi leher dan pundak di kursi santai empuk.'
    ],
    pricing: 'Mulai dari Rp 120.000 (Durasi 60m - 90m)',
    services: [
      { name: 'Signature Herbal Foot Reflexology (60 Menit)', price: 120000 },
      { name: 'Complete Full Body Reflexology (90 Menit)', price: 175000 },
      { name: 'Foot Scrub & Reflexology Combo (75 Menit)', price: 155000 }
    ]
  },
  package: {
    categoryName: 'Paket Combo',
    title: 'De five Signature Packages & Couple Retreat',
    image: '/assets/images/ambiance-lounge.jpg',
    lead: 'Paket kombinasi istimewa untuk pengalaman self-care menyeluruh atau momen berkualitas bersama orang tersayang di ruang VIP privat.',
    highlights: [
      'Ruang perawatan VIP privat (tersedia untuk pasangan / sahabat).',
      'Kombinasi pijat tubuh, lulur scrub susu, dan rendaman bunga mawar.',
      'Minuman rempah herbal jahe & camilan sehat gratis.'
    ],
    pricing: 'Mulai dari Rp 350.000 (Durasi 105m - 120m)',
    services: [
      { name: 'Total Glow Pampering Trio (Body + Creambath + Totok)', price: 350000 },
      { name: 'De five Royal Couple Sanctuary (2 Pax - 120 Menit)', price: 480000 },
      { name: 'Head-to-Toe Blissful Rejuvenation (120 Menit)', price: 395000 }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initMobileDrawer();
  initAnnouncementBar();
  initMenuTabs();
  initDetailModals();
  initBookingSystem();
  initCopyPromoCodes();
  initFaqAccordion();
  initBackToTop();
  initSmoothScrollSpy();
});

/* ===================================================================
   STICKY HEADER & NAV SCROLL
   =================================================================== */
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ===================================================================
   MOBILE NAVIGATION DRAWER
   =================================================================== */
function initMobileDrawer() {
  const hamburger = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('mobileCloseBtn');
  const backdrop = document.getElementById('drawerBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileBookBtn = document.getElementById('mNavBookBtn');

  if (!hamburger || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  if (mobileBookBtn) {
    mobileBookBtn.addEventListener('click', () => {
      closeDrawer();
      openBookingModal();
    });
  }
}

/* ===================================================================
   ANNOUNCEMENT BAR
   =================================================================== */
function initAnnouncementBar() {
  const bar = document.getElementById('announcementBar');
  const closeBtn = document.getElementById('closeAnnouncement');
  if (!bar || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    bar.style.display = 'none';
  });
}

/* ===================================================================
   TREATMENT MENU CATEGORY TABS
   =================================================================== */
function initMenuTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.menu-item-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedCategory = btn.getAttribute('data-tab');

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (selectedCategory === 'all' || cardCat === selectedCategory) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ===================================================================
   QUICK TREATMENT DETAIL MODAL ("SELENGKAPNYA" FROM HERO)
   =================================================================== */
function initDetailModals() {
  const detailBackdrop = document.getElementById('detailModalBackdrop');
  const closeBtn = document.getElementById('closeDetailModal');
  const categoryLabel = document.getElementById('detailCategoryLabel');
  const titleElem = document.getElementById('detailTitle');
  const imageElem = document.getElementById('detailImage');
  const leadElem = document.getElementById('detailLead');
  const highlightsElem = document.getElementById('detailHighlights');
  const pricingElem = document.getElementById('detailPricing');
  const detailBookBtn = document.getElementById('detailBookBtn');

  let currentCategory = 'body';

  function openDetailModal(categoryKey) {
    const data = TREATMENT_DATA[categoryKey];
    if (!data) return;

    currentCategory = categoryKey;
    categoryLabel.textContent = `DETAIL PERAWATAN • ${data.categoryName.toUpperCase()}`;
    titleElem.textContent = data.title;
    imageElem.src = data.image;
    imageElem.alt = data.title;
    leadElem.textContent = data.lead;

    highlightsElem.innerHTML = '';
    data.highlights.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      highlightsElem.appendChild(li);
    });

    pricingElem.textContent = data.pricing;

    detailBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDetailModal() {
    detailBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Trigger buttons
  document.querySelectorAll('.treatment-action-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalKey = btn.getAttribute('data-modal');
      openDetailModal(modalKey);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDetailModal);
  if (detailBackdrop) {
    detailBackdrop.addEventListener('click', (e) => {
      if (e.target === detailBackdrop) closeDetailModal();
    });
  }

  if (detailBookBtn) {
    detailBookBtn.addEventListener('click', () => {
      closeDetailModal();
      const catData = TREATMENT_DATA[currentCategory];
      openBookingModal({
        category: catData ? catData.categoryName : 'Body Treatment'
      });
    });
  }
}

/* ===================================================================
   INTERACTIVE BOOKING MODAL & WHATSAPP INTEGRATION
   =================================================================== */
function initBookingSystem() {
  const modalBackdrop = document.getElementById('bookingModalBackdrop');
  const closeBtn = document.getElementById('closeBookingModal');
  const form = document.getElementById('bookingForm');
  const categorySelect = document.getElementById('bookCategory');
  const serviceSelect = document.getElementById('bookService');
  const dateInput = document.getElementById('bookDate');
  const priceText = document.getElementById('summaryPriceText');

  // Set minimum date to today
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  // Populate Services based on Category
  function updateServicesDropdown(selectedCategoryName, preselectService = null) {
    serviceSelect.innerHTML = '';

    let matchedCategory = null;
    for (const key in TREATMENT_DATA) {
      if (TREATMENT_DATA[key].categoryName === selectedCategoryName) {
        matchedCategory = TREATMENT_DATA[key];
        break;
      }
    }

    if (!matchedCategory || !matchedCategory.services) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = '-- Pilih Kategori Dahulu --';
      serviceSelect.appendChild(opt);
      priceText.textContent = 'Rp 0';
      return;
    }

    matchedCategory.services.forEach(srv => {
      const opt = document.createElement('option');
      opt.value = srv.name;
      opt.textContent = `${srv.name} - Rp ${srv.price.toLocaleString('id-ID')}`;
      opt.dataset.price = srv.price;
      if (preselectService && srv.name.toLowerCase().includes(preselectService.toLowerCase())) {
        opt.selected = true;
      }
      serviceSelect.appendChild(opt);
    });

    updatePriceDisplay();
  }

  function updatePriceDisplay() {
    const selectedOpt = serviceSelect.options[serviceSelect.selectedIndex];
    if (selectedOpt && selectedOpt.dataset.price) {
      const priceVal = parseInt(selectedOpt.dataset.price, 10);
      priceText.textContent = `Rp ${priceVal.toLocaleString('id-ID')}`;
    } else {
      priceText.textContent = 'Rp 0';
    }
  }

  categorySelect.addEventListener('change', () => {
    updateServicesDropdown(categorySelect.value);
  });

  serviceSelect.addEventListener('change', updatePriceDisplay);

  // Global function to open booking modal with preset options
  window.openBookingModal = function(presets = {}) {
    if (presets.category) {
      categorySelect.value = presets.category;
      updateServicesDropdown(presets.category, presets.service || null);
    } else {
      if (categorySelect.options.length > 1) {
        categorySelect.selectedIndex = 1;
        updateServicesDropdown(categorySelect.value);
      }
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeBookingModal = function() {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Close triggers
  if (closeBtn) closeBtn.addEventListener('click', window.closeBookingModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) window.closeBookingModal();
    });
  }

  // Hook all "Book Now" buttons on page
  const navBookBtn = document.getElementById('navBookBtn');
  const heroBookDirectBtn = document.getElementById('heroBookDirectBtn');
  const aboutBookBtn = document.getElementById('aboutBookBtn');
  const contactBookBtn = document.getElementById('contactBookBtn');

  if (navBookBtn) navBookBtn.addEventListener('click', () => window.openBookingModal());
  if (heroBookDirectBtn) heroBookDirectBtn.addEventListener('click', () => window.openBookingModal());
  if (aboutBookBtn) aboutBookBtn.addEventListener('click', () => window.openBookingModal());
  if (contactBookBtn) contactBookBtn.addEventListener('click', () => window.openBookingModal());

  // Hook menu item "Pesan Sekarang" buttons
  document.querySelectorAll('.book-this-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service');
      const catName = btn.getAttribute('data-category');
      window.openBookingModal({
        category: catName,
        service: serviceName
      });
    });
  });

  // Handle Booking Form Submission to WhatsApp
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const category = categorySelect.value;
    const service = serviceSelect.value;
    const date = dateInput.value;
    const time = document.getElementById('bookTime').value;
    const guests = document.getElementById('bookGuests').value;
    const therapist = document.getElementById('bookTherapist').value;
    const name = document.getElementById('bookName').value.trim();
    const phone = document.getElementById('bookPhone').value.trim();
    const notes = document.getElementById('bookNotes').value.trim();
    const price = priceText.textContent;

    if (!name || !phone || !service || !date || !time) {
      showToast('⚠️ Mohon lengkapi semua data formulir!');
      return;
    }

    // Format WhatsApp message in polite Indonesian
    const message = 
`Halo De five Spa Bandung ✨
Saya ingin melakukan reservasi treatment dengan rincian berikut:

👤 *Nama Tamu:* ${name}
📱 *No. WhatsApp:* ${phone}
💆‍♀️ *Kategori:* ${category}
🌿 *Pilihan Treatment:* ${service}
💰 *Estimasi Biaya:* ${price}
📅 *Tanggal Kedatangan:* ${date}
⏰ *Sesi Jam:* ${time}
👥 *Jumlah Tamu:* ${guests}
🌸 *Preferensi Terapis:* ${therapist}
${notes ? `📝 *Catatan Khusus / Promo:* ${notes}\n` : ''}
Mohon konfirmasi ketersediaan jadwalnya. Terima kasih banyak!`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6282144396043?text=${encodedMessage}`;

    showToast('✨ Membuka WhatsApp untuk konfirmasi jadwal...');
    window.closeBookingModal();

    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener');
    }, 400);
  });
}

/* ===================================================================
   COPY PROMO CODE WITH TOAST NOTIFICATION
   =================================================================== */
function initCopyPromoCodes() {
  document.querySelectorAll('.copy-code-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      if (!code) return;

      navigator.clipboard.writeText(code).then(() => {
        showToast(`🎉 Kode promo ${code} berhasil disalin!`);
      }).catch(() => {
        showToast(`Kode promo: ${code}`);
      });
    });
  });
}

/* ===================================================================
   FAQ ACCORDION
   =================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other items
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ===================================================================
   BACK TO TOP BUTTON
   =================================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ===================================================================
   SMOOTH SCROLL SPY FOR NAVIGATION
   =================================================================== */
function initSmoothScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ===================================================================
   TOAST NOTIFICATION HELPER
   =================================================================== */
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('siteToast');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
