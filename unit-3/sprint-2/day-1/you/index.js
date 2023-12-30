class person {
    constructor(props){
        this.name = props;
    }
    satHello(){
        console.log("I am ", this.name);
    }
}

let p1 = new person("Ankit");