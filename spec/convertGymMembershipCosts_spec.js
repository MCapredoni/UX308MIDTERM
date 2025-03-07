import { convertGymMembershipCosts } from "../convertGymMembershipCosts.js";

describe("test convertGymMembershipCosts", function() {
    it("tests 3 Friends", function() {
        let Cost = 10;
	    let Discount = 0.85;
	    let Gym_Membership = Cost * Discount;
      expect(Gym_Membership).toBe(8.5);
    });
});

describe("test convertGymMembershipCosts", function() {
    it("tests 2 Friends", function() {
        let Cost = 10;
	    let Discount = 0.90;
	    let Gym_Membership = Cost * Discount;
      expect(Gym_Membership).toBe(9);
    });
});

describe("test convertGymMembershipCosts", function() {
    it("tests 1 Friends", function() {
        let Cost = 10;
	    let Discount = 0.95
	    let Gym_Membership = Cost * Discount;
      expect(Gym_Membership).toBe(9.5);
    });
});

describe("test convertGymMembershipCosts", function() {
    it("tests 0 Friends", function() {
        let Cost = 10;
	    let Discount = 0.00;
	    let Gym_Membership = Cost * Discount;
      expect(Gym_Membership).toBe(10);
    });
});