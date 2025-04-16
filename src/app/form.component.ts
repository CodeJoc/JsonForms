import { Component } from '@angular/core';
import { JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';
import { schema, uischema } from './ui-form.schema';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [JsonFormsModule, JsonFormsAngularMaterialModule],
  template: `
    <jsonforms
      [data]="data"
      [schema]="schema"
      [uischema]="uischema"
      (change)="onChange($event)"
    ></jsonforms>
  `
})
export class FormComponent {
  data = {};
  schema = schema;
  uischema = uischema;

  onChange(event: any) {
    this.data = event.data;
  }
}
