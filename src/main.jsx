import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import himVideo from './assets/him-hero.mp4';
import herVideo from './assets/her-hero.mp4';
import brandMain from './assets/brand-main.jpg';
import brandMaterials from './assets/brand-materials.jpg';
import brandApproach from './assets/brand-approach.jpg';
import brandTomorrow from './assets/brand-tomorrow.jpg';
import brandLandscape from './assets/brand-landscape.jpg';

import wardrobe01 from './assets/wardrobe-01.jpg';
import wardrobe02 from './assets/wardrobe-02.jpg';
import wardrobe03 from './assets/wardrobe-03.jpg';
import wardrobe04 from './assets/wardrobe-04.jpg';
import wardrobe05 from './assets/wardrobe-05.jpg';
import wardrobe06 from './assets/wardrobe-06.jpg';
import wardrobe07 from './assets/wardrobe-07.jpg';
import wardrobe08 from './assets/wardrobe-08.jpg';
import wardrobe09 from './assets/wardrobe-09.jpg';
import wardrobe10 from './assets/wardrobe-10.png';
import wardrobe11 from './assets/wardrobe-11.jpg';
import wardrobe12 from './assets/wardrobe-12.png';
import wardrobe13 from './assets/wardrobe-13.jpg';
import wardrobe14 from './assets/wardrobe-14.jpg';
import wardrobe15 from './assets/wardrobe-15.jpg';
import wardrobe16 from './assets/wardrobe-16.jpg';
import wardrobeHero from './assets/wardrobe-hero.jpg';
import wardrobePink from './assets/wardrobe-pink.jpg';
import wardrobe18 from './assets/wardrobe-18.jpg';

import seasonCampaign from './assets/season-campaign.jpg';
import seasonProduct01 from './assets/season-product-01-new.jpg';
import seasonProduct02 from './assets/season-product-02-new.jpg';
import seasonProduct03 from './assets/season-product-03-new.jpg';
import seasonMaterials from './assets/season-materials.jpg';
import seasonJournal from './assets/season-journal.jpg';
import seasonTailoring from './assets/season-tailoring-new.jpg';
import seasonShirts from './assets/season-shirts-new.jpg';
import seasonTrousers from './assets/season-trousers-new.jpg';
import seasonKnitwear from './assets/season-knitwear-new.jpg';
import seasonOuterwear from './assets/season-outerwear-new.jpg';
import seasonAccessories from './assets/season-accessories-new.jpg';
import findAurelMain from './assets/find-aurel-main.jpg';
import detailsMaterials from './assets/brand-materials.jpg';
import detailsCraft from './assets/wardrobe-09.jpg';
import detailsFit from './assets/season-tailoring-new.jpg';
import detailsLasting from './assets/season-product.jpg';
import detailsCare from './assets/season-knitwear-new.jpg';
import detailsLandscape from './assets/brand-tomorrow.jpg';
import closingSpaces from './assets/brand-tomorrow.jpg';

const worlds = {
  him: {
    index: '01',
    title: 'HIM',
    descriptor: ['STRUCTURE', 'IN MOTION'],
    cta: 'EXPLORE MEN',
    video: himVideo,
    note: ['PEOPLE', 'PLACES', 'GARMENTS', 'A QUIETER', 'TOMORROW'],
    alt: 'Man in dark tailored outerwear in warm architectural light',
  },
  her: {
    index: '02',
    title: 'HER',
    descriptor: ['FLUIDITY', 'IN EVERYDAY'],
    cta: 'EXPLORE WOMEN',
    video: herVideo,
    note: ['NATURAL', 'TEXTURED', 'EDITORIAL', 'TIMELESS', 'HUMAN'],
    alt: 'Woman in an ivory draped dress beside warm architectural stone',
  },
};

function ArrowIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 22 12" aria-hidden="true">
      <path d="M0 6h18" />
      <path d="m13 1 5 5-5 5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 5 5" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 8h14l-1 13H6L5 8Z" />
      <path d="M9 9V6a3 3 0 0 1 6 0v3" />
    </svg>
  );
}

function HeroNavigation({ activeWorld }) {
  const light = activeWorld === 'him' || activeWorld === null;
  return (
    <header className={`hero-nav ${light ? 'hero-nav--light' : 'hero-nav--dark'}`}>
      <a className="brand-mark" href="#top" aria-label="AURÉL home">
        A U R É L
        <span>CLOTHING FOR A MORE<br />CONSCIOUS TOMORROW</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#men">MEN</a>
        <a href="#women">WOMEN</a>
        <a href="#collections">COLLECTIONS</a>
        <a href="#journal">JOURNAL</a>
        <a href="#house">THE HOUSE</a>
      </nav>

      <div className="nav-utilities">
        <a href="#search" aria-label="Search"><SearchIcon /></a>
        <span className="nav-divider" aria-hidden="true" />
        <button type="button" className="locale" aria-label="Language and country">IN <span>⌄</span></button>
        <a href="#account">ACCOUNT</a>
        <a href="#bag" className="bag-link"><span className="bag-text">BAG (0)</span><BagIcon /></a>
      </div>

      <button className="mobile-menu" type="button" aria-label="Open menu">
        <span /><span />
      </button>
    </header>
  );
}

function WorldPanel({ worldKey, activeWorld, setActiveWorld, onNavigate }) {
  const world = worlds[worldKey];
  const active = activeWorld === worldKey;

  const handlePointerEnter = () => setActiveWorld(worldKey);
  const handleFocus = () => setActiveWorld(worldKey);
  const handleClick = () => {
    if (window.matchMedia('(max-width: 767px)').matches) setActiveWorld(worldKey);
  };

  return (
    <section
      className={`world world--${worldKey} ${active ? 'is-active' : ''} ${activeWorld && !active ? 'is-inactive' : ''}`}
      aria-label={`${world.title} — ${world.descriptor.join(' ')}`}
      tabIndex={0}
      onMouseEnter={handlePointerEnter}
      onFocus={handleFocus}
      onClick={handleClick}
    >
      <video className="world-image" src={world.video} aria-label={world.alt} autoPlay muted loop playsInline preload="auto" />
      <div className="world-shade" aria-hidden="true" />

      <div className="world-index">
        <span>{world.index}</span><i />
      </div>

      <div className="world-copy">
        <h1>{world.title}</h1>
        <p>{world.descriptor.map((line) => <span key={line}>{line}</span>)}</p>
        <a
          href={worldKey === 'him' ? '#men' : '#women'}
          className="world-cta"
          aria-label={`${world.cta.toLowerCase()} collection`}
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(worldKey);
          }}
        >
          <span>{world.cta}</span><ArrowIcon />
        </a>
      </div>

      <div className="world-note" aria-hidden="true">
        {world.note.map((line) => <span key={line}>{line}</span>)}
      </div>
    </section>
  );
}

