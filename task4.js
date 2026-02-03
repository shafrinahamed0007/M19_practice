/**
 * You are given an array of phone objects, each containing information about the model, brand, and price.
 * Your task is to write a JavaScript function named findAveragePhonePrice that this array as input and returns
 * the average price of phone.
 */

function findAveragePhonePrice(phones) {
  let price = 0;
  for (let phone of phones) {
    price = price + phone.price;
  }
  let averagePrice = price / phones.length;
  return averagePrice.toFixed(2);
}

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

const phonesDetails = findAveragePhonePrice(phones);
console.log("All Phone Average Price: ", phonesDetails, "TK");
