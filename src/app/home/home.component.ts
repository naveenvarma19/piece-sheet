import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListComponent, FormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