function Hero() {
  const [activeWorld, setActiveWorld] = useState(null);
  const [paused, setPaused] = useState(false);
  const [mobileWorld, setMobileWorld] = useState('him');
  const heroRef = useRef(null);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setActiveWorld(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const sync = () => {
      if (media.matches) setActiveWorld(mobileWorld);
    };
    sync();
    media.addEventListener?.('change', sync);
    return () => media.removeEventListener?.('change', sync);
  }, [mobileWorld]);

  const handleNavigate = (worldKey) => {
    setActiveWorld(worldKey);
    const id = worldKey === 'him' ? 'men' : 'women';
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handlePointerLeave = () => {
    if (!window.matchMedia('(max-width: 767px)').matches) setActiveWorld(null);
  };

  const handleMobileToggle = (worldKey) => {
    setMobileWorld(worldKey);
    setActiveWorld(worldKey);
  };

  return (
    <main id="top" ref={heroRef} className="hero-shell" onMouseLeave={handlePointerLeave}>
      <div className="hero-worlds" data-active={activeWorld || 'none'}>
        <WorldPanel worldKey="him" activeWorld={activeWorld} setActiveWorld={setActiveWorld} onNavigate={handleNavigate} />
        <WorldPanel worldKey="her" activeWorld={activeWorld} setActiveWorld={setActiveWorld} onNavigate={handleNavigate} />
      </div>

      <HeroNavigation activeWorld={activeWorld} />

      <div className="hero-divider" aria-hidden="true" />
      <div className="choose-label" aria-hidden="true">CHOOSE YOUR WORLD</div>

      <button
        className="pause-control"
        type="button"
        aria-label={paused ? 'Resume hero animation' : 'Pause hero animation'}
        onClick={() => setPaused((value) => !value)}
      >
        {paused ? '▶' : 'II'}
      </button>

      <div className="mobile-world-switcher" aria-label="Choose world">
        <button className={mobileWorld === 'him' ? 'is-active' : ''} onClick={() => handleMobileToggle('him')} type="button">HIM</button>
        <span />
        <button className={mobileWorld === 'her' ? 'is-active' : ''} onClick={() => handleMobileToggle('her')} type="button">HER</button>
      </div>

      <button className="scroll-cue" type="button" onClick={() => document.getElementById('brand-world')?.scrollIntoView({ behavior: 'smooth' })} aria-label="Scroll to discover Brand World">
        <span className="scroll-arrow">↓</span>
        <span>SCROLL TO DISCOVER</span>
      </button>
    </main>
  );
}

const philosophyStories = [
  {
    number: '01',
    title: 'BETTER MATERIALS',
    copy: 'We choose materials with purpose — natural, durable and responsibly sourced.',
    image: brandMaterials,
    alt: 'Folded natural fabric representing AURÉL material choices',
  },
  {
    number: '02',
    title: 'A MORE MINDFUL APPROACH',
    copy: 'Fewer, better pieces. Thoughtful design for a longer life.',
    image: brandApproach,
    alt: 'Woman moving through a quiet natural landscape',
  },
  {
    number: '03',
    title: 'A QUIETER TOMORROW',
    copy: 'We believe in a more conscious future — for people, places and generations to come.',
    image: brandTomorrow,
    alt: 'Quiet coastal landscape representing a quieter tomorrow',
  },
];

function BrandWorldStory({ story }) {
  return (
    <article className="brand-story">
      <div className="brand-story-media">
        <img src={story.image} alt={story.alt} loading="lazy" />
      </div>
      <div className="brand-story-copy">
        <div className="brand-story-index"><span>{story.number}</span><i /></div>
        <h3>{story.title}</h3>
        <p>{story.copy}</p>
      </div>
    </article>
  );
}

function BrandWorld() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="brand-world" ref={sectionRef} className={`brand-world ${visible ? 'is-visible' : ''}`} aria-labelledby="brand-world-title">
      <div className="brand-world-inner">
        <div className="brand-world-left">
          <div className="brand-world-label"><span>02</span><i /><span>BRAND WORLD</span></div>
          <h2 id="brand-world-title">CLOTHING<br />FOR A MORE<br />CONSCIOUS<br />TOMORROW</h2>
          <p className="brand-world-intro">At AURÉL, we create garments that live beyond seasons — designed with intention, built with integrity, and made for a more meaningful life.</p>
          <a className="brand-world-cta" href="#philosophy">DISCOVER OUR PHILOSOPHY <ArrowIcon /></a>
          <div className="brand-world-landscape">
            <img src={brandLandscape} alt="Quiet mountain landscape beside still water" loading="lazy" />
            <div className="brand-world-landscape-meta">
              <span>PEOPLE&nbsp;&nbsp;&nbsp; PLACES</span>
              <span>GARMENTS&nbsp;&nbsp;&nbsp; STORIES A QUIETER<br />TOMORROW</span>
            </div>
            <div className="brand-world-est">EST. 2027<br /><span>A HIGHER FORM OF EVERYDAY</span></div>
          </div>
        </div>

        <div className="brand-world-main-media">
          <img src={brandMain} alt="Woman wearing an AURÉL-inspired knit look in a warm editorial interior" />
          <div className="brand-world-main-note">PEOPLE<br />PLACES<br />GARMENTS<br /><br />A QUIETER<br />TOMORROW</div>
        </div>

        <div className="brand-world-right" id="philosophy">
          {philosophyStories.map((story) => <BrandWorldStory key={story.number} story={story} />)}
          <blockquote className="brand-world-quote">“NOT JUST WHAT YOU WEAR, BUT HOW YOU MOVE THROUGH THE WORLD.”</blockquote>
          <div className="brand-world-signature"><i /> AURÉL</div>
        </div>
      </div>
    </section>
  );
}


const wardrobeLooks = [
  { id: '01', name: 'THE CITY FORM', price: 42800, gender: 'women', categories: ['knitwear', 'trousers', 'accessories'], pieces: ['Wool Overcoat', 'Cashmere Turtleneck', 'Tailored Trousers', 'Leather Bag'], image: wardrobeHero, alt: 'Woman in a cream knit sweater and brown pleated skirt', featured: true, layout: 'outer' },
  { id: '02', name: 'THE SOFT STRUCTURE', price: 28600, gender: 'women', categories: ['outerwear', 'dresses'], pieces: ['Wool Overcoat', 'Cashmere Turtleneck', 'Tailored Trousers'], image: wardrobePink, alt: 'Woman wearing a soft pink satin dress', featured: true, layout: 'inner' },
  { id: '03', name: 'THE MODERN CLASSIC', price: 31400, gender: 'women', categories: ['dresses', 'accessories'], pieces: ['Wool Overcoat', 'Cashmere Turtleneck', 'Tailored Trousers'], image: wardrobe07, alt: 'Woman wearing a black dress in an architectural setting', featured: true, layout: 'inner' },
];

