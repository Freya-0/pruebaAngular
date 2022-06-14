import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoPrueba';

  nombre: string = 'Jesica'
  apellido: string = 'Paz'
  dni: number = 35216705 ;
 fechaNac: number = 31

showImage: boolean;
showImage2: boolean;

 

   constructor() { 
    this.showImage=true
    this.showImage2=false
   }

showPic(show: boolean)
{
  this.showImage2 = show;
  this.showImage=false


}

showPic2 (show: boolean)

{
  this.showImage = show;
  this.showImage2=false;

}
   ngOnInit() { 
   
    }
 

   

onMouse()
{ 
  var myloc = new Image();  
  myloc.useMap = "./assets/avatar2.png" ;
  var img = document.createElement('img')  ;
   document.body.appendChild(img);  

  
}
funcName2(){
  
}

} 


