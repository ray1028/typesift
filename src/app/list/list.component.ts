import { Component, OnInit, HostListener } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  numsArr = [];
  currentPos = 0;
  dataArr = [];
  count = 0;

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    // Initializing data from the API
    this._dataService.getData().subscribe(resp => {
      this.numsArr = [...resp.data];
      this.addMore();
    });
  }

  // function to add 10 elements from numArr at one time
  addMore() {
    for (
      let i = ++this.count;
      i < this.count + 10 && this.count < this.numsArr.length;
      i++
    ) {
      this.dataArr.push(i);
    }
    this.count = this.dataArr[this.dataArr.length - 1];
  }

  // onScroll function is mainly to check if the custom scroll bar reaches at the bottom of the view height
  @HostListener("scroll", ["$event"])
  onScroll(event) {
    if (this.currentPos > event.target.scrollTop) {
      // console.log("swipe up");
    } else if (this.currentPos < event.target.scrollTop) {
      // console.log("swipe down");
      if (
        event.target.scrollHeight - event.target.scrollTop ===
        event.target.clientHeight
      ) {
        this.addMore();
      }
    }
    this.currentPos = event.target.scrollTop;
  }
}
