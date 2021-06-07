class Day1 extends Phaser.Scene{
    constructor() {
        super('Day1Scene');

                // dialog constants
                this.DBOX_X = 0;			    // dialog box x-position
                this.DBOX_Y = 400;			    // dialog box y-position
                this.DBOX_FONT = 'Thoughts';	// dialog box font key
        
                this.TEXT_X = 50;			// text w/in dialog box x-position
                this.TEXT_Y = 445;			// text w/in dialog box y-position
                this.TEXT_SIZE = 24;		// text font size (in pixels)
                this.TEXT_MAX_WIDTH = 715;	// max width of text within box
        
                this.NEXT_TEXT = '[SPACE]';	// text to display for next prompt
                this.NEXT_X = 775;			// next text prompt x-position
                this.NEXT_Y = 574;			// next text prompt y-position
        
                this.LETTER_TIMER = 10;		// # ms each letter takes to "type" onscreen
        
                // dialog variables
                this.dialogConvo = 0;			// current "conversation"
                this.dialogLine = 0;			// current line of conversation
                this.dialogSpeaker = null;		// current speaker
                this.dialogLastSpeaker = null;	// last speaker
                this.dialogTyping = false;		// flag to lock player input while text is "typing"
                this.dialogText = null;			// the actual dialog text
                this.nextText = null;			// player prompt text to continue typing
        
                this.OFFSCREEN_X = -500;        // x,y values to place characters offscreen
                this.OFFSCREEN_Y = 1000;
    }

    create() {
        // define keys
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //bgm tbd

        //UI assets
        this.dialogueBox = this.add.sprite(this.DBOX_X, this.DBOX_Y) // dialogue box

        this.dialogText = this.add.bitmapText(this.TEXT_X, this.TEXT_Y, this.DBOX_FONT, '', this.TEXT_SIZE);
        this.nextText = this.add.bitmapText(this.NEXT_X, this.NEXT_Y, this.DBOX_FONT, '', this.TEXT_SIZE);

        // place images offscreen
        this.nobukoNeutral = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+8, 'nobukoNeutral').setOrigin(0, 1);
        this.nobukoHappy = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+8, 'nobukoHappy').setOrigin(0, 1);
        this.nobukoSad = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+8, 'nobukoSad').setOrigin(0, 1);
        this.nobukoAngry = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+8, 'nobukoAngry').setOrigin(0, 1);
        this.nobukoSurprise = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+8, 'nobukoSurprise').setOrigin(0, 1);

        // choices

        this.button_classmate_lunch = this.add.sprite().setOrigin().setInteractive({useHandCursor: true});
        this.button_nobuko_lunch = this.add.sprite().setOrigin().setInteractive({useHandCursor: true});

        //

        scriptText = this.cache.json.get('Day1Script');
        dialogueText = this.add.text(80, 445, scriptText.day1_morning[0], textConfig);



    }

    update() {

    }

    moveNextLine(text) {
        if(Phaser.Input.Keyboard.JustDown(keySpace) && nextLine < text.length){
            console.log("nextLine is " + nextLine);
            narrativeText.setText(target[nextLine]);
            nextLine++;
        }
    }


}