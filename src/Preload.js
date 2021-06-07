class Preload extends Phaser.Scene{
    constructor() {
        super("preloadScene");
    }

    preload() {

        // art assets
        this.load.image('textBox', './assets/img/dialogbox.png');
        this.load.image('titleScreen', './assets/img/title_screen.png');

        // Nobuko Expressions
        this.load.image('nobukoAngry', './assets/img/nobuko_angry.png');
        this.load.image('nobukoHappy', './assets/img/nobuko_happy.png');
        this.load.image('nobukoNeutral', './assets/img/nobuko_neutral.png');
        this.load.image('nobukoSad', './assets/img/nobuko_sad.png');
        this.load.image('nobukoSurprise', './assets/img/nobuko_surprise.png');

        // background art
        this.load.image('classroom', './assets/backgrounds/classroom.jpg');
        this.load.image('gate', './assets/backgrounds/gate.jpg');
        this.load.image('rooftop', './assets/backgrounds/rooftop.jpg');
        this.load.image('roomDusk', './assets/backgrounds/room_dusk.jpg');
        this.load.image('roomMorning,', './assets/backgrounds/room_morning.jpg');
        this.load.image('roomNight', './assets/backgrounds/room_night.jpg');
        this.load.image('schoolBuilding', './assets/backgrounds/school_building.jpg');
        this.load.image('schoolGate', './assets/backgrounds/school_gate.jpg');

        // sound 
        //this.load.audio('', '');

        //json scripts
        this.load.json('Day1Script', './assets/json/Day1Script.json');
        this.load.json('Day2Script', './assets/json/Day2Script.json');
        this.load.json('Day3Script', './assets/json/Day3Script.json');
        this.load.json('Day4Script', './assets/json/Day4Script.json');
        this.load.json('Day5Script', './assets/json/Day5Script.json');

        //animations
    }

    create() {

    }
}