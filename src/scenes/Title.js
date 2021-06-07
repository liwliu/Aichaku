class Title extends Phaser.Scene {
    constructor() {
        super("titleScene");
    }

     create() {
        // add title text
        //this.add.bitmapText(centerX, centerY - 32, 'gem_font', 'Aichaku', 32).setOrigin(0.5);
        //this.add.bitmapText(centerX, centerY, 'gem_font', 'Press SPACE to start', 16).setOrigin(0.5);
        this.add.sprite(0, 0, 'titleScreen').setOrigin(0,0);

        // create input
        cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // wait for player input
        if(Phaser.Input.Keyboard.JustDown(cursors.space)) {
            this.scene.start("Day1");
        }
    }
}