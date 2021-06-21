import { Component, OnInit } from '@angular/core';
import { RecipeApiService} from '../recipe-api.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  displays: any = [];
  keyword: string = "";
  
    constructor(private recipeApiService: RecipeApiService) {}
    ngOnInit(): void {
  
      this.load();
    }
    load(){
      this.displays = this.recipeApiService.display;
      this.keyword = this.recipeApiService.keyword;
      console.log(this.displays);
    }

}
