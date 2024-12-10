class BigIntCalculator {
    static add(a, b) {
        a = a.toString();
        b = b.toString();
        let result = '';
        let carry = 0;
        let i = a.length - 1;
        let j = b.length - 1;

        while (i >= 0 || j >= 0 || carry > 0) {
            const digitA = i >= 0 ? parseInt(a[i--]) : 0;
            const digitB = j >= 0 ? parseInt(b[j--]) : 0;
            const sum = digitA + digitB + carry;
            result = (sum % 10) + result;
            carry = Math.floor(sum / 10);
        }
        return result;
    }

    static subtract(a, b) {
        a = a.toString();
        b = b.toString();
        if (BigIntCalculator.compare(a, b) < 0) {
            return '-' + BigIntCalculator.subtract(b, a);
        }
        let result = '';
        let borrow = 0;
        let i = a.length - 1;
        let j = b.length - 1;

        while (i >= 0 || j >= 0) {
            const digitA = i >= 0 ? parseInt(a[i--]) : 0;
            const digitB = j >= 0 ? parseInt(b[j--]) + borrow : borrow;
            let diff = digitA - digitB;
            if (diff < 0) {
                diff += 10;
                borrow = 1;
            } else {
                borrow = 0;
            }
            result = diff + result;
        }
        return result.replace(/^0+/, '') || '0';
    }

    static multiply(a, b) {
        a = a.toString();
        b = b.toString();
        const m = a.length;
        const n = b.length;
        const result = Array(m + n).fill(0);

        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                const product = parseInt(a[i]) * parseInt(b[j]) + result[i + j + 1];
                result[i + j + 1] = product % 10;
                result[i + j] += Math.floor(product / 10);
            }
        }
        return result.join('').replace(/^0+/, '') || '0';
    }

    static divide(a, b) {
        a = a.toString();
        b = b.toString();

        if (b === '0') {
            throw new Error("Division by zero is not allowed.");
        }

        let result = '';
        let remainder = '0';

        for (let i = 0; i < a.length; i++) {
            remainder = BigIntCalculator.add(
                BigIntCalculator.multiply(remainder, '10'),
                a[i]
            );

            let quotient = 0;
            while (BigIntCalculator.compare(remainder, b) >= 0) {
                remainder = BigIntCalculator.subtract(remainder, b);
                quotient++;
            }

            result += quotient.toString();
        }

        return result.replace(/^0+/, '') || '0';
    }

    static modulo(a, b) {
        a = a.toString();
        b = b.toString();

        if (b === '0') {
            throw new Error("Modulo by zero is not allowed.");
        }

        let remainder = '0';
        for (let i = 0; i < a.length; i++) {
            remainder = BigIntCalculator.add(
                BigIntCalculator.multiply(remainder, '10'),
                a[i]
            );

            while (BigIntCalculator.compare(remainder, b) >= 0) {
                remainder = BigIntCalculator.subtract(remainder, b);
            }
        }

        return remainder;
    }

    static exponentiate(a, b) {
        a = a.toString();
        b = b.toString();

        if (b === '0') return '1';
        if (b === '1') return a;

        let result = '1';
        while (BigIntCalculator.compare(b, '0') > 0) {
            result = BigIntCalculator.multiply(result, a);
            b = BigIntCalculator.subtract(b, '1');
        }
        return result;
    }

    static factorial(a) {
        a = a.toString();
        if (a === '0' || a === '1') return '1';

        let result = '1';
        let current = '1';

        while (BigIntCalculator.compare(current, a) <= 0) {
            result = BigIntCalculator.multiply(result, current);
            current = BigIntCalculator.add(current, '1');
        }
        return result;
    }

    static compare(a, b) {
        a = a.replace(/^0+/, '') || '0';
        b = b.replace(/^0+/, '') || '0';
        if (a.length !== b.length) return a.length - b.length;
        return a.localeCompare(b);
    }
}

document.getElementById('calculate').addEventListener('click', () => {
    const num1 = document.getElementById('num1').value.trim();
    const num2 = document.getElementById('num2').value.trim();
    const operation = document.getElementById('operation').value;
    let result = '';

    try {
        switch (operation) {
            case 'add':
                result = BigIntCalculator.add(num1, num2);
                break;
            case 'subtract':
                result = BigIntCalculator.subtract(num1, num2);
                break;
            case 'multiply':
                result = BigIntCalculator.multiply(num1, num2);
                break;
            case 'divide':
                result = BigIntCalculator.divide(num1, num2);
                break;
            case 'modulo':
                result = BigIntCalculator.modulo(num1, num2);
                break;
            case 'exponentiate':
                result = BigIntCalculator.exponentiate(num1, num2);
                break;
            case 'factorial':
                result = BigIntCalculator.factorial(num1);
                break;
            default:
                result = 'Invalid operation.';
        }
    } catch (error) {
        result = 'Error: ' + error.message;
    }

    document.getElementById('result').textContent = `Result: ${result}`;
});
