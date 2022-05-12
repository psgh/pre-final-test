import { Component, OnInit, Input } from '@angular/core';
import { GetFactService } from '../services/get-fact.service';
import { Cat } from '../model/Cat';
import { Fact } from '../model/Fact';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css'],
})
export class ListDataComponent implements OnInit {
  show: boolean = true;
  factAvailable: boolean = false;
  @Input() cats!: Cat[];
  @Input() fact!: string;

  constructor(private getFactService: GetFactService) {}

  ngOnInit(): void {
    this.getFact();
  }

  mouseClickEvent($event: Event) {
    console.log((<HTMLDivElement>$event.target).innerText);
  }

  hide($event: Event) {
    if (this.show) {
      this.show = false;
      (<Element>$event.target).textContent = 'Show list';
    } else {
      this.show = true;
      (<Element>$event.target).textContent = 'Hide list';
    }
  }

  getFact() {
    this.getFactService.getFact().subscribe((response) => {
      this.fact = response.fact;
      this.factAvailable = true;
    });
  }
}
