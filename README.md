# Arbitrary Precision Integer Calculator

A web-based calculator for performing operations on arbitrarily large integers. It supports basic arithmetic and advanced operations such as division, modulo, exponentiation, and factorial, all implemented without relying on external libraries.

---

## Features

- **Addition**  
- **Subtraction**  
- **Multiplication**  
- **Division** (Integer Division)  
- **Modulo**  
- **Exponentiation**  
- **Factorial**

The operations are implemented to handle arbitrarily large integers represented as strings to bypass JavaScript's number precision limitations.

---

## Demo

### User Interface:
- Enter two large numbers in the input fields.
- Choose the desired operation from the dropdown menu.
- Click the **"Calculate"** button to see the result.

---

## How to Run

1. Clone or download this repository.
2. Make sure the following files are in the same folder:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Open the `index.html` file in any modern web browser.

---

## File Structure

```
.
├── index.html     # HTML structure for the calculator
├── styles.css     # Styling for the calculator interface
└── script.js      # JavaScript logic for arbitrary-precision calculations
```

---

## Example Usage

### Addition
**Input:**  
Number 1: `123456789123456789`  
Number 2: `987654321987654321`  
**Operation:** Addition  
**Output:** `1111111111111111110`

### Factorial
**Input:**  
Number 1: `20`  
Number 2: (Leave blank)  
**Operation:** Factorial  
**Output:** `2432902008176640000`

---

## Supported Operations

| Operation     | Description                              | Example Input (Number 1) | Example Input (Number 2) | Output                       |
|---------------|------------------------------------------|--------------------------|--------------------------|-----------------------------|
| **Addition**  | Adds two numbers.                       | `12345`                  | `67890`                  | `80235`                    |
| **Subtraction** | Subtracts the second number from the first. | `98765`                  | `12345`                  | `86420`                    |
| **Multiplication** | Multiplies two numbers.               | `12345`                  | `67890`                  | `838102050`                |
| **Division**  | Performs integer division.              | `12345`                  | `123`                    | `100`                      |
| **Modulo**    | Returns the remainder of division.      | `12345`                  | `123`                    | `45`                       |
| **Exponentiation** | Raises the first number to the power of the second. | `2`                      | `10`                     | `1024`                     |
| **Factorial** | Computes the factorial of a number.     | `10`                     | (Leave blank)            | `3628800`                  |

---

## Built With

- **HTML**: Structure of the user interface.
- **CSS**: Styling for a clean and responsive design.
- **JavaScript**: Core logic for arbitrary-precision calculations.

---
## Testing

- This source code is also wrapped in a REPL: https://replit.com/@onindocollins/arbitrary-precision-integer-calculator
- I wrapped it for the purpose of testing, demos, sharing, or further collaboration.

---

## Limitations

- The calculator handles only non-decimal integers. It does not support floating-point numbers or scientific notation.
- Division results are truncated to the nearest integer (floor division).
- Exponentiation is limited by memory and processing power for extremely large results.

---

## Future Enhancements

- Add support for floating-point arithmetic.
- Optimize performance for extremely large numbers.
- Improve error handling and input validation.

---


## Acknowledgments

- This project was inspired by the challenge of overcoming JavaScript's precision limitations and is built entirely from scratch without external libraries.
- This project is also my submission for The Pesapal Junior Programmer Challenge '24.

--- 

## Additional Questions

### 1. What do you love most about computing?

Computing offers great opportunities for creativity and innovation. Creating high-quality computing solutions is a highly creative activity, and computing supports creative work in many other fields. The best solutions in computing exhibit high levels of elegance and beauty.

### 2. If you could meet any scientist or engineer who died before A.D. 2000, whom would you choose, and why?

I would choose to meet Alan Turing. His groundbreaking work in theoretical computer science laid the foundation for modern computing and artificial intelligence. Turing's development of the concept of the "Turing machine" and his contributions to breaking the Enigma code during World War II showcase his brilliance and determination. I am inspired by his ability to apply abstract mathematical concepts to real-world problems and his vision for what machines could achieve. Meeting him would provide an incredible opportunity to learn from one of the greatest minds in computing history and to discuss his perspectives on the future of technology.

