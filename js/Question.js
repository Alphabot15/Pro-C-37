class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Pon Tu Nombre Aqui");
    this.input2 = createInput("La Respuesta Correcta Es");
    this.button = createButton('Verificar');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("100 Mexicanos Dijeron");
    this.title.position(350, 0);

    this.question.html("cual es la capital de Monterrey" );
    this.question.position(150, 80);
    this.option1.html("1: Guadalajara" );
    this.option1.position(150, 100);
    this.option2.html("2: Nuevo Leon" );
    this.option2.position(150, 120);
    this.option3.html("3: Chiapas" );
    this.option3.position(150, 140);
    this.option4.html("4: Nayarit" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
