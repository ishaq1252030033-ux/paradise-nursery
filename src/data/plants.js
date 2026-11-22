// Six distinct plants in each of three categories (18 plants total).
export const categories = [
  {
    title: 'Air-Purifying Favorites',
    slug: 'air',
    description: 'Fresh greenery to help you create a more restful home.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 28, image: '/images/monstera.svg', description: 'Statement-making split leaves.' },
      { id: 'snake', name: 'Snake Plant', price: 19, image: '/images/snake.svg', description: 'A tall, sculptural classic.' },
      { id: 'peace-lily', name: 'Peace Lily', price: 24, image: '/images/peace-lily.svg', description: 'Elegant foliage and white blooms.' },
      { id: 'spider', name: 'Spider Plant', price: 17, image: '/images/spider.svg', description: 'Easygoing arching greenery.' },
      { id: 'rubber', name: 'Rubber Plant', price: 30, image: '/images/rubber.svg', description: 'Glossy, dramatic leaves.' },
      { id: 'fern', name: 'Boston Fern', price: 21, image: '/images/fern.svg', description: 'Soft and feathery fronds.' },
    ],
  },
  {
    title: 'Aromatic & Flowering',
    slug: 'aromatic',
    description: 'Bring gentle scent and bright character into every room.',
    plants: [
      { id: 'lavender', name: 'Lavender', price: 16, image: '/images/lavender.svg', description: 'Calming purple blooms.' },
      { id: 'jasmine', name: 'Jasmine', price: 26, image: '/images/jasmine.svg', description: 'Delicate, fragrant flowers.' },
      { id: 'rosemary', name: 'Rosemary', price: 15, image: '/images/rosemary.svg', description: 'Aromatic kitchen favorite.' },
      { id: 'mint', name: 'Mint', price: 12, image: '/images/mint.svg', description: 'Fresh, vibrant leaves.' },
      { id: 'gardenia', name: 'Gardenia', price: 31, image: '/images/gardenia.svg', description: 'Creamy blooms and rich greens.' },
      { id: 'lemon-balm', name: 'Lemon Balm', price: 14, image: '/images/lemon-balm.svg', description: 'Citrusy, lively greenery.' },
    ],
  },
  {
    title: 'Low-Maintenance Greens',
    slug: 'easy',
    description: 'Beautiful companions that work with busy schedules.',
    plants: [
      { id: 'zz', name: 'ZZ Plant', price: 27, image: '/images/zz.svg', description: 'Resilient and glossy.' },
      { id: 'aloe', name: 'Aloe Vera', price: 18, image: '/images/aloe.svg', description: 'Distinctive spiky succulent.' },
      { id: 'jade', name: 'Jade Plant', price: 20, image: '/images/jade.svg', description: 'Charming, rounded leaves.' },
      { id: 'pothos', name: 'Golden Pothos', price: 17, image: '/images/pothos.svg', description: 'A graceful trailing vine.' },
      { id: 'echeveria', name: 'Echeveria', price: 13, image: '/images/echeveria.svg', description: 'Compact rosette succulent.' },
      { id: 'haworthia', name: 'Haworthia', price: 14, image: '/images/haworthia.svg', description: 'Small architectural succulent.' },
    ],
  },
];

export const plants = categories.flatMap((category) =>
  category.plants.map((plant) => ({ ...plant, category: category.title }))
);
