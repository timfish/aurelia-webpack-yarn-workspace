import { Page } from './page/page';
import { FrameworkConfiguration } from 'aurelia-framework';

export function configureAll(config: FrameworkConfiguration) {
  config.globalResources([Page]);
}

export { Page };
