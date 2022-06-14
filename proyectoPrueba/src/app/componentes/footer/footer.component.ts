import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick1() {

      window.open('https://www.linkedin.com/');
}
  onClick2() 
  {
    window.open('https://www.facebook.com/')
  }

  onClickmail(){
    window.location.href = "mailto:jesi_vermilion@yahoo.com.ar";
  }

  


}



