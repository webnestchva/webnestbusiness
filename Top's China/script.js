const itemOptions = {
  friedShrimp: {
    name: "Fried Shrimp",
    options: [
      { label: "Regular (21 pcs)", price: 7.99 }
    ]
  },
  porkEggRoll: {
    name: "Pork Egg Roll",
    options: [
      { label: "Single", price: 1.90 }
    ]
  },
  shrimpEggRoll: {
    name: "Shrimp Roll",
    options: [
      { label: "Single", price: 1.99 }
    ]
  },
  vegetableSpringRoll: {
    name: "Vegetable Spring Roll",
    options: [
      { label: "Regular (2 pcs)", price: 3.50 }
    ]
  },
  friedWonton: {
    name: "Fried Wonton",
    options: [
      { label: "Regular (10 pcs)", price: 6.25 }
    ]
  },
  bonelessSpareRibs: {
    name: "Boneless Spare Ribs",
    options: [
      { label: "Small", price: 6.75 },
      { label: "Large", price: 14.95 }
    ]
  },
  bbqSpareRibs: {
    name: "BBQ Spare Ribs (with bone)",
    options: [
      { label: "Small", price: 8.50 },
      { label: "Large", price: 14.99 }
    ]
  },
  teriyakiBeef: {
    name: "Teriyaki Beef",
    options: [
      { label: "Regular (4 pcs)", price: 8.25 }
    ]
  },
  teriyakiChicken: {
    name: "Teriyaki Chicken",
    options: [
      { label: "Regular (5 pcs)", price: 7.99 }
    ]
  },
  puPuPlatter: {
    name: "Pu Pu Platter",
    options: [
      { label: "For 2", price: 14.99 }
    ]
  },
  crabRangoon: {
    name: "Crab Rangoon",
    options: [
      { label: "Regular (8 pcs)", price: 5.75 }
    ]
  },
  friedDonuts: {
    name: "Fried Donuts",
    options: [
      { label: "Regular (10 pcs)", price: 5.75 }
    ]
  },
  frenchFries: {
    name: "French Fries",
    options: [
      { label: "Small", price: 3.25 },
      { label: "Large", price: 4.25 }
    ]
  },
  steamedDumplings: {
    name: "Steamed Dumplings",
    options: [
      { label: "Regular (8 pcs)", price: 7.99 }
    ]
  },
  friedDumplings: {
    name: "Fried Dumplings",
    options: [
      { label: "Regular (8 pcs)", price: 7.99 }
    ]
  },

  // Soup (with Crispy Noodles)
  hotAndSourSoup: {
    name: "Hot and Sour Soup",
    options: [
      { label: "Pt", price: 3.99 },
      { label: "Qt", price: 5.50 }
    ]
  },
  wontonSoup: {
    name: "Wonton Soup",
    options: [
      { label: "Pt", price: 3.25 },
      { label: "Qt", price: 5.50 }
    ]
  },
  eggDropSoup: {
    name: "Egg Drop Soup",
    options: [
      { label: "Pt", price: 2.95 },
      { label: "Qt", price: 5.50 }
    ]
  },
  eggDropWithWontonSoup: {
    name: "Egg Drop with Wonton Soup",
    options: [
      { label: "Single", price: 5.50 }
    ]
  },
  chickenNoodleSoup: {
    name: "Chicken Noodle Soup",
    options: [
      { label: "Single", price: 5.50 }
    ]
  },
  chickenRiceSoup: {
    name: "Chicken Rice Soup",
    options: [
      { label: "Single", price: 5.50 }
    ]
  },
  houseSpecialSoup: {
    name: "House Special Soup",
    options: [
      { label: "Single", price: 7.50 }
    ]
  },
  roastPorkYatGawMein: {
    name: "Roast Pork Yat Gaw Mein",
    options: [
      { label: "Single", price: 6.99 }
    ]
  },
  mixedVegetableSoup: {
    name: "Mixed Vegetable Soup",
    options: [
      { label: "Single", price: 5.75 }
    ]
  },
 // Fried Rice
 vegetablesFriedRice: {
  name: "Vegetable Fried Rice",
  options: [
    { label: "Pt", price: 6.00 },
    { label: "Qt", price: 7.95 }
  ]
},
roastPorkFriedRice: {
  name: "Roast Pork Fried Rice",
  options: [
    { label: "Pt", price: 6.75 },
    { label: "Qt", price: 8.95 }
  ]
},
chickenFriedRice: {
  name: "Chicken Fried Rice",
  options: [
    { label: "Pt", price: 6.75 },
    { label: "Qt", price: 8.95 }
  ]
},
beefFriedRice: {
  name: "Beef Fried Rice",
  options: [
    { label: "Pt", price: 6.99 },
    { label: "Qt", price: 9.95 }
  ]
},
shrimpFriedRice: {
  name: "Shrimp Fried Rice",
  options: [
    { label: "Pt", price: 6.99 },
    { label: "Qt", price: 9.95 }
  ]
},
houseSpecialFriedRice: {
  name: "House Special Fried Rice",
  options: [
    { label: "Pt", price: 7.25 },
    { label: "Qt", price: 10.50 }
  ]
},
crabMeatFriedRice: {
  name: "Crab Meat Fried Rice",
  options: [
    { label: "Pt", price: 7.95 },
    { label: "Qt", price: 10.50 }
  ]
},