const wardrobeCategories = [
  ['ALL', 'all'],
  ['TAILORING', 'tailoring'],
  ['SHIRTS', 'shirts'],
  ['TROUSERS', 'trousers'],
  ['KNITWEAR', 'knitwear'],
  ['OUTERWEAR', 'outerwear'],
  ['DRESSES', 'dresses'],
  ['ACCESSORIES', 'accessories'],
];

function formatWardrobePrice(value) {
  return `₹ ${value.toLocaleString('en-IN')}`;
}

function WardrobeMarquee() {
  const items = Array.from({ length: 2 }, (_, index) => (
    <span className="wardrobe-marquee-track__set" key={index}>
      {Array.from({ length: 7 }, (_, itemIndex) => <span key={itemIndex}>AURÉL</span>)}
    </span>
  ));
  return <div className="wardrobe-marquee" aria-label="AURÉL"><div className="wardrobe-marquee-track">{items}</div></div>;
}

function WardrobeHero() {
  return (
    <header className="wardrobe-hero">
      <div className="wardrobe-hero-copy">
        <div className="wardrobe-hero-label"><span>03</span><i /><span>THE WARDROBE</span></div>
        <h2>DISCOVER<br />THE WARDROBE</h2>
        <p>Designed for movement, work, evenings and everything between.</p>
      </div>
      <div className="wardrobe-hero-media">
        <img src={wardrobeHero} alt="AURÉL wardrobe editorial portrait" />
      </div>
    </header>
  );
}

function WardrobeCategories({ activeCategory, setActiveCategory, gender, setGender }) {
  return (
    <div className="wardrobe-category-bar">
      <div className="wardrobe-category-scroll">
        {wardrobeCategories.map(([label, value]) => (
          <button key={value} type="button" className={activeCategory === value ? 'is-active' : ''} onClick={() => setActiveCategory(value)}>{label}</button>
        ))}
      </div>
      <div className="wardrobe-gender" role="group" aria-label="Gender">
        {['women', 'men', 'all'].map((value) => (
          <button key={value} type="button" className={gender === value ? 'is-active' : ''} onClick={() => setGender(value)}>{value.toUpperCase()}</button>
        ))}
      </div>
    </div>
  );
}

function WardrobeToolbar({ search, setSearch, sort, setSort, view, setView }) {
  return (
    <div className="wardrobe-toolbar">
      <label className="wardrobe-search">
        <SearchIcon />
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the wardrobe..." aria-label="Search the wardrobe" />
      </label>
      <div className="wardrobe-toolbar-actions">
        <label className="wardrobe-select">Filter <select defaultValue="all" aria-label="Filter"><option value="all">All pieces</option><option value="new">New arrivals</option><option value="editorial">Editorial looks</option></select><span>⌄</span></label>
        <span className="wardrobe-toolbar-divider" />
        <label className="wardrobe-select">Sort By <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort wardrobe"><option value="featured">Featured</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option><option value="newest">Newest</option></select><span>⌄</span></label>
        <span className="wardrobe-toolbar-divider" />
        <label className="wardrobe-select">View <select value={view} onChange={(event) => setView(event.target.value)} aria-label="View wardrobe"><option value="editorial">Editorial</option><option value="compact">Compact</option></select><span>⌄</span></label>
      </div>
    </div>
  );
}

function WardrobeLookCard({ look, wishlist, toggleWishlist, extraClass = '' }) {
  const saved = wishlist.has(look.id);
  return (
    <article className={`wardrobe-look-card wardrobe-look-card--${look.layout} ${extraClass}`}>
      <div className="wardrobe-look-media">
        <img src={look.image} alt={look.alt} loading="lazy" />
        <span className="wardrobe-look-number">{look.id}</span>
        <button className={`wardrobe-wishlist ${saved ? 'is-saved' : ''}`} type="button" onClick={() => toggleWishlist(look.id)} aria-label={`${saved ? 'Remove' : 'Save'} ${look.name} ${saved ? 'from' : 'to'} wishlist`}>
          <span aria-hidden="true">♡</span>
        </button>
      </div>
      <div className="wardrobe-look-info">
        <div className="wardrobe-look-topline">
          <h3>{look.name}</h3>
          <span>{formatWardrobePrice(look.price)}</span>
        </div>
        <ul>{look.pieces.map((piece) => <li key={piece}>{piece}</li>)}</ul>
        <a className="wardrobe-look-arrow" href={`#wardrobe-look-${look.id}`} aria-label={`Open ${look.name}`}><ArrowIcon /></a>
      </div>
    </article>
  );
}
function WardrobeCollectionsPanel() {
  return (
    <a href="#collections" className="wardrobe-collections-panel">
      <div><span>EXPLORE</span><strong>ALL<br />COLLECTIONS</strong></div>
      <span className="wardrobe-collections-arrow"><ArrowIcon /></span>
    </a>
  );
}

