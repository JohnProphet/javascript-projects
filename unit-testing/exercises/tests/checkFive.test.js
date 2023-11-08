const checkFive = require('../checkFive.js');

    describe("checkFive", function() {
        test("produces correct ouput when passed a number less than 5", function() {
            let output = checkFive(4);
            expect(output).toBe("4 is less than 5.");
        });

        test("produces correct ouput when passed a 5", function() {
            let output = checkFive(5);
            expect(output).toBe("5 is equal to 5.");
        });

        test("produces correct ouput when passed a number greater than 5", function() {
            let output = checkFive(6);
            expect(output).toBe("6 is greater than 5.");
        });
    });

