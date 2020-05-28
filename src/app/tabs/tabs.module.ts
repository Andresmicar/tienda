import { IonicModule } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TabsPageRoutingModule } from "./tabs-routing.module";

import { TabsPage } from "./tabs.page";
import { DashboardModule } from "../pages/dashboard/dashboard.module";
import { SettingsModule } from "../pages/settings/settings.module";
import { ActivityModule } from "../pages/activity/activity.module";
import { BudgetModule } from "../pages/budget/budget.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    DashboardModule,
    SettingsModule,
    ActivityModule,
    BudgetModule,
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
