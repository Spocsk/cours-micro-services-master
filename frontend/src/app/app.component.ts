import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './core/services/login/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {}
