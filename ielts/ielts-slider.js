// =================================================================
// ielts/ielts-slider.js — Carousel / Slider Poin Materi IELTS
// Navigasi 1 Slide = 1 Poin Materi (Responsive, Swipe & Keyboard)
// =================================================================

class IeltsSlider {
    constructor() {
        this.currentIndex = 0;
        this.slides = [];
        this.totalSlides = 0;
        this.container = null;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.touchEndX = 0;
        this.touchEndY = 0;
        this.isSwipingForbidden = false;
        this.accent = 'indigo';
    }

    init() {
        this.container = document.getElementById('ielts-slider-container');
        if (!this.container) return;

        this.slides = Array.from(this.container.querySelectorAll('.ielts-slide'));
        this.totalSlides = this.slides.length;
        if (this.totalSlides === 0) return;

        // Ambil warna tema aksen modul dari data-accent atau default indigo
        this.accent = this.container.dataset.accent || 'indigo';

        this.injectStyles();

        // Cek apakah ada parameter slide di URL hash (mis. #slide-2)
        const hashMatch = window.location.hash.match(/slide-(\d+)/);
        if (hashMatch) {
            const requestedIdx = parseInt(hashMatch[1], 10) - 1;
            if (requestedIdx >= 0 && requestedIdx < this.totalSlides) {
                this.currentIndex = requestedIdx;
            }
        }

        this.renderDots();
        this.setupTouchSwipe();
        this.setupKeyboard();
        this.updateSlide(false); // initial render without scroll
    }

    injectStyles() {
        if (document.getElementById('ielts-slider-styles')) return;
        const style = document.createElement('style');
        style.id = 'ielts-slider-styles';
        style.textContent = `
            @keyframes ieltsSlideIn {
                from { opacity: 0.15; transform: translateY(6px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .ielts-slide.active-slide {
                display: block !important;
                animation: ieltsSlideIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            .slider-dot-btn {
                min-width: 8px;
            }
        `;
        document.head.appendChild(style);
    }

