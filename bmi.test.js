const calculateBMI = require('./bmi')


describe('calculateBMI', () => {

    it('should return "Đầu vào không hợp lệ" when BMI is less than 16.5', () => {
        const testCases = [
            { weight: 30, height: 1.4 },
            { weight: 50, height: 1.4 },
            { weight: 100, height: 1.3 },
            { weight: -30, height: 1.7 },
            { weight: 100, height: 1.75 },
            { weight: 20, height: 1.97 },
            { weight: 72, height: 1.97 },
            { weight: 100, height: 1.97 },
            { weight: 102, height: 1.75 },
            { weight: -4, height: 1.75 },

        ];

        testCases.forEach((testCase) => {
            const result = calculateBMI(testCase.weight, testCase.height);
            if (result !== 'Đầu vào không hợp lệ') {
                console.error(`Test case failed ${testCase} expect 'Đầu vào không hợp lệ' instead of ${result} `);
            }
            else console.info('"Không hợp lệ" Test passed', testCase)
            expect(result).toBe('Đầu vào không hợp lệ');

        });
    });
    it('should return "Dưới Chuẩn" when BMI is less than 16.5', () => {
        const testCases = [
            { weight: 50, height: 1.75 },
            { weight: 55, height: 1.85 },
        ];

        testCases.forEach((testCase, index) => {
            const result = calculateBMI(testCase.weight, testCase.height);
            if (result !== 'Dưới Chuẩn') {
                console.error(`Test case ${index} failed and  expect 'Dưới chuẩn' instead of ${result} `);
            }
            else console.info('"Dưới chuẩn" Test passed', testCase)
            expect(result).toBe('Dưới Chuẩn');

        });
    });

    // Test khi chỉ số BMI trong khoảng chuẩn
    it('should return "Chuẩn" when BMI is between 16.5 and 25', () => {
        const testCases = [
            { weight: 66, height: 1.7 },
            { weight: 60, height: 1.69 },
            { weight: 80, height: 1.89 }
        ];

        testCases.forEach((testCase) => {
            const result = calculateBMI(testCase.weight, testCase.height);
            if (result !== 'Chuẩn') {
                console.error(`Test case failed ${testCase} expect 'Chuẩn' instead of ${result} `);
            }
            else console.info('"Chuẩn" Test passed', testCase)
            expect(result).toBe('Chuẩn');

        });
    });

    // Test khi chỉ số BMI béo
    it('should return "Béo" when BMI is greater than 25', () => {
        const testCases = [
            { weight: 79, height: 1.7 },
            { weight: 79, height: 1.7 },
            { weight: 70, height: 1.5 }
        ];

        testCases.forEach((testCase) => {
            const result = calculateBMI(testCase.weight, testCase.height);
            if (result !== 'Béo') {
                console.error(`Test case failed ${testCase} expect 'Béo' instead of ${result} `);
            }
            else console.info('"Béo" Test passed ', testCase)
            expect(result).toBe('Béo');

        });
    });
});