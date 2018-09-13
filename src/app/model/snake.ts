
// Импорт класса Field

import { Field } from "src/app/model/field";

// Объект с названиями событий движения и методами для них

let directionMap = {
    "ArrowUp": (cor)=>{return cor-10},
    "ArrowDown": (cor)=>{return cor+10},
    "ArrowLeft": (cor)=>{return cor-10},
    "ArrowRight": (cor)=>{return cor+10}
}

//Описание класса Snake

export class Snake {
    widthPx: number
    heightPx: number
    corX: number = 0
    corY: number = 0

// Метод класса Snake, который отвечает за движение    

    move(direction: string, field: Field){
       let moveX = this.corX;
       let moveY = this.corY;

       switch(direction){
           case "ArrowUp": 
           case "ArrowDown": moveY = directionMap[direction](this.corY);
           break;
           case "ArrowLeft":
           case "ArrowRight": moveX = directionMap[direction](this.corX);   
       }
// проверка нахождения змеи в границах поля
       if(field.isWithinBorders(moveX, moveY)){
           this.corX = moveX;
           this.corY = moveY; 
       }
    }
}