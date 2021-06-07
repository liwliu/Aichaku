class Day1 extends Phaser.Scene{
    constructor() {
        super('Day1Scene');

                // dialog constants
                this.DBOX_X = 0;			    // dialog box x-position
                this.DBOX_Y = 0;			    // dialog box y-position
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
        this.bgm = this.sound.add('mainBgm', {volume: 0.3});
        this.bgm.play({ loop: true });

        //UI assets
        this.background = this.add.sprite(0, 0, 'schoolGate').setOrigin(0, 0);
        this.dialogueBox = this.add.sprite(this.DBOX_X, this.DBOX_Y, 'textBox').setOrigin(0, 0) // dialogue box

        // place images offscreen
        this.nobukoNeutral = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+8, 'nobukoNeutral').setOrigin(0, 1);
        this.nobukoHappy = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+8, 'nobukoHappy').setOrigin(0, 1);
        this.nobukoSad = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+8, 'nobukoSad').setOrigin(0, 1);
        this.nobukoAngry = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+8, 'nobukoAngry').setOrigin(0, 1);
        this.nobukoSurprise = this.add.sprite(this.OFFSCREEN_X, this.DBOX_Y+8, 'nobukoSurprise').setOrigin(0, 1);

        // choices

        this.button_classmate_lunch = this.add.sprite().setOrigin().setInteractive({useHandCursor: true});
        this.button_nobuko_lunch = this.add.sprite().setOrigin().setInteractive({useHandCursor: true});

        // text variables

        scriptText = this.cache.json.get('Day1Script');
        dialogueText = this.add.text(80, 445, scriptText.day1_morning[0], textConfig);



    }

    update() {

        if(Phaser.Input.Keyboard.JustDown(keySpace)) {
            // trigger dialog
           this.dialogText = this.nextLine(scriptText.day1_morning);
        }
    }
    

    nextLine(target) {
        if(Phaser.Input.Keyboard.JustDown(keySpace) && nextLine == target.length){
            console.log("nextLine is " + nextLine);
            dialogueText.setText(target[nextLine]);
            nextLine++;
        }

    }


}