import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
 
  title = 'recipe';

  backgroundImageUrl: string = 'assets/img/אתרי.jpg';

  // constructor(private router: Router) {
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       // הגדר את התמונת הרקע לפי הנתיב הנוכחי בניווט
  //       if (event.url === '/') {
  //         this.backgroundImageUrl = 'assets/img/אתרי.jpg';
  //       } else if (event.url === '/other-page') {
  //         this.backgroundImageUrl = 'path/to/other-image.jpg';
  //       }
  //     }
  //   });
  // }

  // ngOnInit(): void {
  //     document.body.style.backgroundImage = `url(${this.backgroundImageUrl})`;
  // }

//  ctrl+k+s שמירת כל הקקבצים ביחד  
//  in package.jsom scripts{"start": "ng serve --hmr"} בכדי שלא נצטרך לטעון יותר את האפליקציה
//  ngOnInit-בעת טעינת הקומפוננטה לקריאות נתונים מהסרבסים וקריאות API
//  ngOnChanges-לשים לב לשינויים שקוראים ב-ינםוטים שמגיעים לנו(input)
//  ngDoCheck-כשנרצה לעשות בדיקה ידנית לשינויים שנערכו בקומפוננטה
//  ngAfterNewInit-נשתמש שנרצה למצוא ולתפוס אלמנטים שהתרנדרו רק אחרי ngOnInit
//  ngOnDestroy-כשנרצה להשמיד ולסגור את הקומפוננטה

// יש אפשרות גם לעצב לפי הפרמטירים שלנו בצורה כזאת- בדכ העיצוב לדיב או לאלמנט
//  [ngStyle]="{border: movie.num > 7 ? '1px soild green' : '1px soild red' }"

// יש גם אפשרות שאם עונה על תנאי מסוים אז מבצע את העיצוב של הקלאס מסוים שמעוצב בדף CSS
//  [ngClass]="{ 'good-movie' : movie.num > 8 }"
}
