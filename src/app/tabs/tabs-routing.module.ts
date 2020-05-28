import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "Dashboard",
        loadChildren: () =>
          import("../pages/dashboard/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "Settings",
        loadChildren: () =>
          import("../pages/settings/settings.module").then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: "Budget",
        loadChildren: () =>
          import("../pages/budget/budget.module").then((m) => m.BudgetModule),
      },
      {
        path: "Activity",
        loadChildren: () =>
          import("../pages/activity/activity.module").then(
            (m) => m.ActivityModule
          ),
      },
      {
        path: "",
        redirectTo: "/tabs/Dashboard",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/Dashboard",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
