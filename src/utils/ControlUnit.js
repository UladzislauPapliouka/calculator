export class ControlUnit {
    constructor() {
        this.commandList = []
        this.currentCommand =0
    }
    StoreCommand = (command) => {
        this.commandList.push(command)
        return this.commandList

    }
    ExecuteCommand = () => {
        return this.commandList[this.currentCommand++].execute()
    }
    Undo = (level) => {
        let result ;
        for(let i = 0; i < level;i++){
            if(this.currentCommand > 0){
                result = this.commandList[--this.currentCommand].unExecute()
            }
        }
        return result
    }
    Redo = (level)=>{
        for(let i =0; i<level;i++){
            if(this.currentCommand < this.commandList.length-1){
                this.commandList[this.currentCommand++].execute()
            }
        }
    }
}