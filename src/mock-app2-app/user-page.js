import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';


/**
 * @customElement
 * @polymer
 */
class RegisterPage extends PolymerElement {
    static get template() {
        return html`
        <div class="container">
            <div class="nav"></div>
            <div class="main"></div>
        </div>
    `;
    }

    

    static get properties() {
        return {
            action: {
                type: String,
                value: 'List'
            },
            registrationResponse: {
                type: Array,
                value: []
            }
        };
    }

    _handleResponse(event) {
        switch (this.action) {
            case 'List':
                this.registrationResponse = event.detail.response;
                this.set('route.path', '/login')
                break;

            default:break;
        }
    }

    _makeAjax(url, method, postObj) {
        let ajax = this.$.ajax;
        ajax.url = url;
        ajax.method = method;
        ajax.body = postObj ? JSON.stringify(postObj) : undefined;
        ajax.generateRequest();
    }
}

window.customElements.define('register-page', RegisterPage);
