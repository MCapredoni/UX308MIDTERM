import { convertGymMembershipCosts } from "../convertGymMembershipCosts.js";

describe("test convertGymMembershipCosts", function() {
    it("tests 3 Friends", function() {
        let Friends = 3;
	    let Discount = Discount * 0.85;
      expect(Discount).toBe(0.15);
    });
});

describe("test convertGymMembershipCosts", function() {
    it("tests 2 Friends", function() {
        let Friends = 2;
	    let Discount = Discount * 0.90;
      expect(Discount).toBe(0.10);
    });
});

describe("test convertGymMembershipCosts", function() {
    it("tests 1 Friends", function() {
        let Friends = 1;
	    let Discount = Discount * 0.95;
      expect(Discount).toBe(0.05);
    });
});

describe("test convertGymMembershipCosts", function() {
    it("tests 0 Friends", function() {
        let Friends = 0;
	    let Discount = Discount * 0.00;
      expect(Discount).toBe(0.00);
    });
});