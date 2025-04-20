export const servicesContent = {
  'engine-diagnostics': {
    title: 'Engine Diagnostics',
    description:
      'We specialize in complete engine diagnostics and repairs for vehicles of all makes and models.',
    bannerImage: '/images/banner/engine.jpeg',
    serviceImage: '/images/background/engine.webp',
    checklistLeft: [
      'Check engine lights diagnostics',
      'Fuel injection cleaning',
      'Spark plugs replacement',
    ],
    checklistRight: [
      'Compression tests',
      'Full engine tune-up',
      'Performance optimization',
    ],
    faq: [
      {
        question: 'What are the signs of engine problems?',
        answer:
          'Signs include rough idling, loss of power, decreased fuel efficiency, or warning lights.',
      },
      {
        question: 'Can you diagnose check engine light issues?',
        answer:
          'Yes, we have specialized diagnostic equipment to accurately identify any problem.',
      },
    ],
  },
  'lube-oil-and-filters': {
    title: 'Lube Oil and Filters',
    description:
      'Keep your engine running smooth with our expert oil change and filter replacement services.',
    bannerImage: '/images/banner/engine.jpeg',
    serviceImage: '/images/background/oil.webp',
    checklistLeft: [
      'Full synthetic oil change',
      'High-mileage oil services',
      'Oil filter replacement',
    ],
    checklistRight: [
      'Engine lubrication check',
      'Air filter inspection',
      'Fluid top-off service',
    ],
    faq: [
      {
        question: 'How often should I change my oil?',
        answer:
          'It depends on your vehicle, but typically every 5,000 to 7,500 miles for most modern engines.',
      },
      {
        question: 'What type of oil should I use?',
        answer:
          'Your vehicle owner’s manual will specify, but we recommend high-quality synthetic oils for better performance.',
      },
    ],
  },
  'belts-and-hoses': {
    title: 'Belts and Hoses',
    description:
      'Protect your engine with timely replacement and inspection of belts and hoses.',
    bannerImage: '/images/banner/engine.jpeg',
    serviceImage: '/images/background/belt.jpeg',
    checklistLeft: [
      'Serpentine belt replacement',
      'Timing belt inspection',
      'Coolant hoses check',
    ],
    checklistRight: [
      'Accessory belt tension check',
      'Radiator hose replacement',
      'Belt cracking and wear diagnostics',
    ],
    faq: [
      {
        question: 'When should belts and hoses be replaced?',
        answer:
          'Most belts and hoses should be inspected at every oil change and replaced around 60,000–100,000 miles.',
      },
      {
        question: 'What happens if a belt breaks?',
        answer:
          'A broken belt can cause your engine to overheat or fail to operate critical systems like power steering or alternator.',
      },
    ],
  },
  'air-conditioning': {
    title: 'Air Conditioning Services',
    description:
      'Stay cool with our complete automotive A/C services including diagnostics, repair, and recharging.',
    bannerImage: '/images/banner/engine.jpeg',
    serviceImage: '/images/background/air.jpeg',
    checklistLeft: [
      'A/C system inspection',
      'Refrigerant recharge',
      'Leak detection testing',
    ],
    checklistRight: [
      'Compressor replacement',
      'Evaporator coil service',
      'Cabin air filter change',
    ],
    faq: [
      {
        question: 'Why is my A/C blowing warm air?',
        answer:
          'Low refrigerant, compressor issues, or leaks can cause insufficient cooling performance.',
      },
      {
        question: 'How often should the A/C system be serviced?',
        answer:
          'We recommend an A/C check at least once a year, ideally before the summer season.',
      },
    ],
  },
  'brake-repair': {
    title: 'Brake Repair',
    description:
      'We offer comprehensive brake inspection, replacement, and repair services to ensure your safety.',
    bannerImage: '/images/banner/engine.jpeg',
    serviceImage: '/images/background/brake.webp',
    checklistLeft: [
      'Brake pad replacement',
      'Rotor resurfacing',
      'Brake fluid flush',
    ],
    checklistRight: [
      'Brake line inspection',
      'ABS system diagnostics',
      'Emergency brake repairs',
    ],
    faq: [
      {
        question: 'How often should brakes be replaced?',
        answer:
          'Typically every 30,000 to 70,000 miles, depending on driving habits and conditions.',
      },
      {
        question: 'What causes brake squealing?',
        answer:
          'Brake squeal can be caused by worn pads, glazed rotors, or lack of lubrication on pad backing plates.',
      },
    ],
  },
  'tire-and-wheel-services': {
    title: 'Tire and Wheel Services',
    description:
      'Maximize performance and safety with our full tire rotation, balance, repair, and replacement services.',
    bannerImage: '/images/banner/engine.jpeg',
    serviceImage: '/images/background/tire.jpeg',
    checklistLeft: ['Tire rotation', 'Wheel balancing', 'Flat tire repair'],
    checklistRight: [
      'New tire installation',
      'TPMS sensor programming',
      'Tire pressure inspection',
    ],
    faq: [
      {
        question: 'How often should tires be rotated?',
        answer:
          'Tires should be rotated every 5,000 to 7,000 miles to promote even wear.',
      },
      {
        question: 'When should tires be replaced?',
        answer:
          'When tread depth is less than 2/32 inch or if sidewall damage, cracking, or bulges are visible.',
      },
    ],
  },
}

export const servicesMenu = [
  { name: 'Engine Diagnostics', slug: '/services/engine-diagnostics' },
  { name: 'Lube Oil and Filters', slug: '/services/lube-oil-and-filters' },
  { name: 'Belts and Hoses', slug: '/services/belts-and-hoses' },
  { name: 'Air Conditioning', slug: '/services/air-conditioning' },
  { name: 'Brake Repair', slug: '/services/brake-repair' },
  {
    name: 'Tire and Wheel Services',
    slug: '/services/tire-and-wheel-services',
  },
]

export const helpContent = {
  img: '/images/background/contact.webp',
  text: 'If you need any help, please feel free to contact us.',
  buttonText: 'Contact Us',
  buttonLink: '/contact',
}
