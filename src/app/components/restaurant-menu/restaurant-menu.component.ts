import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { RestaurantMenu } from 'src/app/models/restaurant-menu';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss'],
})
export class RestaurantMenuComponent implements OnInit {
  @Input() name?: string;

  constructor(private dataservice: DataService) { }

  ngOnInit() { }

}
