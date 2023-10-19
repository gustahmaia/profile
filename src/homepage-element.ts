import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./header-element";
import "./post-element";

@customElement('homepage-element')
export class HomepageElement extends LitElement {

    render() {
        return html
        `<header-element></header-element>
         <post-element></post-element>
        `;
    }
}