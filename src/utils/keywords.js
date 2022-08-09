export const sports = [
  'english premier league',
  'sports',
  'football',
  'basketball',
  'wwe',
  'tennis',
  'sports news',
  'world cup',
  'esports',
  'bundesliga',
  'serie a',
  'FIFA',
  'olympics',
];

export const ukraine = [
  'ukraine war',
  'russia ukraine',
  'russia war',
  'putin zelensky',
  'kyiv',
  'zelensky',
  'russia ukraine war',
  'zelensky ukraine',
];

export const movies = [
  'latest movies',
  'box office',
  'tv show',
  'netflix',
  'movies',
  'reality show',
];

export const business = [
  'business news',
  'stock market',
  'inflation',
  'economics',
  'world trade',
  'commerce',
  'financial times',
  'bloomberg news',
  'global trade',
  'central bank',
  'the economy',
  'cryptocurrency',
  'stocks',
  'finance',
  'venture capital',
  'VC',
  'markets',
  'tech',
];

export const getKeyword = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
