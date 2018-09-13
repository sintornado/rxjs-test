import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { Field } from '../model/field';
import { Snake } from 'src/app/model/snake';
import { Cube } from '../model/cube';




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  // slaveDiv = document.getElementById('second-div');
// нажатие на клавишу клавиатуры
  click = fromEvent(document, 'keydown');


// создание новых сущностей Field, Snake
  field: Field = new Field(450, 450);
  snake: Snake = new Snake();
  cube: Cube = new Cube();

  constructor() {  }

  connectCube(){
    let slaveDiv = document.getElementById('second-div');
    // debugger
    if(this.snake.corX == this.cube.corX && this.snake.corY == this.cube.corY){
        slaveDiv.style.background = 'blue';
        this.cube.createCube();
    // }else if(this.snake.corY == this.cube.corY){
    //     slaveDiv.style.background = 'blue';
    //     this.cube.createCube();
      }
    }

  ngOnInit() {
    this.cube.createCube();

// находим в доме змею через id
  let slaveDiv = document.getElementById('second-div');
  
// задаем позицию
  slaveDiv.style.position = 'relative';

// начальные координаты
slaveDiv.style.top = '0px';
slaveDiv.style.left = '0px';
  

// подписываемся на событие нажатия на кнопки клавиатуры
  const subscription = this.click.subscribe((e) => {
    console.log(e);
// метод движения змеи 
    this.snake.move(e.key, this.field); 

// отрисовываем передвижение путем
    slaveDiv.style.left = this.snake.corX + 'px';
    slaveDiv.style.top = this.snake.corY + 'px';  

  
    this.connectCube();
  });
  }
}
