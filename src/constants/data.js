import images from './images';

const wines = [
  {
    id: 1,
    product_name: "Combo winter outfit",
    description: "Better to use in winter",
    price: 1350,
    currency: "$",
    thumb: images.i1,
  },
  {
    id: 2,
    product_name: "Combo professional",
    description: "Better to use on professional occasion",
    price: 850,
    currency: "$",
    thumb: images.i2,
  },
  {
    id: 3,
    product_name: "Jacket",
    description: "Better to use in for winter",
    price: 350,
    currency: "$",
    thumb: images.i3,
  },
  {
    id: 4,
    product_name: "Sneakers",
    description: "Better to use in for daily",
    price: 750,
    currency: "$",
    thumb: images.i4,
  },
  {
    id: 5,
    product_name: "sandles",
    description: "Better to use in for parties",
    price: 150,
    currency: "$",
    thumb: images.i5,
  },
  {
    id: 6,
    product_name: "Raya Z10",
    description: "Better to use in for absilute",
    price: 350,
    currency: "$",
    thumb: images.i6,
  },
  {
    id: 7,
    product_name: "Raya Alpha headphones",
    description: "Better to use in",
    price: 50,
    currency: "$",
    thumb: images.i7,
  },
  {
    id: 8,
    product_name: "Cosmetic Items",
    description: "Better to use high quality",
    price: 30,
    currency: "$",
    thumb: images.i8,
  },
  {
    id: 9,
    product_name: "Water bottles",
    description: "Better to use for summer",
    price: 20,
    currency: "$",
    thumb: images.i9,
  }
  
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
