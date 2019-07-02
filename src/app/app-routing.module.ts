import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'master', loadChildren: './pages/master/master.module#MasterPageModule' },
  { path: 'lugarum', loadChildren: './pages/lugarum/lugarum.module#LugarumPageModule' },
  { path: 'lugardois', loadChildren: './pages/lugardois/lugardois.module#LugardoisPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'titta', loadChildren: './pages/titta/titta.module#TittaPageModule' },
  { path: 'tutorial', loadChildren: './pages/tutorial/tutorial.module#TutorialPageModule' },
  { path: 'tutorial-t', loadChildren: './pages/tutorial-t/tutorial-t.module#TutorialTPageModule' },
 
  
 
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
