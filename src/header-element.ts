import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import profileLogo from "./assets/lit.svg";

@customElement('header-element')
export class HeaderElement extends LitElement {

    static styles = css`
        header {
            border: 3px solid blue;
            padding: 2%;
            display: flex;
            flex-direction: column;
        }

        .profile {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .mt-2 {
            margin-top: 2%;
        }

        .ml-1 {
            margin-left: 1%;
        }
     `;

    render() {
        return html`
            <header>
                <div class="profile">
                    <img src="${profileLogo}"/>
                    <span class="ml-1">Gustavo Henrique Maia</span>
                </div>
                <span class="mt-2">Gustavo Henrique Maia</span>
            </header>
        `
    }

}