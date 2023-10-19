import { PostModel } from "./post-model";

export class Database {
    public getPosts(): Array<PostModel>  {
        return [new PostModel("Github", "visite meu perfil no github")
    , new PostModel("Insta", "visite meu perfil no insta")];
    }
}