/*      Beer Finder Application JS      */

$(document).ready(function () {
  var userBrandSearchInput;
  var responseBreweryCity;
  var responseBreweryState;

  var stateLocalStorage = window.localStorage.getItem(
    "userStateDropdownSelection"
  );
  var brandLocalStorage = window.localStorage.getItem("userBrandSearchInput");
  var stateRatings = [
    {
      state: "Alabama",
      list: [
        "El Gordo: 4.51",
        "Snake Handler Double IPA: 4.26",
        "Bourbon Barrel-Aged Laika Stout: 4.30",
        "Hitchhiker: 4.32",
        "Cabernet Barrel-Aged Laika Stout: 4.27",
        "Illudium: 4.30",
        "Unobtanium Barrel-Aged Old Ale: 4.20",
        "Language of Thunder - Cumulus: 4.49",
        "Coffee Oatmeal Stout: 4.10",
        "Fatso: 4.18",
      ],
    },
    {
      state: "Alaska",
      list: [
        "A Deal With The Devil: 4.57",
        "Arctic Devil Barley Wine: 4.38",
        "Endless Ending: 4.59",
        "Berserker Imperial Stout: 4.36",
        "Citra Bitter Monk: 4.35",
        "Love Buzz Saison: 4.27",
        "Sloth - Belgian Style Imperial Stout: 4.35",
        "Bar Fly: 4.30",
        "Darkest Hour: 4.22",
        "Smoked Porter: 4.18",
      ],
    },
    {
      state: "Arizona",
      list: [
        "White Russian Imperial Stout: 4.38",
        "DC Mountain Double IPA: 4.35",
        "Barrel Aged American Presidential Stout: 4.41",
        "Koffee Kölsch: 4.27",
        "Tower Station IPA: 4.19",
        "Sarcosuchus Double IPA: 4.41",
        "Dragoon IPA: 4.13",
        "Tombstone Brewing IPA: 4.39",
        "Candy Bar Milk Stout: 4.23",
        "Refuge IPA: 4.08",
      ],
    },
    {
      state: "Arkansas",
      list: [
        "BDCS: 4.52",
        "Onyx Coffee Stout: 4.37",
        "Nighty Night: 4.28",
        "Trash Panda IPA: 4.26",
        "Double IPA: 4.25",
        "Snake Party: 4.13",
        "Cream Stout: 4.02",
        "Bourbon Love Honey (Barrel-Aged Bock): 4.22",
        "IPA: 4.02",
        "American Pale Ale: 3.95",
      ],
    },
    {
      state: "California",
      list: [
        "Pliny The Yonger: 4.75",
        "Fundamental Observation: 4.72",
        "Pliny The Elder: 4.69",
        "Parabola: 4.65",
        "Duck Duck Gooze: 4.66",
        "Speedway Stout - Vietnamese Coffee - Bourbon-Barrel Aged: 4.67",
        "Westly: 4.69",
        "Cable Car: 4.62",
        "Supplication: 4.60",
        "Citra: 4.61",
      ],
    },
    {
      state: "Colorado",
      list: [
        "Ten FIDY - Bourbon Barrel Aged: 4.48",
        "Leaner: 4.58",
        "Tweak: 4.47",
        "Medianoche - Coconut: 4.61",
        "Uncle Jacob's Stout: 4.44",
        "The Cut - Sour Belaton Cherry: 4.57",
        "Ten FIDY: 4.4",
        "Nightmare on Brett: 4.39",
        "Bligh's Barleywine Ale: 4.39",
        "Persica: 4.44",
      ],
    },
    {
      state: "Conneticut",
      list: [
        "Fuzzy Baby Ducks: 4.50",
        "Locust Reign: 4.49",
        "G-Bot: 4.41",
        "Coriolis: 4.43",
        "Double Fuzzy Baby Ducks: 4.42",
        "Supernaut: 4.35",
        "Super Supernaut: 4.45",
        "Galaxy Pale Ale: 4.28",
        "Dogs & Boats: 4.28",
        "Hobbit Juice: 4.28",
      ],
    },
    {
      state: "Delaware",
      list: [
        "Bourbon Barrel-Aged World Wide Stout: 4.41",
        "90 Minute IPA: 4.30",
        "World Wide Stout: 4.28",
        "Burton Baton: 4.25",
        "Palo Santo Marron: 4.22",
        "Miles Davis' Bitches Brew: 4.21",
        "120 Minute IPA: 4.18",
        "Squall IPA: 4.16",
        "75 Minute IPA: 4.13",
        "Palo Santo Marron - Bourbon Barrel-Aged: 4.34",
      ],
    },
    {
      state: "District of Columbia",
      list: [
        "On The Wings Of Armageddon: 4.34",
        "Solar Abyss: 4.33",
        "Yonder Cities: 4.23",
        "Smells Like Freedom: 4.15",
        "Kick.Kick.Snare: 4.19",
        "Desolation: 4.11",
        "Diamonds, Fur Coat, Champagne: 4.10",
        "Lost Weekend: 4.04",
        "Space Reaper: 4.05",
        "The Jam: 4.11",
      ],
    },
    {
      state: "Florida",
      list: [
        "Hunahpu's Imperial Stout - Double Barrel Aged: 4.79",
        "Barrel Aged Imperial German Chocolate Cupcake Stout: 4.74",
        "Morning Wood: 4.66",
        "Hunahpu's Imperial Stout: 4.62",
        "It Was All A Dream: 4.73",
        "Miami Madness: 4.59",
        "Last Buffalow In The Park: 4.56",
        "Wide Awake It's Morning: 4.55",
        "Last Snow: 4.50",
        "DFPF: 4.53",
      ],
    },
    {
      state: "Georgia",
      list: [
        "Tropicália: 4.38",
        "Mexican Siberius Maximus: 4.60",
        "Cosmik Debris: 4.37",
        "Wake-n-Bake Coffee Oatmeal Imperial Stout: 4.30",
        "Cinnamon Roll'd WnB Oatmeal Stout: 4.31",
        "Duende: 4.45",
        "Southerly Love: 4.34",
        "Existence: 4.56",
        "Didjits: 4.28",
        "Athena Paradiso - Tart Cherry, Raspberry Cranberry: 4.32",
      ],
    },
    {
      state: "Hawaii",
      list: [
        "Imperial Coconut Porter: 4.26",
        "Double Overhead Double IPA: 4.06",
        "Da Grind Buzz: 4.13",
        "Black Pearl: 4.14",
        "Mosaic Mo Betta: 4.07",
        "Coconut Hiwa Porter: 3.96",
        "Red Sea Of Cacao: 4.12",
        "Freight Train IPA: 4.21",
        "Tall, Dark, & Mandarin: 4.23",
        "White Mountain Porter: 3.96",
      ],
    },
    {
      state: "Idaho",
      list: [
        "Double Vision Doppelbock: 4.18",
        "Sheep Eater Scotch Ale: 4.10",
        "5 O'Clock Shadow: 4.08",
        "Trout Hop Black IPA: 4.05",
        "Ada County: 4.37",
        "Wake Up Call Imperial Coffee Porter: 4.04",
        "Pursuit of Happiness: 3.99",
        "Barrel Aged Seven Devils Imperial Stout (Brewers' Private Reserve): 4.27",
        "XX Bitch Creek: 4.01",
        "Black Cauldron Imperial Stout: 3.95",
      ],
    },
    {
      state: "Illinois",
      list: [
        "Bourbon County Brand Stout: 4.66",
        "Bourbon County Brand Vanilla Stout: 4.64",
        "V.S.O.J.: 4.69",
        "Clare's Thirsty Ale: 4.54",
        "Emerald Grouper: 4.49",
        "Sure Bet: 4.47",
        "Barrel Aged The Jones Dog: 4.45",
        "Citra: 4.42",
        "Crimson Snapper: 4.43",
        "Wooden Hell: 4.47",
      ],
    },
    {
      state: "Indiana",
      list: [
        "Marshmallow Handjee: 4.81",
        "Zombie Dust: 4.63",
        "Chemtrailmix: 4.72",
        "BBADL (Bourbon Barrel Aged Dark Lord Imperial Stout): 4.61",
        "Permanent Funeral: 4.52",
        "Dreadnaught IPA: 4.42",
        "Rue D'Floyd: 4.47",
        "Pawpaw: 4.49",
        "Dark Lord Imperial Stout: 4.36",
        "Bitches' Bank: 4.43",
      ],
    },
    {
      state: "Iowa",
      list: [
        "Kentucky Brunch Brand Stout: 4.90",
        "Mornin' Delight: 4.76",
        "SR-71: 4.77",
        "Assassin: 4.70",
        "King Sue: 4.62",
        "Pseudo Sue - Double Dry-Hopped: 4.56",
        "Pseudo Sue: 4.52",
        "Sosus: 4.49",
        "Supa' Sumo: 4.43",
        "XHops: 4.41",
      ],
    },
    {
      state: "Kansas",
      list: [
        "Old Backus Barleywine: 4.24",
        "Owd Mac's Imperial Stout: 4.18",
        "Awesomeness: 4.30",
        "Fuzzy Knuckles: 4.11",
        "No. 06 Oatmeal Stout: 4.18",
        "Valleyview Vanilla Porter: 4.07",
        "No. 50 Liberty Stout: 4.17",
        "Yakimaniac: 3.97",
        "Josiah Miller IPA: 4.09",
        "Stormwatch Ale: 4.06",
      ],
    },
    {
      state: "Kentucky",
      list: [
        "70K: 4.32",
        "Bo & Luke: 4.28",
        "Snake Cake: 4.47",
        "London Balling: 4.18",
        "Baba Yaga: 4.56",
        "Infinite Sadness: 4.33",
        "Snakes In A Barrel: 4.26",
        "Heller Heaven Double IPA: 4.09",
        "Rico Sauvin: 4.04",
        "James E. Pepper 1776 American Brown Ale: 4.06",
      ],
    },
    {
      state: "Louisiana",
      list: [
        "Ghost In The Machine - Double Dry-Hopped: 4.63",
        "Ghost In The Machine: 4.48",
        "Rêve: 4.44",
        "Nova Vert: 4.37",
        "Attacus Atlas: 4.37",
        "Bloom: 4.32",
        "Grace and Grit: 4.26",
        "Envie - 4XDH: 4.41",
        "Jucifer: 4.24",
        "Grand Reserve: 4.23",
      ],
    },
    {
      state: "Maine",
      list: [
        "Dinner: 4.66",
        "Swish: 4.60",
        "Coolship Red: 4.48",
        "Epiphany: 4.44",
        "Coolship Resurgam: 4.44",
        "Nothing Gold: 4.45",
        "Lunch: 4.39",
        "Farm To Face: 4.40",
        "Reciprocal: 4.40",
        "Mattina Rossa: 4.38",
      ],
    },
    {
      state: "Maryland",
      list: [
        "Double Duckpin: 4.26",
        "Hyde: 4.31",
        "10 Layer: 4.32",
        "Brewtus: 4.20",
        "1st Meal: 4.32",
        "Gonzo - Barrel-Aged: 4.15",
        "Citralaxy: 4.31",
        "J.R.E.A.M. - Blackberry Cobbler: 4.51",
        "On Fleek: 4.14",
        "Retribution: 4.14",
      ],
    },
    {
      state: "Massachusetts",
      list: [
        "King Julius: 4.76",
        "King JJJuliusss: 4.77",
        "Very Hazy: 4.75",
        "Juice Machine: 4.71",
        "Very Green: 4.70",
        "Julius: 4.68",
        "JJJuliusss: 4.68",
        "Doubleganger: 4.64",
        "Very GGGreennn: 4.77",
        "Headroom: 4.64",
      ],
    },
    {
      state: "Michigan",
      list: [
        "CBS (Canadian Breakfast Stout): 4.70",
        "KBS (Kentucky Breakfast Stout): 4.65",
        "Fourth Dementia - Bourbon Barrel-Aged: 4.59",
        "Black Note Stout: 4.57",
        "Breakfast Stout: 4.55",
        "Bourbon Barrel Aged Plead The 5th: 4.55",
        "No Rules: 4.52",
        "Hopslam Ale: 4.49",
        "Expedition Stout - Bourbon Barrel-Aged: 4.49",
        "Rye Hipster Brunch Stout: 4.47",
      ],
    },
    {
      state: "Minnesota",
      list: [
        "Abrasive Ale: 4.52",
        "Darkness: 4.51",
        "Barrel-Aged Silhouette: 4.52",
        "Axe Man: 4.45",
        "Darkness - Bourbon Barrel-Aged: 4.5",
        "Barrel Aged Double Shot Double Black: 4.48",
        "Nillerzzzzz: 4.65",
        "Three Hour Tour: 4.45",
        "Czar Jack Imperial Stout: 4.40",
        "Russian Roulette: 4.51",
      ],
    },
    {
      state: "Mississippi",
      list: [
        "Crowd Control: 4.24",
        "Paradise Lost: 4.27",
        "Testify: 4.16",
        "Hex Clouds: 4.26",
        "Crowd Control - Double Dry-Hopped: 4.42",
        "Barley Legal - Barrel-Aged: 4.17",
        "Selfie Destruct: 4.29",
        "Răgana - Barrel-Aged: 4.30",
        "Timber Beast: 3.98",
        "Mississippi Fire Ant: 4.10",
      ],
    },
    {
      state: "Missouri",
      list: [
        "Barrel-Aged Abraxas: 4.79",
        "Fuzzy: 4.65",
        "Framboise Du Fermier: 4.70",
        "Maman: 4.66",
        "Anabasis: 4.73",
        "Abricot Du Fermier: 4.62",
        "Saison Du Fermier: 4.58",
        "Abraxas: 4.50",
        "La Fosse: 4.54",
        "Coffee Abraxas: 4.50",
      ],
    },
    {
      state: "Montana",
      list: [
        "Ivan The Terrible Imperial Stout - Barrel-Aged: 4.28",
        "Tumbleweed IPA: 4.19",
        "Olde Bluehair Barley Wine: 4.04",
        "Single Malt IPA: 4.12",
        "Ivan The Terrible Imperial Stout: 4.00",
        "De-Railed IPA: 4.22",
        "Teddy Roosevelt American Badass: 4.22",
        "Scepter: 4.07",
        "Last Cast Black IPA: 4.14",
        "Cold Smoke Scotch Ale: 3.96",
      ],
    },
    {
      state: "Nebraska",
      list: [
        "Melange A Trois - Reserve Series Aged in French Oak Chardonnay Barrels: 4.16",
        "HopAnomaly - Reserve Series Aged in French Oak Chardonnay Barrels: 4.13",
        "Black Betty Imperial Stout - Whiskey Barrel-Aged: 4.11",
        "India Pale Ale: 4.20",
        "Double IPA: 4.21",
        "DAAANG! IPA: 4.17",
        "Carpe Brewem Imperial Mango IPA: 4.10",
        "Fairy Nectar London - DDH: 4.26",
        "Champurrado Stout: 4.41",
        "Mosaic Citra THAT!: 4.49",
      ],
    },
    {
      state: "Nevada",
      list: [
        "Disco Ninja: 4.21",
        "Reno As Fuck: 4.23",
        "Battle Of The Lords: 4.23",
        "Dr. Lupulin 3x IPA: 4.18",
        "Planet Lovetron: 4.23",
        "Planetary Fog: 4.21",
        "The Bruff: 4.21",
        "Trying To Get My Aroma, Bro: 4.27",
        "Morning Joe: 4.22",
        "State of Haze: 4.20",
      ],
    },
    {
      state: "New Hampshire",
      list: [
        "Hopulization: 4.38",
        "Stoneface RIS: 4.38",
        "Stoneface IPA: 4.30",
        "Portsmouth Royal Impy Stout: 4.38",
        "Vinatta Russian Imperial Stout: 4.45",
        "Smuttynose Baltic Porter: 4.27",
        "Mozaccalypse: 4.26",
        "Vendel Imperial Stout: 4.32",
        "Double Clip: 4.36",
        "Robust Porter: 4.15",
      ],
    },
    {
      state: "New Jersey",
      list: [
        "Sunday Brunch: 4.57",
        "Mexican Brunch: 4.57",
        "A Night To End All Dawns: 4.43",
        "Cafe Y Churro: 4.43",
        "Morning Bell: 4.34",
        "Overhead: 4.31",
        "Sneak Box: 4.33",
        "Mexican Brunch - Bourbon Barrel-Aged: 4.53",
        "077XX: 4.26",
        "Party Wave: 4.36",
      ],
    },
    {
      state: "New Mexico",
      list: [
        "Project Dank: 4.42",
        "Elevated IPA: 4.34",
        "Father Nelson: 4.37",
        "Full Nelson: 4.37",
        "Cafe Con Leche: 4.29",
        "Bourbon Barrel Imperial Stout: 4.19",
        "Malpais Stout: 4.13",
        "Scale Tipper IPA: 4.26",
        "Imperial Java Stout: 4.07",
        "Marble IPA: 4.07",
      ],
    },
    {
      state: "New York",
      list: [
        "Double Dry Hopped Double Mosaic Dream: 4.55",
        "4th Anniversary: 4.61",
        "3rd Anniversary Imperial IPA: 4.58",
        "Imperial Biscotti Break - Bourbon Barrel-Aged: 4.52",
        "Double Dry Hopped Mylar Bags: 4.55",
        "Double Dry Hopped Double Mosaic Daydream: 4.54",
        "Double Barrel Jesus: 4.51",
        "Double Dry Hopped All Citra Everything: 4.51",
        "Double Dry Hopped Double Citra Daydream: 4.50",
        "Triple Citra Daydream: 4.54",
      ],
    },
    {
      state: "North Carolina",
      list: [
        "Citraquench'l: 4.54",
        "Snozzberry: 4.50",
        "Red Angel: 4.46",
        "The Event Horizon: 4.38",
        "Barrel Aged Sexual Chocolate: 4.38",
        "Olde Rabbit's Foot: 4.37",
        "Bootsy: 4.46",
        "Angel of Darkness: 4.41",
        "Golden Angel: 4.37",
        "Framboos Morte: 4.42",
      ],
    },
    {
      state: "North Dakota",
      list: [
        "Freak Parade: 4.29",
        "Ectogasm: 4.22",
        "King Of The Thing: 4.31",
        "Multiple Ectogasms: 4.30",
        "Loki Is My Home Boy: 4.25",
        "Hyper Scream: 4.28",
        "Blacklight Syndicate: 4.25",
        "1.21 Gigahops: 4.23",
        "Phantom Hand: 4.11",
        "Thor Is My Co-Pilot: 4.18",
      ],
    },
    {
      state: "Ohio",
      list: [
        "Bodhi: 4.48",
        "Bourbon Barrel Oro Negro: 4.50",
        "Hop Juju Imperial IPA: 4.47",
        "Bourbon Barrel Black Maple: 4.48",
        "Bourbon Barrel Champion Ground: 4.49",
        "Appervation: 4.53",
        "Dragonsaddle: 4.50",
        "Nut Smasher: 4.47",
        "Oro Negro: 4.43",
        "Wulver: 4.38",
      ],
    },
    {
      state: "Oklahoma",
      list: [
        "Bourbon Paradise: 4.59",
        "Pirate Bomb!: 4.54",
        "Bomb!: 4.53",
        "Pirate Paradise: 4.60",
        "Apple Brandy Barrel Noir: 4.50",
        "Barrel Aged Bomb!: 4.49",
        "Barrel Aged Christmas Bomb!: 4.53",
        "Bible Belt - Barrel-Aged: 4.44",
        "Birthday Bomb!: 4.38",
        "Barrel-Aged Birthday Bomb!: 4.43",
      ],
    },
    {
      state: "Oregon",
      list: [
        "Nectarine Permiere: 4.65",
        "The Broken Truck: 4.63",
        "Notorious Tripe IPA: 4.57",
        "The Peach: 4.61",
        "Double Stack: 4.54",
        "The Abyss: 4.50",
        "Adam From The Wood: 4.50",
        "Matt: 4.50",
        "Mother Of All Storms: 4.48",
        "Sang Noir: 4.47",
      ],
    },
    {
      state: "Pennsylvania",
      list: [
        "Grand Negro Voodoo Papi - Bourbon Barrel-Aged: 4.63",
        "Le Roar Grrrz: 4.49",
        "Sunny Side Up (Little Amps! Double Coffee): 4.39",
        "Le Roar Grrz Kriek: 4.44",
        "Albatross: 4.55",
        "Sunday Morning Stout: 4.35",
        "Cowbell Imperial Oatmeal Milk Stout: 4.39",
        "Nugget Nectar: 4.33",
        "Alien Church: 4.35",
        "MagoTago: 4.37",
      ],
    },
    {
      state: "Rhode Island",
      list: [
        "The Chosen One: 4.47",
        "The Other One: 4.45",
        "Captain's Daughter: 4.32",
        "Derivative - Galaxy: 4.31",
        "Derivative - Citra: 4.32",
        "Milo's Phoenix: 4.35",
        "Cactus: 4.34",
        "Violet: 4.31",
        "The Stalk: 4.26",
        "The Chosen One (Double Dry-Hopped): 4.62",
      ],
    },
    {
      state: "South Carolina",
      list: [
        "Mexican Cake - Maple Bourbon Barrel-Aged: 4.61",
        "Mexican Cake: 4.42",
        "Mexican Cake - Bourbon Barrel-Aged: 4.51",
        "Mexican Coffee Cake: 4.46",
        "Boy King Double IPA: 4.30",
        "Key Lime Pie Gose: 4.26",
        "Black Xantus: 4.22",
        "Gozu: 4.24",
        "Gose: 4.21",
        "Sungazer: 4.38",
      ],
    },
    {
      state: "South Dakota",
      list: [
        "Wagonplane Porter: 3.94",
        "Bruce Banner APA: 3.95",
        "Lord Grizzly: 3.92",
        "Milk Stout: 3.85",
        "Knuckle Head Red: 3.78",
        "Naughty Redhead Imperial Red Ale: 3.77",
        "Hot Mama: 3.75",
        "Pile O' Dirt Porter: 3.76",
        "Buffalo Bitter: 3.73",
        "Wobbling Wheel: 3.71",
      ],
    },
    {
      state: "Tennessee",
      list: [
        "Astronaut Status: 4.40",
        "Attention Please: 4.42",
        "Homestyle: 4.25",
        "Double Homestyle: 4.31",
        "Chief Of Chiefs - Double Dry-Hopped: 4.34",
        "Embrace The Funk - Deux Rouges: 4.28",
        "Attention Please - DDH W/ Vic Secret & Mosaic: 4.41",
        "Double Scatterbrain - DDH W/ Citra: 4.27",
        "Sue: 4.14",
        "DDH Tunnel Vision: 4.30",
      ],
    },
    {
      state: "Texas",
      list: [
        "Atrial Rubicite: 4.62",
        "Montmorency Vs Balaton: 4.53",
        "Aurelian Lure: 4.51",
        "Yellow Rose: 4.43",
        "Bière De Blanc Du Bois: 4.45",
        "HefeWeizen: 4.37",
        "Omniscience & Proselytism: 4.39",
        "Bière De Syrah: 4.45",
        "分 桃 (Fēn Táo): 4.37",
        "Bourbon Barrel Temptress: 4.39",
      ],
    },
    {
      state: "Utah",
      list: [
        "Big Bad Baptista: 4.42",
        "Big Bad Baptist: 4.39",
        "Big Bad Baptist - Double Barrel: 4.36",
        "Crooked Line - Labyrinth Black Ale: 4.27",
        "Son Of A Baptist: 4.17",
        "Big Bad Baptist Reserve: 4.31",
        "Dubhe: 4.14",
        "Big Bad Baptist - Quintuple Barrel: 4.27",
        "Big Bad Baptist - Vanilla Brandy: 4.23",
        "Elder Brett: 4.06",
      ],
    },
    {
      state: "Vermont",
      list: [
        "Heady Topper: 4.76",
        "Double Sunshine: 4.68",
        "Abner: 4.67",
        "Ann: 4.68",
        "Double Citra®: 4.62",
        "Double Galaxy: 4.62",
        "Focal Banger: 4.60",
        "Aaron: 4.63",
        "Sip Of Sunshine: 4.59",
        "Society & Solitude #4: 4.60",
      ],
    },
    {
      state: "Virginia",
      list: [
        "Double Orange Starfish: 4.49",
        "Trickery: 4.47",
        "Kentucky Christmas Morning: 4.47",
        "Master of Karate: 4.46",
        "Foolery: 4.49",
        "Orange Starfish: 4.44",
        "Mind The Hop: 4.42",
        "whiteferrari: 4.44",
        "Bourbon GBS (Gingerbread Stout): 4.37",
        "Crucial Taunt: 4.37",
      ],
    },
    {
      state: "Washington",
      list: [
        "Coffee Cinnamon B-Bomb: 4.57",
        "The Rusty Nail: 4.57",
        "Bourbon Barrel Aged Dark Star: Coffe Edition: 4.52",
        "Coconut B-Bonb: 4.53",
        "Peche 'n Brett': 4.47",
        "Bourbon Barrel Aged Dark Star: 4.45",
        "B-Bomb (Bourbon Abominable Winter Ale): 4.44",
        "Midnight Still: 4.54",
        "Cowiche Canyon Organic Fresh Hop Ale: 4.40",
        "Bourbon Barrel Aged Dark Star - Spice Wars: 4.38",
      ],
    },
    {
      state: "West Virginia",
      list: [
        "Halleck Pale Ale: 4.34",
        "Devil Anse IPA: 4.07",
        "Coffee Stout: 4.22",
        "Holy Citra DIPA: 4.40",
        "Triple: 4.18",
        "5-Way IPA: 4.16",
        "Big Timber Porter: 3.96",
        "Double Bit: 4.12",
        "Nate's Nut Brown Ale: 4.16",
        "South Park Porter: 4.20",
      ],
    },
    {
      state: "Wisconsin",
      list: [
        "Black Gold: 4.57",
        "Wisconsin Belgian Red: 4.42",
        "Raspberry Tart: 4.41",
        "Serendipity: 4.38",
        "Thumbprint Wild Sour Ale: 4.39",
        "Frampears: 4.50",
        "Strawberry Rhubarb: 4.35",
        "Brewer's Reserve Bourbon Barrel Cassian Sunset: 4.36",
        "Brewer's Reserve Bourbon Barrel Barleywine: 4.34",
        "Thumbprint Scream IIPA: 4.34",
      ],
    },
    {
      state: "Wyoming",
      list: [
        "2x4 DIPA: 4.30",
        "Asterisk IIPA: 4.28",
        "Citradamus IIPA: 4.26",
        "Zonker Stout: 4.19",
        "Melvin IPA: 4.18",
        "Hubert: 4.14",
        "Drunken Master IIPA: 4.15",
        "Le Serpent: 4.29",
        "Hop Shocker: 4.18",
        "Chuck Morris: 4.15",
      ],
    },
  ];

  var imgArray = new Array();

  imgArray[0] = new Image();
  imgArray[0].src = "states/alabama.png";

  imgArray[1] = new Image();
  imgArray[1].src = "states/alaska.png";

  imgArray[2] = new Image();
  imgArray[2].src = "states/arizona.png";

  imgArray[3] = new Image();
  imgArray[3].src = "states/arkansas.png";

  imgArray[4] = new Image();
  imgArray[4].src = "states/california.png";

  imgArray[5] = new Image();
  imgArray[5].src = "states/colorado.png";

  imgArray[6] = new Image();
  imgArray[6].src = "states/connecticut.png";

  imgArray[7] = new Image();
  imgArray[7].src = "states/delaware.png";

  imgArray[8] = new Image();
  imgArray[8].src = "states/.png";

  imgArray[9] = new Image();
  imgArray[9].src = "states/florida.png";

  imgArray[10] = new Image();
  imgArray[10].src = "states/georgia.png";

  imgArray[11] = new Image();
  imgArray[11].src = "states/hawaii.png";

  imgArray[12] = new Image();
  imgArray[12].src = "states/idaho.png";

  imgArray[13] = new Image();
  imgArray[13].src = "states/illinois.png";

  imgArray[14] = new Image();
  imgArray[14].src = "states/indiana.png";

  imgArray[15] = new Image();
  imgArray[15].src = "states/iowa.png";

  imgArray[16] = new Image();
  imgArray[16].src = "states/kansas.png";

  imgArray[17] = new Image();
  imgArray[17].src = "states/kentucky.png";

  imgArray[18] = new Image();
  imgArray[18].src = "states/louisiana.png";

  imgArray[19] = new Image();
  imgArray[19].src = "states/maine.png";

  imgArray[20] = new Image();
  imgArray[20].src = "states/maryland.png";

  imgArray[21] = new Image();
  imgArray[21].src = "states/massachusetts.png";

  imgArray[22] = new Image();
  imgArray[22].src = "states/michigan.png";

  imgArray[23] = new Image();
  imgArray[23].src = "states/minnesota.png";

  imgArray[24] = new Image();
  imgArray[24].src = "states/mississippi.png";

  imgArray[25] = new Image();
  imgArray[25].src = "states/missouri.png";

  imgArray[26] = new Image();
  imgArray[26].src = "states/montana.png";

  imgArray[27] = new Image();
  imgArray[27].src = "states/nebraska.png";

  imgArray[28] = new Image();
  imgArray[28].src = "states/nevada.png";

  imgArray[29] = new Image();
  imgArray[29].src = "states/new-hampshire.png";

  imgArray[30] = new Image();
  imgArray[30].src = "states/new-jersey.png";

  imgArray[31] = new Image();
  imgArray[31].src = "states/new-mexico.png";

  imgArray[32] = new Image();
  imgArray[32].src = "states/new-york.png";

  imgArray[33] = new Image();
  imgArray[33].src = "states/north-carolina.png";

  imgArray[34] = new Image();
  imgArray[34].src = "states/north-dakota.png";

  imgArray[35] = new Image();
  imgArray[35].src = "states/ohio.png";

  imgArray[36] = new Image();
  imgArray[36].src = "states/oklahoma.png";

  imgArray[37] = new Image();
  imgArray[37].src = "states/oregon.png";

  imgArray[38] = new Image();
  imgArray[38].src = "states/pennsylvania.png";

  imgArray[39] = new Image();
  imgArray[39].src = "states/rhode-island.png";

  imgArray[40] = new Image();
  imgArray[40].src = "states/south-carolina.png";

  imgArray[41] = new Image();
  imgArray[41].src = "states/south-dakota.png";

  imgArray[42] = new Image();
  imgArray[42].src = "states/tennessee.png";

  imgArray[43] = new Image();
  imgArray[43].src = "states/texas.png";

  imgArray[44] = new Image();
  imgArray[44].src = "states/utah.png";

  imgArray[45] = new Image();
  imgArray[45].src = "states/vermont.png";

  imgArray[46] = new Image();
  imgArray[46].src = "states/virginia.png";

  imgArray[47] = new Image();
  imgArray[47].src = "states/washington.png";

  imgArray[48] = new Image();
  imgArray[48].src = "states/west-virginia.png";

  imgArray[49] = new Image();
  imgArray[49].src = "states/wisconsin.png";

  imgArray[50] = new Image();
  imgArray[50].src = "states/wyoming.png";

  userStateDropdownSelection = stateLocalStorage;
  userBrandSearchInput = brandLocalStorage;

  getBreweryDetails();

  $("select").on("change", function () {
    console.log(this.value, stateRatings[this.value]);
    $("#state").text(stateRatings[this.value].state);
    var listHTML = "";
    for (let i = 0; i < 10; i++) {
      listHTML += `<p>${stateRatings[this.value].list[i]}</p>`;
    }
    $("#list").html(listHTML);
  });

  $("select").on("change", function () {
    console.log(this.value, imgArray[this.value]);
    $("#state").html(imgArray[this.value]);

    var img = document.getElementById("#statePic");

    for (var i = 0; i < imgArray.length; i++) {
      if (imgArray[i] == img) {
        if (i == imgArray.length) {
          var j = 0;
          document.getElementById("#statePic").src = imgArray[j].src;
          break;
        } else var j = i + 1;
        document.getElementById("#statePic").src = imgArray[j].src;
        break;
      }
    }
    $("#statePic").html(img);
  });

  $(".stateBtn").change(function (event) {
    event.preventDefault();
    $(".cardDiv").empty();

    userStateDropdownSelection = $("#inputState option:selected").text();
    userBrandSearchInput = $("#brandSearchInput").val();

    window.localStorage.setItem(
      "userStateDropdownSelection",
      userStateDropdownSelection
    );
    window.localStorage.setItem("userBrandSearchInput", userBrandSearchInput);

    getBreweryDetails();
  });

  $(".brandBtn").click(function (event) {
    event.preventDefault();

    $(".cardDiv").empty();

    userBrandSearchInput = $("#brandSearchInput").val();

    window.localStorage.setItem("userBrandSearchInput", userBrandSearchInput);

    getBreweryDetails();
  });

  function getBreweryDetails() {
    var queryURL =
      "https://api.openbrewerydb.org/breweries?by_name=" +
      userBrandSearchInput +
      "&by_state=" +
      userStateDropdownSelection +
      "&sort=+name&per_page=15";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response.length);
      console.log(response);

      for (let i = 0; i < response.length; i++) {
        responseBreweryCity = response[i].city;
        responseBreweryState = response[i].state;

        $(".cardDiv").append(`
                
                    <div class="card">
                        <div class="card-divider">
                        <h4>${response[i].name}</h4>
                        </div>

                        <div class="card-section">
                            <h5>Located at: <h5>
                            <div>${response[i].street}</div>
                            <div>${response[i].city}, ${response[i].state}</div>
                            <div>${response[i].brewery_type}</div>
                            <h6>${response[i].website_url}</h6>


                            </div>
                    </div>

                `);

        getCovidReport();
      }
    });
  }

  function getCovidReport() {
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "https://covid-19-statistics.p.rapidapi.com/reports?region_province=" +
        responseBreweryState +
        "&iso=USA&region_name=US&city_name=" +
        responseBreweryCity +
        "&q=US%20" +
        responseBreweryState,
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
        "x-rapidapi-key": "aa9315e3c9msh7e70db338b431dbp1dae55jsn19c615063e3f",
      },
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      console.log(JSON.stringify(response));

      $(".covidData").append(`
                <div>No. of confirmed Covid cases in state: ${response.data[0].confirmed}</div>
            `);
    });
  }
});
