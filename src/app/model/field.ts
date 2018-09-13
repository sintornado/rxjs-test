// Описание класса Field

export class Field {
    widthPx: number
    heightPx: number


// Описание параметров класса
    constructor(width: number, height: number) { 
        this.widthPx = width;
        this.heightPx = height;
     }

// Метод проверяет нахождения змеи в границах поля

    isWithinBorders(wid, hei){
        if(wid > this.widthPx || wid < 0) return false;
        if(hei > this.heightPx || hei < 0) return false; 
        return true;
    }

}

