export interface IPTS {
    mark: string;
    vin: number;
    name: string;
    category: CATEGORY;
    year: number;
    enginePower: number;
    engineModel: string;
    engenieVolume:number;
    engineType: string;
    ecoClass: string;
    maxWeight: number;
    unloadedMass: number;
    manufactorier: string;
    allowance: string;
    allowanceDate: Date;
    chassis: number;
    body: string;
    bodyColor: string;
    exportCountry: string;
    serialNumbner: string;
    customsRestrictions: boolean;
    ownerName: string;
    ownerAdress: string;
    licenserName: string;
    licenserAdress: string;
    licensingDate: string;
}


enum CATEGORY {
    "A",
    "B",
    "C",
    "D"
}