import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['cathe.jpg', 'modern.jpg', 'mountain.jpg'];

  headlines=['Bring engineering to the next level',
              'Born to Code',
              'Graduated'
            ];
  
  currentImage = 0;
  showImage=true;
  
   ngOnInit() {
    this.updateImage();
   }
  
    updateImage(){
    
     setInterval(() =>{
       this.currentImage++;
       this.currentImage = this.currentImage % this.images.length;
       this.showImage=false;
       setTimeout(()=> {
         this.showImage=true;
       },10);
     }, 5000);
      
    }

}
