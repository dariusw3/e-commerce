const SHOP_DATA = {
  hats: {
    id: 1,
    title: "Hoodies",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl:
          "https://img.gymshark.com/image/fetch/q_auto,f_auto,w_600/https://cdn.shopify.com/s/files/1/1367/5207/products/ELEMENTBASELAYERLSTOPWHITE.A-Edit_ZH.jpg?v=1611320761",
        price: 25,
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl:
          "https://img.gymshark.com/image/fetch/q_auto,f_auto,w_600/https://cdn.shopify.com/s/files/1/1367/5207/products/CREST_PULLOVER_-_BLACK.A-Edit_ZH.jpg?v=1581332750",
        price: 18,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl:
          "https://img.gymshark.com/image/fetch/q_auto,f_auto,w_600/https://cdn.shopify.com/s/files/1/1367/5207/products/CRESTSWEATSHIRTBLACK.A-Edit_AS.jpg?v=1612178317",
        price: 35,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl:
          "https://img.gymshark.com/image/fetch/q_auto,f_auto,w_600/https://cdn.shopify.com/s/files/1/1367/5207/products/POWERZIPHOODIE-ATHLETICMARL.A-Edit_ZH.jpg?v=1611243798",
        price: 25,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl:
          "https://img.gymshark.com/image/fetch/q_auto,f_auto,w_600/https://cdn.shopify.com/s/files/1/1367/5207/products/Critical_Zip_Hoodie_Black_A.jpg?v=1571302467",
        price: 18,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl:
          "https://img.gymshark.com/image/fetch/q_auto,f_auto,w_600/https://cdn.shopify.com/s/files/1/1367/5207/products/APEXPERFORMZIPUPHOODIECHARCOALGREY-LIMEGREEN15404.A-Edit_ZH.jpg?v=1607006906",
        price: 14,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18,
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 16,
      },
    ],
  },
  sneakers: {
    id: 2,
    title: "T-shirts",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl:
          "https://img.gymshark.com/image/fetch/q_auto,f_auto,w_600/https://cdn.shopify.com/s/files/1/1367/5207/products/SPEEDT-SHIRTBLACK.A-Edit_AS.jpg?v=1609752520",
        price: 220,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl:
          "https://img.gymshark.com/image/fetch/q_auto,f_auto,w_600/https://cdn.shopify.com/s/files/1/1367/5207/products/SPEEDT-SHIRTNAVY.A-Edit_AS.jpg?v=1609752530",
        price: 280,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl:
          "https://img.gymshark.com/image/fetch/q_auto,f_auto,w_600/https://cdn.shopify.com/s/files/1/1367/5207/products/Critical_SS_T-Shirt_White_A-Edit_ZH.jpg?v=1571302466",
        price: 110,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl:
          "https://img.gymshark.com/image/fetch/q_auto,f_auto,w_600/https://cdn.shopify.com/s/files/1/1367/5207/products/ARRIVAL_SS_T-SHIRT_-_WHITE.A-Edit_ZH.jpg?v=1587380081",
        price: 160,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl:
          "https://img.gymshark.com/image/fetch/q_auto,f_auto,w_600/https://cdn.shopify.com/s/files/1/1367/5207/products/Critical_T_Shirt_Black_A-Edit_ZH.jpg?v=1571302473",
        price: 160,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200,
      },
    ],
  },
  jackets: {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 125,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 90,
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 90,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 165,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185,
      },
    ],
  },
  womens: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25,
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 20,
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 80,
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 80,
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45,
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135,
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20,
      },
    ],
  },
  mens: {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325,
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
    ],
  },
};

export default SHOP_DATA;
