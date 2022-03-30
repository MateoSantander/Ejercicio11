import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../Entidad/Videojuego';
@Component({
  selector: 'app-videojuegos-component',
  templateUrl: './videojuegosComp.component.html',
  styleUrls: ['./videojuegosComp.component.css']
})

export class VideojuegoComponent implements OnInit{
    
    arrayVideojuegos: Videojuego[] = [];

    
  videojuego : Videojuego | null = null

    id : number = 0

    titulo : string = ""

    compania : string = ""

    rating : number = 0

    constructor(){
        var juego = new Videojuego("Mass Effect 2", "Bioware", 8)
        this.arrayVideojuegos.push(juego)
        var juego = new Videojuego("LoL", "Riot Games", 7.5)
        this.arrayVideojuegos.push(juego)
        var juego = new Videojuego("Elden Ring", "From Software", 9)
        this.arrayVideojuegos.push(juego)
        var juego = new Videojuego("Cyberpunk 2077", "CDProject Red", 6.5)
        this.arrayVideojuegos.push(juego)
    }

    ngOnInit(): void {
    }

    public limpiar(){   
        this.id = 0
        this.titulo = ""
        this.compania = ""
        this.rating=0;
    }
    
    public operar(videojuego : Videojuego) : void{
        this.id = videojuego.id
        this.titulo = videojuego.titulo
        this.compania = videojuego.compania
        this.rating = videojuego.rating
      }

    public insertar(){
            this.ratingInvalido(this.rating)
            this.videojuego = new Videojuego(this.titulo, this.compania,this.rating)
            this.arrayVideojuegos.push(this.videojuego)
            this.limpiar()
          }
        
    public eliminar(){
        for(let i=0;i<this.arrayVideojuegos.length;i++){
            if(this.id==this.arrayVideojuegos[i].id)
              this.arrayVideojuegos.splice(i,1)
          }
          this.limpiar();
        }
    public modificar(){
        for(var i=0;i<this.arrayVideojuegos.length;i++){
            if(this.id==this.arrayVideojuegos[i].id){
              this.arrayVideojuegos[i].titulo=this.titulo
              this.arrayVideojuegos[i].compania=this.compania
              this.arrayVideojuegos[i].rating=this.rating
            }
          }
    }

    public ratingInvalido(rating : number){
        if(this.rating<=0 || this.rating>10)
        this.rating = -1;
    }


}