function Wardrobe() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [gender, setGender] = useState('women');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('featured');
  const [view, setView] = useState('editorial');
  const [wishlist, setWishlist] = useState(new Set());

  const filteredLooks = useMemo(() => {
    const query = search.trim().toLowerCase();
    let result = wardrobeLooks.filter((look) => {
      const genderMatch = gender === 'all' || look.gender === gender;
      const categoryMatch = activeCategory === 'all' || look.categories.includes(activeCategory);
      const searchMatch = !query || [look.name, look.gender, ...look.categories, ...look.pieces].join(' ').toLowerCase().includes(query);
      return genderMatch && categoryMatch && searchMatch;
    });
    if (sort === 'low') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'high') result = [...result].sort((a, b) => b.price - a.price);
    if (sort === 'newest') result = [...result].reverse();
    return result;
  }, [activeCategory, gender, search, sort]);

  const toggleWishlist = (id) => setWishlist((current) => {
    const next = new Set(current);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const visibleLooks = filteredLooks.slice(0, 3);
  const empty = filteredLooks.length === 0;
  const look01 = visibleLooks.find((look) => look.id === '01') || wardrobeLooks[0];
  const look02 = visibleLooks.find((look) => look.id === '02') || wardrobeLooks[1];
  const look03 = visibleLooks.find((look) => look.id === '03') || wardrobeLooks[2];

  return (
    <section id="wardrobe" className={`wardrobe-section ${view === 'compact' ? 'wardrobe-section--compact' : ''}`} aria-labelledby="wardrobe-title">
      <WardrobeMarquee />
      <WardrobeHero />
      <WardrobeCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} gender={gender} setGender={setGender} />
      <WardrobeToolbar search={search} setSearch={setSearch} sort={sort} setSort={setSort} view={view} setView={setView} />

      <div className="wardrobe-grid-wrap">
        {empty ? (
          <div className="wardrobe-empty"><span>NO LOOKS FOUND</span><p>Try another search or category.</p></div>
        ) : (
          <div className="wardrobe-grid">
            <div className="wardrobe-outer-column">
              <WardrobeLookCard look={look01} wishlist={wishlist} toggleWishlist={toggleWishlist} extraClass="wardrobe-look-card--outer" />
              <WardrobeLookCard look={look01} wishlist={wishlist} toggleWishlist={toggleWishlist} extraClass="wardrobe-look-card--outer" />
            </div>

            <div className="wardrobe-center-pair">
              <div className="wardrobe-center-column">
                <WardrobeLookCard look={look02} wishlist={wishlist} toggleWishlist={toggleWishlist} />
                <WardrobeLookCard look={look02} wishlist={wishlist} toggleWishlist={toggleWishlist} />
              </div>
              <div className="wardrobe-center-column">
                <WardrobeLookCard look={look03} wishlist={wishlist} toggleWishlist={toggleWishlist} />
                <WardrobeLookCard look={look03} wishlist={wishlist} toggleWishlist={toggleWishlist} />
              </div>
              <WardrobeCollectionsPanel />
            </div>

            <div className="wardrobe-outer-column">
              <WardrobeLookCard look={look01} wishlist={wishlist} toggleWishlist={toggleWishlist} extraClass="wardrobe-look-card--outer" />
              <WardrobeLookCard look={look01} wishlist={wishlist} toggleWishlist={toggleWishlist} extraClass="wardrobe-look-card--outer" />
            </div>
          </div>
        )}
      </div>

      <footer className="wardrobe-footer-bar">
        <span>MORE LOOKS. A WIDER WORLD.</span>
        <a href="#store">SHOP THE FULL STORE <ArrowIcon /></a>
      </footer>
    </section>
  );
}



const seasonalProducts = [
  { id: 'wool-overcoat', name: 'Wool Overcoat', category: 'Outerwear', price: '€620', image: seasonProduct01, colors: ['#222', '#b8ad9c', '#d5d0c7'] },
  { id: 'cashmere-turtleneck', name: 'Cashmere Turtleneck', category: 'Knitwear', price: '€390', image: seasonProduct02, colors: ['#d5cfc1', '#2a2926', '#9c9487'] },
  { id: 'tailored-trousers', name: 'Tailored Trousers', category: 'Trousers', price: '€320', image: seasonProduct03, colors: ['#262626', '#9f988d', '#d4d0c8'] },
];

const seasonCollections = [
  { id: 'tailoring', number: '01', title: 'TAILORING', subtitle: 'STRUCTURE FOR CHANGE', image: seasonTailoring },
  { id: 'shirts', number: '02', title: 'SHIRTS', subtitle: 'EFFORTLESS ESSENTIALS', image: seasonShirts },
  { id: 'trousers', number: '03', title: 'TROUSERS', subtitle: 'MOVEMENT IN BALANCE', image: seasonTrousers },
  { id: 'knitwear', number: '04', title: 'KNITWEAR', subtitle: 'SOFTER TOMORROWS', image: seasonKnitwear },
  { id: 'outerwear', number: '05', title: 'OUTERWEAR', subtitle: 'FOR EVERY JOURNEY', image: seasonOuterwear },
  { id: 'accessories', number: '06', title: 'ACCESSORIES', subtitle: 'THE FINISHING DETAILS', image: seasonAccessories },
];

function SeasonalProductCard({ product }) {
  return (
    <article className="season-product-card">
      <div className="season-product-media">
        <img src={product.image} alt="" loading="lazy" />
        <span className="season-product-wishlist" aria-hidden="true">♡</span>
      </div>
      <div className="season-product-meta">
        <div className="season-product-name">{product.name}</div>
        <div className="season-product-category">{product.category}</div>
        <div className="season-product-price">{product.price}</div>
        <div className="season-product-colors" aria-label="Available colors">
          {product.colors.map((color, index) => <span key={index} style={{ backgroundColor: color }} />)}
        </div>
      </div>
    </article>
  );
}

function SeasonCollectionCard({ collection, active, onActive }) {
  return (
    <a
      className={`season-collection-card ${active ? 'is-active' : ''}`}
      href="#wardrobe"
      onMouseEnter={() => onActive(collection.id)}
      onFocus={() => onActive(collection.id)}
      onMouseLeave={() => onActive(null)}
      onBlur={() => onActive(null)}
    >
      <img src={collection.image} alt="" loading="lazy" />
      <span className="season-collection-shade" />
      <div className="season-collection-content">
        <span className="season-collection-number">{collection.number}</span>
        <div className="season-collection-copy">
          <strong>{collection.title}</strong>
          <span>{collection.subtitle}</span>
        </div>
        <span className="season-collection-arrow"><ArrowIcon /></span>
      </div>
    </a>
  );
}

function CurrentSeason() {
  const [activeCollection, setActiveCollection] = useState(null);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.06, rootMargin: '0px 0px -6% 0px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="current-season" ref={sectionRef} className={`current-season ${visible ? 'is-visible' : ''}`} aria-labelledby="current-season-title">
      <div className="season-editorial">
        <div className="season-intro">
          <div className="season-kicker"><span>04</span><i /><span>CURRENT SEASON</span></div>
          <span className="season-label">AUTUMN / WINTER 2027</span>
          <h2 id="current-season-title">DISCOVER<br />A NEW<br />SEASON</h2>
          <p>Structure, movement and quiet confidence.</p>
          <a className="season-cta" href="#seasonal-edit">EXPLORE THE SEASON <ArrowIcon /></a>
          <div className="season-microcopy">NEW<br />PERSPECTIVES<br />PURPOSE</div>
        </div>

        <a className="season-campaign" href="#seasonal-edit" aria-label="Explore the Autumn Winter 2027 campaign">
          <img src={seasonCampaign} alt="AURÉL Autumn Winter 2027 campaign" />
          <div className="season-campaign-caption">AURÉL<br /><span>AUTUMN / WINTER 2027</span></div>
        </a>

        <div className="season-edit" id="seasonal-edit">
          <div className="season-edit-head">
            <span><i /> SEASONAL EDIT</span>
            <a href="#wardrobe">VIEW ALL <ArrowIcon /></a>
          </div>
          <div className="season-products">
            {seasonalProducts.map((product) => <SeasonalProductCard key={product.id} product={product} />)}
          </div>
          <div className="season-story-panels">
            <a className="season-story-panel" href="#approach">
              <img src={seasonMaterials} alt="Refined natural materials" loading="lazy" />
              <span className="season-story-overlay" />
              <strong>REFINED MATERIALS<br />FOR A BRIGHTER<br />TOMORROW</strong>
              <span className="season-story-link">OUR APPROACH <ArrowIcon /></span>
            </a>
            <a className="season-story-panel" href="#journal">
              <img src={seasonJournal} alt="Places and architecture inspiring AURÉL" loading="lazy" />
              <span className="season-story-overlay" />
              <strong>INSPIRED BY<br />PEOPLE AND PLACES</strong>
              <span className="season-story-link">OUR JOURNAL <ArrowIcon /></span>
            </a>
          </div>
        </div>
      </div>

      <div className="season-collections" aria-label="Season collections">
        <div className="season-collections-track" data-active={activeCollection || 'none'}>
          {seasonCollections.map((collection) => (
            <SeasonCollectionCard key={collection.id} collection={collection} active={activeCollection === collection.id} onActive={setActiveCollection} />
          ))}
        </div>
      </div>
    </section>
  );
}


