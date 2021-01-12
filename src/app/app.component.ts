import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ChangeTheme } from './redux/actions/theme.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedTheme: string;

  public constructor(
    private titleService: Title, 
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.checkTheme();
  }

  public changeTheme(theme: string) {
    this.store.dispatch(new ChangeTheme(theme));
    this.checkTheme();
  }

  public checkTheme(): void {
    this.store
    .select('theme')
    .pipe(take(1))
    .subscribe(theme => {
      this.selectedTheme = theme;

      let title = `${theme} theme!`;
      
      this.titleService.setTitle(title);
    });
  }

  public setColor(): any {
    document.getElementsByTagName('BODY')[0].className = this.selectedTheme.toLowerCase();
    return this.selectedTheme.toLowerCase();
  }
}
