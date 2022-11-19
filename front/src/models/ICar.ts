

export interface ICar {
    id: string;
    ownershipPeriods: {
        ownershipPeriod: [{
            lastOperation: string;
            simplePersonType: string;
            from: string;
        }]
    }
    vehicle: {
        bodyNumber: string;
        category: string;
        color: string;
        engineNumber: string;
        engineVolume: string;
        model: string;
        powerHp: string;
        powerKwt: string;
        vin: string;
        year: string;
    }
    vehiclePassport: {
        issue: string;
        number: string;
    }
}