const detailItems = [
  {
    number: '01',
    title: <>EXCEPTIONAL<br />MATERIALS</>,
    image: detailsMaterials,
    alt: 'Natural fabric folded on a work surface',
    description: <>We work with the world's finest<br className="details-desktop-break" /> natural fibres — chosen for their beauty,<br className="details-desktop-break" /> durability and lower impact.</>,
    cta: 'OUR MATERIALS',
    href: '#brand-world',
  },
  {
    number: '02',
    title: <>CONSCIOUS<br />CRAFTSMANSHIP</>,
    image: detailsCraft,
    alt: 'AURÉL fashion pieces presented in a considered retail setting',
    description: <>Every garment is the result of human<br className="details-desktop-break" /> skill, time and care. We partner with<br className="details-desktop-break" /> makers who share our values.</>,
    cta: 'OUR PROCESS',
    href: '#brand-world',
  },
  {
    number: '03',
    title: <>FIT WITH<br />PURPOSE</>,
    image: detailsFit,
    alt: 'Tailored AURÉL silhouette designed for movement',
    description: <>Modern silhouettes, designed to<br className="details-desktop-break" /> move with you. Thoughtful proportions for<br className="details-desktop-break" /> a more effortless life.</>,
    cta: 'OUR FIT GUIDE',
    href: '#wardrobe',
  },
  {
    number: '04',
    title: <>DESIGNED<br />TO LAST</>,
    image: detailsLasting,
    alt: 'Close detail of an AURÉL garment',
    description: <>Timeless design. Enduring quality.<br className="details-desktop-break" /> Pieces made to stay with you — season<br className="details-desktop-break" /> after season, and beyond.</>,
    cta: 'CARE & REPAIR',
    href: '#find-aurel',
  },
  {
    number: '05',
    title: <>DESIGNED<br />TO LAST</>,
    image: detailsCare,
    alt: 'AURÉL knitwear detail',
    description: <>Timeless design. Enduring quality.<br className="details-desktop-break" /> Pieces made to stay with you — season<br className="details-desktop-break" /> after season, and beyond.</>,
    cta: 'CARE & REPAIR',
    href: '#find-aurel',
  },
];

function DetailItem({ item, index }) {
  return (
    <article className="detail-item" style={{ '--detail-delay': `${index * 70}ms` }}>
      <div className="detail-item-head">
        <span>{item.number}</span><i aria-hidden="true" />
      </div>
      <h3>{item.title}</h3>
      <a className="detail-item-image" href={item.href} aria-label={item.cta.toLowerCase()}>
        <img src={item.image} alt={item.alt} loading="lazy" />
      </a>
      <p>{item.description}</p>
      <a className="detail-item-cta" href={item.href}>
        <span>{item.cta}</span><ArrowIcon />
      </a>
    </article>
  );
}

function TheDetails() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="details" ref={sectionRef} className={`details-section ${visible ? 'is-visible' : ''}`} aria-labelledby="details-title">
      <div className="details-grid">
        {detailItems.map((item, index) => <DetailItem key={item.number} item={item} index={index} />)}
      </div>

      <div className="details-commitment">
        <div className="details-commitment-image">
          <img src={detailsLandscape} alt="AURÉL landscape and coastline, expressing a quieter way of living" loading="lazy" />
          <span className="details-commitment-shade" aria-hidden="true" />
          <div className="details-commitment-copy">
            <h2 id="details-title">A LONGER<br />WAY OF LIVING</h2>
            <p>We make fewer things, better — with a lighter<br className="details-desktop-break" /> footprint and a deeper respect for the world we share.</p>
            <a href="#brand-world" className="details-commitment-cta"><span>OUR COMMITMENT</span><ArrowIcon /></a>
          </div>
        </div>
        <div className="details-quote">
          <blockquote>“Quality is not a detail.<br />It is a decision about<br />the kind of tomorrow<br />we want to live in.”</blockquote>
          <span className="details-quote-rule" aria-hidden="true" />
          <span className="details-quote-mark">A U R É L</span>
        </div>
      </div>
    </section>
  );
}


function FindAurel() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="find-aurel"
      ref={sectionRef}
      className={`find-aurel ${visible ? 'is-visible' : ''}`}
      aria-labelledby="find-aurel-title"
    >
      <div className="find-aurel-copy">
        <div className="find-aurel-kicker">
          <span>10</span><i aria-hidden="true" /><span>FIND AURÉL</span>
        </div>

        <div className="find-aurel-main-copy">
          <h2 id="find-aurel-title">MORE<br />THAN<br />A STORE</h2>
          <p>Our boutiques are thoughtful spaces to experience AURÉL — where design, service and community come together.</p>
          <a className="find-aurel-cta" href="#locations" aria-label="Find an AURÉL location">
            <span>FIND A LOCATION</span><ArrowIcon />
          </a>
        </div>

        <div className="find-aurel-microcopy" aria-label="AURÉL editorial themes">
          <span>PEOPLE</span>
          <span>PLACES</span>
          <span>GARMENTS</span>
          <span>A QUIETER TOMORROW</span>
        </div>
      </div>

      <div className="find-aurel-image-panel">
        <img
          className="find-aurel-image"
          src={findAurelMain}
          alt="AURÉL fashion editorial portrait in a warm peach setting"
          loading="lazy"
        />
        <div className="find-aurel-image-copy">
          <h3>THE<br />AURÉL<br />EXPERIENCE,<br />IN REAL LIFE.</h3>
          <p>Step into our world.</p>
        </div>
      </div>
    </section>
  );
}

