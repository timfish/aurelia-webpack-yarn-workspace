import { inlineView, customElement } from 'aurelia-framework';
import html from './page.html';
import './page.scss';

@customElement('page')
@inlineView(html)
export class Page {
  public something: string = 'Loaded from Module!';
}
