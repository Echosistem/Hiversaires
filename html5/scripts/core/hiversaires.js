class Hiversaires {
  constructor() {
    this.element = document.createElement("hiversaires");
    document.body.appendChild(this.element);

    this.artBook = new ArtBook();
    this.game = new Game();
    this.world = new World();
    this.music = new Music();
    this.stage = new Stage(this.element);
    this.walkthrough = new Walkthrough();
  }

  start() {
    this.stage.start();
    this.game.start();
    this.walkthrough.start();

    // Temporary
    // this.music.setRecord(Records.act1);
    // this.music.setAmbience(Ambience.antechannel);

    this.dozenal = new Dozenal();
    this.dozenal.start();
  }
}

const Records = {
  act1: "music_act1",
  act2: "music_act2",
  act3: "music_act3",
  act4: "music_act4",
  act5: "music_act5",
  credit: "music_credit"
};

const Ambience = {
  antechannel: "ambient_antechannel",
  capsule: "ambient_capsule",
  circular: "ambient_circular",
  forest: "ambient_forest",
  metamondst: "ambient_metamondst",
  nataniev: "ambient_nataniev",
  rainre: "ambient_rainre",
  stones: "ambient_stones",
  studio: "ambient_studio"
};