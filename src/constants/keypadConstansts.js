const Operation = {
  Add: '+',
  Subtract: '-',
  Myltiply: '*',
  Devide: '/',
  Dot: '.',
  Equal: '=',
  ChangeSign: '±',
  LeftBracket: '(',
  RightBracket: ')',
  CleanEntry: 'CE',
  Clear: 'C',
};
const KeyPadTable = [
  [Operation.Clear, '7', '8', '9', Operation.Myltiply],
  [Operation.Subtract, '4', '5', '6', Operation.Devide],
  [Operation.Add, '1', '2', '3', Operation.Equal],
  [
    Operation.Dot,
    Operation.LeftBracket,
    '0',
    Operation.RightBracket,
    Operation.CleanEntry,
  ],
  [Operation.ChangeSign],
];

export { KeyPadTable, Operation };
