export default class ControlUnit {
  constructor() {
    this.commandList = [];
    this.currentCommand = 0;
  }

  StoreCommand = (command) => {
    this.commandList.push(command);
    return this.commandList;
  };

  ExecuteCommand = () => {
    this.commandList[this.currentCommand].execute();
    this.currentCommand += 1;
  };

  Undo = (level) => {
    let result;
    for (let i = 0; i < level; i += 1) {
      if (this.currentCommand > 0) {
        result = this.commandList[this.currentCommand].unExecute();
        this.currentCommand -= 1;
      }
    }
    return result;
  };

  Redo = (level) => {
    for (let i = 0; i < level; i += 1) {
      if (this.currentCommand < this.commandList.length - 1) {
        this.commandList[this.currentCommand].execute();
        this.currentCommand += 1;
      }
    }
  };
}
