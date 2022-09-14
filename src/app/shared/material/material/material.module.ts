import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { CdkStepperModule } from '@angular/cdk/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {MatStepperModule} from '@angular/material/stepper';
const modules = [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatListModule,
    MatRadioModule,
    MatTooltipModule,
    MatChipsModule,
    MatCheckboxModule,
    MatRippleModule,
    CdkStepperModule,
    MatProgressBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatStepperModule
];
@NgModule({
    declarations: [],
    imports: [...modules],
    exports: [...modules],
    providers: [ ]
})
export class MaterialModule { }
