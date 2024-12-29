import {
    FuelEconomyResult,
    FuelPrices,
    MenuItem,
    VehicleRecord,
} from "@/constants/Types";
import { fetchData } from "./fetch";

/**
 * Get all years from 2008 to current year
 * @returns Array of years from 2008 to current year
 */
export const getYears = (): string[] => {
    const startYear = 2008;
    const currentYear = new Date().getFullYear();
    return Array.from({ length: currentYear - startYear + 1 }, (_, index) =>
        (currentYear - index).toString(),
    );
};

/**
 * Get all makes from the given year
 * @param year - Year to get makes for
 * @returns Array of makes for the given year
 */
export const getMakes = async (year: string): Promise<MenuItem[]> => {
    // Construct the URL
    const url = `https://www.fueleconomy.gov/ws/rest/vehicle/menu/make?year=${year}`;

    // Fetch makes from the given year
    const makes = await fetchData<FuelEconomyResult>(url);

    // Return an empty array if makes or menuItem is null or undefined
    if (!makes || !makes.menuItem) return [];

    // Check if menuItem is an array or just a single item and return it as an array
    return Array.isArray(makes.menuItem) ? makes.menuItem : [makes.menuItem];
};

/**
 * Get all models from the given year and make
 * @param year - Year to get models for
 * @param make - Make to get models for
 * @returns Array of models for the given year and make
 */
export const getModels = async (
    year: string,
    make: string,
): Promise<MenuItem[]> => {
    // Construct the URL
    const url = `https://www.fueleconomy.gov/ws/rest/vehicle/menu/model?year=${year}&make=${make}`;

    // Fetch models from the given year and make
    const models = await fetchData<FuelEconomyResult>(url);

    // Return an empty array if models or menuItem is null or undefined
    if (!models || !models.menuItem) return [];

    // Check if menuItem is an array or just a single item and return it as an array
    return Array.isArray(models.menuItem) ? models.menuItem : [models.menuItem];
};

/**
 * Get the vehicle ID from the given year, make, and model
 * @param year - Year to get vehicle IDs for
 * @param make - Make to get vehicle IDs for
 * @param model - Model to get vehicle IDs for
 * @returns Vehicle ID for the given year, make, and model
 */
export const getVehicleOptions = async (
    year: string,
    make: string,
    model: string,
): Promise<MenuItem[]> => {
    // Construct the URL
    const url = `https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=${year}&make=${make}&model=${model}`;

    // Fetch vehicle options from the given year, make, and model
    const vehicleOptions = await fetchData<FuelEconomyResult>(url);

    // Return an empty array if vehicleOptions or menuItem is null or undefined
    if (!vehicleOptions || !vehicleOptions.menuItem) return [];

    // Check if menuItem is an array or just a single item and return it as an array
    return Array.isArray(vehicleOptions.menuItem)
        ? vehicleOptions.menuItem
        : [vehicleOptions.menuItem];
};

/**
 * Get the vehicle record from the given ID
 * @param id - ID of the vehicle to get the record for
 * @returns Vehicle record for the given ID
 */
export const getVehicleRecord = async (
    id: string,
): Promise<VehicleRecord | null> => {
    // Construct the URL
    const url = `https://www.fueleconomy.gov/ws/rest/vehicle/${id}`;

    // Fetch vehicle record from the given ID
    const vehicleRecord = await fetchData<VehicleRecord>(url);

    // Log if no vehicle record was found
    if (!vehicleRecord) {
        console.error(`No vehicle record found for ID: ${id}`);
    }

    // Return the vehicle record
    return vehicleRecord;
};

/**
 * Get the fuel price for the given fuel type
 * @param fuelType - Type of fuel to get price for
 * @returns - Fuel price for the given fuel type
 */
export const getFuelPrice = async (fuelType: string): Promise<number> => {
    const url = "https://www.fueleconomy.gov/ws/rest/fuelprices"; // URL for fuel prices
    const fuelPrices = await fetchData<FuelPrices>(url); // Fetch fuel prices
    if (!fuelPrices) return 0; // Return 0 if fuel prices are null

    // Map of fuel types to their corresponding prices
    const fuelMap: { [key: string]: string } = {
        Regular: fuelPrices.regular,
        Premium: fuelPrices.premium,
        Diesel: fuelPrices.diesel,
        E85: fuelPrices.e85,
        Electric: fuelPrices.electric,
        LPG: fuelPrices.lpg,
        Midgrade: fuelPrices.midgrade,
        CNG: fuelPrices.cng,
    };

    // Find and return the price for the matching fuel type or default to regular
    return parseFloat(
        Object.entries(fuelMap).find(([type]) =>
            fuelType.includes(type),
        )?.[1] || fuelPrices.regular,
    );
};
