import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonFormsModule } from '@jsonforms/angular';
import { JsonFormsAngularMaterialModule } from '@jsonforms/angular-material';
import { FormComponent } from './form.component';
import { EnumArrayRenderer, enumArrayControlTester } from './enum-array.renderer';

@NgModule({
  imports: [
    BrowserModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule,
    FormComponent,
    EnumArrayRenderer
  ],
  providers: [
    {
      provide: 'jsonformsRenderers',
      useValue: [
        { tester: enumArrayControlTester, renderer: EnumArrayRenderer }
      ],
      multi: true
    }
  ],
  bootstrap: [FormComponent]
})
export class AppModule {}
