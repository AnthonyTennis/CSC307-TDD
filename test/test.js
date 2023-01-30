const myFunctions = require('../index.js');
const portfolio = new myFunctions.Portfolio();

test('Test portfolio empty -- success', () => {
    expect(portfolio.isEmpty()).toBe(true); 
    expect(portfolio.numOfStocks()).toBe(0);
});

test('Test portfolio stock purchase -- success', () => {
    portfolio.purchaseStock('AAPL', 100);
    expect(portfolio.numOfStocks()).toBe(1);
    expect(portfolio.isEmpty()).toBe(false); 
    expect(portfolio.symbolPosition('AAPL')).toBe(100);

});

test('Test portfolio stock sale', () => {
    portfolio.sellStock('AAPL', 50);
    expect(portfolio.isEmpty()).toBe(false); 
    expect(portfolio.numOfStocks()).toBe(1);
    expect(portfolio.symbolPosition('AAPL')).toBe(50);
})

test('Test portfolio sell all stock', () => {
    const portfolio = new myFunctions.Portfolio();
    portfolio.purchaseStock('AAPL', 50);
    portfolio.sellStock('AAPL', 50);
    expect(portfolio.isEmpty()).toBe(true); 
    expect(portfolio.numOfStocks()).toBe(0);
})

test('Test portfolio sell too many stocks -- error', () => {
    expect(() => { portfolio.sellStock('AAPL', 200); }).toThrow();
});