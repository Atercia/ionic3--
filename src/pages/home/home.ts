import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { DomSanitizer } from '@angular/platform-browser';
/* import { HttpserviceService } from '../../provider/http/httpservice.service'
 */
import { ServiceTestProvider } from "../../providers/service-test/service-test";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  ifrender=true;
  public formValue='';
  imgsrc = 'https://c.staticblitz.com/assets/client/components/SideMenu/blitz_logo-11cebad97cad4b50bc955cf72f532d1b.png';

  constructor(
    public navCtrl: NavController,
    public _d: DomSanitizer,
    public httpservice: ServiceTestProvider
  ) {}
  test() {
    console.log("test1");
    /* this.httpservice.testHttp().subscribe((val)=>{console.log(val)}) */
    this.httpservice.testHttp();
  }

  testAddData() {
    this.httpservice.addData().subscribe(val => {
      console.log("POST call successful value returned in body", val);
    });
  }

  testGetData(){
    this.httpservice.getData().subscribe(val => {
      console.log("POST call successful value returned in body", val);
    });
  }

  onSubmit(f){
    this.formValue = f.value.title1;
    console.log(`value：${f.value.title1}`);
  }

  fileChange(e) {
    const file = e.srcElement.files[0]; // 获取图片这里只操作一张图片
    this.imgsrc = window.URL.createObjectURL(file); // 获取上传的图片临时路径
    console.log(e)
  }
}
