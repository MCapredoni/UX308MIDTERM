import { convertGymMembershipCosts } from "../convertGymMembershipCosts.js";

describe("test convertGymMembershipCosts", function() {
    it("tests 3 Friends", function() {
	    let Gym_Membership = convertGymMembershipCosts (3, 10);
      expect(Gym_Membership).toBe(8.5);
    });
});

describe("test convertGymMembershipCosts", function() {
    it("tests 2 Friends", function() {
        let Gym_Membership = convertGymMembershipCosts (2, 10);
      expect(Gym_Membership).toBe(9);
    });
});

describe("test convertGymMembershipCosts", function() {
    it("tests 1 Friends", function() {
        let Gym_Membership = convertGymMembershipCosts (1, 10);
      expect(Gym_Membership).toBe(9.5);
    });
});

describe("test convertGymMembershipCosts", function() {
    it("tests 0 Friends", function() {
        let Gym_Membership = convertGymMembershipCosts (0, 10);
      expect(Gym_Membership).toBe(10);
    });
});