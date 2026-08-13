/* Content for the website kit.
   VERBATIM from the salon: pricing list, address, phone, hours, mission, years in business.
   Stylist names are the owner's own roster. Specialties are NOT yet supplied — do not invent them.
   Photography: only the salon interior has been supplied. Every other frame is a deliberate placeholder. */
window.THS = {
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'team', label: 'Stylists' },
    { id: 'work', label: 'Work' },
    { id: 'visit', label: 'Visit' },
  ],
  studio: {
    address: '16923 Sierra Lakes Pkwy, Unit 107\nFontana, CA 92336',
    phone: '(909) 365-4443',
    instagram: '@_thehairstudio_',
    booking: 'https://go.booker.com/location/TheHairStudio1/',
    years: '11+ years',
    mission: 'To make everyone feel beautiful and happier than when they walked in the door.',
  },
  hours: [
    { day: 'Monday', time: '9:00 – 4:00' },
    { day: 'Tue – Fri', time: '9:00 – 5:30' },
    { day: 'Saturday', time: '8:00 – 4:00' },
    { day: 'Sunday', time: '9:00 – 4:00' },
  ],
  menu: [
    { group: 'Haircuts & Styling', items: [
      { name: "Women's Haircut", price: '$75' },
      { name: "Girls' Haircut", price: '$50' },
      { name: "Men's Haircut", price: '$40' },
      { name: 'Blowout', price: '$65' },
      { name: 'Style / Updo', price: '$85' },
    ]},
    { group: 'Color Services', items: [
      { name: 'Root Touch-Up', price: '$110' },
      { name: 'Full Highlights', price: '$285' },
      { name: 'Full Hair Color', price: '$160' },
      { name: 'Balayage', price: '$295' },
    ]},
    { group: 'Treatments & Specials', items: [
      { name: 'Deep Conditioning', price: '$30' },
      { name: 'Brazilian Blowout', price: '$385' },
      { name: 'Cut & Color Special', price: '$225' },
    ]},
  ],
  priceDisclaimer: 'Starting prices are for bra length or shorter. Length and thickness are extra. Hair length and density will be considered.',
  stylists: [
    { name: 'Angie',     role: 'Owner' },
    { name: 'Ashlynn',   role: 'Stylist' },
    { name: 'Ashley',    role: 'Stylist' },
    { name: 'Cindi',     role: 'Stylist' },
    { name: 'Melissa',   role: 'Stylist' },
    { name: 'Jade',      role: 'Stylist' },
    { name: 'Liliana',   role: 'Stylist' },
    { name: 'Stephanie', role: 'Stylist' },
    { name: 'Malia',     role: 'Stylist' },
    { name: 'Crystal',   role: 'Stylist' },
    { name: 'Lorne',     role: 'Stylist' },
    { name: 'Jasmine',   role: 'Stylist' },
    { name: 'Anne',      role: 'Stylist' },
  ].map((s) => ({ ...s, handle: '@_thehairstudio_' })),

  work: [
    { service: 'Balayage' },
    { service: 'Full highlights' },
    { service: 'Curtain bangs' },
    { service: 'Brazilian blowout' },
    { service: 'Color correction' },
    { service: 'Root touch-up' },
    { service: 'Precision cut' },
    { service: 'Style / updo' },
  ],

  /* Verbatim client reviews. Replace with the salon's own picks. */
  testimonials: [
    { quote: 'Had a great experience here. Melissa was so sweet and made getting a new style feel super comfy and easy.', author: 'Catherine S.', meta: 'Yelp', rating: 5 },
  ],
  photos: {
    interior: '../../assets/photos/interior.jpg',
  },
};
