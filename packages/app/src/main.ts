import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia } from 'aurelia-framework';
import { App } from './app';
// import { configure as configureModule } from '@timfish/module';

bootstrap(async (aurelia: Aurelia) => {
  let mod = await import('@timfish/module');

  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .feature(mod.configure);

  const root = document.getElementById('app-host') as Element;

  await aurelia.start();
  await aurelia.setRoot(App, root);
});
