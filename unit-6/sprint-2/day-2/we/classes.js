class Species {
    constructor(name, species, voice){
        this.name = name;
        this.species = species;
        this.voice = voice;
    }
    makeVoice = () => {
        console.log(this.voice)
    }
}

const lion = new Species("raja", "carnivore", "roar");
console.log(lion);