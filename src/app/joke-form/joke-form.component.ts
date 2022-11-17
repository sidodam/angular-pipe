import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { Joke } from '../joke/joke.model';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {


  @Output() newJokeEvent = new EventEmitter<Joke>();
  

  constructor() { }

  ngOnInit(): void {
  }


  CreateJoke(jokePlot: string , punchline:string){

  let newJoke : Joke  = new Joke(jokePlot , punchline ,true )
  this.newJokeEvent.emit(newJoke)
  }



}
