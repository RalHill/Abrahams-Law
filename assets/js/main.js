// Abrahams Law Professional Corporation — Main Script
// abrahamsatlaw.com

document.getElementById('yr').textContent = new Date().getFullYear();

// WhatsApp Click Handler with Mobile Detection
function handleWhatsApp(event) {
  event.preventDefault();
  const phoneNumber = '19052502220';
  const message = 'Hello Abrahams Law, I would like to inquire about your legal services';
  
  // Detect device type
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isMobile = isAndroid || isIOS;
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  if (isMobile) {
    // Mobile: Direct app open
    window.location.href = whatsappUrl;
  } else {
    // Desktop: Open in new tab
    window.open(whatsappUrl, '_blank');
  }
}

    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => nav.classList.toggle('sc', window.scrollY > 30), {passive: true});
    let open = false;
    function tNav() {
      open = !open;
      document.getElementById('mnav').classList.toggle('op', open);
      document.getElementById('mov').classList.toggle('op', open);
      document.getElementById('mbtn').setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    }
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && open) tNav(); });
    function tFaq(btn) {
      const item = btn.closest('.fitem');
      const was = item.classList.contains('op');
      document.querySelectorAll('.fitem.op').forEach(el => { el.classList.remove('op'); el.querySelector('.fbtn').setAttribute('aria-expanded','false'); });
      if (!was) { item.classList.add('op'); btn.setAttribute('aria-expanded','true'); }
    }
    const ro = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('in'), i * 75); ro.unobserve(e.target); } });
    }, {threshold: 0.08, rootMargin: '0px 0px -50px 0px'});
    document.querySelectorAll('.rev').forEach(el => ro.observe(el));