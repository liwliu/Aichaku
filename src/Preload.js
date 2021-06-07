class Preload extends Phaser.Scene{
    constructor() {
        super("preloadScene");
    }

    preload() {

        this.load.path = "./assets/";

        // art assets
        this.load.image('textBox', 'img/dialogbox.png');
        this.load.image('titleScreen', 'img/title_screen.png');

        // Nobuko Expressions
        this.load.image('nobukoAngry', 'img/nobuko_angry.png');
        this.load.image('nobukoHappy', 'img/nobuko_happy.png');
        this.load.image('nobukoNeutral', 'img/nobuko_neutral.png');
        this.load.image('nobukoSad', 'img/nobuko_sad.png');
        this.load.image('nobukoSurprise', 'img/nobuko_surprise.png');

        // background art
        this.load.image('classroom', 'backgrounds/classroom.jpg');
        this.load.image('gate', 'backgrounds/school_gate.jpg');
        this.load.image('rooftop', 'backgrounds/rooftop.jpg');
        this.load.image('roomDusk', 'backgrounds/room_dusk.jpg');
        this.load.image('roomMorning,', 'backgrounds/room_morning.jpg');
        this.load.image('roomNight', 'backgrounds/room_night.jpg');
        this.load.image('schoolBuilding', 'backgrounds/school_building.jpg');
        this.load.image('schoolGate', 'backgrounds/school_gate.jpg');

        // sound 
        this.load.audio('titleSound', 'bgm/titleMusic.mp3');
        this.load.audio('mainBgm', 'bgm/mainBgm.mp3');

        //json scripts
        this.load.json('Day1Script', 'json/Day1Script.json');
        this.load.json('Day2Script', 'json/Day2Script.json');
        this.load.json('Day3Script', 'json/Day3Script.json');
        this.load.json('Day4Script', 'json/Day4Script.json');
        this.load.json('Day5Script', 'json/Day5Script.json');

        //animations
    }

    create() {
        this.scene.start("titleScene");
    }
}