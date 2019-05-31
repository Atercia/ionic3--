import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
/* import { HttpserviceService } from '../../provider/http/httpservice.service'
 */
import { ServiceTestProvider } from "../../providers/service-test/service-test";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
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
}
