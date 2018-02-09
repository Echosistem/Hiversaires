class ClockDoor extends Door {
  constructor(id, lockValue) {
    super(id);
    this.lockValue = lockValue;
  }

  setup() {
    hiversaires.templateVignette();
    hiversaires.stage.setHidden(hiversaires.stage.billboard("overlay"), true);
    hiversaires.templateClockInterface();
    hiversaires.music.playEffect("action_DoorInit");
    if (hiversaires.game.puzzleState.clock != this.lockValue) {
      hiversaires.setCurrentAction(this.openDoor.bind(this));
      hiversaires.setModifier("open");
    } else {
      hiversaires.templateClockAlert();
    }
  }
}