    renderDots() {
        const dotsContainer = document.getElementById('slider-dots');
        if (!dotsContainer) return;

        dotsContainer.innerHTML = '';
        this.slides.forEach((slide, idx) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'slider-dot-btn h-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none';
            btn.setAttribute('aria-label', `Buka Poin ${idx + 1}`);
            
            // Ambil judul slide untuk tooltip
            const titleEl = slide.querySelector('h2, h3');
            const titleText = titleEl ? titleEl.innerText.replace(/^\d+\.\s*/, '').trim() : `Poin ${idx + 1}`;
            btn.title = `Poin ${idx + 1}: ${titleText}`;

            btn.onclick = () => this.goTo(idx);
            dotsContainer.appendChild(btn);
        });
    }

    getAccentTheme() {
        const themes = {
            indigo: {
                activeDot: 'bg-indigo-600',
                activeText: 'text-indigo-600',
                nextBtn: 'bg-indigo-600 hover:bg-indigo-700'
            },
            teal: {
                activeDot: 'bg-teal-600',
                activeText: 'text-teal-600',
                nextBtn: 'bg-teal-600 hover:bg-teal-700'
            },
            amber: {
                activeDot: 'bg-amber-600',
                activeText: 'text-amber-600',
                nextBtn: 'bg-amber-600 hover:bg-amber-700'
            },
            emerald: {
                activeDot: 'bg-emerald-600',
                activeText: 'text-emerald-600',
                nextBtn: 'bg-emerald-600 hover:bg-emerald-700'
            },
            sky: {
                activeDot: 'bg-sky-600',
                activeText: 'text-sky-600',
                nextBtn: 'bg-sky-600 hover:bg-sky-700'
            },
            rose: {
                activeDot: 'bg-rose-600',
                activeText: 'text-rose-600',
                nextBtn: 'bg-rose-600 hover:bg-rose-700'
            }
        };
        return themes[this.accent] || themes.indigo;
    }

    updateSlide(shouldScroll = true) {
        const theme = this.getAccentTheme();

        // Tampilkan slide yang aktif, sembunyikan yang lain
        this.slides.forEach((slide, idx) => {
            if (idx === this.currentIndex) {
                slide.classList.remove('hidden');
                slide.classList.add('active-slide');
            } else {
                slide.classList.add('hidden');
                slide.classList.remove('active-slide');
            }
        });

        // Update indikator teks atas dan bawah
        const counter = document.getElementById('slider-counter');
        const bottomCounter = document.getElementById('slider-bottom-counter');

        if (counter) {
            counter.innerHTML = `<span class="${theme.activeText} font-bold">Poin ${this.currentIndex + 1}</span> <span class="text-slate-400">/</span> <span class="text-slate-500 font-semibold">${this.totalSlides}</span>`;
        }
        if (bottomCounter) {
            bottomCounter.innerText = `${this.currentIndex + 1} / ${this.totalSlides}`;
        }

        // Update dot buttons
        const dots = document.querySelectorAll('.slider-dot-btn');
        dots.forEach((dot, idx) => {
            if (idx === this.currentIndex) {
                dot.className = `slider-dot-btn h-2 w-6 sm:w-7 ${theme.activeDot} rounded-full transition-all duration-300 cursor-pointer`;
            } else {
                dot.className = 'slider-dot-btn h-2 w-2 sm:w-2.5 bg-slate-200 hover:bg-slate-300 rounded-full transition-all duration-300 cursor-pointer';
            }
        });

        // Update Tombol Prev (Top & Bottom)
        const isFirst = this.currentIndex === 0;
        const prevBtns = [document.getElementById('slider-btn-prev'), document.getElementById('slider-btn-prev-bottom')];
        prevBtns.forEach(btn => {
            if (btn) {
                btn.disabled = isFirst;
                if (isFirst) {
                    btn.classList.add('opacity-40', 'cursor-not-allowed');
                    btn.classList.remove('hover:bg-slate-200');
                } else {
                    btn.classList.remove('opacity-40', 'cursor-not-allowed');
                    btn.classList.add('hover:bg-slate-200');
                }
            }
        });

        // Update Tombol Next (Top & Bottom)
        const isLast = this.currentIndex === this.totalSlides - 1;
        const nextBtns = [document.getElementById('slider-btn-next'), document.getElementById('slider-btn-next-bottom')];
        nextBtns.forEach(btn => {
            if (btn) {
                btn.disabled = isLast;
                if (isLast) {
                    btn.classList.add('opacity-40', 'cursor-not-allowed');
                } else {
                    btn.classList.remove('opacity-40', 'cursor-not-allowed');
                }
            }
        });

        // Update teks tombol next di bagian bawah agar jelas
        const nextBottomText = document.getElementById('slider-btn-next-bottom-text');
        if (nextBottomText) {
            if (!isLast) {
                const nextSlide = this.slides[this.currentIndex + 1];
                const nextTitleEl = nextSlide ? nextSlide.querySelector('h2, h3') : null;
                const nextTitle = nextTitleEl ? nextTitleEl.innerText.replace(/^\d+\.\s*/, '').trim() : `Poin ${this.currentIndex + 2}`;
                nextBottomText.innerHTML = `Poin Selanjutnya: <span class="hidden sm:inline">${nextTitle.length > 25 ? nextTitle.slice(0, 25) + '...' : nextTitle}</span> &rarr;`;
            } else {
                nextBottomText.innerHTML = 'Poin Terakhir Selesai &check;';
            }
        }

        // Update URL hash secara rapi tanpa reload
        if (history.replaceState) {
            history.replaceState(null, null, `#slide-${this.currentIndex + 1}`);
        }

        // Scroll halus ke awal area slider jika berpindah slide
        if (shouldScroll && this.container) {
            const rect = this.container.getBoundingClientRect();
            const targetY = window.scrollY + rect.top - 80;
            if (window.scrollY > targetY + 60 || window.scrollY < targetY - 200) {
                window.scrollTo({
                    top: Math.max(0, targetY),
                    behavior: 'smooth'
                });
            }
        }
    }

    next() {
        if (this.currentIndex < this.totalSlides - 1) {
            this.currentIndex++;
            this.updateSlide(true);
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateSlide(true);
        }
    }

    goTo(index) {
        if (index >= 0 && index < this.totalSlides && index !== this.currentIndex) {
            this.currentIndex = index;
            this.updateSlide(true);
        }
    }

    setupTouchSwipe() {
        if (!this.container) return;

        this.container.addEventListener('touchstart', (e) => {
            const targetTag = e.target.tagName;
            // Hindari memicu swipe jika berinteraksi dengan input formulir, range, tombol kuis, dll
            if (targetTag === 'INPUT' || targetTag === 'TEXTAREA' || targetTag === 'BUTTON' || targetTag === 'SELECT') {
                this.isSwipingForbidden = true;
            } else {
                this.isSwipingForbidden = false;
            }

            this.touchStartX = e.changedTouches[0].screenX;
            this.touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        this.container.addEventListener('touchend', (e) => {
            if (this.isSwipingForbidden) return;
            this.touchEndX = e.changedTouches[0].screenX;
            this.touchEndY = e.changedTouches[0].screenY;
            this.handleSwipe();
        }, { passive: true });
    }

    handleSwipe() {
        const diffX = this.touchEndX - this.touchStartX;
        const diffY = this.touchEndY - this.touchStartY;

        // Hanya picu swipe jika gerakan jari dominan horizontal dan > 50px
        // Ini memastikan scrolling vertikal untuk membaca teks panjang TIDAK memicu perpindahan slide!
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
            if (diffX < 0) {
                this.next(); // Geser ke kiri -> Slide berikutnya
            } else {
                this.prev(); // Geser ke kanan -> Slide sebelumnya
            }
        }
    }

    setupKeyboard() {
        document.addEventListener('keydown', (e) => {
            // Abaikan jika user sedang mengetik di input, textarea, atau elemen yang bisa diedit
            const activeTag = document.activeElement ? document.activeElement.tagName : '';
            if (activeTag === 'INPUT' || activeTag === 'TEXTAREA' || (document.activeElement && document.activeElement.isContentEditable)) {
                return;
            }

            if (e.key === 'ArrowRight') {
                this.next();
            } else if (e.key === 'ArrowLeft') {
                this.prev();
            }
        });
    }
}

// Inisialisasi otomatis saat DOM siap
let ieltsSlider = new IeltsSlider();
document.addEventListener('DOMContentLoaded', () => {
    ieltsSlider.init();
});
