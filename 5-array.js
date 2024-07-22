let fruits = ["kiwi", "app", "banana"]
//console.log("before", fruits[1]);
fruits[1] = "apple"
//console.log("after", fruits[1]);


let fruit1 = {
  name: "kiwi",
  scientificName: "k-wrong-xyz",
  price: {
    nepal: 100,
    aus: 20,
    cad: 15,
    uk: 11,

  },
}
/*  another way */
fruit1 = {
  name: "kiwi",
  scientificName: "k-wrong-xyz",
  rates: [
    {
      country: "nepal",
      rate: 100, //change this to 300
    },
    {
      country: "aus",
      rate: 20,
    },
    {
      country: "cad",
      rate: 15,
    },
    {
      country: "uk",
      rate: 11,
    },

  ],
}


/* console.log(fruit1.rates[0].rate);
fruit1.rates[0].rate = 300
console.log(fruit1.rates[0].rate); */

/* console.log("before", fruit1);
fruit1.scientificName = "k-right-xyz"
console.log("after", fruit1); */

let backendResponse = {
  msg: "success",
  result: {
    total: 2,
    data: [
      {
        name: "kiwi",
        scientificName: "k-wrong-xyz",
        rates: [
          {
            country: "nepal",
            rate: 100, //change this to 600
          },
          {
            country: "aus",
            rate: 25,
          },
          {
            country: "china",
            rate: 555,
          },
          {
            country: "cad",
            rate: 35,
          },
          {
            country: "uk",
            rate: 15,
          },

        ],
      },
    ]

  },
}




console.log("before",backendResponse);

backendResponse.result.data[0].rates[0].rate = 600;

console.log("after", backendResponse);










