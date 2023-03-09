export class Invoker {
    commands = []
    current = 0
    setCommand = (command)=> {
        this.command = command
        this.commands.push(command)
        this.current++
        return this.ExecuteCommand()
    }
    ExecuteCommand = () => this.command.execute()
    Undo = (level) => {
        let result ;
        for(let i = 0; i < level;i++){
            if(this.current > 0){
                result = this.commands.pop().unExecute()
                this.current--
            }
        }
        return result
    }
}