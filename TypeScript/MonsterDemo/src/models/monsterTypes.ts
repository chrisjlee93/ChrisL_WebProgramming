export enum MonsterTypes {
    Human = "Human",
    Blob = "Blob",
    Undead = "Undead"
}

export type MonsterTuple = [string, number, string]

export interface Monster {
    firstName: string;
    lastName?: string;
    age: number;
    // type: "Human" | "Blob" | "Undead";
    type: MonsterTypes; // can use this instead of the code above
    moreInfo: string;
}

export interface SuperMonster extends Monster {
    powerLevel: number;
}
