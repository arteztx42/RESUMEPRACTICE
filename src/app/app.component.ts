import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loginform = new FormGroup({
    name:new FormControl(''),
    email: new FormControl('')
  });
  title = 'PRACTICE';
  loginUser(){console.log(this.loginform.value)
}
}
