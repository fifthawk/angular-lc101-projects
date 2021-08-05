import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleTakeOff(image){
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled = false;
       image.style.bottom = '10px';
    }
  }

  handleLanding(image){
    let result = window.confirm('Are you sure the shuttle is ready to be landed?');
    if (result){
      this.color = 'green';
      this.height = this.height/2;
      this.width = this.width/2;
      this.message = 'Shuttle has landed'
      this.takeOffEnabled = true;
      image.style.bottom = '0px'
    }
  }

  handleAbort(image){
    let result = window.confirm('ABORT MISSION?');
    if(result){
      this.color = 'green';
      this.height = 0;
      this.width = 0;
      this.message ='Mission Aborted'
      this.takeOffEnabled = true;
      image.style.bottom = '0px'
    }
  }

  moveRocket(image, position){
    if ( position === 'right'){
      let movement = parseInt(image.style.left) + 10 + 'px'
      image.style.left = movement;
      this.width = this.width + 1000
    }if (position === 'left'){
      let movement = parseInt(image.style.left) -10 + 'px'
      image.style.left = movement;
      this.width = this.width - 1000
    }if (position === 'up'){
      let movement = parseInt(image.style.bottom) + 10 + 'px'
      image.style.bottom = movement;
      this.height = this.height + 1000
    }if(position === 'down'){
      let movement = parseInt(image.style.bottom) - 10 + 'px'
      image.style.bottom = movement
      this.height = this.height - 1000
    }if(this.height >= 42000 || this.height <= 8000 || this.width <= -3000 || this.width >= 48000){
      this.color = 'orange'
    }
    }
  
}


