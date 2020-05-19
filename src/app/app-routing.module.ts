import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  // {path:'home', component:HomeComponent},
  // {path:'about', component:AboutComponent},
  // {path:'services', component:ServicesComponent},
  // {path:'portfolio', component:PortfolioComponent},
  // {path:'team', component:TeamComponent},
  {path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,ServicesComponent,PortfolioComponent,TeamComponent,AboutComponent, ContactComponent]