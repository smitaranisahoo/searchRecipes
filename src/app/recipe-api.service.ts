import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {
  productData:any;
  public searchResults: any;
  // constructor(private httpClient: HttpClient, private route:Router) { }
//   keyword: string ="";
  fetchnew = "";
  intfetch:Observable<any> | undefined
  display:any = []
  keyword: string = "";
  constructor(private http: HttpClient, private route:Router) { }
  getreceipe(): Observable<any> {
    return this.http.get("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=8cdc6ca6&app_key=%20c037b09ad8adf94799551db80364b9f1");
  }

  fetchResultByKey(key: any): void{
    this.keyword = key;
    console.log(key);
    this.fetchnew = (`https://api.edamam.com/api/recipes/v2?type=public&q=${key}&app_id=8cdc6ca6&app_key=%20c037b09ad8adf94799551db80364b9f1`)
    this.intfetch = this.http.get(this.fetchnew);
    this.intfetch.subscribe((result)=>{
      console.log(result);
      this.display = result.hits;
      console.log(this.display)
      this.route.navigate(["navbar"])
    })
  
}
}
