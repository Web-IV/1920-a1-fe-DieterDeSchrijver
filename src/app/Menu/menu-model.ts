import {
  Allergy
} from './allergy-model';

interface MenuJson {
  title: string;
  id: string;
  description: string;
  allergies: Allergy[];
}

interface MenuJsonForBackend {
  title: string;
  id: string;
  description: string;
  allergies: string[];
}

export class Menu {
  private _id: string;

  constructor(
    private _title: string,
    private _description: string,
    private _allergies = new Array < Allergy > (),
  ) {}

  static fromJSON(json: MenuJson): Menu {
    let menu = new Menu(
      json.title,
      json.description,
      json.allergies
    );

    menu.id = json.id;
    return menu
  }

  toJSON(): MenuJsonForBackend {
    let r;
    if (this.allergies == null) {
      r = {
        title: this.title,
        description: this.description,
        allergies: []
      }
    } else {
      r = {
        title: this.title,
        description: this.description,
        allergies: this.allergies.map(all => all.id)
      }
    }


    return r;

  }


  public get title(): string {
    return this._title;
  }
  public get description(): string {
    return this._description;
  }
  public get allergies(): Allergy[] {
    return this._allergies;
  }

  public get id(): string {
    return this._id;
  }


  public set id(v: string) {
    this._id = v;
  }


}
