class Persons {
    constructor () {
        this.list = [{
            name: 'Greg',
            role: 'UI dev'
        },{
            name: 'Dmytro',
            role: 'UI dev'  
        },{
            name: 'Yevhen',
            role: 'Master'  
        },{
            name: 'Diana',
            role: 'Manager' 
        }];
    }

    get list() { this.list }

}

export default Persons;