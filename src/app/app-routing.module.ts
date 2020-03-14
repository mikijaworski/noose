import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'logout',
    loadChildren: './authentication/logout/logout.module#LogoutModule'
  },
  {
    path: 'register',
    loadChildren: './register/register.module#RegisterModule'
  },
  {
    path: 'test/numbers',
    loadChildren: './tests/numbers/numbers.module#NumbersModule'
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