// Lo Mein (Soft Noodles)
vegetablesLoMein: {
  name: "Vegetable Lo Mein",
  options: [
    { label: "Pt", price: 6.00 },
    { label: "Qt", price: 7.99 }
  ]
},
roastPorkLoMein: {
  name: "Roast Pork Lo Mein",
  options: [
    { label: "Pt", price: 6.75 },
    { label: "Qt", price: 8.99 }
  ]
},
chickenLoMein: {
  name: "Chicken Lo Mein",
  options: [
    { label: "Pt", price: 6.75 },
    { label: "Qt", price: 8.99 }
  ]
},
beefLoMein: {
  name: "Beef Lo Mein",
  options: [
    { label: "Pt", price: 6.99 },
    { label: "Qt", price: 9.95 }
  ]
},
shrimpLoMein: {
  name: "Shrimp Lo Mein",
  options: [
    { label: "Pt", price: 6.99 },
    { label: "Qt", price: 9.95 }
  ]
},
houseSpecialLoMein: {
  name: "House Special Lo Mein",
  options: [
    { label: "Pt", price: 7.25 },
    { label: "Qt", price: 10.25 }
  ]
},
crabMeatLoMein: {
  name: "Crab Meat Lo Mein",
  options: [
    { label: "Pt", price: 7.25 },
    { label: "Qt", price: 10.25 }
  ]
},

