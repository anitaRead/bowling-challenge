class Bowling {
    constructor(){
        this.currentFrame = [];
        this.frames = [];
        this.totalScore = 0;
        this.frameIndex = 1;
    }

    bowl(pins) {
        if(this.isFinalFrame()) {
            this.finalFrame(pins);
        } else {
            this.addScore(pins)
        }
    }

    addScore(pins) {

            if(pins === 10){
              this.currentFrame.push(10, 0);
              console.log("STRIKE!")
            }  else {
                this.currentFrame.push(pins);
            }

            if(this.isFrameEnd()) {
                this.frames.push(this.currentFrame);
                this.endFrame();
            }

    }

    isFrameEnd() {
        let frameLength = this.currentFrame.length;

        if(!this.isFinalFrame()) {
            return frameLength === 2;
        } else {
            return frameLength === 3;
        }
    }

    endFrame() {
      console.log(`this frame #${this.frameIndex}: ${this.currentFrame}`);
      this.currentFrame = [];
      this.frameIndex++;
      console.log(`upcoming frame is #${this.frameIndex}`);
      console.log(`frames so far: ${this.frames}`);
      console.log(`score so far: ${this.calculateCurrentScore()}`);
    }

    isFinalFrame() {
        return this.frameIndex === 10;
    }

    finalFrame(pins) {
        let ballNumber = this.currentFrame.length+1;

        if(ballNumber === 1){
            this.currentFrame.push(pins);
        } else if (ballNumber === 3) {
            this.currentFrame.push(pins);
            this.endGame();
        } else if (ballNumber === 2) {
            if(pins === 10) {
                this.currentFrame.push(pins);
            } else if (this.sumArray(this.currentFrame) + pins === 10) {
                this.currentFrame.push(pins);
            } else {
                this.currentFrame.push(pins);
                this.endGame();
            }
        }
    }

    sumArray(arr) {
        let sum = arr.reduce((a,b) => a+b, 0);
        console.log(sum);
        return sum;
    }

    endGame() {
        this.frames.push(this.currentFrame);

        console.log(this.totalScore);

        // for(let i=0; i<this.frames.length; i++) {
        //     this.totalScore += this.sumArray(this.frames[i]);
        //     // console.log(this.totalScore);
        // }
        this.totalScore = this.calculateCurrentScore();

        console.log(`Your total score is: ${this.totalScore}`);
    }

    calculateCurrentScore() {
      let currentScore = 0;
      for(let i=0; i<this.frames.length; i++) {
          currentScore += this.sumArray(this.frames[i]);
          // console.log(this.totalScore);
      }
      return currentScore;
    }



}

let game = new Bowling();
game.calculateCurrentScore()
