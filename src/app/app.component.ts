import { Component , Input } from '@angular/core';
import { Joke } from './joke/joke.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  
})
export class AppComponent {
  title = 'my-project';


  jokes!: Joke[] ;

  
  constructor() {

    this.jokes = [
      new Joke("what do you say to boiling water" , "you'll be mist" , true  ),
      new Joke("why was pizza running" , "cuz its fast food" , true ),
      new Joke("Why do police get to riots early?" , "To beat the crowd." , true),
      new Joke("What is a snake’s favorite subject in school?" , "hiss-tory" , true ),
      new Joke("I always say muchas to my Spanish friends" , "It means a lot to them" , true ),
      new Joke("why did the man at soda factory quit?" , "it was Soda-pressing" , true ),
     
    ]
       

  }

  addJoke(newChildJoke:Joke){
    
      this.jokes.unshift(newChildJoke)
    
  }

  DeleteJoke(targetedChildJoke:Joke){

     const index = this.jokes.map(e => e.punchline).indexOf(targetedChildJoke.punchline);
    //const index =   this.jokes.indexOf(targetedChildJoke);    

    this.jokes.splice(index, 1);

  //  alert(index)

  }
  
}
