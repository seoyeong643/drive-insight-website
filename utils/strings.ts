/**
 * Capitalizes the first letter of a string
 * @param str - Input string
 * @returns Capitalized string
 */
export const capitalize = (str: string): string =>
    str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Removes all whitespace from a string
 * @param str - Input string
 * @returns String with all whitespace removed
 */
export const removeAllWhitespace = (str: string): string =>
    str.replace(/\s/g, "");
