import { Component, OnInit } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';


@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor(
    private streamingMedia : StreamingMedia
  ) { }

  startVideo(){
    let options : StreamingVideoOptions={
      successCallback: ()=> {
        console.log()
      },
      errorCallback: ()=>{
        console.log
      },
      orientation: 'portrait'
    }

    this.streamingMedia.playVideo('https://drive.google.com/open?id=1NhIbXpi3Tb1dfzeYq4IHgaTQV0Zzt_37', options)
  }

  ngOnInit() {
  }

}
