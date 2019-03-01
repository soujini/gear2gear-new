import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SwUpdate } from '@angular/service-worker';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
let environment = require('./environments/environment');

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then(() => {
  console.log("oh ho prod navigator ",navigator);
  console.log("sw in nav ",navigator.serviceWorker);
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('ngsw-worker.js');
    console.log("service worker reg");
}
})
.catch(err => console.log(err))

// platformBrowserDynamic().bootstrapModule(AppModule)
// .then(() => {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('ngsw-worker.js');
//   }
// })
// .catch(err => console.log(err));
