class Form{
    constructor(){
        this.input = createInput('name');
        this.button = createButton('play')
        this.messege = createElement('h3')
        this.reset = createButton('reset')
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.messege.hide()
    }
    //-------//-------------//-----------//--------------------//------------------///--------------------//---
    display(playerCount){
        //var//
        var title = createElement('h2');

        //html//
        title.html('carritos')
        //blablabla//
        title.position(displayWidth/2-50,0)
        this.input.position(displayWidth/2-40, displayHeight/2-80)
        this.button.position(displayWidth/2+30, displayHeight/2)
        this.messege.position(displayWidth/2-70, displayHeight/4)
        this.reset.position(displayWidth-100,20)
        //MAUSE PRESSED :D//
        this.button.mousePressed(() =>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.messege.html('Hello  '+ player.name + ' welcome to carritos :)');
            
        })
        this.reset.mousePressed(() =>{
            player.updateCount(0);
            game.update(0)
        })
        
        
    }
    //-------//-------------//-----------//--------------------//------------------///--------------------//---
}