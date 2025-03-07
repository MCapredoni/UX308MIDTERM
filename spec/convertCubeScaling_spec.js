import { convertCubeScaling } from "../convertCubeScaling.js";

describe("test convertCubeScaling", function() {
    it("tests cubes conversion to cubic meters", function() {
        let height = 3;
        let Cubic_Meters = height ** 3;
        expect(Cubic_Meters).toBe(27);
    });
});

describe("test convertCubeScaling", function() {
    it("tests cubes conversion to cubic meters", function() {
        let height = 6;
        let Cubic_Meters = height ** 3;
        expect(Cubic_Meters).toBe(216);
    });
});

describe("test convertCubeScaling", function() {
    it("tests cubes conversion to cubic meters", function() {
        let height = 9;
        let Cubic_Meters = height ** 3;
        expect(Cubic_Meters).toBe(729);
    });
});