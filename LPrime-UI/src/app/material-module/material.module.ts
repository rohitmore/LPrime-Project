import {NgModule} from "@angular/core";
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDividerModule,
  MatIconModule, MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatDividerModule,
    MatTooltipModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatDividerModule,
    MatTooltipModule,
    MatInputModule
  ]
})
export class MaterialModule { }
