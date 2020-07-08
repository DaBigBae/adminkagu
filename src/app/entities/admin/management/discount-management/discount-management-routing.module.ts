import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DiscountManagementComponent } from "./discount-management.component";

const routes: Routes = [
  {
    path: "",
    component: DiscountManagementComponent,
    children: [{ path: "", component: DiscountManagementComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscountManagementRoutingModule {}
