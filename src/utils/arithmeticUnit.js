export default class ArithmeticUnit {
  Add = (value1, value2) => (value1 + value2).toFixed(3);

  Subtract = (value1, value2) => (value1 - value2).toFixed(3);

  Multiply = (value1, value2) => (value1 * value2).toFixed(3);

  Divide = (value1, value2) => {
    try {
      const result = (value1 / value2).toFixed(3);
      if (result === 'Infinity') {
        throw new Error('Division by zero...');
      }
      return result;
    } catch (e) {
      return e;
    }
  };

  ReversSign = (value) => -value.toFixed(3);
}
