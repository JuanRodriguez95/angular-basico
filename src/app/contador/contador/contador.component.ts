import { Component } from '@angular/core';


@Component({
    selector:'app-contador',
    template:`
        <h1>{{title}}</h1>

        <h3>la base es de : <strong> {{base}} </strong></h3>
        
        <button (click)="acumular(true)">{{base}}</button>
        
        
        <span>{{numero}}</span>
        
        
        <button (click)="acumular(false)">-{{base}}</button>
    
    `
})

export class ContadorComponent{
    title = 'Contador App';
    numero:number = 10;
    base : number = 5;
    
    
    
    acumular(bandera : boolean){
        if(bandera){
          this.numero += this.base
        }else{
          this.numero -= this.base;
        }
    }
}