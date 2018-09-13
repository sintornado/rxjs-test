export class Cube {
    widthPx: number
    heightPx: number
    corX: number = 0
    corY: number = 0

    newCube = document.createElement('div');

    createCube(){
      
      this.newCube.style.background = 'yellow';
      this.newCube.style.width = '50px';
      this.newCube.style.height = '50px';
      this.newCube.style.position = 'relative';

      document.getElementById('main').appendChild(this.newCube);
      this.randomPosition();
    }

    randomPosition(){
        this.corX = Math.round(Math.random() * 450);
        this.corY = Math.round(Math.random() * 450);

        this.newCube.style.left = this.corX + 'px';
        this.newCube.style.top = this.corY + 'px';  
    }
}