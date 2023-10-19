import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('post-item-element')
export class PostItemElement extends LitElement {

    @property()
    title: string = "";

    @property()
    shortDescription: string = "";

    static styles = css
    `
    div {
        display: flex;
        flex-direction: column;
        border: 2px solid gray;
        border: 2px solid gray;
        padding: 1%;
        border-radius: 8px;
    }
    div:hover {
        cursor: pointer;
        transform: scale(1.02);
    }
    `

    render() {

        return html
        `
        <div>
            <span>${this.title}</span>
            <span>${this.shortDescription}</span>
        </div>
        `
    }
}