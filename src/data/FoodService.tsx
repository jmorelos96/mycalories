import {Observable} from 'rxjs';
export function FoodService(): Observable<any> {
    return new Observable( (observer) => {
        fetch('./food.json').then((data) => {  
            observer.next(data);
            observer.complete();
        });   
      });
  }