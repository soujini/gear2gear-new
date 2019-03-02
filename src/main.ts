import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SwUpdate } from '@angular/service-worker';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppModule } from './app/app.module';
let environment = require('./environments/environment');

import 'hammerjs';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
.then(() => {
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('ngsw-worker.js');
}
})
.catch(err => console.log(err))
