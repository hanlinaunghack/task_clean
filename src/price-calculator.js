// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product
var calculatePrice = function(userType, productType, price, publishedDate) {
  try {
    //new product type: 0, old product type: 1
    price += 25 + 10 * productType;

    //normal user: 0 gets 0 SEK, company user: 1 gets 5 SEK rebate
    price -= 5 * userType;

    //new product: 0 and published date is today gets 10 SEK rebate, old product: 1
    if (
      productType === 0 &&
      publishedDate.toDateString() === new Date().toDateString()
    )
      price -= 10;
    return price;
  } catch (ex) {
    console.log(ex);
  }
  return 0;
};
/*
  Instead of using switch cases I used multiplication because there are only 2 types of products
  In the future if there are going to be more types of products, we can create a class and instantiate from the prototype
*/
