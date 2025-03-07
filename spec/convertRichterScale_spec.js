import { convertRichterScale } from "../convertRichterScale.js";

describe("test convertRichterScale", function() {
    it("Tests Richter Scale", function() {
    let RichterScale = 4.1;
    let Characterization = convertRichterScale(RichterScale);
    expect(Characterization).toBe("Little or no damage");
    });
});
describe("test convertRichterScale", function() {
    it("Tests Richter Scale", function() {
    let RichterScale = 8.6;
    let Characterization = convertRichterScale(RichterScale);
    expect(Characterization).toBe("Catastrophe, most buildings destroyed");
    });
});
describe("test convertRichterScale", function() {
    it("Tests Richter Scale", function() {
    let RichterScale = 6.4;
    let Characterization = convertRichterScale(RichterScale);
    expect(Characterization).toBe("Serious damage, walls may crack or fall");
    });
});