// Chow Mei Fun
roastPorkChowMeiFun: {
  name: "Roast Pork Chow Mei Fun",
  options: [{ label: "Order", price: 10.25 }]
},
chickenChowMeiFun: {
  name: "Chicken Chow Mei Fun",
  options: [{ label: "Order", price: 10.25 }]
},
beefChowMeiFun: {
  name: "Beef Chow Mei Fun",
  options: [{ label: "Order", price: 11.50 }]
},
shrimpChowMeiFun: {
  name: "Shrimp Chow Mei Fun",
  options: [{ label: "Order", price: 11.50 }]
},
houseSpecialChowMeiFun: {
  name: "House Special Chow Mei Fun",
  options: [{ label: "Order", price: 11.50 }]
},
singaporeChowMeiFun: {
  name: "Singapore Chow Mei Fun",
  options: [{ label: "Order", price: 11.50 }]
},

 // Chicken Section
 mooGooGaiPan: {
  name: "Moo Goo Gai Pan",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
chickenWithCashewNuts: {
  name: "Chicken with Cashew Nuts",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
chickenWithBroccoli: {
  name: "Chicken with Broccoli",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
chickenWithOysterSauce: {
  name: "Chicken with Oyster Sauce",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
chickenWithSnowPeas: {
  name: "Chicken with Snow Peas",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
chickenWithBlackBeanSauce: {
  name: "Chicken with Black Bean Sauce",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
kungPaoChicken: {
  name: "Kung Pao Chicken",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
curryChickenWithOnion: {
  name: "Curry Chicken with Onion",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
chickenWithGarlicSauce: {
  name: "Chicken with Garlic Sauce",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},

// Pork Section (with White Rice)
roastPorkWithMixedVegetables: {
  name: "Roast Pork with Mixed Vegetables",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
roastPorkWithMushroom: {
  name: "Roast Pork with Mushroom",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
roastPorkWithSnowPeas: {
  name: "Roast Pork with Snow Peas",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
roastPorkWithPepperAndTomato: {
  name: "Roast Pork with Pepper & Tomato",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
roastPorkWithBeanCurd: {
  name: "Roast Pork with Bean Curd",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
roastPorkWithCashewNuts: {
  name: "Roast Pork with Cashew Nuts",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
roastPorkWithBroccoli: {
  name: "Roast Pork with Broccoli",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
porkWithScallions: {
  name: "Pork with Scallions",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
  
// Beef (with White Rice)
pepperSteakWithOnions: {
  name: "Pepper Steak with Onions",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
beefWithMixedVegetables: {
  name: "Beef with Mixed Vegetables",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
beefWithSnowPeas: {
  name: "Beef with Snow Peas",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
beefWithBroccoli: {
  name: "Beef with Broccoli",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
curryBeefWithOnion: {
  name: "Curry Beef with Onion",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
mongolianBeef: {
  name: "Mongolian Beef",
  options: [
    { label: "Single", price: 14.95 }
  ]
},

// Seafood (with White Rice)
shrimpWithLobsterSauce: {
  name: "Shrimp with Lobster Sauce",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
shrimpWithMushroom: {
  name: "Shrimp with Mushroom",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
shrimpWithMixedVegetables: {
  name: "Shrimp with Mixed Vegetables",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
shrimpWithCashewNuts: {
  name: "Shrimp with Cashew Nuts",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
shrimpWithBroccoli: {
  name: "Shrimp with Broccoli",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
shrimpWithSnowPeas: {
  name: "Shrimp with Snow Peas",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
shrimpWithBlackBeanSauce: {
  name: "Shrimp with Black Bean Sauce",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
shrimpWithChiliSauce: {
  name: "Shrimp with Chili Sauce",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
kungPaoShrimp: {
  name: "Kung Pao Shrimp",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
shrimpWithGarlicSauce: {
  name: "Shrimp with Garlic Sauce",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},
curryShrimpWithOnion: {
  name: "Curry Shrimp with Onion",
  options: [
    { label: "Pt", price: 8.25 },
    { label: "Qt", price: 12.99 }
  ]
},

// Vegetables (with White Rice)
sauteedBroccoliWithGarlicSauce: {
  name: "Sauteed Broccoli with Garlic Sauce",
  options: [
    { label: "Single", price: 10.99 }
  ]
},
mixedVegetables: {
  name: "Mixed Vegetables",
  options: [
    { label: "Single", price: 10.99 }
  ]
},
beanCurdSzechuanStyle: {
  name: "Bean Curd Szechuan Style",
  options: [
    { label: "Single", price: 10.99 }
  ]
},
beanCurdHomeStyle: {
  name: "Bean Curd Home Style",
  options: [
    { label: "Single", price: 10.99 }
  ]
},
  
  
  
  // Sweet and Sour (with White Rice)
  sweetAndSourChicken: {
    name: "Sweet and Sour Chicken",
    options: [
      { label: "Order", price: 12.99 }
    ]
  },
  sweetAndSourPork: {
    name: "Sweet and Sour Pork",
    options: [
      { label: "Order", price: 12.99 }
    ]
  },
  sweetAndSourShrimp: {
    name: "Sweet and Sour Shrimp",
    options: [
      { label: "Order", price: 13.99 }
    ]
  },
  sweetAndSourTriple: {
    name: "Sweet and Sour Triple",
    options: [
      { label: "Order", price: 13.99 }
    ]
  },

  // Egg Foo Young
  chickenEggFooYoung: {
    name: "Chicken Egg Foo Young",
    options: [
      { label: "Order", price: 9.95 }
    ]
  },
  roastPorkEggFooYoung: {
    name: "Roast Pork Egg Foo Young",
    options: [
      { label: "Order", price: 9.95 }
    ]
  },
  beefEggFooYoung: {
    name: "Beef Egg Foo Young",
    options: [
      { label: "Order", price: 10.99 }
    ]
  },
  shrimpEggFooYoung: {
    name: "Shrimp Egg Foo Young",
    options: [
      { label: "Order", price: 10.99 }
    ]
  },
  crabMeatEggFooYoung: {
    name: "Crab Meat Egg Foo Young",
    options: [
      { label: "Order", price: 11.99 }
    ]
  },
  houseSpecialEggFooYoung: {
    name: "House Special Egg Foo Young",
    options: [
      { label: "Order", price: 11.99 }
    ]
  },

  // Chop Suey (with White Rice)
  vegetableChopSuey: {
    name: "Vegetable Chop Suey",
    options: [
      { label: "Pt", price: 6.50 },
      { label: "Qt", price: 7.50 }
    ]
  },
  roastPorkChopSuey: {
    name: "Roast Pork Chop Suey",
    options: [
      { label: "Pt", price: 6.99 },
      { label: "Qt", price: 9.75 }
    ]
  },
  chickenChopSuey: {
    name: "Chicken Chop Suey",
    options: [
      { label: "Pt", price: 6.99 },
      { label: "Qt", price: 9.75 }
    ]
  },
  beefChopSuey: {
    name: "Beef Chop Suey",
    options: [
      { label: "Pt", price: 7.99 },
      { label: "Qt", price: 10.50 }
    ]
  },
  shrimpChopSuey: {
    name: "Shrimp Chop Suey",
    options: [
      { label: "Pt", price: 7.99 },
      { label: "Qt", price: 10.50 }
    ]
  },
  houseSpecialChopSuey: {
    name: "House Special Chop Suey",
    options: [
      { label: "Pt", price: 8.25 },
      { label: "Qt", price: 10.50 }
    ]
  },

  // Chow Mein (with Rice and Crispy Noodles)
  vegetableChowMein: {
    name: "Vegetable Chow Mein",
    options: [
      { label: "Pt", price: 6.00 },
      { label: "Qt", price: 8.50 }
    ]
  },
  chickenChowMein: {
    name: "Chicken Chow Mein",
    options: [
      { label: "Pt", price: 6.50 },
      { label: "Qt", price: 10.50 }
    ]
  },
  roastPorkChowMein: {
    name: "Roast Pork Chow Mein",
    options: [
      { label: "Pt", price: 6.50 },
      { label: "Qt", price: 10.50 }
    ]
  },
  beefChowMein: {
    name: "Beef Chow Mein",
    options: [
      { label: "Pt", price: 7.25 },
      { label: "Qt", price: 10.99 }
    ]
  },
  shrimpChowMein: {
    name: "Shrimp Chow Mein",
    options: [
      { label: "Pt", price: 7.25 },
      { label: "Qt", price: 10.99 }
    ]
  },
  houseSpecialChowMein: {
    name: "House Special Chow Mein",
    options: [
      { label: "Pt", price: 7.99 },
      { label: "Qt", price: 10.99 }
    ]
  },

  // Moo Shu (with 4 Pancakes)
  mooShuChicken: {
    name: "Moo Shu Chicken",
    options: [
      { label: "Order", price: 12.99 }
    ]
  },
  mooShuPork: {
    name: "Moo Shu Pork",
    options: [
      { label: "Order", price: 12.99 }
    ]
  },
  mooShuShrimp: {
    name: "Moo Shu Shrimp",
    options: [
      { label: "Order", price: 13.99 }
    ]
  },
  mooShuBeef: {
    name: "Moo Shu Beef",
    options: [
      { label: "Order", price: 13.99 }
    ]
  },
  mooShuVegetables: {
    name: "Moo Shu Vegetables",
    options: [
      { label: "Order", price: 11.99 }
    ]
  }
,

 // Side Order
 steamedRice: {
  name: "Steamed Rice",
  options: [
    { label: "Pt", price: 2.50 },
    { label: "Qt", price: 4.50 }
  ]
},
fortuneCookies: {
  name: "Fortune Cookies (5)",
  options: [
    { label: "Single", price: 0.75 }
  ]
},
friedNoodles: {
  name: "Fried Noodles",
  options: [
    { label: "Single", price: 0.50 }
  ]
},
sweetTea: {
  name: "Home Made Sweet Tea (Lg)",
  options: [
    { label: "Large", price: 2.50 }
  ]
},
lemonade: {
  name: "Lemonade (Lg)",
  options: [
    { label: "Large", price: 2.50 }
  ]
},

// Chef’s Specialties (with White Rice)
subgumWonton: {
  name: "Subgum Wonton",
  options: [
    { label: "Single", price: 14.95 }
  ]
},
butterflyShrimp: {
  name: "Butterfly Shrimp",
  options: [
    { label: "Single", price: 13.95 }
  ]
},
steakKew: {
  name: "Steak Kew",
  options: [
    { label: "Single", price: 14.95 }
  ]
},
happyFamily: {
  name: "Happy Family",
  options: [
    { label: "Single", price: 15.95 }
  ]
},
hawaiianFiveO: {
  name: "Hawaiian Five 'O'",
  options: [
    { label: "Single", price: 13.95 }
  ]
},
fourSeasons: {
  name: "Four Seasons",
  options: [
    { label: "Single", price: 14.95 }
  ]
},
dragonPhoenix: {
  name: "Dragon & Phoenix",
  options: [
    { label: "Single", price: 13.95 }
  ]
},
harvestChickenAndShrimp: {
  name: "Harvest Chicken & Shrimp",
  options: [
    { label: "Single", price: 14.95 }
  ]
},
sesameChicken: {
  name: "Sesame Chicken",
  options: [
    { label: "Single", price: 12.50 }
  ]
},
sesameBeef: {
  name: "Sesame Beef",
  options: [
    { label: "Single", price: 14.95 }
  ]
},
seafoodDelight: {
  name: "Seafood Delight",
  options: [
    { label: "Single", price: 15.95 }
  ]
},
crispyShrimp: {
  name: "Crispy Shrimp",
  options: [
    { label: "Single", price: 13.95 }
  ]
},
tripleDelight: {
  name: "Triple Delight",
  options: [
    { label: "Single", price: 14.95 }
  ]
},
shreddedBeefWithGarlicSauce: {
  name: "Shredded Beef with Garlic Sauce",
  options: [
    { label: "Single", price: 14.95 }
  ]
},
beefAndShrimpHunanStyle: {
  name: "Beef & Shrimp Hunan Style",
  options: [
    { label: "Single", price: 15.95 }
  ]
},
chickenWithOrangeFlavor: {
  name: "Chicken with Orange Flavor",
  options: [
    { label: "Single", price: 12.50 }
  ]
},
hunanChicken: {
  name: "Hunan Chicken",
  options: [
    { label: "Single", price: 12.50 }
  ]
},
hunanBeef: {
  name: "Hunan Beef",
  options: [
    { label: "Single", price: 14.95 }
  ]
},
generalTsosChicken: {
  name: "General Tso’s Chicken",
  options: [
    { label: "Single", price: 12.50 }
  ]
},
scallopsAndShrimpWithGarlicSauce: {
  name: "Scallops & Shrimp with Garlic Sauce",
  options: [
    { label: "Single", price: 15.95 }
  ]
},
beefWithSzechuanStyle: {
  name: "Beef with Szechuan Style",
  options: [
    { label: "Single", price: 14.95 }
  ]
},
chickenWithSzechuanStyle: {
  name: "Chicken with Szechuan Style",
  options: [
    { label: "Single", price: 12.50 }
  ]
},
shrimpWithSzechuanStyle: {
  name: "Shrimp with Szechuan Style",
  options: [
    { label: "Single", price: 14.95 }
  ]
},
orangeBeef: {
  name: "Orange Beef",
  options: [
    { label: "Single", price: 14.95 }
  ]
},
generalShrimp: {
  name: "General Shrimp",
  options: [
    { label: "Single", price: 13.95 }
  ]
},
bourbonChicken: {
  name: "Bourbon Chicken",
  options: [
    { label: "Single", price: 12.50 }
  ]
},
  // House Specialties
  friedChickenWings: {
    name: "Fried Chicken Wings (4)",
    options: [
      { label: "Plain", price: 7.99 },
      { label: "w. Fried Rice or French Fries", price: 9.25 },
      { label: "w. Pork Fried Rice", price: 9.99 },
      { label: "w. Chicken Fried Rice", price: 9.99 },
      { label: "w. Shrimp Fried Rice", price: 10.25 },
      { label: "w. Beef Fried Rice", price: 10.25 }
    ]
  },
  honeyWings: {
    name: "Honey Wings (4)",
    options: [
      { label: "Plain", price: 8.25 },
      { label: "w. Fried Rice or French Fries", price: 10.25 },
      { label: "w. Pork Fried Rice", price: 10.49 },
      { label: "w. Chicken Fried Rice", price: 10.49 },
      { label: "w. Shrimp Fried Rice", price: 10.99 },
      { label: "w. Beef Fried Rice", price: 10.99 }
    ]
  },
  friedChickenWingsGarlic: {
    name: "Fried Chicken Wings with Garlic Sauce",
    options: [
      { label: "Plain", price: 8.25 },
      { label: "w. Fried Rice or French Fries", price: 10.25 },
      { label: "w. Pork Fried Rice", price: 10.49 },
      { label: "w. Chicken Fried Rice", price: 10.49 },
      { label: "w. Shrimp Fried Rice", price: 10.99 },
      { label: "w. Beef Fried Rice", price: 10.99 }
    ]
  },
  friedCrabSticks: {
    name: "Fried Crab Sticks (5)",
    options: [
      { label: "Plain", price: 7.50 },
      { label: "w. Fried Rice or French Fries", price: 8.49 },
      { label: "w. Pork Fried Rice", price: 9.99 },
      { label: "w. Chicken Fried Rice", price: 9.99 },
      { label: "w. Shrimp Fried Rice", price: 10.25 },
      { label: "w. Beef Fried Rice", price: 10.25 }
    ]
  },
  friedScallops: {
    name: "Fried Scallops (10)",
    options: [
      { label: "Plain", price: 7.50 },
      { label: "w. Fried Rice or French Fries", price: 8.49 },
      { label: "w. Pork Fried Rice", price: 9.99 },
      { label: "w. Chicken Fried Rice", price: 9.99 },
      { label: "w. Shrimp Fried Rice", price: 10.25 },
      { label: "w. Beef Fried Rice", price: 10.25 }
    ]
  },


// Combination Plates (Served with Pork Fried Rice & Egg Roll)
chickenChowMeinCombo: {
  name: "Chicken Chow Mein (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
shrimpChowMeinCombo: {
  name: "Shrimp Chow Mein (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
roastPorkEggFooYoungCombo: {
  name: "Roast Pork Egg Foo Young (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
shrimpWithLobsterSauceCombo: {
  name: "Shrimp with Lobster Sauce (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
roastPorkWithChineseVegetablesCombo: {
  name: "Roast Pork with Chinese Vegetables (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
roastPorkLoMeinCombo: {
  name: "Roast Pork Lo Mein (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
  // Sweet & Sour Pork Combo
  sweetAndSourPorkCombo: {
    name: "Sweet & Sour Pork (Combo)",
    options: [
      { label: "Combo", price: 10.25 }
    ]
  },

  // Sweet & Sour Chicken Combo
  sweetAndSourChickenCombo: {
    name: "Sweet & Sour Chicken  (Combo)",
    options: [
      { label: "Combo", price: 10.25 }
    ]
  },
bbqSpareRibsCombo: {
  name: "B-B-Q Spare Ribs (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
pepperSteakCombo: {
  name: "Pepper Steak (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
beefWithChineseVegetablesCombo: {
  name: "Beef with Chinese Vegetables (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
beefWithBroccoliCombo: {
  name: "Beef with Broccoli (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
mooGooGaiPanCombo: {
  name: "Moo Goo Gai Pan (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
chickenWithBroccoliCombo: {
  name: "Chicken with Broccoli (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
chickenWithCashewNutsCombo: {
  name: "Chicken with Cashew Nuts (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
shrimpWithChineseVegetablesCombo: {
  name: "Shrimp with Chinese Vegetables (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
shrimpWithBroccoliCombo: {
  name: "Shrimp with Broccoli (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
// Szechuan Chicken Combo
szechuanChickenCombo: {
  name: "Szechuan Chicken (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},

// Szechuan Beef Combo
szechuanBeefCombo: {
  name: "Szechuan Beef (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},

// Szechuan Shrimp Combo
szechuanShrimpCombo: {
  name: "Szechuan Shrimp (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},

// Chicken with Garlic Sauce Combo
chickenWithGarlicSauceCombo: {
  name: "Chicken with Garlic Sauce (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},

// Beef with Garlic Sauce Combo
beefWithGarlicSauceCombo: {
  name: "Beef with Garlic Sauce (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},

// Shrimp with Garlic Sauce Combo
shrimpWithGarlicSauceCombo: {
  name: "Shrimp with Garlic Sauce (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
generalTsosChickenCombo: {
  name: "General Tso’s Chicken (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
sesameChickenCombo: {
  name: "Sesame Chicken (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
bbqBonelessRibsCombo: {
  name: "Bar-B-Q Boneless Ribs (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
orangeChickenCombo: {
  name: "Orange Chicken (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
hunanChickenCombo: {
  name: "Hunan Chicken (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
teriyakiChickenCombo: {
  name: "Teriyaki Chicken (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
// Curry Chicken with Onions Combo
curryChickenWithOnionsCombo: {
  name: "Curry Chicken with Onions (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},

// Curry Beef with Onions Combo
curryBeefWithOnionsCombo: {
  name: "Curry Beef with Onions (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},

// Curry Shrimp with Onions Combo
curryShrimpWithOnionsCombo: {
  name: "Curry Shrimp with Onions (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},

// Roast Pork with Onion Combo
roastPorkWithOnionCombo: {
  name: "Roast Pork with Onion (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},

// Beef with Onion Combo
beefWithOnionCombo: {
  name: "Beef with Onion (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},

// Shrimp with Onion Combo
shrimpWithOnionCombo: {
  name: "Shrimp with Onion (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},

// Kung Pao Chicken Combo
kungPaoChickenCombo: {
  name: "Kung Pao Chicken (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},

// Kung Pao Shrimp Combo
kungPaoShrimpCombo: {
  name: "Kung Pao Shrimp (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},
bourbonChickenCombo: {
  name: "Bourbon Chicken (Combo)",
  options: [
    { label: "Combo", price: 10.25 }
  ]
},




friedShrimpAds: {
  name: "Fried Shrimp (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
generalTsosChickenAds: {
  name: "General Tso's Chicken (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
sesameChickenAds: {
  name: "Sesame Chicken (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
bonelessSpareRibsAds: {
  name: "Boneless Spare Ribs (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},

// Beef with Mixed Vegetables (All Day Special)
beefMixedVegAds: {
  name: "Beef with Mixed Vegetables (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},

// Chicken with Mixed Vegetables (All Day Special)
chickenMixedVegAds: {
  name: "Chicken with Mixed Vegetables (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
teriyakiChickenOnStickAds: {
  name: "Teriyaki Chicken on Stick (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
houseSpecialLoMeinAds: {
  name: "House Special Lo Mein (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
  // Beef with Broccoli (All Day Special)
  beefWithBroccoliAds: {
    name: "Beef with Broccoli (All Day Special)",
    options: [
      { label: "Regular", price: 8.25 }
    ]
  },

  // Chicken with Broccoli (All Day Special)
  chickenWithBroccoliAds: {
    name: "Chicken with Broccoli (All Day Special)",
    options: [
      { label: "Regular", price: 8.25 }
    ]
  },
friedScallopsAds: {
  name: "Fried Scallops (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
curryChickenAds: {
  name: "Curry Chicken (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
shrimpWithMixedVegetablesAds: {
  name: "Shrimp with Mixed Vegetables (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
friedCrabSticksAds: {
  name: "Fried Crab Sticks (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
pepperSteakWithOnionsAds: {
  name: "Pepper Steak with Onions (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
bourbonChickenAds: {
  name: "Bourbon Chicken (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
sweetSourChickenAds: {
  name: "Sweet & Sour Chicken (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
orangeChickenAds: {
  name: "Orange Chicken (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
shrimpWithBroccoliAds: {
  name: "Shrimp with Broccoli (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
hunanChickenAds: {
  name: "Hunan Chicken (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},

// Hunan Shrimp (All Day Special)
hunanShrimpAds: {
  name: "Hunan Shrimp (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},

// Szechuan Chicken (All Day Special)
szechuanChickenAds: {
  name: "Szechuan Chicken (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},

// Szechuan Shrimp (All Day Special)
szechuanShrimpAds: {
  name: "Szechuan Shrimp (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
}
,
chickenWithCashewNutsAds: {
  name: "Chicken with Cashew Nuts (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},

chickenEggFooYoungAds: {
  name: "Chicken Egg Foo Young (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
shrimpEggFooYoungAds: {
  name: "Shrimp Egg Foo Young (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
chickenChowMeinAds: {
  name: "Chicken Chow Mein (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
shrimpChowMeinAds: {
  name: "Shrimp Chow Mein (All Day Special)",
  options: [
    { label: "Regular", price: 8.25 }
  ]
}
};


let selectedItem = null; // Track the current item
let itemQuantity = 1; // Track the item quantity
let currentPrice = 0; // Track the current price of the selected option

// Function to increase quantity
function increaseQuantity() {
  itemQuantity += 1;
  updateQuantityDisplay();
  updateTotalPrice(currentPrice); // Update total with the current price and quantity
}

// Function to decrease quantity
function decreaseQuantity() {
  if (itemQuantity > 1) {
    itemQuantity -= 1;
    updateQuantityDisplay();
    updateTotalPrice(currentPrice); // Update total with the current price and quantity
  }
}

// Function to open the modal with item details
function openModal(itemId) {
  selectedItem = itemOptions[itemId];
  document.getElementById('item-name').textContent = selectedItem.name;

  // Reset quantity for new item selection
  itemQuantity = 1;
  updateQuantityDisplay();

  // Generate options for this item
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = ""; // Clear previous options

  selectedItem.options.forEach((option, index) => {
    const optionLabel = document.createElement("label");
    optionLabel.className = "option-label";

    const optionInput = document.createElement("input");
    optionInput.type = "radio";
    optionInput.name = "option";
    optionInput.value = option.price;
    optionInput.checked = index === 0; // Check the first option by default

    // Bind the price update to the radio change event
    optionInput.addEventListener("change", function() {
      currentPrice = parseFloat(option.price); // Update current price to selected option
      updateTotalPrice(currentPrice);
    });

    optionLabel.appendChild(optionInput);
    optionLabel.appendChild(document.createTextNode(` ${option.label} - $${option.price.toFixed(2)}`));
    optionsContainer.appendChild(optionLabel);
  });

  // Set initial total price to the price of the first option
  currentPrice = selectedItem.options[0].price;
  updateTotalPrice(currentPrice);

  // Display the modal
  document.getElementById('itemModal').style.display = 'block';
}

// Function to update total price based on selected option and quantity
function updateTotalPrice(price) {
  document.getElementById('total-price').textContent = `$${(price * itemQuantity).toFixed(2)}`;
}

// Function to update quantity display
function updateQuantityDisplay() {
  document.getElementById('item-quantity').textContent = itemQuantity;
}

// Function to close the modal
function closeModal() {
  document.getElementById('itemModal').style.display = 'none';
}

// Function to add the item to the cart with the selected option and quantity
function addToCart() {
  if (!selectedItem) return;

  const itemName = selectedItem.name;
  const quantity = itemQuantity;
  const selectedOption = document.querySelector('input[name="option"]:checked').nextSibling.textContent.trim();
  
  const totalPrice = currentPrice * quantity;

  // Check if an identical item with the same name and option already exists in the cart
  const existingItem = cart.find(item => item.name === itemName && item.option === selectedOption);

  if (existingItem) {
    existingItem.quantity += quantity; // Increment quantity
  } else {
    cart.push({ name: itemName, price: currentPrice, quantity, option: selectedOption });
  }

  if (!cartVisible) {
    document.getElementById("cart").style.display = "flex";
    cartVisible = true; 
  }

  updateCartDisplay();
  closeModal();
}


// Cart data
let cart = [];
const TAX_RATE = 0.1; // Example tax rate
let cartVisible = false; // Track cart visibility

function updateCartDisplay() {
  // Calculate total item count for the cart display
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);
  document.getElementById("cart-count").textContent = `Cart: ${itemCount} items`;

  // Generate item list
  const cartItemsList = document.getElementById("cart-items");
  cartItemsList.innerHTML = ''; // Clear previous list

  let subtotal = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    // Create list item with quantity on the left side, option without the price, "Add" and "Delete" buttons
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      ${item.quantity}x ${item.name} ${item.option ? `(${item.option.split(" ")[0]})` : ''}: $${itemTotal.toFixed(2)}
      <button onclick="addToCartFromCart(${index})" class="add-btn">+</button>
      <button onclick="removeFromCart(${index})" class="delete-btn">x</button>
    `;
    cartItemsList.appendChild(listItem);
  });

  // Calculate tax and total
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  // Update the summary
  document.getElementById("subtotal").textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  document.getElementById("tax").textContent = `Tax: $${tax.toFixed(2)}`;
  document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
}


function addToCartFromCart(index) {
  // Increment the quantity of the specified item
  cart[index].quantity += 1;

  // Update the cart display
  updateCartDisplay();
}


function removeFromCart(index) {
  // If quantity is more than 1, decrement it; otherwise, remove the item
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1); // Remove the item completely if quantity is 1
  }

  updateCartDisplay(); // Update cart display after deletion
}

// Toggle cart details visibility
function toggleCartDetails() {
  const cartDetails = document.getElementById("cart-details");
  cartDetails.style.display = cartDetails.style.display === "flex" ? "none" : "flex";
}

// Ensure the cart is hidden on page load
window.onload = function() {
  document.getElementById("cart-details").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".menu-category");
  const navLinks = document.querySelectorAll(".menu-categories ul li a");
  const menuCategoriesContainer = document.querySelector(".menu-categories");

  function setActiveLink() {
    let index = sections.length;

    // Loop through each section to find the one in the viewport
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    // Remove the "active" class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add the "active" class to the current section's link
    navLinks[index].classList.add("active");

    // Scroll the active link to the start of the visible area
    adjustScrollToActiveLink(index);
  }

  function adjustScrollToActiveLink(activeIndex) {
    const activeLink = navLinks[activeIndex];
    const linkWidth = activeLink.getBoundingClientRect().width;
    const containerWidth = menuCategoriesContainer.getBoundingClientRect().width;
    const scrollAmount = activeLink.offsetLeft - menuCategoriesContainer.scrollLeft;

    // Adjust the scroll position if the active link is not at the start
    if (scrollAmount > containerWidth - linkWidth || scrollAmount < 0) {
      menuCategoriesContainer.scrollLeft = activeLink.offsetLeft;
    }

    // Stop further scrolling if near the end
    const totalContentWidth = navLinks[navLinks.length - 1].offsetLeft + linkWidth;
    if (menuCategoriesContainer.scrollLeft + containerWidth >= totalContentWidth) {
      menuCategoriesContainer.scrollLeft = totalContentWidth - containerWidth;
    }
  }

  // Run setActiveLink on page load and scroll
  setActiveLink();
  window.addEventListener("scroll", setActiveLink);
});



function openSearchOverlay() {
  document.getElementById("search-overlay").style.display = "flex";
  document.getElementById("search-input").focus(); // Focus on input when opening
}

function closeSearchOverlay() {
  document.getElementById("search-overlay").style.display = "none";
  document.getElementById("search-input").value = ""; // Clear search input
  document.getElementById("search-results").innerHTML = ""; // Clear search results
}

function filterItems() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const searchResults = document.getElementById("search-results");
  searchResults.innerHTML = ""; // Clear previous results

  if (!query) {
    searchResults.style.display = "none"; // Hide results if there's no query
    return;
  }

  // Show dropdown if there's a query
  searchResults.style.display = "block";

  // Loop through each item and find matches by name
  Object.keys(itemOptions).forEach((itemId) => {
    const item = itemOptions[itemId];
    if (item.name.toLowerCase().includes(query)) {
      // Create a search result list item with the item name
      const listItem = document.createElement("li");
      listItem.textContent = item.name;

      // Set onclick to navigate to the item and open the modal
      listItem.onclick = () => {
        navigateToItem(itemId); // Scroll to the item section
        openModal(itemId);      // Open the add-to-cart modal
        closeSearchOverlay();    // Close the search overlay
      };

      searchResults.appendChild(listItem); // Add to search results
    }
  });
}

function navigateToItem(itemId) {
  // Scroll to the item on the page
  const targetItem = document.getElementById(itemId);
  if (targetItem) {
    targetItem.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}


// Sample function to populate options based on optionsData format
function populateOptions(options) {
  const optionsContainer = document.getElementById('options-container');
  optionsContainer.innerHTML = ''; // Clear previous options if any

  options.forEach(option => {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'option';
    input.id = option.label;
    input.value = option.price;

    const label = document.createElement('label');
    label.htmlFor = option.label;
    label.textContent = `${option.label} - $${option.price.toFixed(2)}`;

    optionDiv.appendChild(input);
    optionDiv.appendChild(label);
    optionsContainer.appendChild(optionDiv);
  });
}
