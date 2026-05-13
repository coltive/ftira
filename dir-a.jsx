// Direction A — Editorial Print

function DirectionA({ tweaks }) {
  const scrollerRef = useRef(null);
  const D = window.SITE_DATA;

  return (
    <div
      ref={scrollerRef}
      className="ftira-site dir-a"
      data-lang-primary={tweaks.langPrimary}
      data-density={tweaks.density}
      data-accent={tweaks.accent}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'auto',
      }}
    >
      <Nav scrollerRef={scrollerRef} sections={D.nav} />

      {/* HERO */}
      <section data-section="story" className="hero">
        <div className="hero-meta">
          <span>Issue 01</span>
          <span>Malta × Japan · 2025</span>
          <span>大阪 / Osaka</span>
        </div>
        <div>
          <div className="hero-eyebrow">{D.hero.eyebrow.ja} · {D.hero.eyebrow.en}</div>
          <h1 className="hero-title-ja">{D.hero.title.ja}</h1>
          <div className="hero-title-en">{D.hero.title.en}</div>
          <div className="hero-intro">
            {D.hero.intro.ja}
            <span className="en">{D.hero.intro.en}</span>
          </div>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={() => scrollerRef.current.querySelector('[data-section="bread"]').scrollIntoView({behavior:'smooth', block:'start'})}>
              <span>{D.hero.ctaPrimary.ja} · {D.hero.ctaPrimary.en}</span>
              <span className="arrow" aria-hidden>→</span>
            </button>
            <button className="btn" onClick={() => scrollerRef.current.querySelector('[data-section="locations"]').scrollIntoView({behavior:'smooth', block:'start'})}>
              <span>{D.hero.ctaSecondary.ja} · {D.hero.ctaSecondary.en}</span>
              <span className="arrow" aria-hidden>→</span>
            </button>
          </div>
        </div>
        <ImgPlaceholder
          dark
          caption="hero · ftira on dark linen, close crop, natural light"
          style={{ height: 620 }}
        />
        <div className="hero-stats">
          {D.hero.stats.map((s, i) => (
            <div key={i} className="hero-stat">
              <div className="num">{s.num}</div>
              <div className="lbl">
                {s.ja}
                <span className="lbl-en">{s.en}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section data-section="story-2" className="story" style={{ display: 'grid' }}>
        <div className="story-side">
          <div className="eyebrow">{D.story.eyebrow.ja} · {D.story.eyebrow.en}</div>
          <div className="num">01</div>
          <div className="num-lbl">Chapter · 章</div>
        </div>
        <div>
          <h2 className="story-title-ja">{D.story.title.ja}</h2>
          <div className="story-title-en">{D.story.title.en}</div>
          <div className="story-grid">
            {D.story.body.map((p, i) => (
              <div className="story-para" key={i}>
                <div className="ja">{p.ja}</div>
                <span className="en">{p.en}</span>
              </div>
            ))}
            <div className="pullquote">
              <div className="mark" aria-hidden>"</div>
              <div>
                <div className="ja">{D.story.pullquote.ja}</div>
                <span className="en">{D.story.pullquote.en}</span>
                <div className="attr">— Ftira Japan, Brand Voice Principle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BREAD */}
      <section data-section="bread" className="bread">
        <div className="bread-head">
          <div>
            <div className="eyebrow">{D.bread.eyebrow.ja} · {D.bread.eyebrow.en}</div>
            <h2 className="ja">{D.bread.title.ja}</h2>
            <div className="en">{D.bread.title.en}</div>
          </div>
          <div className="intro-ja">
            {D.bread.intro.ja}
            <span className="intro-en">{D.bread.intro.en}</span>
          </div>
        </div>
        <div className="bread-list">
          {D.bread.items.map((it) => (
            <div className="bread-item" key={it.no}>
              <div className="no">{it.no}</div>
              <div>
                <div className="name-ja">{it.ja}</div>
                <span className="name-en">{it.en}</span>
              </div>
              <div>
                <div className="body-ja">{it.body.ja}</div>
                <span className="body-en">{it.body.en}</span>
              </div>
              <div>
                <div className="note">{it.note.ja}</div>
                <span className="note-en">{it.note.en}</span>
              </div>
              <ImgPlaceholder caption={`bread · ${it.en.toLowerCase()}, close crop`} style={{ height: 110 }} className="img" />
            </div>
          ))}
        </div>
      </section>

      {/* LOCATIONS */}
      <section data-section="locations" className="locations">
        <div className="head">
          <div>
            <div className="eyebrow">{D.locations.eyebrow.ja} · {D.locations.eyebrow.en}</div>
            <h2 className="ja">{D.locations.title.ja}</h2>
            <div className="en">{D.locations.title.en}</div>
          </div>
          <div style={{ fontFamily: 'var(--ff-jp-serif)', fontSize: 14, lineHeight: 2.0, color: 'rgba(250,248,244,0.7)' }}>
            常設店一店舗、期間限定の催事をご案内しています。日本全国への拡大は、ひとつの街、ひとつのパートナーから。
            <span style={{ display: 'block', marginTop: 12, fontFamily: 'var(--ff-display)', fontStyle: 'italic', fontSize: 13, color: 'rgba(250,248,244,0.5)' }}>
              One permanent home, occasional pop-ups. Expansion is patient — one city, one partner at a time.
            </span>
          </div>
        </div>
        <div className="grid">
          {D.locations.items.map((l) => (
            <div className="loc-card" key={l.no}>
              <ImgPlaceholder
                dark
                caption={`storefront · ${l.en.toLowerCase()}, exterior, evening light`}
                style={{ height: '100%' }}
              />
              <div className="body">
                <div className="top">
                  <div className="no">{l.no}</div>
                  <div className={`tag ${l.kind}`}>{l.kindLabel.en} · {l.kindLabel.ja}</div>
                </div>
                <div className="name-ja">{l.ja}</div>
                <span className="name-en">{l.en}</span>
                <dl>
                  <dt>住所 · Addr</dt>
                  <dd>{l.addr.ja}<span className="en">{l.addr.en}</span></dd>
                  <dt>営業 · Hours</dt>
                  <dd>{l.hours.ja}<span className="en">{l.hours.en}</span></dd>
                  <dt>連絡 · Tel</dt>
                  <dd>{l.tel}</dd>
                  <dt>IG</dt>
                  <dd>{l.ig}</dd>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section data-section="contact" className="contact">
        <div className="lead">
          <div className="eyebrow">{D.contact.eyebrow.ja} · {D.contact.eyebrow.en}</div>
          <h2 className="ja">{D.contact.title.ja}</h2>
          <div className="en">{D.contact.title.en}</div>
          <div className="body">
            {D.contact.body.ja}
            <span className="en">{D.contact.body.en}</span>
          </div>
          <div className="channels">
            <a className="channel" href={`mailto:${D.contact.email}`} onClick={(e)=>e.preventDefault()}>
              <span className="key">Email</span>
              <span className="val">{D.contact.email}</span>
            </a>
            <a className="channel" href={`https://instagram.com/${D.contact.instagram.slice(1)}`} onClick={(e)=>e.preventDefault()}>
              <span className="key">Instagram</span>
              <span className="val">{D.contact.instagram}</span>
            </a>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: 'var(--ff-jp-sans)', fontSize: 10, letterSpacing: '0.28em', color: 'var(--ft-gold)', textTransform: 'uppercase', marginBottom: 24 }}>
            Partner enquiry · ご相談フォーム
          </div>
          <EnquiryForm />
        </div>
      </section>

      <Footer scrollerRef={scrollerRef} />
    </div>
  );
}

window.DirectionA = DirectionA;
