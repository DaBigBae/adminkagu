import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DiscountManagementRoutingModule } from "./discount-management-routing.module";
import { DiscountManagementComponent } from "./discount-management.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DiscountManagementComponent],
  exports: [DiscountManagementComponent],
  imports: [CommonModule, DiscountManagementRoutingModule, FormsModule]
})
export class DiscountManagementModule {}
