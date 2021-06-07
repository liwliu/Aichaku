class Title extends Phaser.Scene {
    constructor() {
        super("titleScene");
    }

    create() {
        // add title text
        //this.add.bitmapText(centerX, centerY - 32, 'gem_font', 'Aichaku', 32).setOrigin(0.5);
        //this.add.bitmapText(centerX, centerY, 'gem_font', 'Press SPACE to start', 16).setOrigin(0.5);
        this.title = this.add.image(0, 0, 'titleScreen').setOrigin(0,0);
        main_bgm = this.sound.add('titleSound', { volume: 0.3});
        main_bgm.play({ loop: true });

        // create input
        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // wait for player input
        if(Phaser.Input.Keyboard.JustDown(cursors.space)) {
            main_bgm.stop();
            this.scene.start('Day1Scene');
        }
    }
}