const locationRegions = ['ALL', 'INDIA', 'EUROPE', 'ASIA', 'NORTH AMERICA', 'MIDDLE EAST'];

const locationData = [
  {
    id: 'new-delhi', city: 'NEW DELHI', region: 'INDIA', locationCount: '2 Locations',
    name: 'AURÉL NEW DELHI', storeName: 'DLF EMPORIO',
    address: ['Vasant Kunj, New Delhi 110070', 'India'],
    postcode: '110070', hours: { weekday: 'Mon – Sat', weekdayHours: '11:00 – 20:00', sunday: 'Sun', sundayHours: '11:00 – 19:00' },
    image: brandMain, alt: 'Warm AURÉL editorial interior with a fashion figure',
    coordinates: { lat: 28.5428, lng: 77.1025 },
    imagePosition: 'center center',
  },
  {
    id: 'mumbai', city: 'MUMBAI', region: 'INDIA', locationCount: '1 Location',
    name: 'AURÉL MUMBAI', storeName: 'JIO WORLD PLAZA',
    address: ['Bandra Kurla Complex, Mumbai', 'India'],
    postcode: '400051', hours: { weekday: 'Mon – Sat', weekdayHours: '11:00 – 20:00', sunday: 'Sun', sundayHours: '11:00 – 19:00' },
    image: seasonJournal, alt: 'Warm architectural setting for an AURÉL editorial story',
    coordinates: { lat: 19.0607, lng: 72.8362 },
    imagePosition: 'center center',
  },
  {
    id: 'london', city: 'LONDON', region: 'EUROPE', locationCount: '2 Locations',
    name: 'AURÉL LONDON', storeName: 'MAYFAIR',
    address: ['Mayfair, London W1', 'United Kingdom'],
    postcode: 'W1', hours: { weekday: 'Mon – Sat', weekdayHours: '10:30 – 19:30', sunday: 'Sun', sundayHours: '11:00 – 18:00' },
    image: seasonMaterials, alt: 'Refined natural material detail in a warm neutral setting',
    coordinates: { lat: 51.5136, lng: -0.1472 },
    imagePosition: 'center center',
  },
  {
    id: 'milan', city: 'MILAN', region: 'EUROPE', locationCount: '1 Location',
    name: 'AURÉL MILAN', storeName: 'BRERA',
    address: ['Brera, Milano', 'Italy'],
    postcode: '20121', hours: { weekday: 'Mon – Sat', weekdayHours: '10:30 – 19:30', sunday: 'Sun', sundayHours: '11:00 – 18:00' },
    image: seasonCampaign, alt: 'AURÉL seasonal campaign in a warm architectural interior',
    coordinates: { lat: 45.4719, lng: 9.1884 },
    imagePosition: 'center center',
  },
  {
    id: 'tokyo', city: 'TOKYO', region: 'ASIA', locationCount: '1 Location',
    name: 'AURÉL TOKYO', storeName: 'DAIKANYAMA',
    address: ['Daikanyama, Tokyo', 'Japan'],
    postcode: '150-0034', hours: { weekday: 'Mon – Sat', weekdayHours: '11:00 – 20:00', sunday: 'Sun', sundayHours: '11:00 – 19:00' },
    image: wardrobeHero, alt: 'AURÉL wardrobe editorial portrait',
    coordinates: { lat: 35.6480, lng: 139.7035 },
    imagePosition: 'center center',
  },
  {
    id: 'new-york', city: 'NEW YORK', region: 'NORTH AMERICA', locationCount: '1 Location',
    name: 'AURÉL NEW YORK', storeName: 'SOHO',
    address: ['SoHo, New York, NY', 'United States'],
    postcode: '10012', hours: { weekday: 'Mon – Sat', weekdayHours: '11:00 – 20:00', sunday: 'Sun', sundayHours: '12:00 – 18:00' },
    image: wardrobePink, alt: 'AURÉL soft structure fashion editorial',
    coordinates: { lat: 40.7233, lng: -74.0020 },
    imagePosition: 'center center',
  },
  {
    id: 'dubai', city: 'DUBAI', region: 'MIDDLE EAST', locationCount: '1 Location',
    name: 'AURÉL DUBAI', storeName: 'DUBAI MALL',
    address: ['Downtown Dubai', 'United Arab Emirates'],
    postcode: '00000', hours: { weekday: 'Mon – Sat', weekdayHours: '10:00 – 22:00', sunday: 'Sun', sundayHours: '10:00 – 22:00' },
    image: findAurelMain, alt: 'AURÉL fashion editorial portrait in a warm setting',
    coordinates: { lat: 25.1972, lng: 55.2744 },
    imagePosition: 'center center',
  },
];

function LocationSearchIcon() {
  return <SearchIcon />;
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-6.1 6-11a6 6 0 1 0-12 0c0 4.9 6 11 6 11Z" /><circle cx="12" cy="10" r="2" /></svg>
  );
}

function BoxIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="M4 7v10l8 4 8-4V7M12 11v10" /></svg>;
}

function FitIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4v5a4 4 0 0 0 8 0V4M7 20l2-6h6l2 6M9 14h6" /></svg>;
}

function RepairIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 6.5 3-3 3 3-3 3" /><path d="M17.5 3.5a5.5 5.5 0 0 1-7.2 7.2L4 17l3 3 6.3-6.3a5.5 5.5 0 0 1 7.2-7.2" /></svg>;
}

const serviceItems = [
  { title: 'Shop Collections', copy: 'Explore our latest collections in person.', icon: BagIcon },
  { title: 'Find in Store', copy: 'Check availability for a specific product.', icon: BoxIcon },
  { title: 'Size & Fit Guidance', copy: 'Get help finding the right fit.', icon: FitIcon },
  { title: 'Care & Repair', copy: 'Support for keeping your pieces longer.', icon: RepairIcon },
];

function LocationCard({ location, selected, onSelect }) {
  return (
    <button type="button" className={`location-card ${selected ? 'is-selected' : ''}`} onClick={() => onSelect(location.id)} aria-pressed={selected}>
      <span className="location-card-media">
        <img src={location.image} alt="" loading="lazy" style={{ objectPosition: location.imagePosition }} />
        <span className="location-card-shade" aria-hidden="true" />
      </span>
      <span className="location-card-copy">
        <span className="location-card-city">{location.city}</span>
        <span className="location-card-count">{location.locationCount}</span>
      </span>
      <span className="location-card-arrow" aria-hidden="true"><ArrowIcon /></span>
    </button>
  );
}

