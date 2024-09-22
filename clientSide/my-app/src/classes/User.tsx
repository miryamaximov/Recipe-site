export class User {
  constructor(
    public name?: String,
    public password?: String,
    public address?: String,
    public phone?: String,
    public isManager?: boolean,
    public favoriteRecipes?: Array<string>
  ) {}

}
