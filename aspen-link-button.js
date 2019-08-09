import { PolymerElement } from '/node_modules/@polymer/polymer/polymer-element.js';
import '/node_modules/@polymer/paper-tooltip/paper-tooltip.js';
import '/node_modules/@polymer/iron-icon/iron-icon.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import '@aspen-elements/aspen-link-fld-mixin';

/**
 * `aspen-link-button` This component contains a single icon which allows the user to go to a 
 *  particular location. If the 'value' field is not set, then the button will be disabled.
 * 
 *
 * @summary This component opens an associated link/url (stored in the 'value' field) in a new window.
 * @customElement
 * @polymer
 * @extends {PolymerElement}
 */
class AspenLinkButton extends AspenLinkFldMixin(PolymerElement) {
  static get template() {
    return html`
        <style>
            :host {
                display: block;
                --background-color: var(--google-blue-500);
                --icon-color: white;
                --icon-size: 24px;
                --label-font-size: 1.0em;
                --label-color: white;
            }

            paper-button{
                background-color: var(--background-color);
                color: var(--label-color);
                text-transform: none;
            }
            paper-button[disabled]{
                background-color: #909090;
            }

            iron-icon{
                background-color: transparent;
                color: var(--icon-color);
                --iron-icon-height: var(--icon-size);
                --iron-icon-width: var(--icon-size);
                margin-right: 10px;
            }
            
            label{
                font-size: var(--label-font-size);
                color: var(--label-color);
            }

        </style>

        
        
        <paper-tooltip for="linkbutton" position="bottom" offset="14">
          [[tooltip]]
        </paper-tooltip>
        <paper-button id="linkbutton" on-tap="__launch" disabled="[[isDisabled]]">
            <iron-icon icon="[[icon]]"></iron-icon>
            <label>[[label]]</label>
        </paper-button>
`;
  }

  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
      return 'aspen-link-button';
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
      super();
  }

  /**
   * Use for one-time configuration of your component after local DOM is initialized. 
   */
  ready() {
      super.ready();

      afterNextRender(this, function() {
          
      });
  }
}

window.customElements.define(AspenLinkButton.is, AspenLinkButton);
