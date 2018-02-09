import {Component, OnInit} from '@angular/core';
import {CoffeeService} from './services/coffee.service';
import {ICoffee} from './models/coffee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  coffees: ICoffee[] = [];
  constructor(private _coffeeServices: CoffeeService) {}
  showTypesOfCoffees() {
    return this._coffeeServices.getCoffees().subscribe(data => {
      console.log(data);
      this.coffees = data;
    }, error => console.log(error) );
  }
  ngOnInit() {
    return this.showTypesOfCoffees();
  }
}
