

// game config
let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [ Preload, Title, Day1 ]
};

let textConfig = {
    fontFamily: 'CrimsonBold',
    fontSize: '25px',
    color: '#FFFFFFF',
    align: 'left',
    lineSpacing: 6
}

let game = new Phaser.Game(config);
let scriptText;
let dialogueText;
let nextLine = 1;

// globals
const centerX = game.config.width / 2;
const centerY = game.config.height / 2;


let keyQ;
let keyW;
let keySpace;

let goodChoices = 0;
let badChoices = 0;

let userName = null;
let cursors = null;

let main_bgm;

// Day1 Branch
let Day1Narrative = [false, false]
let Day1Index = 0;

// Day2 Branch
let Day2Narrative = [false, false]
let Day2Index = 0;

function showChoiceButtons(button1, button2) {
    if (button1 != undefined) {
        button1.visible = true;
    }
    if (button2 != undefined) {
        button2.visible = true;
    }
}

function destroyChoiceButtons(button1, button2) {
    if (button1 != undefined) {
        button1.destroy();
    }
    if (button2 != undefined) {
        button2.destroy();
    }
}

function pickingChoice(choice1, choice2, choice3) {
    if(choice3 != undefined) {
        return !choice1 && !choice2 && !choice3;
    } else if (choice3 == undefined) {
        return !choice1 && !choice2;
    }
}

function resetRoute(route){
    for (var i = 0; i < route.length; i++){
        route[i] = false;
    }
}

function resetGame() {
    resetRoute(Day1Narrative);

    Day1Index = 0;
}