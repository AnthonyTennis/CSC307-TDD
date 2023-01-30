class Portfolio {
    constructor() {
        this.stocks = {};
    }
    isEmpty() {
        return Object.keys(this.stocks).length === 0;
    }
    numOfStocks() {
        return Object.keys(this.stocks).length;
    }
    purchaseStock(symbol, shares) {
        this.stocks[symbol] = shares;
    }
    sellStock(symbol, shares) {
        if (shares > this.stocks[symbol])
            throw new ShareSaleException('Cannot sell more shares than you own');
        this.stocks[symbol] -= shares;
        if (this.stocks[symbol] <= 0) 
            this.removeStock(symbol);
    }
    removeStock(symbol) {
        delete this.stocks[symbol];
    }
    symbolPosition(symbol) {
        return this.stocks[symbol];
    }
}

exports.Portfolio = Portfolio;