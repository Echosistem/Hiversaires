class Entente extends Puzzle {
  constructor(id) {
    super(id);
  }

  setup() {
    switch (this.id) {
      case 43:
        this.templateEntenteXIncr();
        break;
      case 42:
        this.templateEntenteXDecr();
        break;
      case 45:
        this.templateEntenteYIncr();
        break;
      case 44:
        this.templateEntenteYDecr();
        break;
      case 46:
        this.templateEntenteYExit();
        break;
    }
  }

  templateEntenteXIncr() {
    if (this.mazeX == 17) {
      hiversaires.game.userNodeID = 93;
      hiversaires.actionCheck();
      hiversaires.moveCheck();
      hiversaires.actionReset();
    } else {
      hiversaires.game.userNodeID = 89;

      if (this.mazeX < 21) {
        this.mazeX = this.mazeX + 3;
      }

      hiversaires.actionCheck();
      hiversaires.moveCheck();
      hiversaires.actionReset();
    }
  }

  templateEntenteXDecr() {
    hiversaires.game.userNodeID = 103;

    if (this.mazeX > 14) {
      this.mazeX = this.mazeX - 1;
    }

    hiversaires.actionCheck();
    hiversaires.moveCheck();
    hiversaires.actionReset();
  }

  templateEntenteYIncr() {
    hiversaires.game.userNodeID = 94;
    hiversaires.game.userOrientation = 2;

    if (this.mazeY < 23) {
      this.mazeY = this.mazeY + 4;
    }

    hiversaires.actionCheck();
    hiversaires.moveCheck();
    hiversaires.actionReset();
  }

  templateEntenteYDecr() {
    hiversaires.game.userNodeID = 95;
    hiversaires.game.userOrientation = 2;

    if (this.mazeY > 14) {
      this.mazeY = this.mazeY - 1;
    }

    hiversaires.actionCheck();
    hiversaires.moveCheck();
    hiversaires.actionReset();
  }

  templateEntenteYExit() {
    if (this.mazeX == 17 && this.mazeY == 17) {
      hiversaires.game.userNodeID = 107;
      hiversaires.game.userOrientation = 3;

      hiversaires.actionCheck();
      hiversaires.moveCheck();
      hiversaires.actionReset();
    } else {
      hiversaires.game.userNodeID = 93;

      hiversaires.actionCheck();
      hiversaires.moveCheck();
      hiversaires.actionReset();
    }
  }

  get mazeX() {
    return hiversaires.game.puzzleState.maze.x;
  }

  set mazeX(value) {
    hiversaires.game.puzzleState.maze.x = value;
  }

  get mazeY() {
    return hiversaires.game.puzzleState.maze.y;
  }

  set mazeY(value) {
    hiversaires.game.puzzleState.maze.y = value;
  }
}
