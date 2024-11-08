/******************************/
/** Fuel Economy API Response */
/******************************/

export type FuelEconomyResult = {
    menuItem: MenuItem[] | MenuItem;
};

export type MenuItem = {
    text: string;
    value: string;
};

export interface VehicleRecord {
    atvType: string;
    barrels08: string;
    barrelsA08: string;
    battery: string;
    c240Dscr: string;
    c240bDscr: string;
    charge120: string;
    charge240: string;
    charge240b: string;
    city08: string;
    city08U: string;
    cityA08: string;
    cityA08U: string;
    cityCD: string;
    cityE: string;
    cityMpk: string;
    cityUF: string;
    cityUmpk: string;
    co2: string;
    co2A: string;
    co2TailpipeAGpm: string;
    co2TailpipeGpm: string;
    comb08: string;
    comb08U: string;
    combA08: string;
    combA08U: string;
    combE: string;
    combMpk: string;
    combUmpk: string;
    combinedCD: string;
    combinedUF: string;
    createdOn: string;
    cylDeact: string;
    cylDeactYesNo: string;
    cylinders: string;
    displ: string;
    drive: string;
    emissionsList: EmissionsList;
    engId: string;
    eng_dscr: string;
    evMotor: string;
    feScore: string;
    fuelCost08: string;
    fuelCostA08: string;
    fuelType: string;
    fuelType1: string;
    fuelType2: string;
    ghgScore: string;
    ghgScoreA: string;
    guzzler: string;
    highway08: string;
    highway08U: string;
    highwayA08: string;
    highwayA08U: string;
    highwayCD: string;
    highwayE: string;
    highwayMpk: string;
    highwayUF: string;
    highwayUmpk: string;
    hlv: string;
    hpv: string;
    id: string;
    lv2: string;
    lv4: string;
    make: string;
    mfrCode: string;
    model: string;
    modifiedOn: string;
    mpgData: string;
    mpgRevised: string;
    phevBlended: string;
    phevCity: string;
    phevComb: string;
    phevHwy: string;
    pv2: string;
    pv4: string;
    range: string;
    rangeA: string;
    rangeCity: string;
    rangeCityA: string;
    rangeHwy: string;
    rangeHwyA: string;
    startStop: string;
    trans_dscr: string;
    trany: string;
    UCity: string;
    UCityA: string;
    UHighway: string;
    UHighwayA: string;
    VClass: string;
    year: string;
    youSaveSpend: string;
    baseModel: string;
    sCharger: string;
    tCharger: string;
}

export interface EmissionsList {
    emissionsInfo: EmissionsInfo[];
}

export interface EmissionsInfo {
    efid: string;
    id: string;
    salesArea: string;
    score: string;
    scoreAlt: string;
    smartwayScore: string;
    standard: string;
    stdText: string;
}

export interface FuelPrices {
    cng: string;
    diesel: string;
    e85: string;
    electric: string;
    lpg: string;
    midgrade: string;
    premium: string;
    regular: string;
}