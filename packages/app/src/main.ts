import { bootstrap } from 'aurelia-bootstrapper';
import { Aurelia } from 'aurelia-framework';
import { App } from './app';
// import { configureAll as configureModule } from '@timfish/module';

bootstrap(async (aurelia: Aurelia) => {
  aurelia.use.standardConfiguration().developmentLogging();
  // .feature(configureModule);

  const root = document.getElementById('app-host') as Element;

  await aurelia.start();
  await aurelia.setRoot(App, root);
});
