import { Operation } from '@constants/keypadConstansts';

const operationsPrioritets = {
  [Operation.LeftBracket]: 0,
  [Operation.Add]: 1,
  [Operation.Subtract]: 1,
  [Operation.Devide]: 2,
  [Operation.Myltiply]: 2,
};
export default operationsPrioritets;
