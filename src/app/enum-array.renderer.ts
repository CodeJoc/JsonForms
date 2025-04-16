import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormsAngularService, JsonFormsControl } from '@jsonforms/angular';
import { rankWith, UISchemaElement, JsonSchema } from '@jsonforms/core';

@Component({
  selector: 'enum-array-renderer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="options?.length">
      <label *ngFor="let option of options" class="block m-2">
        <input
          type="checkbox"
          [checked]="isSelected(option)"
          (change)="toggleOption(option)"
          class="mr-2"
        />
        {{ option }}
      </label>
    </div>
  `
})
export class EnumArrayRenderer extends JsonFormsControl {
  options: string[] = [];

  constructor(jsonFormsService: JsonFormsAngularService) {
    super(jsonFormsService);
  }

  override ngOnInit() {
    super.ngOnInit();
    const items = this.scopedSchema?.items;
    if (items && typeof items === 'object' && 'enum' in items && Array.isArray(items.enum)) {
      this.options = items.enum;
    } else {
      this.options = [];
    }
  }

  isSelected(option: string): boolean {
    return Array.isArray(this.data) && this.data.includes(option);
  }

  toggleOption(option: string) {
    const updated = Array.isArray(this.data) ? [...this.data] : [];
    const index = updated.indexOf(option);
    if (index === -1) {
      updated.push(option);
    } else {
      updated.splice(index, 1);
    }
    this.onChange(updated);
  }
}

export const enumArrayControlTester = rankWith(
  5,
  (uischema: UISchemaElement, schema: JsonSchema) => {
    const items = schema?.items;
    return (
      schema?.type === 'array' &&
      !!items &&
      typeof items === 'object' &&
      Array.isArray((items as JsonSchema).enum)
    );
  }
);
