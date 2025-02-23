const itemOptions = {
  negraModelo: {
    name: "Negra Modelo",
    options: [
      { label: "Single", price: 5.25 }
    ]
  },
  modeloEspecial: {
    name: "Modelo Especial",
    options: [
      { label: "Single", price: 5.25 }
    ]
  },
  tecate: {
    name: "Tecate",
    options: [
      { label: "Single", price: 5.25 }
    ]
  },
  dosEquisAmber: {
    name: "Dos Equis (XX) Amber",
    options: [
      { label: "Single", price: 5.25 }
    ]
  },
  corona: {
    name: "Corona",
    options: [
      { label: "Single", price: 5.25 }
    ]
  },
  modeloDraft: {
    name: "Modelo Especial Draft",
    options: [
      { label: "12oz", price: 4.25 },
      { label: "32oz", price: 10.25 }
    ]
  },
  budLight: {
    name: "Bud Light",
    options: [
      { label: "Single", price: 4.25 }
    ]
  },
  millerLite: {
    name: "Miller Lite",
    options: [
      { label: "Single", price: 4.25 }
    ]
  },
  michelobUltraDraft: {
    name: "Michelob Ultra Draft",
    options: [
      { label: "12oz", price: 3.95 },
      { label: "32oz", price: 9.50 }
    ]
  },
  // Wine Section
  glassWine: {
    name: "Wine by the Glass",
    options: [{ label: "Single", price: 4.50 }]
  },
  halfLiterWine: {
    name: "Wine (Half Liter)",
    options: [{ label: "Half Liter", price: 7.95 }]
  },
  oneLiterWine: {
    name: "Wine (One Liter)",
    options: [{ label: "One Liter", price: 14.95 }]
  },

  // Margaritas & Daiquiris Section
  limeMargarita: {
    name: "Lime Margarita",
    options: [
      { label: "9oz", price: 5.50 },
      { label: "12oz", price: 6.95 },
      { label: "21oz", price: 9.50 }
    ]
  },
  flavoredMargarita: {
    name: "Flavored Margarita",
    options: [
      { label: "9oz", price: 6.50 },
      { label: "12oz", price: 7.95 },
      { label: "21oz", price: 10.50 }
    ],
    description: "Mango, Peach, Strawberry, or Raspberry flavors."
  },
  cantarito: {
    name: "Cantarito",
    options: [{ label: "16oz", price: 6.50 }]
  },
  texasMargarita: {
    name: "Texas Margarita",
    options: [
      { label: "12oz", price: 7.95 },
      { label: "21oz", price: 11.50 }
    ]
  },
  margolona: {
    name: "Margolona",
    options: [{ label: "20oz", price: 11.50 }]
  },
   // Appetizers Section
   nachosCheese: {
    name: "Nachos with Cheese",
    options: [{ label: "Single", price: 7.50 }]
  },
  nachosBeans: {
    name: "Nachos with Beans",
    options: [{ label: "Single", price: 8.25 }]
  },
  nachosChicken: {
    name: "Nachos with Chicken",
    options: [{ label: "Single", price: 9.25 }]
  },
  nachosBeef: {
    name: "Nachos with Beef",
    options: [{ label: "Single", price: 8.75 }]
  },
  nachosBeefChicken: {
    name: "Nachos with Beef & Chicken",
    options: [{ label: "Single", price: 9.99 }]
  },
  nachosBeefBeans: {
    name: "Nachos with Beef & Beans",
    options: [{ label: "Single", price: 9.99 }]
  },
  nachosChickenBeans: {
    name: "Nachos with Chicken & Beans",
    options: [{ label: "Single", price: 9.25 }]
  },
  cheeseSticks: {
    name: "Cheese Sticks",
    options: [{ label: "6 pcs", price: 6.50 }]
  },
  chickenWings: {
    name: "Chicken Wings",
    options: [{ label: "6 pcs", price: 8.50 }]
  },
  cheeseDip: {
    name: "Cheese Dip",
    options: [{ label: "Single", price: 5.99 }]
  },
  frenchFries: {
    name: "French Fries",
    options: [{ label: "Single", price: 4.99 }]
  },
  choriDip: {
    name: "Chori Dip",
    options: [{ label: "Single", price: 6.50 }]
  },
  tortillas: {
    name: "Tortillas",
    options: [{ label: "3 pcs", price: 2.50 }]
  },
  sourCream: {
    name: "Sour Cream",
    options: [{ label: "Single", price: 2.25 }]
  },
  jalapenos: {
    name: "Jalapenos",
    options: [{ label: "Single", price: 2.25 }]
  },
  picoDeGallo: {
    name: "Pico De Gallo",
    options: [{ label: "Single", price: 2.25 }]
  },
  shreddedCheese: {
    name: "Shredded Cheese",
    options: [{ label: "Single", price: 2.50 }]
  },
  guacamoleDip: {
    name: "Guacamole Dip",
    options: [{ label: "Single", price: 4.99 }]
  },
  blackBeans: {
    name: "Black Beans",
    options: [{ label: "Single", price: 4.99 }]
  },
  chileToriados: {
    name: "Chile Toriados",
    options: [{ label: "Single", price: 2.50 }]
  },
   // Drinks Section
   softDrinks: {
    name: "Soft Drinks",
    options: [{ label: "Choice of Pepsi, Diet Pepsi, Starry, Dr. Pepper, Mountain Dew, Pink Lemonade, or Orange Crush", price: 2.99 }]
  },
  iceTeaCoffee: {
    name: "Ice Tea & Coffee",
    options: [{ label: "Single", price: 2.99 }]
  },
  orangeJuice: {
    name: "Orange Juice",
    options: [{ label: "Single (No free refills)", price: 3.50 }]
  },
  milk: {
    name: "Milk",
    options: [{ label: "20 oz (No free refills)", price: 3.50 }]
  },
  jarritoToronja: {
    name: "Jarrito Toronja",
    options: [{ label: "Single (No free refills)", price: 3.50 }]
  },
  cherryTempo: {
    name: "Cherry Tempo",
    options: [{ label: "Single (No free refills)", price: 3.50 }]
  },
  horchata: {
    name: "Horchata",
    options: [{ label: "20 oz (No free refills)", price: 3.50 }]
  },

  // Mixed Drinks Section
  pinaColada: {
    name: "Pina Colada",
    options: [{ label: "Single", price: 8.75 }]
  },
  tropicalDrink: {
    name: "Tropical Drink",
    options: [{ label: "Vodka, gin, triple sec, Malibu rum, sweet & sour, and pineapple juice", price: 8.75 }]
  },
  tequilaSunrise: {
    name: "Tequila Sunrise",
    options: [{ label: "Single", price: 8.50 }]
  },
  longIslandIcedTea: {
    name: "Long Island Iced Tea",
    options: [{ label: "Single", price: 9.50 }]
  },
  bahamaMama: {
    name: "Bahama Mama",
    options: [{ label: "Single", price: 9.50 }]
  },
  whiteRussian: {
    name: "White Russian",
    options: [{ label: "Single", price: 8.95 }]
  },
  screwdriver: {
    name: "Screwdriver",
    options: [{ label: "Single", price: 7.50 }]
  },
  donJulioShot: {
    name: "Shot of Don Julio",
    options: [{ label: "Single", price: 8.95 }]
  },
  joseCuervoShot: {
    name: "Shot of Jose Cuervo",
    options: [{ label: "Single", price: 6.95 }]
  },
  "1800TequilaShot": {
    name: "Shot of 1800 Tequila",
    options: [{ label: "Single", price: 7.25 }]
  },
  casaAmigoShot: {
    name: "Shot of Casa Amigo",
    options: [{ label: "Single", price: 7.50 }]
  },
  sauzaShot: {
    name: "Shot of Sauza",
    options: [{ label: "Single", price: 7.50 }]
  },
  caboWaboShot: {
    name: "Shot of Cabo Wabo",
    options: [{ label: "Single", price: 8.50 }]
  },
  patronAnejoShot: {
    name: "Shot of Patron Añejo",
    options: [{ label: "Single", price: 9.50 }]
  },
  patronSilverShot: {
    name: "Shot of Patron Silver",
    options: [{ label: "Single", price: 9.75 }]
  },

  // Salads Section
  guacamoleSalad: {
    name: "Guacamole Salad",
    options: [{ label: "Single", price: 3.50 }]
  },
  saladRodeo: {
    name: "Salad Rodeo",
    options: [{ label: "Taco salad shell with lettuce, tomato, onions, carrots, cucumbers, bell peppers, and cheese", price: 5.50 }]
  },
  tacoLoco: {
    name: "Taco Loco",
    options: [{ label: "Beef and chicken in a baked shell with lettuce, sour cream, tomato, and shredded cheese", price: 9.99 }]
  },
  fajitaSalad: {
    name: "Fajita Salad",
    options: [{ label: "Lettuce, carrots, tomato, cheese, and choice of steak or chicken", price: 11.99 }]
  },
  fajitaSaladShrimp: {
    name: "Fajita Salad with Shrimp",
    options: [{ label: "Lettuce, tomato, carrots, cheese, and shrimp on top", price: 14.50 }]
  },
  mushroomQuesadillaSalad: {
    name: "Mushroom Quesadilla Salad",
    options: [{ label: "Two quesadillas with mushrooms and cheese, served with lettuce, tomato, sour cream, and guacamole", price: 10.50 }]
  },
    // Vegetarian Section
    veggie1: {
      name: "Veggie #1",
      options: [{ label: "One bean burrito, one cheese quesadilla, and one cheese enchilada", price: 10.50 }]
    },
    veggie2: {
      name: "Veggie #2",
      options: [{ label: "One cheese burrito, one mushroom quesadilla, and one bean chalupa", price: 10.50 }]
    },
    veggie3: {
      name: "Veggie #3",
      options: [{ label: "Bean burrito with cheese dip, cheese enchilada, rice, or beans", price: 10.50 }]
    },
    veggie4: {
      name: "Veggie #4",
      options: [{ label: "Burrito with spinach, mushroom quesadilla, and one cheese enchilada", price: 10.50 }]
    },
    veggie5: {
      name: "Veggie #5",
      options: [{ label: "One chalupa, one bean taco, rice, and beans", price: 10.50 }]
    },
    veggieFajitas: {
      name: "Veggie Fajitas",
      options: [{ label: "Mix of potatoes, cactus, onions, bell pepper, mushrooms, and tomato. Served with beans, guacamole salad, and 3 tortillas", price: 12.95 }]
    },
    veggieQuesadilla: {
      name: "Veggie Quesadilla",
      options: [{ label: "Two quesadillas with cheese, bell peppers, onions, tomato, mushrooms, and guacamole salad", price: 10.99 }]
    },
    veggieTacoLoco: {
      name: "Veggie Taco Loco",
      options: [{ label: "Rice, beans, lettuce, sour cream, tomato, mushrooms, and cheese in a tortilla bowl", price: 8.75 }]
    },
  
    // Side Items Section
    cheeseQuesadilla: {
      name: "Cheese Quesadilla",
      options: [
        { label: "Single", price: 3.99 },
        { label: "Double", price: 7.00 }
      ]
    },
    chickenQuesadilla: {
      name: "Chicken Quesadilla",
      options: [
        { label: "Single", price: 5.99 },
        { label: "Double", price: 11.00 }
      ]
    },
    beefQuesadilla: {
      name: "Beef Quesadilla",
      options: [
        { label: "Single", price: 5.99 },
        { label: "Double", price: 11.00 }
      ]
    },
    mushroomQuesadilla: {
      name: "Mushroom Quesadilla",
      options: [
        { label: "Single", price: 5.99 },
        { label: "Double", price: 11.00 }
      ]
    },
    enchiladas: {
      name: "Enchiladas",
      options: [
        { label: "Single", price: 3.50 },
        { label: "Three", price: 10.00 }
      ]
    },
    burritosBeefChicken: {
      name: "Burritos (Beef or Chicken)",
      options: [
        { label: "Single", price: 5.95 },
        { label: "Double", price: 10.99 }
      ]
    },
    friedBurrito: {
      name: "Fried Burrito (Beef or Chicken)",
      options: [{ label: "Single", price: 6.25 }]
    },
    grilledSteakQuesadilla: {
      name: "Grilled Steak Quesadilla",
      options: [
        { label: "Single", price: 7.95 },
        { label: "Double", price: 14.95 }
      ]
    },
    shrimpQuesadilla: {
      name: "Shrimp Quesadilla",
      options: [
        { label: "Single", price: 7.95 },
        { label: "Double", price: 14.95 }
      ]
    },
    burritoSpecial: {
      name: "Burrito Special",
      options: [{ label: "Beef or chicken burrito with beans, lettuce, tomato, and sour cream", price: 7.99 }]
    },
    riceWithCheese: {
      name: "Rice with Cheese Dip",
      options: [{ label: "Single", price: 6.95 }]
    },
    orderOfRice: {
      name: "Order of Rice",
      options: [{ label: "Side portion of seasoned Mexican rice", price: 4.95 }]
    },
    orderOfBeans: {
      name: "Order of Beans (Fried or Black)",
      options: [{ label: "Side portion of refried or black beans", price: 4.95 }]
    },
    tamale: {
      name: "Tamale",
      options: [
        { label: "Single", price: 3.50 },
        { label: "Three", price: 10.00 }
      ]
    },
    // Quick Dinners Section
  twoEnchiladasOneTaco: {
    name: "Two Enchiladas & One Taco",
    options: [{ label: "Two enchiladas and one taco served with beans or rice", price: 9.99 }]
  },
  tacoEnchiladaChalupa: {
    name: "One Taco, One Enchilada & One Chalupa",
    options: [{ label: "A taco, enchilada, and chalupa served together", price: 9.99 }]
  },
  chileRellenoEnchiladaRice: {
    name: "One Chile Relleno & One Enchilada with Rice",
    options: [{ label: "Traditional chile relleno and enchilada with rice", price: 9.99 }]
  },
  enchiladaTostadaRice: {
    name: "One Enchilada & One Tostada with Rice",
    options: [{ label: "A flavorful enchilada and crunchy tostada with rice", price: 9.99 }]
  },
  twoEnchiladasBeansRice: {
    name: "Two Enchiladas with Beans & Rice",
    options: [{ label: "A hearty serving of two enchiladas paired with beans and rice", price: 9.99 }]
  },
  tacoEnchiladaBeansRice: {
    name: "One Taco & One Enchilada with Beans & Rice",
    options: [{ label: "Classic taco and enchilada served with beans and rice", price: 9.99 }]
  },
  chileRellenoEnchiladaBeansRice: {
    name: "One Chile Relleno & One Enchilada with Beans & Rice",
    options: [{ label: "Chile relleno and enchilada with beans and rice", price: 9.99 }]
  },
  tamaleEnchiladaBeansRice: {
    name: "One Tamale & One Enchilada with Beans & Rice",
    options: [{ label: "A tamale paired with an enchilada, beans, and rice", price: 9.99 }]
  },
  cheeseQuesadillaBurritoRice: {
    name: "Cheese Quesadilla & One Burrito with Rice",
    options: [{ label: "Cheese quesadilla served with a burrito and rice", price: 9.99 }]
  },
  twoHardTacosBeansRice: {
    name: "Two Hard Tacos with Beans & Rice",
    options: [{ label: "Two crunchy tacos served with beans and rice", price: 9.99 }]
  },
  burritoTacoEnchilada: {
    name: "One Burrito, One Taco & One Enchilada",
    options: [{ label: "A trio of a burrito, taco, and enchilada", price: 9.99 }]
  },
  chalupaChileRellenoBeans: {
    name: "One Chalupa & One Chile Relleno with Beans",
    options: [{ label: "A chalupa and chile relleno with beans", price: 9.99 }]
  },

  // Quick Lunch Section
  speedyGonzales: {
    name: "Speedy Gonzales",
    options: [{ label: "One taco and one enchilada with beans or rice", price: 8.75 }]
  },
  chileRellenoTaco: {
    name: "Chile Relleno & Taco",
    options: [{ label: "One chile relleno and one taco with beans", price: 8.99 }]
  },
  burritoBeansRice: {
    name: "Burrito with Beans & Rice",
    options: [{ label: "One burrito with a side of beans and rice", price: 8.99 }]
  },
  enchiladaOrTacoBeansRice: {
    name: "Enchilada OR Taco with Beans & Rice",
    options: [{ label: "Choice of one enchilada or taco with beans and rice", price: 8.75 }]
  },
  twoChickenEnchiladasPoblano: {
    name: "Two Chicken Enchiladas with Poblano Sauce",
    options: [{ label: "Two enchiladas with poblano sauce and onions, served with rice", price: 8.99 }]
  },
  burritoTacoBeansRice: {
    name: "Burrito & Taco with Beans OR Rice",
    options: [{ label: "One burrito and one taco served with beans or rice", price: 8.99 }]
  },
  twoChickenEnchiladasRice: {
    name: "Two Chicken Enchiladas with Rice",
    options: [{ label: "Two enchiladas topped with lettuce, tomato, sour cream, and served with rice", price: 8.99 }]
  },
  enchiladaCheeseQuesadillaRice: {
    name: "Enchilada & Cheese Quesadilla with Rice",
    options: [{ label: "One enchilada and one cheese quesadilla with rice", price: 8.99 }]
  },
  burritoEnchiladaBeansRice: {
    name: "Burrito & Enchilada with Beans OR Rice",
    options: [{ label: "One burrito and one enchilada with beans or rice", price: 8.99 }]
  },
  tacoEnchiladaCheeseQuesadilla: {
    name: "Taco, Enchilada & Cheese Quesadilla",
    options: [{ label: "A combination of one taco, one enchilada, and one cheese quesadilla", price: 8.99 }]
  },
  papasLokas: {
    name: "Papas Lokas",
    options: [{ label: "Choice of steak or grilled chicken, fries covered with cheese", price: 14.25 }]
  },
  fajitas: {
    name: "Fajitas",
    options: [
      { label: "Lunch", price: 11.00 },
      { label: "Dinner", price: 15.95 }
    ]
  },
  texasFajitas: {
    name: "Texas Fajitas",
    options: [
      { label: "Lunch", price: 11.95 },
      { label: "Dinner", price: 17.95 }
    ]
  },
  alambre: {
    name: "Alambre",
    options: [
      { label: "Lunch", price: 11.25 },
      { label: "Dinner", price: 16.99 }
    ]
  },
  burritoFajita: {
    name: "Burrito Fajita",
    options: [
      { label: "Lunch", price: 9.50 },
      { label: "Dinner", price: 15.25 }
    ]
  },
  burritoChucho: {
    name: "Burrito Chucho",
    options: [
      { label: "Lunch", price: 9.99 },
      { label: "Dinner", price: 14.50 }
    ]
  },
  burritoDeluxe: {
    name: "Burrito Deluxe",
    options: [{ label: "Two burritos (one chicken, one beef) with rice or beans", price: 14.50 }]
  },
  burritoOso: {
    name: "Burrito Oso",
    options: [{ label: "Two burritos filled with shredded chicken and vegetables, cheese dip, rice or beans", price: 13.99 }]
  },
  carnitas: {
    name: "Carnitas",
    options: [
      { label: "Lunch", price: 11.75 },
      { label: "Dinner", price: 14.99 }
    ]
  },
  polloLoco: {
    name: "Pollo Loco",
    options: [
      { label: "Lunch", price: 10.50 },
      { label: "Dinner", price: 14.25 }
    ]
  },
  polloAzado: {
    name: "Pollo Azado",
    options: [
      { label: "Lunch", price: 10.95 },
      { label: "Dinner", price: 14.25 }
    ]
  },
  polloJalisco: {
    name: "Pollo Jalisco",
    options: [
      { label: "Lunch", price: 10.75 },
      { label: "Dinner", price: 14.25 }
    ]
  },
  choriPollo: {
    name: "Chori Pollo",
    options: [
      { label: "Lunch", price: 11.75 },
      { label: "Dinner", price: 15.99 }
    ]
  },
  arrozConPollo: {
    name: "Arroz con Pollo",
    options: [
      { label: "Lunch", price: 10.95 },
      { label: "Dinner", price: 14.99 }
    ]
  },
  huevosRancheros: {
    name: "Huevos Rancheros",
    options: [
      { label: "Lunch", price: 9.50 },
      { label: "Dinner", price: 11.95 }
    ]
  },
  huevosConChorizo: {
    name: "Huevos con Chorizo",
    options: [
      { label: "Lunch", price: 9.95 },
      { label: "Dinner", price: 11.95 }
    ]
  },
  tacoSalad: {
    name: "Taco Salad",
    options: [
      { label: "Lunch", price: 9.25 },
      { label: "Dinner", price: 10.95 }
    ]
  },
  chimichanga: {
    name: "Chimichanga",
    options: [
      { label: "Lunch", price: 9.75 },
      { label: "Dinner", price: 14.50 }
    ]
  },
  taquitos: {
    name: "Taquitos",
    options: [
      { label: "Lunch", price: 9.75 },
      { label: "Dinner", price: 13.50 }
    ]
  },
  chilaquiles: {
    name: "Chilaquiles",
    options: [
      { label: "Lunch", price: 9.95 },
      { label: "Dinner", price: 13.50 }
    ]
  },
  quesadillaRellena: {
    name: "Quesadilla Rellena",
    options: [
      { label: "Lunch", price: 9.95 },
      { label: "Dinner", price: 15.50 }
    ]
  },
  steakQuesadilla: {
    name: "Steak Quesadilla",
    options: [
      { label: "Lunch", price: 10.50 },
      { label: "Dinner", price: 15.50 }
    ]
  },
  quesadillaLaGrande: {
    name: "Quesadilla La Grande",
    options: [
      { label: "Lunch", price: 9.75 },
      { label: "Dinner", price: 13.50 }
    ]
  },
  quesaBirriaTacos: {
    name: "QuesaBirria Tacos",
    options: [
      { label: "Lunch", price: 12.75 },
      { label: "Dinner", price: 16.00 }
    ]
  },
  quesadillaVeracruzana: {
    name: "Quesadilla Veracruzana",
    options: [{ label: "Two quesadillas with cheese and shredded beef, rice, lettuce, tomato, guacamole", price: 14.50 }]
  },
  accp: {
    name: "A.C.C.P.",
    options: [
      { label: "Lunch", price: 12.75 },
      { label: "Dinner", price: 16.95 }
    ]
  },
  nachosRodeo: {
    name: "Nachos Rodeo",
    options: [{ label: "Nachos with beef, chicken, lettuce, tomato, sour cream, guacamole", price: 11.50 }]
  },
  nachosSupreme: {
    name: "Nachos Supreme",
    options: [{ label: "Nachos with beef or chicken, lettuce, tomato, sour cream, guacamole, cheese", price: 11.95 }]
  },
  enchiladasSupreme: {
    name: "Enchiladas Supreme",
    options: [{ label: "Four enchiladas (beef, chicken, cheese, bean) with lettuce, tomato, sour cream", price: 13.50 }]
  },
  enchiladasPoblanas: {
    name: "Enchiladas Poblanas",
    options: [{ label: "Two chicken enchiladas with poblano sauce, lettuce, tomato, sour cream, rice", price: 11.50 }]
  },
  enchiladasToril: {
    name: "Enchiladas Toril",
    options: [{ label: "Two cheese enchiladas with shredded pork, peppers, onions, rice, guacamole salad", price: 13.95 }]
  },
  enchiladasVerdes: {
    name: "Enchiladas Verdes",
    options: [{ label: "Three shredded beef enchiladas with green sauce, lettuce, tomato, guacamole, rice", price: 13.50 }]
  },
  enchiladasMiRodeo: {
    name: "Enchiladas Mi Rodeo",
    options: [{ label: "Five enchiladas (chicken, beef, cheese, bean, shredded beef) with lettuce, tomato, sour cream", price: 15.95 }]
  },
  yolandas: {
    name: "Yolandas",
    options: [{ label: "Three chicken enchiladas with lettuce, tomato, sour cream, guacamole, rice", price: 13.95 }]
  },
  taquitosMexicanos: {
    name: "Taquitos Mexicanos",
    options: [{ label: "Four fried tacos (two chicken, two beef) with lettuce, tomato, sour cream, guacamole, rice", price: 13.50 }]
  },
  chilaquilesMexicanos: {
    name: "Chilaquiles Mexicanos",
    options: [{ label: "Corn tortillas with chicken, special sauce, cheese, lettuce, tomato, guacamole, rice", price: 13.50 }]
  },
  flautas: {
    name: "Flautas",
    options: [{ label: "Two fried burritos (one chicken, one shredded beef) with lettuce, tomato, guacamole, sour cream, rice", price: 13.50 }]
  },
  grandeSpecial: {
    name: "Grande Special",
    options: [{ label: "Burrito, enchilada, taco, chile relleno, chalupa, rice, beans", price: 16.99 }]
  },
  chickenFajita: {
    name: "Chicken Fajita",
    options: [{ label: "Tender grilled chicken with peppers, onions, tomatoes, sour cream, lettuce, beans, and three tortillas", price: 14.95 }]
  },
  steakFajitas: {
    name: "Steak Fajitas",
    options: [{ label: "Tender steak with peppers, onions, tomatoes, sour cream, lettuce, beans, and three tortillas", price: 15.95 }]
  },
  shrimpFajitas: {
    name: "Shrimp Fajitas",
    options: [{ label: "Shrimp with peppers, onions, tomatoes, sour cream, guacamole, lettuce, beans, and three tortillas", price: 18.95 }]
  },
  mixFajitas: {
    name: "Mix Fajitas",
    options: [{ label: "Tender chicken and steak with peppers, onions, tomatoes, sour cream, lettuce, beans, and three tortillas", price: 15.95 }]
  },
  texasFajitas: {
    name: "Texas Fajitas",
    options: [{ label: "Tender grilled steak, chicken, and shrimp with peppers, onions, tomatoes, guacamole, sour cream, lettuce, beans, and three tortillas", price: 17.95 }]
  },
  fajitasElRodeo: {
    name: "Fajitas El Rodeo",
    options: [{ label: "Tender steak, chicken, shrimp, and homemade sausage with peppers, onions, tomatoes, guacamole, sour cream, lettuce, beans, and three tortillas", price: 19.95 }]
  },
  fajitasSpecial: {
    name: "Fajitas Special",
    options: [{ label: "Slices of grilled chicken, steak, and pork with peppers, onions, tomatoes, sour cream, lettuce, rice or beans, and three tortillas", price: 17.99 }]
  },
  hawaiianFajita: {
    name: "Hawaiian Fajita",
    options: [{ label: "Shrimp, steak, and chicken cooked with green peppers, mushrooms, onions, zucchini, and pineapple, covered with cheese, served with rice and beans", price: 18.99 }]
  },
  fajitaPinaLoka: {
    name: "Fajita Pina Loka",
    options: [{ label: "Grilled pineapple stuffed with chicken, steak, peppers, and onions, topped with al pastor sauce and cheese, served with rice and beans", price: 17.99 }]
  },
  delMarFajitas: {
    name: "Del Mar Fajitas",
    options: [{ label: "Shrimp and scallops with peppers, onions, tomatoes, guacamole, sour cream, lettuce, beans, and three tortillas", price: 19.99 }]
  },
  steakAndShrimp: {
    name: "Steak and Shrimp",
    options: [{ label: "Grilled ribeye steak topped with grilled shrimp, served with rice, beans, and three tortillas (6 shrimp)", price: 19.50 }]
  },
  carneAzada: {
    name: "Carne Azada",
    options: [{ label: "Grilled sirloin served with beans, guacamole salad, and three tortillas", price: 15.95 }]
  },
  steakMiRodeo: {
    name: "Steak Mi Rodeo",
    options: [{ label: "Grilled ribeye steak with onions, tomatoes, bell peppers, mushrooms, rice, beans, and three tortillas", price: 16.95 }]
  },
  steakMexicano: {
    name: "Steak Mexicano",
    options: [{ label: "Grilled tender steak with our special tomatillo sauce, served with rice, beans, and three tortillas", price: 16.50 }]
  },
  cazuelon: {
    name: "Cazuelon",
    options: [{ label: "Grilled steak and grilled chicken served with pico de gallo, rice, beans, and three tortillas", price: 17.25 }]
  },
  cazuelonMiRodeo: {
    name: "Cazuelon Mi Rodeo",
    options: [{ label: "Grilled steak, chicken, and shrimp served with rice, beans, pico de gallo, and three tortillas (6 shrimp)", price: 19.99 }]
  },
  steakRanchero: {
    name: "Steak Ranchero",
    options: [{ label: "Grilled ribeye steak covered with ranchero sauce, served with beans, rice, and three tortillas", price: 17.99 }]
  },
  steakTampiqueno: {
    name: "Steak Tampiqueno",
    options: [{ label: "T-bone steak with grilled onions on top, served with rice, beans, and three tortillas", price: 17.99 }]
  },
  carnitas: {
    name: "Carnitas",
    options: [{ label: "Pork chunks cooked golden brown and delicately seasoned with our secret spices, served with rice, beans, and three tortillas", price: 14.99 }]
  },
  tacosDeCarneAzada: {
    name: "Tacos de Carne Azada",
    options: [{ label: "Three folded soft corn tortillas filled with grilled steak, served with tomatillo sauce, pico de gallo, and beans on the side", price: 14.50 }]
  },
  tacosAlPastor: {
    name: "Tacos Al Pastor",
    options: [{ label: "Three soft corn tortillas stuffed with tender strips of grilled steak with pastor sauce, served with pico de gallo and beans", price: 14.50 }]
  },
  tacosDeCarnitas: {
    name: "Tacos de Carnitas",
    options: [{ label: "Three soft corn tortilla tacos filled with carnitas, served with beans on the side, pico de gallo, and tomatillo sauce", price: 14.50 }]
  },
  burritoDonNacho: {
    name: "Burrito Don Nacho",
    options: [{ label: "Large burrito filled with carnitas, rice, beans, and cheese, served with lettuce, tomato, sour cream, and guacamole", price: 14.95 }]
  },
  alambre: {
    name: "Alambre",
    options: [{ label: "Grilled chicken or steak with tomatoes, onions, peppers, and cheese dip on top, served with rice or beans, salad, sour cream, and three tortillas", price: 16.99 }]
  },
  steakQuesadillas: {
    name: "Steak Quesadillas",
    options: [{ label: "Two quesadillas filled with steak and cheese, served with rice, lettuce, tomato, and sour cream", price: 15.50 }]
  },
  nachosFajitas: {
    name: "Nachos Fajitas",
    options: [{ label: "Nachos with choice of grilled steak or chicken, topped with cheese dip. Vegetables available on request", price: 14.95 }]
  },
  quesadillaSpecial: {
    name: "Quesadilla Special",
    options: [{ label: "One large quesadilla with choice of chicken or steak, served with lettuce, tomato, peppers, onions, and sour cream", price: 14.95 }]
  },
  burritoFajita: {
    name: "Burrito Fajita",
    options: [{ label: "Two burritos with choice of chicken or steak, topped with cheese dip. Served with lettuce, tomato, sour cream, peppers, onions, and choice of rice or beans", price: 15.25 }]
  },
  fajitaTacoSalad: {
    name: "Fajita Taco Salad",
    options: [{ label: "Grilled chicken or steak served with beans, cheese, lettuce, tomato, sour cream, and guacamole", price: 14.50 }]
  },
  burritoCalifornia: {
    name: "Burrito California",
    options: [{ label: "Large burrito filled with chicken or steak, rice, beans, and cheese dip on top, with pico de gallo, lettuce, and tomato", price: 15.25 }]
  },
  quesadillaDeChorizo: {
    name: "Quesadilla de Chorizo",
    options: [{ label: "Two quesadillas filled with homemade sausage, served with lettuce, tomato, and guacamole. Choice of rice or beans", price: 14.50 }]
  },
  burritoGrande: {
    name: "Burrito Grande",
    options: [{ label: "Large burrito with homemade sausage and pulled chicken, covered with cheese sauce, enchilada sauce, and tomatillo sauce", price: 13.95 }]
  },
  quesabirriaTacos: {
    name: "QuesaBirria Tacos",
    options: [{ label: "Traditional taco/quesadilla filled with beef and lamb, extra cheese, served with cilantro, onions, croutons, and rice on the side", price: 16.00 }]
  },
  // Chicken Section
  polloAzado: {
    name: "Pollo Azado",
    options: [{ label: "Grilled chicken with onions on top, served with rice, beans, and three tortillas", price: 14.25 }]
  },
  polloLoco: {
    name: "Pollo Loco",
    options: [{ label: "Grilled marinated chicken served with rice, beans, and three tortillas", price: 14.25 }]
  },
  choriPollo: {
    name: "Chori Pollo",
    options: [{ label: "Grilled chicken with homemade sausage, cheese dip on top, served with rice, beans, and three tortillas", price: 15.99 }]
  },
  quesadillaLaGrande: {
    name: "Quesadilla La Grande",
    options: [{ label: "Large quesadilla filled with cheese, grilled mushrooms, and chicken, served with lettuce, tomato, sour cream, and pico de gallo", price: 13.50 }]
  },
  arrozConPollo: {
    name: "Arroz Con Pollo",
    options: [{ label: "Grilled chicken with rice and cheese dip on top, served with lettuce, tomato, and sour cream", price: 14.99 }]
  },
  burritoMiRodeo: {
    name: "Burrito Mi Rodeo",
    options: [{ label: "One burrito filled with grilled chicken, topped with cheese dip, rice, and pico de gallo", price: 10.99 }]
  },
  polloJalisco: {
    name: "Pollo Jalisco",
    options: [{ label: "Grilled chicken with our special hot sauce, served with lettuce, tomato, sour cream, guacamole, rice, and three tortillas", price: 14.25 }]
  },
  oscarSpecial: {
    name: "Oscar Special",
    options: [{ label: "Grilled chicken topped with cheese dip, grilled onions, and mushrooms, served with rice, guacamole salad, pico de gallo, and tortillas", price: 15.99 }]
  },
  grilledChickenVegetableMedley: {
    name: "Grilled Chicken & Vegetable Medley",
    options: [{ label: "Grilled and sliced chicken topped with broccoli, zucchini, mushrooms, squash, and melted cheese, served with rice, beans, and three tortillas", price: 15.50 }]
  },
  enchiladasBandera: {
    name: "Enchiladas Bandera",
    options: [{ label: "Three grilled chicken enchiladas: one topped with red sauce, one with cheese dip, and one with green tomatillo sauce. Served with rice, lettuce, tomatoes, and sour cream", price: 14.99 }]
  },
  hawaiianPollo: {
    name: "Hawaiian Pollo",
    options: [{ label: "Grilled chicken with homemade sausage, cheese dip on top, served with rice, beans, pineapples, and three tortillas", price: 16.99 }]
  },

  // Seafood Section
  burritoTexanos: {
    name: "Burrito Texanos",
    options: [{ label: "Two burritos with steak, chicken, shrimp, tomato, onions, lettuce, sour cream, peppers, and cheese dip on top, served with rice and beans", price: 16.25 }]
  },
  camaronesConQueso: {
    name: "Camarones con Queso",
    options: [{ label: "Eight jumbo shrimp topped with cheese dip, served with rice, lettuce, tomato, pico de gallo, and three tortillas", price: 19.99 }]
  },
  alambreDelMar: {
    name: "Alambre del Mar",
    options: [{ label: "Shrimp, tomato, peppers, onions, topped with cheese dip, served with rice or beans, lettuce, tomato, guacamole, and sour cream", price: 18.95 }]
  },
  shrimpTacoSalad: {
    name: "Shrimp Taco Salad",
    options: [{ label: "Grilled shrimp served with beans, cheese, lettuce, tomato, sour cream, guacamole, all inside a flour tortilla bowl", price: 13.95 }]
  },
  scallopsConQueso: {
    name: "Scallops con Queso",
    options: [{ label: "Grilled scallops topped with cheese dip, served with rice, lettuce, tomato, pico de gallo, and three tortillas", price: 21.95 }]
  },
  burritoCaliforniaCamarones: {
    name: "Burrito California con Camarones",
    options: [{ label: "Large burrito filled with grilled shrimp, rice, beans, topped with cheese dip, served with pico de gallo on the side", price: 16.95 }]
  },
  shrimpChimichangas: {
    name: "Shrimp Chimichangas",
    options: [{ label: "Fried or soft chimichangas filled with shrimp, topped with cheese dip, served with rice or beans, lettuce, tomato, guacamole, and sour cream", price: 16.95 }]
  },
  camaronesALaDiabla: {
    name: "Camarones a la Diabla",
    options: [{ label: "Grilled shrimp with hot sauce, served with lettuce, tomato, guacamole, rice, and three tortillas", price: 16.95 }]
  },
  burritoConCamarones: {
    name: "Burrito con Camarones",
    options: [{ label: "Big burrito filled with shrimp, peppers, onions, tomatoes, served with rice, lettuce, tomato, sour cream, and topped with cheese dip", price: 16.95 }]
  },
  tierraYMar: {
    name: "Tierra y Mar",
    options: [{ label: "Grilled shrimp, scallops, chicken, peppers, onions, tomatoes, squash, zucchini, and mushrooms, served on a bed of rice", price: 21.50 }]
  },
  tacosDePescado: {
    name: "Tacos de Pescado",
    options: [{ label: "Two soft shell tacos with grilled tilapia filet, lettuce, and cheese, served with pico de gallo, rice, and beans", price: 12.95 }]
  },
  quesadillaDelMar: {
    name: "Quesadilla del Mar",
    options: [{ label: "Grilled shrimp, tomato, onions, and peppers served with lettuce, tomato, sour cream, and guacamole", price: 15.25 }]
  },
   // Children's Menu
   kidsTaco: {
    name: "One Taco",
    options: [{ label: "Served with rice and beans.", price: 6.95 }]
  },
  kidsEnchilada: {
    name: "One Enchilada",
    options: [{ label: "Served with rice and beans.", price: 6.95 }]
  },
  kidsBurrito: {
    name: "One Burrito",
    options: [{ label: "Served with rice or beans.", price: 6.95 }]
  },
  kidsQuesadilla: {
    name: "One Cheese Quesadilla",
    options: [{ label: "Served with rice or fries.", price: 6.95 }]
  },
  kidsBurger: {
    name: "Hamburger or Cheeseburger",
    options: [{ label: "Served with fries.", price: 8.95 }]
  },
  kidsChickenFingers: {
    name: "Chicken Fingers",
    options: [{ label: "Served with fries.", price: 8.95 }]
  },
  kidsPepperoniPizza: {
    name: "Pepperoni Pizza",
    options: [{ label: "Served with fries.", price: 8.95 }]
  },

  // Desserts
  sopapillas: {
    name: "Sopapillas",
    options: [{ label: "Flat puffy pastry pieces topped with honey and cinnamon.", price: 6.50 }]
  },
  flan: {
    name: "Flan",
    options: [{ label: "A delicious Mexican-style custard served in its own syrup.", price: 6.50 }]
  },
  friedIceCream: {
    name: "Fried Ice Cream",
    options: [{ label: "French vanilla ice cream fried with a crunchy coating, honey, whipped cream, chocolate syrup, and Rice Krispies.", price: 7.50 }]
  },
  xangos: {
    name: "Xango’s",
    options: [{ label: "Creamy cheesecake wrapped in a pastry tortilla, fried until flaky, golden, and dusted with cinnamon sugar.", price: 6.50 }]
  },
  churros: {
    name: "Churros",
    options: [{ label: "A tasty Mexican pastry with sweet cinnamon.", price: 6.50 }]
  },
  chocoChimichanga: {
    name: "Choco Chimichanga",
    options: [{ label: "Flour tortilla wrapped around a deep-fried chocolate bar, served with ice cream and white sauce.", price: 7.50 }]
  },

  // Chips & Salsa
  chipsSmall: {
    name: "Chips (Small)",
    options: [{ label: "Freshly made crispy tortilla chips.", price: 3.25 }]
  },
  chipsMedium: {
    name: "Chips (Medium)",
    options: [{ label: "Freshly made crispy tortilla chips.", price: 4.50 }]
  },
  chipsLarge: {
    name: "Chips (Large)",
    options: [{ label: "Freshly made crispy tortilla chips.", price: 5.50 }]
  },
  salsa4oz: {
    name: "Traditional Red Salsa or White Sauce (4oz)",
    options: [{ label: "Classic house-made salsa or creamy white sauce.", price: 1.50 }]
  },
  salsa8oz: {
    name: "Traditional Red Salsa or White Sauce (8oz)",
    options: [{ label: "Classic house-made salsa or creamy white sauce.", price: 2.50 }]
  },
  salsa12oz: {
    name: "Traditional Red Salsa or White Sauce (12oz)",
    options: [{ label: "Classic house-made salsa or creamy white sauce.", price: 3.50 }]
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

let secretNumber;
let numberChangeInterval;

// Function to show the guessing game modal
function showGuessGame() {
  document.getElementById("guess-game-modal").style.display = "block";
}

// Function to close the guessing game modal
function closeGuessGame() {
  document.getElementById("guess-game-modal").style.display = "none";
  document.getElementById("guess-input").value = ""; // Clear input
  document.getElementById("guess-message").textContent = ""; // Clear message
}

// Function to close the congratulations popup
function closeCongratsPopup() {
  document.getElementById("congrats-popup").style.display = "none";
}

// Function to set a new random number every 5 minutes
// Function to set a new random number every 5 minutes
function setRandomNumber() {
  secretNumber = Math.floor(Math.random() * 40) + 1; // Random number between 1 and 50
  document.getElementById("secret-number").textContent = secretNumber; // Update debug section
  document.getElementById("debug-answer").style.display = "block"; // Show secret number for testing
}


// Function to start the number change interval
function startNumberChangeInterval() {
  setRandomNumber(); // Set the initial number
  setInterval(setRandomNumber, 5000); // Update number every 5 seconds
}

// Function to handle the guess submission
function submitGuess() {
  const userGuess = parseInt(document.getElementById("guess-input").value);
  const messageElement = document.getElementById("guess-message");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageElement.textContent = "Please enter a valid number between 1 and 40.";
    return;
  }

  if (userGuess === secretNumber) {
    closeGuessGame(); // Close the guessing game modal
    document.getElementById("congrats-popup").style.display = "block"; // Show the congratulations popup
  } else {
    messageElement.textContent = "Try again! The number has not been guessed yet.";
  }
}

// Start the number change interval when the page loads
window.onload = function () {
  startNumberChangeInterval();
};

