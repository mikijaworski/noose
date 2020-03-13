import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./authentication/logout/logout.module').then( m => m.LogoutModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterModule)
  },
  {
    path: 'test/numbers',
    loadChildren: () => import('./tests/numbers/numbers.module').then( m => m.NumbersModule)
  },
  {
    path: 'test/reaccio',
    loadChildren: () => import('./tests/reaccio/reaccio.module').then( m => m.ReaccioModule)
  }, 
  {
    path: 'ranking',
    loadChildren: () => import('./rankings/rankings.module').then( m => m.RankingsModule)
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
