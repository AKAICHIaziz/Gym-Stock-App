import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { PageStatistiqueComponent } from './pages/page-statistique/page-statistique.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path:'login',
    component: PageLoginComponent
  },
  {
    path:'signup',
    component:SignupPageComponent
  },
  {
    path:'',
    component: DashboardPageComponent,
    children: [
      {
        path:'statistique',
        component: PageStatistiqueComponent
      },
      {
        path:'articles',
        component:PageArticleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
