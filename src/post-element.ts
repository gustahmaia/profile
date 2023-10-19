import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Database } from "./data/data";
import { PostModel } from "./data/post-model";
import "./post/post-item-element";


@customElement('post-element')
export class PostElement extends LitElement {

    @property()
    private posts: Array<PostModel> = [];

    static styles = css`
        main {
            width: 100;
            border: 3px solid blue;
            padding: 2%;
            display: flex;
            flex-direction: column;
        }
     `;

    render() {
        this.posts = new Database().getPosts();

        return html`
            <main>
                ${this.posts.map((post) =>
                html`<post-item-element title="${post.title}" 
                shortDescription="${post.shortDescription}">
                </post-item-element>`
                )}
            </main>
        `
    }
}