    
    const plants = [
  {
    id: 1,
    name: 'Succulent Plant',
    price: '39.99',
    like: true,
    img: require('./assets/plant1.png'),
    about:
      'Succulent Plantis one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    
  },

  {
    id: 2,
    name: 'Dragon Plant',
    price: '29.99',
    like: false,
    img: require('./assets/plant2.png'),
    about:
      'Dragon Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    
  },
  {
    id: 3,
    name: 'Ravenea Plant',
    price: '25.99',
    like: false,
    img: require('./assets/plant3.png'),
    about:
      'Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    
  },

  {
    id: 4,
    name: 'Potted Plant',
    price: '25.99',
    like: true,
    img: require('./assets/plant4.png'),
    about:
      'Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
    
  },
  {
    id: 5,
    name: 'Ravenea Plant',
    price: '50.99',
    like: true,
    img: require('./assets/plant5.png'),
    about:
      'Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
      
  },
  {
    id: 6,
    name: 'Dragon Plant',
    price: '50.99',
    like: false,
    img: require('./assets/plant6.png'),
    about:
      'Potted Plant Ravenea Plant one of the most popular and beautiful species that will produce clumpms. The storage of water often gives succulent plants a more swollen or fleshy appearance than other plants, a characteristic known as succulence.',
  },
];

export const categories = [
      {
        name: 'POPULAR' ,
        content: [plants[3], plants[5], plants[0], plants[2], plants[1], plants[4]]
      },
      {
        name: 'ORGANIC',
        content: [plants[1], plants[2], plants[0]]
      },
    {
        name: 'INDOORS',
        content: [plants[0], plants[4], plants[5], plants[2]]
    },
    {
        name: 'SYNTETHIC',
        content: [plants[4]]
    }
      
    ]

export default plants;