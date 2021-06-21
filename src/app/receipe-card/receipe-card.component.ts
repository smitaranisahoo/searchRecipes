import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../recipe-api.service';
// import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-receipe-card',
  templateUrl: './receipe-card.component.html',
  styleUrls: ['./receipe-card.component.css']
})
export class ReceipeCardComponent implements OnInit {
  key: string = ""
  constructor(private recipeApiService: RecipeApiService) { }

  ngOnInit(): void {
}
recipe(): void{
  this.recipeApiService.fetchResultByKey(this.key);
  }
}

