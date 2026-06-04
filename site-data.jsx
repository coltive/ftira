// Shared content data for both Ftira Japan directions.
// Bilingual: JP first, EN secondary.

const SITE_DATA = {
  nav: [
    { id: 'story',     ja: '物語',     en: 'Story' },
    { id: 'bread',     ja: 'パン',     en: 'Bread' },
    { id: 'locations', ja: '所在地',   en: 'Locations' },
    { id: 'journal',   ja: '最新情報', en: 'Journal' },
    { id: 'contact',   ja: 'お問い合わせ', en: 'Contact' },
  ],

  hero: {
    eyebrow: { ja: '島から、島へ。', en: 'Island to island' },
    title:   { ja: 'マルタで最も古いパン、いま日本へ。', en: "Malta's oldest bread, now in Japan." },
    intro: {
      ja: 'フティーラは、地中海の小さな島マルタで6,000年以上焼き継がれてきたサワードウのパンです。2025年、大阪・関西万博を機に日本に渡り、いま静かに広がりはじめています。',
      en: 'Ftira is a sourdough bread baked on the island of Malta for over 6,000 years. It came to Japan with Expo 2025 Osaka, and quietly stayed.',
    },
    stats: [
      { num: '6,000+',  ja: '年の伝統',         en: 'Years of tradition' },
      { num: 'UNESCO',  ja: '無形文化遺産',     en: 'Intangible Heritage' },
      { num: '2025',    ja: '日本デビュー',     en: 'Japan debut' },
    ],
    ctaPrimary:   { ja: 'パンを見る',     en: 'See the bread' },
    ctaSecondary: { ja: '所在地を探す',   en: 'Find us' },
  },

  story: {
    eyebrow: { ja: '私たちについて', en: 'Who we are' },
    title:   { ja: '六千年、ひとつのパン。', en: 'Six thousand years. One bread.' },
    body: [
      {
        ja: 'フティーラは、地中海の小さな島マルタの食卓に、6,000年以上のあいだ並びつづけてきたサワードウのパンです。世界で最も古い、いまも生きているパンの伝統のひとつとして、2013年にユネスコ無形文化遺産に登録されました。',
        en: "Ftira is a sourdough that has sat on Maltese tables for over 6,000 years — one of the oldest living bread traditions in the world, inscribed by UNESCO as Intangible Cultural Heritage in 2013.",
      },
      {
        ja: '2025年、大阪・関西万博でフティーラは初めて日本のお客様に出会いました。万博が終わったあとも、私たちは日本に残ることを選びました。いまは大阪のオレンジフィールド・ブレッドファクトリーで毎日焼かれ、ひとつの街、ひとつのパートナーから、すこしずつ広がっています。',
        en: "At Expo 2025 Osaka we met Japan for the first time. When the Expo ended, we stayed. Today Ftira is baked daily at Orange Fields Bread Factory in Osaka and is expanding — one city, one partnership at a time.",
      },
    ],
    pullquote: {
      ja: '私たちはフティーラを説明しません。パンに語らせます。',
      en: "We don't explain Ftira. We let it speak.",
    },
  },

  bread: {
    eyebrow: { ja: 'パン', en: 'The bread' },
    title:   { ja: '素朴で、雄弁なパン。', en: 'Honest. Eloquent. Whole.' },
    intro: {
      ja: 'マルタの漁師や農夫が何世紀も食べてきたかたち。日本向けに変えてはいません。そのままお出しします。',
      en: 'The shapes Maltese fishermen and farmers have eaten for centuries — served as they are, not adapted for Japan.',
    },
    items: [
      {
        no: '01',
        ja: 'ツナ・フティーラ',
        en: 'Tuna Ftira',
        body: { ja: 'トマトペースト、ツナ、ケッパー、オリーブ、オリーブオイル。', en: 'Tomato paste, tuna, capers, olives, olive oil.' },
        note: { ja: 'マルタの漁師が幾世代も食べてきた一品。', en: 'A bread Maltese fishermen have eaten for centuries.' },
      },
      {
        no: '02',
        ja: 'ヘイブズ・ビズ・ジェイト',
        en: 'Ħobż biż-Żejt',
        body: { ja: 'マルタ風オープン・サンド。トマト、塩、オリーブオイル。', en: 'Open-faced. Tomato, sea salt, olive oil.' },
        note: { ja: 'マルタの食卓の原型。', en: 'The original Maltese plate.' },
      },
      {
        no: '03',
        ja: 'ガリヤ・チーズ',
        en: 'Ġbejna Cheese',
        body: { ja: 'マルタ産のヤギ乳チーズ、黒胡椒、サンドライドトマト。', en: 'Maltese sheep cheese, black pepper, sun-dried tomato.' },
        note: { ja: '島の塩風で熟成された素朴な味。', en: 'Aged in the island\'s sea air.' },
      },
      {
        no: '04',
        ja: 'プレーン・フティーラ',
        en: 'Plain Ftira',
        body: { ja: '素のサワードウ。粉、水、塩、時間。', en: 'Just the sourdough. Flour, water, salt, time.' },
        note: { ja: 'パンそのものを味わうために。', en: 'To taste the bread itself.' },
      },
    ],
  },

  locations: {
    eyebrow: { ja: '所在地', en: 'Where to find us' },
    title:   { ja: '大阪で会いましょう。', en: 'Meet us in Osaka.' },
    items: [
      {
        kind: 'permanent',
        kindLabel: { ja: '常設', en: 'Permanent' },
        no: '01',
        ja: 'オレンジフィールド・ブレッドファクトリー',
        en: 'Orange Fields Bread Factory',
        addr: { ja: '大阪市北区天神橋4-7-29', en: 'Tenjinbashi 4-7-29, Kita-ku, Osaka' },
        hours: { ja: '毎日 7:00 – 20:00', en: 'Daily 7:00 – 20:00' },
        tel: '+81 6-6355-4800',
        ig: '@orangefieldsbread',
      },
      {
        kind: 'limited',
        kindLabel: { ja: '期間限定', en: 'Limited' },
        no: '02',
        ja: 'あべのハルカス',
        en: 'Abeno Harukas',
        addr: { ja: '大阪市阿倍野区阿倍野筋1-1-43', en: 'Abeno-suji 1-1-43, Abeno-ku, Osaka' },
        hours: { ja: '2026年4月 · 1週間限定', en: 'April 2026 · One-week pop-up' },
        tel: 'abenoharukas-300.jp',
        ig: '@ftira.japan',
      },
    ],
  },

  journal: {
    eyebrow: { ja: '最新情報', en: 'Journal' },
    title:   { ja: 'パンのまわりで、起きていること。', en: "What's happening around the bread." },
    intro: {
      ja: '大阪・天神橋からの近況、万博のあと、マルタからの便り。フティーラの今を、すこしずつお伝えしています。',
      en: "Quiet dispatches from Tenjinbashi, from after the Expo, and from Malta. The story of Ftira's first chapter in Japan — told slowly.",
    },
    items: [
      {
        slug: 'tenjinbashi-permanent-home',
        category: { ja: '新店舗', en: 'New Location' },
        date: '2025 · 大阪',
        title: {
          ja: '万博で話題のフティーラ、大阪・天神橋で復活。',
          en: 'Ftira finds its permanent home in Osaka.',
        },
        excerpt: {
          ja: '万博で何千人もの来場者に愛されたフティーラ。「またどこで食べられるの？」その声が、すべての始まりでした。',
          en: 'The question we heard most from Expo visitors: where can we find this again? That question is what moved us.',
        },
      },
      {
        slug: 'abeno-harukas-event',
        category: { ja: 'イベント', en: 'Event' },
        date: '2026.04 · 大阪',
        title: {
          ja: '万博の熱気が再び。あべのハルカスへ。',
          en: "Ftira returns to one of Osaka's biggest stages.",
        },
        excerpt: {
          ja: '万博閉幕から半年。フティーラが、あべのハルカスで再びお披露目されました。',
          en: 'A year on from the Expo, Ftira returned — this time to Abeno Harukas.',
        },
      },
      {
        slug: 'malta-pavilion-debut',
        category: { ja: '大阪万博2025', en: 'Malta Pavilion' },
        date: '2025 · 大阪',
        title: {
          ja: 'フティーラが日本に初上陸した日。',
          en: 'The day Ftira first arrived in Japan.',
        },
        excerpt: {
          ja: '「マルタってどこ？」から始まった出会いが、ひとつの決断に変わった日。',
          en: 'The day visitors first tasted Ftira — and the decision to stay in Osaka.',
        },
      },
      {
        slug: 'what-is-ftira',
        category: { ja: 'ストーリー', en: 'Story' },
        date: '2025 · Malta × Japan',
        title: {
          ja: 'フティーラとは何か。6,000年のパン文化。',
          en: 'What is Ftira? A 6,000-year bread culture.',
        },
        excerpt: {
          ja: '流行でも、現代の発明でもありません。マルタ島で6,000年焼き続けられてきた、素朴で雄弁なパン。',
          en: 'Not a trend, not a modern invention. A bread that has simply always been there.',
        },
      },
      {
        slug: 'island-to-island',
        category: { ja: '文化', en: 'Culture' },
        date: '2025 · Malta × Japan',
        title: {
          ja: '島から島へ。マルタと日本、静かな共鳴。',
          en: 'Island to island — a quiet kinship.',
        },
        excerpt: {
          ja: '地図の上では遠く離れたふたつの島国。けれど、食文化には驚くほど多くの共通点があります。',
          en: 'Two island nations separated by thousands of kilometres — and the kinship that food reveals.',
        },
      },
    ],
  },

  contact: {
    eyebrow: { ja: '島から、島へ。', en: 'Island to island' },
    title:   { ja: 'フティーラを、あなたの街へ。', en: 'Bring Ftira to your city across Japan.' },
    body: {
      ja: 'パートナーシップ、報道、ご質問はこちらから。',
      en: 'For partnerships, press and enquiries please kindly reach out via our contact us form',
    },
    cta: {
      ja: 'パートナーになる',
      en: 'Become a partner',
    },
    email: 'hello@ftira.jp',
    instagram: '@ftira.japan',
  },

  footer: {
    line: 'Ftira フティーラ · Malta × Japan · 2025',
    quote: { ja: '島から、島へ。', en: 'Island to island.' },
  },
};

window.SITE_DATA = SITE_DATA;
