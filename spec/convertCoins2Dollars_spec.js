import { convertCoins2Dollars } from "../convertCoins2Dollars.js";

describe("test convertCoins2Dollars", function() {
    it("tests coin value", function() {
	    let  value = convertCoins2Dollars(3,1,3,1,1) 
      expect(value).toBe(4);
    });
});

describe("test convertCoins2Dollars", function() {
    it("tests coin value", function() {
	    let  value = convertCoins2Dollars(3,3,3,3,3) 
      expect(value).toBe(10.2);
    });
});

describe("test convertCoins2Dollars", function() {
    it("tests coin value", function() {
	    let  value = convertCoins2Dollars(2,2,2,2,2) 
      expect(value).toBe(6.8);
    });
});