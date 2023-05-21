import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import MenuItem from 'src/app/models/menu-item';

@Component({
  selector: 'app-restaurant-menu-items-list',
  templateUrl: './restaurant-menu-items-list.component.html',
  styleUrls: ['./restaurant-menu-items-list.component.scss'],
})
export class RestaurantMenuItemsListComponent implements OnInit {
  @Input() name?: string;



  constructor(private dataservice: DataService) { }

  ngOnInit() { }

}
