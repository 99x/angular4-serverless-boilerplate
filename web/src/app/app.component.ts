import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = { name: 'Ashan', id: 'ashanf@99x.lk', role: 'advisor' };
}

