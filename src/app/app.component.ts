import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // make sure that we store this feautre
  loadedFeature = 'recipe';

  // in here where we should navigate to the information and choose any name you want:
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
