import {NgModule} from "@angular/core";
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDividerModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule
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
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatDividerModule
  ]
})
export class MaterialModule { }
