import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss',
})
export class AddRecipeComponent {
  binding: any;
  localStorageValue: string | null = ' ';


  addRecipeForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    difficulty: new FormControl(0, [
      Validators.required,
      Validators.min(0),
    ]),
    image: new FormControl('', [Validators.required, Validators.minLength(3)]),
    prepTimeMInutes: new FormControl(0, [
      Validators.required,
      Validators.min(0),
    ]),
  });

  onSubmit() {
    //if (this.addRecipeForm.valid) console.log(this.addRecipeForm.value);
    //else console.error('FORM IS NOT VALID');

    const jsonObj={
      "a":12,
      "height":180,
      "test":{
        a:"another object",
      },
      array:['1',2,4],
    };
    localStorage.setItem('theme', JSON.stringify(jsonObj));
    sessionStorage.setItem('theme', 'light');
    this.localStorageValue= localStorage.getItem('theme');
  }
}
