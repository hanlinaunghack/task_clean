// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product

describe("Old Product price calculator for different users", function() {
  let price = 1;
  let productType = 1;
  let publishedDate = new Date();
  it("normal user, old product, calculate right price", function() {
    let userType = 0;
    let expected = price + 35;
    let actual = calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });

  it("company user, old product, calculate right price", function() {
    let userType = 1;
    let expected = price + 35 - 5;
    let actual = calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
});

describe("New Product price calculator for different users", function() {
  let price = 1;
  let productType = 0;

  it("normal user, new product, published today, calculate right price", function() {
    let userType = 0;
    let expected = price + 25 - 10;
    let publishedDate = new Date();
    let actual = calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });

  it("company user, new product, published today, calculate right price", function() {
    let userType = 1;
    let expected = price + 25 - 10 - 5;
    let publishedDate = new Date();
    let actual = calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
  it("company user, new product, published yesterday, calculate right price", function() {
    let userType = 1;
    let publishedDate = new Date();
    publishedDate.setDate(publishedDate.getDate() - 1);
    let expected = price + 25 - 5;
    let actual = calculatePrice(userType, productType, price, publishedDate);
    expect(expected).to.equal(actual);
  });
});
