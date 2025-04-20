import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule

bootstrapApplication(AppComponent, {
  providers: [
    FormsModule,  // Ensure FormsModule is included here
    ...appConfig.providers
  ]
})
  .catch((err) => console.error(err));
