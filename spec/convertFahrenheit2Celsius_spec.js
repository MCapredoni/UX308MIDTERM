import { convertFahrenheit2Celsius } from "../convertFahrenheit2Celsius.js";

describe("test convertFahrenheit2Celsius", function() {
    it("tests Fahrenheit to Celsius boiling conversion", function() {
        let Fahrenheit = 212;
	    let Celsius = ((Fahrenheit-32)*5/9);
      expect(Celsius).toBe(100);
    });
});

describe("test convertFahrenheit2Celsius", function() {
    it("tests Fahrenheit to Celsius freezing conversion", function() {
        let Fahrenheit = 32;
	    let Celsius = (Fahrenheit-32)*5/9;
      expect(Celsius).toBe(0);
    });
});

describe("test convertFahrenheit2Celsius", function() {
    it("tests Fahrenheit to Celsius room temperature conversion", function() {
        let Fahrenheit = 70;
	    let Celsius = ((Fahrenheit-32)*5/9);
      expect(Celsius).toBe(21.11111111111111);
    });
});