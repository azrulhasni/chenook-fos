import { ThemableMixin } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { badge } from '@vaadin/vaadin-lumo-styles/badge.js';
import { html, LitElement, } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TooltipController } from '@vaadin/component-base/src/tooltip-controller.js';

@customElement('tatus-badge')
export class Badge extends ThemableMixin(LitElement) {

  @property()
  theme : string | null = null;

  static get is() {
    return 'tatus-badge';
  }

  static get styles() {
	return badge.styleSheet;
  }

  _tooltipController : TooltipController | undefined;

  firstUpdated() {
	this._tooltipController = new TooltipController(this, 'tooltip');
    this.addController(this._tooltipController);
  }

  _set_theme(theme : string) {
	 this.theme = theme;
  }

  render() {
	return html`
		<span theme='badge ${this.theme}' part='badge'>
			<slot name='content'></slot>
		</span>
		<slot name='tooltip''></slot>
	`;
  }
}