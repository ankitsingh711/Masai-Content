function Artist(name, skill, profession){
    this.name = name;
    this.skill = skill;
    this.profession = profession;
}

Artist.prototype.getProfession = function(){
    return this.profession;
}

Artist.prototype.print = function(){
    return `I am ${this.name}`;
}

var artistsObject = {
    name: "Rahul Dravid",
    skill: "Cricket",
    profession: "Cricketer"
}

let artist = Object.create(artistsObject)



// Do not change this
export {Artist, artistsObject};
