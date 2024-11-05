// Data for each item with specific options and prices
const itemOptions = {
  friedShrimp: {
    name: "Fried Shrimp",
    options: [
      { label: "Regular (21 pcs)", price: 7.25 }
    ]
  },
  porkEggRoll: {
    name: "Pork Egg Roll",
    options: [
      { label: "Single", price: 1.80 }
    ]
  },
  shrimpRoll: {
    name: "Shrimp Roll",
    options: [
      { label: "Single", price: 1.90 }
    ]
  },
  vegetableSpringRoll: {
    name: "Vegetable Spring Roll",
    options: [
      { label: "Regular (2 pcs)", price: 2.99 }
    ]
  },
  friedWonton: {
    name: "Fried Wonton",
    options: [
      { label: "Regular (10 pcs)", price: 5.50 }
    ]
  },
  bonelessSpareRibs: {
    name: "Boneless Spare Ribs",
    options: [
      { label: "Small", price: 6.50 },
      { label: "Large", price: 12.95 }
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
      { label: "Regular (4 pcs)", price: 7.50 }
    ]
  },
  teriyakiChicken: {
    name: "Teriyaki Chicken",
    options: [
      { label: "Regular (5 pcs)", price: 7.25 }
    ]
  },
  puPuPlatter: {
    name: "Pu Pu Platter",
    options: [
      { label: "For 2", price: 14.55 }
    ]
  },
  crabRangoon: {
    name: "Crab Rangoon",
    options: [
      { label: "Regular (8 pcs)", price: 5.25 }
    ]
  },
  friedDonuts: {
    name: "Fried Donuts",
    options: [
      { label: "Regular (10 pcs)", price: 4.85 }
    ]
  },
  frenchFries: {
    name: "French Fries",
    options: [
      { label: "Small", price: 2.75 },
      { label: "Large", price: 3.75 }
    ]
  },
  steamedDumplings: {
    name: "Steamed Dumplings",
    options: [
      { label: "Regular (8 pcs)", price: 7.50 }
    ]
  },
  friedDumplings: {
    name: "Fried Dumplings",
    options: [
      { label: "Regular (8 pcs)", price: 7.50 }
    ]
    
  },
  // Fried Rice
  vegetablesFriedRice: {
    name: "Vegetables Fried Rice",
    options: [
      { label: "Pt", price: 5.00 },
      { label: "Qt", price: 7.00 }
    ]
  },
  roastPorkOrChickenFriedRice: {
    name: "Roast Pork or Chicken Fried Rice",
    options: [
      { label: "Pt", price: 6.00 },
      { label: "Qt", price: 8.50 }
    ]
  },
  beefFriedRice: {
    name: "Beef Fried Rice",
    options: [
      { label: "Pt", price: 6.75 },
      { label: "Qt", price: 9.75 }
    ]
  },
  shrimpFriedRice: {
    name: "Shrimp Fried Rice",
    options: [
      { label: "Pt", price: 6.75 },
      { label: "Qt", price: 9.75 }
    ]
  },
  houseSpecialFriedRice: {
    name: "House Special Fried Rice",
    options: [
      { label: "Pt", price: 6.99 },
      { label: "Qt", price: 9.75 }
    ]
  },
  crabMeatFriedRice: {
    name: "Crab Meat Fried Rice",
    options: [
      { label: "Pt", price: 6.99 },
      { label: "Qt", price: 9.75 }
    ]
  },

  // Lo Mein (Soft Noodles)
  vegetablesLoMein: {
    name: "Vegetables Lo Mein",
    options: [
      { label: "Pt", price: 6.00 },
      { label: "Qt", price: 7.95 }
    ]
  },
  roastPorkOrChickenLoMein: {
    name: "Roast Pork or Chicken Lo Mein",
    options: [
      { label: "Pt", price: 6.50 },
      { label: "Qt", price: 8.95 }
    ]
  },
  beefOrShrimpLoMein: {
    name: "Beef or Shrimp Lo Mein",
    options: [
      { label: "Pt", price: 6.99 },
      { label: "Qt", price: 9.75 }
    ]
  },
  houseSpecialLoMein: {
    name: "House Special Lo Mein",
    options: [
      { label: "Pt", price: 7.25 },
      { label: "Qt", price: 9.95 }
    ]
  },

  // Soup (with Crispy Noodles)
  hotAndSourSoup: {
    name: "Hot and Sour Soup",
    options: [
      { label: "Pt", price: 3.99 },
      { label: "Qt", price: 5.25 }
    ]
  },
  wontonSoup: {
    name: "Wonton Soup",
    options: [
      { label: "Pt", price: 2.95 },
      { label: "Qt", price: 4.95 }
    ]
  },
  eggDropSoup: {
    name: "Egg Drop Soup",
    options: [
      { label: "Pt", price: 2.95 },
      { label: "Qt", price: 4.95 }
    ]
  },
  eggDropWithWontonSoup: {
    name: "Egg Drop with Wonton Soup",
    options: [
      { label: "Single", price: 4.95 }
    ]
  },
  chickenNoodleOrRiceSoup: {
    name: "Chicken Noodle or Rice Soup",
    options: [
      { label: "Single", price: 4.95 }
    ]
  },
  houseSpecialSoup: {
    name: "House Special Soup",
    options: [
      { label: "Single", price: 6.75 }
    ]
  },
  roastPorkYatGawMein: {
    name: "Roast Pork Yat Gaw Mein",
    options: [
      { label: "Single", price: 4.95 }
    ]
  },
  mixedVegetableSoup: {
    name: "Mixed Vegetable Soup",
    options: [
      { label: "Single", price: 4.95 }
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
  chickenOrRoastPorkChowMein: {
    name: "Chicken or Roast Pork Chow Mein",
    options: [
      { label: "Pt", price: 6.50 },
      { label: "Qt", price: 10.50 }
    ]
  },
  beefOrShrimpChowMein: {
    name: "Beef or Shrimp Chow Mein",
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

  // Chop Suey (with White Rice)
  vegetableChopSuey: {
    name: "Vegetable Chop Suey",
    options: [
      { label: "Pt", price: 6.50 },
      { label: "Qt", price: 7.50 }
    ]
  },
  roastPorkOrChickenChopSuey: {
    name: "Roast Pork or Chicken Chop Suey",
    options: [
      { label: "Pt", price: 6.99 },
      { label: "Qt", price: 9.75 }
    ]
  },
  beefOrShrimpChopSuey: {
    name: "Beef or Shrimp Chop Suey",
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

  // Chow Mei Fun
  roastPorkOrChickenChowMeiFun: {
    name: "Roast Pork or Chicken Chow Mei Fun",
    options: [
      { label: "Order", price: 9.75 }
    ]
  },
  beefOrShrimpChowMeiFun: {
    name: "Beef or Shrimp Chow Mei Fun",
    options: [
      { label: "Order", price: 10.25 }
    ]
  },
  houseSpecialChowMeiFun: {
    name: "House Special Chow Mei Fun",
    options: [
      { label: "Order", price: 10.25 }
    ]
  },
  singaporeChowMeiFun: {
    name: "Singapore Chow Mei Fun",
    options: [
      { label: "Order", price: 10.25 }
    ]
  },

  // Egg Foo Young (with White Rice)
  chickenEggFooYoung: {
    name: "Chicken Egg Foo Young",
    options: [
      { label: "Order", price: 8.50 }
    ]
  },
  roastPorkEggFooYoung: {
    name: "Roast Pork Egg Foo Young",
    options: [
      { label: "Order", price: 8.50 }
    ]
  },
  beefEggFooYoung: {
    name: "Beef Egg Foo Young",
    options: [
      { label: "Order", price: 9.25 }
    ]
  },
  shrimpEggFooYoung: {
    name: "Shrimp Egg Foo Young",
    options: [
      { label: "Order", price: 9.25 }
    ]
  },
  lobsterEggFooYoung: {
    name: "Lobster Egg Foo Young",
    options: [
      { label: "Order", price: 9.75 }
    ]
  },
  houseSpecialEggFooYoung: {
    name: "House Special Egg Foo Young",
    options: [
      { label: "Order", price: 9.75 }
    ]
  },
  // Pork (with White Rice)
  roastPorkWithMixedVegetables: {
    name: "Roast Pork with Mixed Vegetables",
    options: [
      { label: "Pt", price: 7.25 },
      { label: "Qt", price: 12.50 }
    ]
  },
  roastPorkWithMushroom: {
    name: "Roast Pork with Mushroom",
    options: [
      { label: "Pt", price: 7.25 },
      { label: "Qt", price: 12.50 }
    ]
  },
  roastPorkWithSnowPeas: {
    name: "Roast Pork with Snow Peas",
    options: [
      { label: "Pt", price: 7.25 },
      { label: "Qt", price: 12.50 }
    ]
  },
  roastPorkWithPepperAndTomato: {
    name: "Roast Pork with Pepper & Tomato",
    options: [
      { label: "Pt", price: 7.25 },
      { label: "Qt", price: 12.50 }
    ]
  },
  roastPorkWithBeanCurd: {
    name: "Roast Pork with Bean Curd",
    options: [
      { label: "Pt", price: 7.25 },
      { label: "Qt", price: 12.50 }
    ]
  },
  roastPorkWithCashewNuts: {
    name: "Roast Pork with Cashew Nuts",
    options: [
      { label: "Pt", price: 7.25 },
      { label: "Qt", price: 12.50 }
    ]
  },
  roastPorkWithBroccoli: {
    name: "Roast Pork with Broccoli",
    options: [
      { label: "Pt", price: 7.25 },
      { label: "Qt", price: 12.50 }
    ]
  },
  porkWithScallions: {
    name: "Pork with Scallions",
    options: [
      { label: "Pt", price: 7.25 },
      { label: "Qt", price: 12.50 }
    ]
  },

  // Beef (with White Rice)
  pepperSteakWithOnions: {
    name: "Pepper Steak with Onions",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  beefWithMixedVegetables: {
    name: "Beef with Mixed Vegetables",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  beefWithSnowPeas: {
    name: "Beef with Snow Peas",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  beefWithBroccoli: {
    name: "Beef with Broccoli",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  curryBeefWithOnion: {
    name: "Curry Beef with Onion",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  mongolianBeef: {
    name: "Mongolian Beef",
    options: [
      { label: "Single", price: 14.95 }
    ]
  },

  // Vegetables (with White Rice)
  sauteedBroccoliWithGarlicSauce: {
    name: "Sauteed Broccoli with Garlic Sauce",
    options: [
      { label: "Single", price: 8.99 }
    ]
  },
  mixedVegetables: {
    name: "Mixed Vegetables",
    options: [
      { label: "Single", price: 8.99 }
    ]
  },
  beanCurdSzechuanStyle: {
    name: "Bean Curd Szechuan Style",
    options: [
      { label: "Single", price: 9.45 }
    ]
  },
  beanCurdHomeStyle: {
    name: "Bean Curd Home Style",
    options: [
      { label: "Single", price: 9.45 }
    ]
  },

  // Seafood (with White Rice)
  shrimpWithLobsterSauce: {
    name: "Shrimp with Lobster Sauce",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  shrimpWithMushroom: {
    name: "Shrimp with Mushroom",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  shrimpWithMixedVegetables: {
    name: "Shrimp with Mixed Vegetables",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  shrimpWithCashewNuts: {
    name: "Shrimp with Cashew Nuts",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  shrimpWithBroccoli: {
    name: "Shrimp with Broccoli",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  shrimpWithSnowPeas: {
    name: "Shrimp with Snow Peas",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  shrimpWithBlackBeanSauce: {
    name: "Shrimp with Black Bean Sauce",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  shrimpWithChiliSauce: {
    name: "Shrimp with Chili Sauce",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  kungPaoShrimp: {
    name: "Kung Pao Shrimp",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  shrimpWithGarlicSauce: {
    name: "Shrimp with Garlic Sauce",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },
  curryShrimpWithOnion: {
    name: "Curry Shrimp with Onion",
    options: [
      { label: "Pt", price: 7.49 },
      { label: "Qt", price: 12.99 }
    ]
  },

  // Sweet and Sour (with White Rice)
  sweetAndSourPorkOrChicken: {
    name: "Sweet and Sour Pork or Chicken",
    options: [
      { label: "Order", price: 11.25 }
    ]
  },
  sweetAndSourShrimp: {
    name: "Sweet and Sour Shrimp",
    options: [
      { label: "Order", price: 12.50 }
    ]
  },
  sweetAndSourTriple: {
    name: "Sweet and Sour Triple",
    options: [
      { label: "Order", price: 13.50 }
    ]
  },
// Moo Shu (with 4 Pancakes)
mooShuChicken: {
  name: "Moo Shu Chicken",
  options: [
    { label: "Order", price: 11.99 }
  ]
},
mooShuPork: {
  name: "Moo Shu Pork",
  options: [
    { label: "Order", price: 11.99 }
  ]
},
mooShuShrimpOrBeef: {
  name: "Moo Shu Shrimp or Beef",
  options: [
    { label: "Order", price: 12.99 }
  ]
},
mooShuVegetables: {
  name: "Moo Shu Vegetables",
  options: [
    { label: "Order", price: 10.99 }
  ]
},

// Side Order
steamedRice: {
  name: "Steamed Rice",
  options: [
    { label: "Pt", price: 2.00 },
    { label: "Qt", price: 4.00 }
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
    { label: "Large", price: 1.75 }
  ]
},
lemonade: {
  name: "Lemonade (Lg)",
  options: [
    { label: "Large", price: 1.75 }
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

// Combination Plates (Served with Pork Fried Rice & Egg Roll)
chickenChowMeinCombo: {
  name: "Chicken Chow Mein",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
shrimpChowMeinCombo: {
  name: "Shrimp Chow Mein",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
roastPorkEggFooYoungCombo: {
  name: "Roast Pork Egg Foo Young",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
shrimpWithLobsterSauceCombo: {
  name: "Shrimp with Lobster Sauce",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
roastPorkWithChineseVegetablesCombo: {
  name: "Roast Pork with Chinese Vegetables",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
roastPorkLoMeinCombo: {
  name: "Roast Pork Lo Mein",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
sweetAndSourPorkOrChickenCombo: {
  name: "Sweet & Sour Pork or Chicken",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
bbqSpareRibsCombo: {
  name: "B-B-Q Spare Ribs",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
pepperSteakCombo: {
  name: "Pepper Steak",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
beefWithChineseVegetablesCombo: {
  name: "Beef with Chinese Vegetables",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
beefWithBroccoliCombo: {
  name: "Beef with Broccoli",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
mooGooGaiPanCombo: {
  name: "Moo Goo Gai Pan",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
chickenWithBroccoliCombo: {
  name: "Chicken with Broccoli",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
chickenWithCashewNutsCombo: {
  name: "Chicken with Cashew Nuts",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
shrimpWithChineseVegetablesCombo: {
  name: "Shrimp with Chinese Vegetables",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
shrimpWithBroccoliCombo: {
  name: "Shrimp with Broccoli",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
szechuanChickenBeefShrimpCombo: {
  name: "Szechuan Chicken or Beef or Shrimp",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
chickenBeefShrimpWithGarlicSauceCombo: {
  name: "Chicken or Beef or Shrimp with Garlic Sauce",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
generalTsosChickenCombo: {
  name: "General Tso’s Chicken",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
sesameChickenCombo: {
  name: "Sesame Chicken",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
bbqBonelessRibsCombo: {
  name: "Bar-B-Q Boneless Ribs",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
orangeChickenCombo: {
  name: "Orange Chicken",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
hunanChickenCombo: {
  name: "Hunan Chicken",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
teriyakiChickenCombo: {
  name: "Teriyaki Chicken",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
curryChickenBeefShrimpWithOnionsCombo: {
  name: "Curry Chicken or Beef or Shrimp with Onions",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
roastPorkBeefShrimpWithOnionCombo: {
  name: "Roast Pork or Beef or Shrimp with Onion",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
kungPaoChickenOrShrimpCombo: {
  name: "Kung Pao Chicken or Shrimp",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
bourbonChickenCombo: {
  name: "Bourbon Chicken",
  options: [
    { label: "Combo", price: 9.95 }
  ]
},
// Chop Suey Section
vegetablesChopSuey: {
  name: "Vegetables Chop Suey",
  options: [
    { label: "Pt", price: 6.50 },
    { label: "Qt", price: 7.50 }
  ]
},
roastPorkOrChickenChopSuey: {
  name: "Roast Pork or Chicken Chop Suey",
  options: [
    { label: "Pt", price: 6.99 },
    { label: "Qt", price: 9.75 }
  ]
},
beefOrShrimpChopSuey: {
  name: "Beef or Shrimp Chop Suey",
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

// Chow Mei Fun Section
roastPorkOrChickenChowMeiFun: {
  name: "Roast Pork or Chicken Chow Mei Fun",
  options: [{ label: "Order", price: 9.75 }]
},
beefOrShrimpChowMeiFun: {
  name: "Beef or Shrimp Chow Mei Fun",
  options: [{ label: "Order", price: 10.25 }]
},
houseSpecialChowMeiFun: {
  name: "House Special Chow Mei Fun",
  options: [{ label: "Order", price: 10.25 }]
},
singaporeChowMeiFun: {
  name: "Singapore Chow Mei Fun",
  options: [{ label: "Order", price: 10.25 }]
},

// Chicken Section
mooGooGaiPan: {
  name: "Moo Goo Gai Pan",
  options: [
    { label: "Pt", price: 7.25 },
    { label: "Qt", price: 12.50 }
  ]
},
chickenWithCashewNuts: {
  name: "Chicken with Cashew Nuts",
  options: [
    { label: "Pt", price: 7.25 },
    { label: "Qt", price: 12.50 }
  ]
},
chickenWithBroccoli: {
  name: "Chicken with Broccoli",
  options: [
    { label: "Pt", price: 7.25 },
    { label: "Qt", price: 12.50 }
  ]
},
chickenWithOysterSauce: {
  name: "Chicken with Oyster Sauce",
  options: [
    { label: "Pt", price: 7.25 },
    { label: "Qt", price: 12.50 }
  ]
},
chickenWithSnowPeas: {
  name: "Chicken with Snow Peas",
  options: [
    { label: "Pt", price: 7.25 },
    { label: "Qt", price: 12.50 }
  ]
},
chickenWithBlackBeanSauce: {
  name: "Chicken with Black Bean Sauce",
  options: [
    { label: "Pt", price: 7.25 },
    { label: "Qt", price: 12.50 }
  ]
},
kungPaoChicken: {
  name: "Kung Pao Chicken",
  options: [
    { label: "Pt", price: 7.25 },
    { label: "Qt", price: 12.50 }
  ]
},
curryChickenWithOnion: {
  name: "Curry Chicken with Onion",
  options: [
    { label: "Pt", price: 7.25 },
    { label: "Qt", price: 12.50 }
  ]
},
chickenWithGarlicSauce: {
  name: "Chicken with Garlic Sauce",
  options: [
    { label: "Pt", price: 7.25 },
    { label: "Qt", price: 12.50 }
  ]
},
friedShrimpAds: {
  name: "Fried Shrimp",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
generalTsosChickenAds: {
  name: "General Tso's Chicken",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
sesameChickenAds: {
  name: "Sesame Chicken",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
bonelessSpareRibsAds: {
  name: "Boneless Spare Ribs",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
chickenWingsWithFriesAds: {
  name: "Chicken Wings with Fries",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
beefOrChickenMixedVegAds: {
  name: "Beef or Chicken Mixed Vegetables",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
teriyakiChickenOnStickAds: {
  name: "Teriyaki Chicken on Stick",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
houseSpecialLoMeinAds: {
  name: "House Special Lo Mein",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
beefOrChickenWithBroccoliAds: {
  name: "Beef or Chicken with Broccoli",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
friedScallopsAds: {
  name: "Fried Scallops",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
curryChickenAds: {
  name: "Curry Chicken",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
shrimpWithMixedVegetablesAds: {
  name: "Shrimp with Mixed Vegetables",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
friedCrabSticksAds: {
  name: "Fried Crab Sticks",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
pepperSteakWithOnionsAds: {
  name: "Pepper Steak with Onions",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
bourbonChickenAds: {
  name: "Bourbon Chicken",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
sweetSourChickenAds: {
  name: "Sweet & Sour Chicken",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
orangeChickenAds: {
  name: "Orange Chicken",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
shrimpWithBroccoliAds: {
  name: "Shrimp with Broccoli",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
hunanChickenOrShrimpAds: {
  name: "Hunan Chicken or Shrimp",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
szechuanChickenOrShrimpAds: {
  name: "Szechuan Chicken or Shrimp",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
chickenWithCashewNutsAds: {
  name: "Chicken with Cashew Nuts",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
honeyWingsWithFriesAds: {
  name: "Honey Wings with Fries",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
chickenEggFooYoungAds: {
  name: "Chicken Egg Foo Young",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
shrimpEggFooYoungAds: {
  name: "Shrimp Egg Foo Young",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
chickenChowMeinAds: {
  name: "Chicken Chow Mein",
  options: [
    { label: "Regular", price: 8.25 }
  ]
},
shrimpChowMeinAds: {
  name: "Shrimp Chow Mein",
  options: [
    { label: "Regular", price: 8.25 }
  ]
}

};



let selectedItem = null; // Track the current item

// Function to open the modal with item details
function openModal(itemId) {
  selectedItem = itemOptions[itemId];
  document.getElementById('item-name').textContent = selectedItem.name;

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
      updateTotalPrice(parseFloat(option.price));
    });

    optionLabel.appendChild(optionInput);
    optionLabel.appendChild(document.createTextNode(` ${option.label} (+$${option.price.toFixed(2)})`));
    optionsContainer.appendChild(optionLabel);
  });

  // Set initial total price to the price of the first option
  updateTotalPrice(selectedItem.options[0].price);

  // Display the modal
  document.getElementById('itemModal').style.display = 'block';
}

// Function to update total price based on selected option
function updateTotalPrice(price) {
  document.getElementById('total-price').textContent = price.toFixed(2);
}

// Function to close the modal
function closeModal() {
  document.getElementById('itemModal').style.display = 'none';
}

// Function to add the item to the cart
// Add item to cart and trigger display update
// Add item to cart with quantity grouping
function addToCart() {
  if (!selectedItem) return;

  const itemName = selectedItem.name;
  const totalPrice = parseFloat(document.getElementById('total-price').textContent);

  // Get the selected option (e.g., size)
  const selectedOption = document.querySelector('input[name="option"]:checked').nextSibling.textContent.trim();

  // Check if an identical item with the same name and option already exists in the cart
  const existingItem = cart.find(item => item.name === itemName && item.option === selectedOption);

  if (existingItem) {
    // If the same item with the same option exists, increment its quantity
    existingItem.quantity += 1;
  } else {
    // If it doesn't exist, add it as a new entry with quantity 1 and the selected option
    cart.push({ name: itemName, price: totalPrice, quantity: 1, option: selectedOption });
  }

  // Update the cart display
  updateCartDisplay();

  // Close the modal
  closeModal();
}






// Cart data
let cart = [];
const TAX_RATE = 0.07; // Example tax rate



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





