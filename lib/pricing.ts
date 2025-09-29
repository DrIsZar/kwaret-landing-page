export const plans = [
  // Premium Subscriptions
  {
    tag: '🔥 Popular',
    product: 'ChatGPT Plus (Workspace, GPT-5)',
    bullets: ['GPT-5 access', 'No shared data/chats', 'Warranty'],
    tiers: [
      { label: '1 Month', price: '24.9 TND' },
      { label: '3 Months', price: '59.9 TND', note: '~20% OFF' }
    ],
    color: 'k.yellow'
  },
  {
    tag: '🔥 Popular',
    product: 'Adobe Creative Cloud (All Apps)',
    bullets: ['Full Adobe suite', 'AI features', 'Fonts, Stock, Cloud storage'],
    tiers: [
      { label: '1 Month', price: '39.9 TND' },
      { label: '3 Months', price: '89.9 TND', note: '~25% OFF' },
      { label: '6 Months', price: '139.9 TND', note: '~30% OFF' },
      { label: '12 Months', price: '199.9 TND', note: '~40% OFF' }
    ]
  },
  {
    tag: '🔥 Popular',
    product: 'Netflix Premium',
    bullets: ['4K UHD + HDR', '4 devices at once', 'Downloads, spatial audio'],
    tiers: [{ label: '1 Month', price: '49.9 TND', note: '~15% OFF' }]
  },
  {
    tag: 'Music Streaming',
    product: 'Spotify Premium (Solo)',
    bullets: ['Instant activation', 'Warranty', 'All regions'],
    tiers: [
      { label: '1 Month', price: '8.9 TND' },
      { label: '3 Months', price: '24.9 TND', note: '~10% OFF' },
      { label: '6 Months', price: '44.9 TND', note: '~20% OFF' }
    ]
  },
  {
    tag: 'Music Streaming',
    product: 'Spotify Premium (Duo)',
    bullets: ['2 persons', 'Instant activation', 'Warranty'],
    tiers: [
      { label: '1 Month', price: '17.9 TND' },
      { label: '3 Months', price: '34.9 TND', note: '~40% OFF' },
      { label: '6 Months', price: '59.9 TND', note: '~45% OFF' },
      { label: '1 Year', price: '109.9 TND', note: '~50% OFF' }
    ]
  },
  {
    tag: 'Music Streaming',
    product: 'Spotify Premium (Family)',
    bullets: ['6 persons', 'Instant activation', 'Warranty'],
    tiers: [
      { label: '1 Month', price: '24.9 TND' },
      { label: '3 Months', price: '64.9 TND', note: '~15% OFF' },
      { label: '6 Months', price: '109.9 TND', note: '~30% OFF' },
      { label: '1 Year', price: '199.9 TND', note: '~35% OFF' }
    ]
  },
  {
    tag: 'Video Streaming',
    product: 'YouTube Premium',
    bullets: ['YT + Music', 'No ads', 'Offline'],
    tiers: [
      { label: '3 Months', price: '44.9 TND' },
      { label: '1 Year', price: '89.9 TND', note: '~50% OFF' }
    ]
  },
  {
    tag: '🔥 Popular',
    product: 'Kwaret TV',
    bullets: ['8,000+ Channels (live TV)', '26,000+ Movies', '8,600+ Series', 'HD Streaming Quality', 'Uninterrupted Streaming (no cuts, smooth playback)'],
    tiers: [
      { label: '1 Month', price: '29.9 TND' },
      { label: '3 Months', price: '34.9 TND', note: '~was 90 TND~' },
      { label: '6 Months', price: '44.9 TND', note: '~was 110 TND~' },
      { label: '1 Year', price: '69.9 TND', note: '~was 150 TND~' }
    ],
    color: 'k.yellow'
  },
  
  // Internet & Mobile
  {
    tag: 'Internet & Mobile',
    product: 'Ooredoo Internet / Solde',
    bullets: ['Various data plans', 'Solde rate: 0.86', 'Instant activation'],
    tiers: [
      { label: '1.5 GB', price: '4.2 TND' },
      { label: '6 GB', price: '12.5 TND' },
      { label: '10 GB', price: '20.9 TND' },
      { label: '25 GB', price: '24.9 TND' },
      { label: '30 GB', price: '29.9 TND' },
      { label: '42 GB', price: '38.9 TND' },
      { label: '55 GB', price: '45.9 TND' },
      { label: '75 GB', price: '55.9 TND' },
      { label: '100 GB', price: '59.9 TND' }
    ]
  },
  
  // Software & Licenses
  {
    tag: 'Software',
    product: 'Windows 11 Pro Key',
    bullets: ['Lifetime license', 'Retail version', 'Instant delivery'],
    tiers: [
      { label: 'Windows 11 Pro Key', price: '13.9 TND' }
    ]
  },
  {
    tag: 'Software',
    product: 'Canva Pro',
    bullets: ['1 Year subscription', 'All premium features', 'Instant activation'],
    tiers: [
      { label: '1 Year', price: '39.9 TND' }
    ]
  },
  
  // Gaming Credits
  {
    tag: 'Gaming',
    product: 'Robux (Roblox)',
    bullets: ['Instant delivery', 'Various amounts', 'Best prices'],
    tiers: [
      { label: '40 Robux', price: '2.9 TND' },
      { label: '80 Robux', price: '4.9 TND', note: 'save 1 TND' },
      { label: '400 Robux', price: '19.9 TND', note: 'save 9 TND' },
      { label: '800 Robux', price: '35.9 TND', note: 'save 11 TND' },
      { label: '1700 Robux', price: '64.9 TND', note: 'save 12 TND' },
      { label: '4500 Robux', price: '169.9 TND', note: 'save 50 TND' }
    ]
  },
  {
    tag: 'Gaming',
    product: 'PlayStation Cards (France)',
    bullets: ['Instant delivery', 'French PSN', 'Best rates'],
    tiers: [
      { label: '10€', price: '39.9 TND' },
      { label: '20€', price: '77.9 TND' },
      { label: '50€', price: '189.9 TND' },
      { label: '100€', price: '369.9 TND' }
    ]
  },
  {
    tag: 'Gaming',
    product: 'PlayStation Cards (US)',
    bullets: ['Instant delivery', 'US PSN', 'Best rates'],
    tiers: [
      { label: '10$', price: '37.9 TND' },
      { label: '20$', price: '74.9 TND' },
      { label: '50$', price: '174.9 TND' },
      { label: '100$', price: '339.9 TND' }
    ]
  }
]

export type Plan = typeof plans[0]
export type Tier = Plan['tiers'][0]
