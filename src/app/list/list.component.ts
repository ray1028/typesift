import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  public numsArr = [];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.getData().subscribe(data => {
      this.numsArr = data;
    });
  }
}