function LocationDetails({ location }) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${location.storeName}, ${location.address.join(', ')}`)}`;
  const [contactMessage, setContactMessage] = useState(false);

  useEffect(() => setContactMessage(false), [location.id]);

  return (
    <div className="location-detail" aria-live="polite">
      <div className="location-detail-media">
        <img src={location.image} alt={location.alt} loading="lazy" style={{ objectPosition: location.imagePosition }} />
        <span className="location-detail-shade" aria-hidden="true" />
        <span className="location-detail-caption">A SPACE TO<br />EXPERIENCE MORE</span>
      </div>

      <div className="location-detail-info">
        <div className="location-detail-title">
          <span>AURÉL</span>
          <h2>{location.city}</h2>
        </div>
        <div className="location-detail-store">
          <strong>{location.storeName}</strong>
          <p>{location.address[0]}<br />{location.address[1]}</p>
        </div>
        <div className="location-hours">
          <span>HOURS</span>
          <div><span>{location.hours.weekday}</span><span>{location.hours.weekdayHours}</span></div>
          <div><span>{location.hours.sunday}</span><span>{location.hours.sundayHours}</span></div>
        </div>
        <div className="location-detail-actions">
          <a href={directionsUrl} target="_blank" rel="noreferrer">GET DIRECTIONS <ArrowIcon /></a>
          <button type="button" onClick={() => setContactMessage(true)}>CONTACT STORE <ArrowIcon /></button>
          {contactMessage && <p className="location-contact-note">Store contact details are not included in the current location dataset.</p>}
        </div>
      </div>

      <aside className="location-services" aria-label="Services available at this location">
        <span className="location-services-label">AT THIS LOCATION</span>
        {serviceItems.map(({ title, copy, icon: Icon }) => (
          <div className="location-service" key={title}>
            <Icon />
            <div><strong>{title}</strong><p>{copy}</p></div>
          </div>
        ))}
      </aside>
    </div>
  );
}

function LocationExperience() {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('ALL');
  const [selectedId, setSelectedId] = useState('new-delhi');
  const [showAll, setShowAll] = useState(false);
  const [locationStatus, setLocationStatus] = useState('');
  const sectionRef = useRef(null);

  const filteredLocations = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return locationData.filter((location) => {
      const regionMatch = region === 'ALL' || location.region === region;
      if (!regionMatch) return false;
      if (!normalized) return true;
      const haystack = [location.city, location.region, location.name, location.storeName, ...location.address, location.postcode].join(' ').toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query, region]);

  const visibleLocations = showAll ? filteredLocations : filteredLocations.slice(0, 4);
  const selectedLocation = locationData.find((location) => location.id === selectedId) || filteredLocations[0] || locationData[0];

  useEffect(() => {
    if (filteredLocations.length && !filteredLocations.some((location) => location.id === selectedId)) {
      setSelectedId(filteredLocations[0].id);
    }
  }, [filteredLocations, selectedId]);

  const selectLocation = (id) => {
    setSelectedId(id);
    requestAnimationFrame(() => document.getElementById('selected-location')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  const useMyLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('Location access is not available in this browser.');
      return;
    }
    setLocationStatus('Finding the nearest AURÉL location…');
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const distance = (a, b) => {
          const toRad = (value) => value * Math.PI / 180;
          const dLat = toRad(b.lat - a.lat);
          const dLng = toRad(b.lng - a.lng);
          const lat1 = toRad(a.lat);
          const lat2 = toRad(b.lat);
          const x = Math.sin(dLat / 2) ** 2 + Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
          return 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
        };
        const nearest = [...locationData].sort((a, b) => distance(coords, a.coordinates) - distance(coords, b.coordinates))[0];
        setRegion('ALL');
        setQuery('');
        setSelectedId(nearest.id);
        setLocationStatus(`Nearest AURÉL location: ${nearest.city}.`);
      },
      () => setLocationStatus('Location access was unavailable. You can continue by searching below.'),
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 },
    );
  };

  const handleRegion = (value) => {
    setRegion(value);
    setShowAll(false);
    if (value !== 'ALL') setQuery('');
  };

  return (
    <section id="locations" ref={sectionRef} className="location-experience" aria-labelledby="location-experience-title">
      <div className="location-topbar">
        <div className="location-top-question">WHERE WOULD YOU LIKE TO<br />EXPERIENCE AURÉL?</div>
        <label className="location-search">
          <span className="sr-only">Search city, country or postcode</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search city, country or postcode" />
          <LocationSearchIcon />
        </label>
        <button type="button" className="location-use" onClick={useMyLocation}><PinIcon /><span>Use my location</span></button>
        <div className="location-region-nav">
          <span className="location-region-label">EXPLORE BY<br />REGION</span>
          <div className="location-region-list" role="tablist" aria-label="Explore by region">
            {locationRegions.slice(1).map((item) => (
              <button key={item} type="button" role="tab" aria-selected={region === item} className={region === item ? 'is-active' : ''} onClick={() => handleRegion(item)}>{item === 'NORTH AMERICA' ? <>NORTH<br />AMERICA</> : item === 'MIDDLE EAST' ? <>MIDDLE<br />EAST</> : item}</button>
            ))}
          </div>
        </div>
        <button type="button" className={`location-global ${region === 'ALL' ? 'is-active' : ''}`} onClick={() => handleRegion('ALL')}><span>A</span><span>GLOBAL<br />HOME</span><i /></button>
      </div>

      <div className="location-status" aria-live="polite">{locationStatus}</div>

      <div className="location-nearby">
        <div className="location-nearby-head">
          <h2 id="location-experience-title">AURÉL NEAR YOU</h2>
          <button type="button" onClick={() => setShowAll((value) => !value)}>{showAll ? 'SHOW FEATURED' : 'VIEW ALL LOCATIONS'} <ArrowIcon /></button>
        </div>
        {visibleLocations.length ? (
          <div className="location-card-grid">
            {visibleLocations.map((location) => <LocationCard key={location.id} location={location} selected={selectedLocation.id === location.id} onSelect={selectLocation} />)}
          </div>
        ) : (
          <div className="location-empty"><strong>NO AURÉL LOCATIONS FOUND</strong><span>Try another city, country or postcode.</span></div>
        )}
      </div>

      {selectedLocation && <div id="selected-location" className="location-selected-wrap"><LocationDetails location={selectedLocation} /></div>}
    </section>
  );
}


function InstagramIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.8" r=".8" fill="currentColor" stroke="none"/></svg>}
function FacebookIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h2.8l.4-3H14V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.8-.1-1.6-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3V10H8v3h2.8v8H14Z" fill="currentColor" stroke="none"/></svg>}
function YoutubeIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="3"/><path d="m10 9 5 3-5 3V9Z" fill="var(--ink)" stroke="none"/></svg>}
function PinterestIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5a8.5 8.5 0 0 0-3.1 16.4c-.1-1.4 0-3 .3-4.1l1-4.2s-.3-.6-.3-1.5c0-1.4.8-2.5 1.8-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.1-.9 3.3-.3 1 .5 1.8 1.5 1.8 1.8 0 3.2-1.9 3.2-4.7 0-2.5-1.8-4.3-4.4-4.3-3 0-4.8 2.3-4.8 4.6 0 .9.3 1.8.8 2.3.1.1.1.2.1.4l-.3 1.2c-.1.4-.4.5-.7.3-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.4 7-6.4 3.7 0 6.6 2.6 6.6 6.1 0 3.6-2.3 6.6-5.5 6.6-1.1 0-2.1-.6-2.5-1.3l-.7 2.7c-.2 1-.8 2.3-1.2 3.1.9.3 1.8.5 2.8.5A8.5 8.5 0 0 0 12 3.5Z"/></svg>}
function LinkedinIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.1 8.7H2.3V21h2.8V8.7ZM3.7 3A1.7 1.7 0 1 0 3.7 6.4 1.7 1.7 0 0 0 3.7 3ZM21.7 14c0-3.7-2-5.5-4.7-5.5-2.2 0-3.2 1.2-3.8 2v-1.8h-2.8V21h2.8v-6.1c0-1.6.3-3.1 2.2-3.1 1.8 0 1.9 1.7 1.9 3.2V21h2.8l.1-7Z" fill="currentColor" stroke="none"/></svg>}

const closingFooterGroups = [
  { title: 'SHOP', links: ['New In','Men','Women','Collections','Tailoring','Knitwear','Outerwear','Trousers','Dresses','Shirts','Accessories'] },
  { title: 'EXPLORE', links: ['Journal','The House','AURÉL Edit','Campaigns','Films','People & Places','Sustainability','Our Materials','Craftsmanship'] },
  { title: 'SUPPORT', links: ['Contact Us','FAQs','Shipping & Delivery','Returns & Exchanges','Size Guide','Care & Repair','Track Order','Product Enquiry','Store Enquiry'] },
];

function FooterArrowButton({ children, className = '' }) {
  return <button type="submit" className={`closing-arrow-submit ${className}`} aria-label={children || 'Submit'}><ArrowIcon /></button>;
}

function SpacesWithinWorld() {
  return (
    <section className="closing-spaces" aria-labelledby="closing-spaces-title">
      <img className="closing-spaces-image" src={closingSpaces} alt="AURÉL landscape and considered spaces" loading="lazy" />
      <div className="closing-spaces-overlay" aria-hidden="true" />
      <div className="closing-spaces-copy">
        <h2 id="closing-spaces-title">SPACES<br />WITHIN THE WORLD</h2>
        <p>From quiet interiors to considered details, every AURÉL space reflects our belief in a more conscious tomorrow.</p>
        <a className="closing-editorial-link" href="#locations"><span>EXPLORE OUR SPACES</span><ArrowIcon /></a>
      </div>
      <div className="closing-spaces-quote">
        <p>“SAME PRINCIPLES.<br />A DIFFERENT PLACE.”</p>
        <span aria-hidden="true" />
      </div>
    </section>
  );
}

function HaveAQuestion() {
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState('');
  const submit = (event) => {
    event.preventDefault();
    if (!question.trim()) { setStatus('Please enter your question.'); return; }
    setStatus("Thank you. We'll be in touch.");
    setQuestion('');
  };
  return (
    <section className="closing-question" aria-labelledby="closing-question-title">
      <div className="closing-question-copy">
        <h2 id="closing-question-title">HAVE A QUESTION?</h2>
        <p>We're here to help. Whether it's about a product, availability, or visiting a boutique — send us a quick query.</p>
      </div>
      <form className="closing-question-form" onSubmit={submit}>
        <label className="sr-only" htmlFor="aurel-question">What would you like to know?</label>
        <input id="aurel-question" value={question} onChange={(e) => { setQuestion(e.target.value); setStatus(''); }} placeholder="What would you like to know?" aria-label="What would you like to know?" />
        <FooterArrowButton>Submit question</FooterArrowButton>
        {status && <p className="closing-form-status" role="status">{status}</p>}
      </form>
    </section>
  );
}

function AurelFooter() {
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState('');
  const subscribe = (event) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { setEmailStatus('Please enter a valid email address.'); return; }
    setEmailStatus("You're on the list.");
    setEmail('');
  };
  return (
    <footer className="aurel-closing-footer" aria-label="AURÉL footer">
      <div className="closing-footer-main">
        <div className="closing-footer-brand">
          <div className="closing-footer-wordmark" aria-label="AURÉL">A U R É L</div>
          <p>People. Places. Garments.<br />A Quieter Tomorrow.</p>
          <nav className="closing-socials" aria-label="AURÉL social media">
            <a href="#instagram" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#facebook" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#youtube" aria-label="YouTube"><YoutubeIcon /></a>
            <a href="#pinterest" aria-label="Pinterest"><PinterestIcon /></a>
            <a href="#linkedin" aria-label="LinkedIn"><LinkedinIcon /></a>
          </nav>
        </div>
        {closingFooterGroups.map((group) => (
          <nav className="closing-footer-column" key={group.title} aria-label={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => <a href={`#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} key={link}>{link}</a>)}
          </nav>
        ))}
        <div className="closing-private-edit">
          <h3>THE PRIVATE EDIT</h3>
          <p>Be the first to know about new collections, stories and more.</p>
          <form onSubmit={subscribe} className="closing-newsletter-form">
            <label className="sr-only" htmlFor="aurel-email">Email address</label>
            <input id="aurel-email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); setEmailStatus(''); }} placeholder="Your email address" aria-label="Email address" />
            <FooterArrowButton>Join The Private Edit</FooterArrowButton>
          </form>
          {emailStatus && <p className="closing-form-status closing-newsletter-status" role="status">{emailStatus}</p>}
        </div>
      </div>
      <div className="closing-footer-bottom">
        <span>© 2026 AURÉL. All rights reserved.</span>
        <nav aria-label="Legal">
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms-conditions">Terms &amp; Conditions</a>
          <a href="#cookie-preferences">Cookie Preferences</a>
        </nav>
      </div>
    </footer>
  );
}

function ClosingExperience() {
  return (
    <div className="aurel-closing-experience">
      <SpacesWithinWorld />
      <HaveAQuestion />
      <AurelFooter />
    </div>
  );
}

function App() {
  return (
    <>
      <Hero />
      <BrandWorld />
      <Wardrobe />
      <CurrentSeason />
      <FindAurel />
      <TheDetails />
      <LocationExperience />
      <ClosingExperience />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
