export class PostModel {
    title: string;
    shortDescription: string;

    constructor(title: string, shortDescription: string) {
        this.title = title;
        this.shortDescription = shortDescription;
    }
}