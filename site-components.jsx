// Shared building blocks for both Ftira directions.

const { useState, useEffect, useRef, useMemo } = React;

// ──────────────────────────────────────────────────────────
// Bilingual block — JP large + EN small caption underneath.
// Honors data-lang-primary on artboard root: when "en", the
// font weights/sizes swap (handled in CSS).
// ──────────────────────────────────────────────────────────
function Bi({ ja, en, jaStyle, enStyle, as: Tag = 'span', className = '' }) {
  return (
    <Tag className={`bi ${className}`}>
      <span className="bi-ja" style={jaStyle}>{ja}</span>
      {en && <span className="bi-en" style={enStyle}>{en}</span>}
    </Tag>
  );
}

// ──────────────────────────────────────────────────────────
// Image placeholder — striped, mono caption, optional dark.
// ──────────────────────────────────────────────────────────
function ImgPlaceholder({ caption, dark = false, style = {}, children }) {
  return (
    <div className={`img-placeholder ${dark ? 'dark' : ''}`} style={style}>
      <span className="corner" />
      <span className="corner br" />
      {children}
      {caption && <span className="mono">{caption}</span>}
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// Logo mark + wordmark
// ──────────────────────────────────────────────────────────
function NavLogo() {
  return (
    <div className="nav-logo">
      <span className="logo-mark" aria-hidden>
        <span className="ring" />
        <span className="dot" />
      </span>
      <span>Ftira</span>
      <span className="jp">フティーラ</span>
    </div>
  );
}

// ──────────────────────────────────────────────────────────
// Sticky nav with active section + smooth scroll.
// ──────────────────────────────────────────────────────────
function Nav({ scrollerRef, sections, brandRight }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      setScrolled(el.scrollTop > 24);

      // Active section: find the last section whose top is above 30% viewport
      const probe = el.scrollTop + el.clientHeight * 0.3;
      let current = sections[0].id;
      for (const s of sections) {
        const node = el.querySelector(`[data-section="${s.id}"]`);
        if (!node) continue;
        if (node.offsetTop <= probe) current = s.id;
      }
      setActive(current);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, [scrollerRef, sections]);

  const goTo = (id) => {
    const el = scrollerRef.current;
    if (!el) return;
    const node = el.querySelector(`[data-section="${id}"]`);
    if (!node) return;
    el.scrollTo({ top: node.offsetTop - 8, behavior: 'smooth' });
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <NavLogo />
      <div className="nav-links">
        {sections.map((s) => (
          <button
            key={s.id}
            className={active === s.id ? 'active' : ''}
            onClick={() => goTo(s.id)}
          >
            {s.en}
          </button>
        ))}
      </div>
      {brandRight ? (
        brandRight
      ) : (
        <button className="nav-cta" onClick={() => goTo('contact')}>
          <span>Enquire</span>
          <span aria-hidden>→</span>
        </button>
      )}
    </nav>
  );
}

// ──────────────────────────────────────────────────────────
// Footer — shared across both directions
// ──────────────────────────────────────────────────────────
function Footer({ scrollerRef }) {
  const { footer } = window.SITE_DATA;
  const toTop = () => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="footer">
      <div className="footer-row">
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, color: 'var(--ft-cream)' }}>
            <span className="logo-mark" aria-hidden>
              <span className="ring" />
              <span className="dot" />
            </span>
            <span style={{ fontFamily: 'var(--ff-display)', fontSize: 28 }}>Ftira</span>
            <span style={{ fontFamily: 'var(--ff-jp-serif)', fontSize: 12, letterSpacing: '0.22em', color: 'rgba(250,248,244,0.6)' }}>
              フティーラ · Japan
            </span>
          </div>
          <div style={{ marginTop: 18, maxWidth: 380 }}>
            <Bi ja={footer.quote.ja} en={footer.quote.en}
              jaStyle={{ fontFamily: 'var(--ff-jp-serif)', fontSize: 22, fontWeight: 300 }}
              enStyle={{ fontSize: 12 }}
            />
          </div>
        </div>
        <div className="links">
          <a href="https://instagram.com/ftira.japan" onClick={(e)=>e.preventDefault()}>Instagram</a>
          <a href="mailto:hello@ftira.jp" onClick={(e)=>e.preventDefault()}>Email</a>
          <button onClick={toTop} style={{ color: 'inherit', font: 'inherit', letterSpacing: 'inherit', textTransform: 'inherit' }}>↑ Top</button>
        </div>
      </div>
      <div className="meta">
        <span>{footer.line}</span>
        <span>Brand guide · v1 · 2025</span>
      </div>
    </footer>
  );
}

// ──────────────────────────────────────────────────────────
// Partner enquiry form — works locally with validation.
// ──────────────────────────────────────────────────────────
function EnquiryForm() {
  const [data, setData] = useState({ name: '', org: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setData({ ...data, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!data.name.trim()) errs.name = 'お名前をご入力ください · Name required';
    if (!data.email.trim()) errs.email = 'メールアドレスをご入力ください · Email required';
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) errs.email = 'メール形式を確認してください · Check email format';
    if (!data.message.trim()) errs.message = 'メッセージをご入力ください · Message required';
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
    }
  };

  if (sent) {
    return (
      <div className="form-success">
        <div className="label">受領しました · Received</div>
        <div style={{ fontSize: 15, color: 'var(--ft-deep)' }}>
          ご連絡ありがとうございます、{data.name}さん。私たちが直接お返事いたします。
        </div>
        <div style={{ fontSize: 13, color: 'var(--ft-stone)', fontStyle: 'italic', fontFamily: 'var(--ff-display)', marginTop: 6 }}>
          Thank you, {data.name}. We'll write back ourselves — never auto-translated.
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div className={`field ${errors.name ? 'error' : ''}`}>
          <label>お名前 · Name</label>
          <input value={data.name} onChange={update('name')} placeholder="山田 太郎" />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>
        <div className="field">
          <label>所属 · Organization</label>
          <input value={data.org} onChange={update('org')} placeholder="株式会社・店舗名など" />
        </div>
      </div>
      <div className={`field ${errors.email ? 'error' : ''}`}>
        <label>メール · Email</label>
        <input type="email" value={data.email} onChange={update('email')} placeholder="you@example.com" />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>
      <div className={`field ${errors.message ? 'error' : ''}`}>
        <label>ご用件 · Enquiry</label>
        <textarea
          rows={4}
          value={data.message}
          onChange={update('message')}
          placeholder="出店、催事、報道などのご相談を承っています。"
        />
        {errors.message && <span className="field-error">{errors.message}</span>}
      </div>
      <div style={{ display: 'flex', gap: 16, marginTop: 28, alignItems: 'center', flexWrap: 'wrap' }}>
        <button type="submit" className="btn btn-primary">
          <span>送信する · Send</span>
          <span className="arrow" aria-hidden>→</span>
        </button>
        <span style={{ fontFamily: 'var(--ff-jp-sans)', fontSize: 10, letterSpacing: '0.18em', color: 'var(--ft-stone)', textTransform: 'uppercase' }}>
          Replies in 3–5 days · 3〜5日でお返事
        </span>
      </div>
    </form>
  );
}

Object.assign(window, { Bi, ImgPlaceholder, Nav, NavLogo, Footer, EnquiryForm });
