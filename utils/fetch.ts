/**
 * Fetch data from a given URL
 * @param url - URL to fetch data from
 * @returns Data from the response as JSON
 */
export const fetchData = async <T>(url: string): Promise<T | null> => {
    try {
        // Fetch the data with the given URL and header
        const response: Response = await fetch(url, {
            method: "GET",
            headers: { Accept: "application/json" },
        });

        // Check if the response is not ok
        if (!response.ok) {
            console.error(
                `Error fetching data: ${response.status} ${response.statusText}`,
            );
            return null;
        }

        // Return the response as JSON
        return (await response.json()) as T;
    } catch (error) {
        // Log the error
        console.error("Fetch error:", error);
        return null;
    }
};

/**
 * Post data to a given URL
 * @param url - URL to post data to
 * @returns true or false
 */
export const postData = async (url: string, data: any): Promise<boolean> => {
    try {
        // Post the data with the given URL and header
        const response: Response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        // Check if the response is not ok
        if (!response.ok) {
            console.error(
                `Error posting data: ${response.status} ${response.statusText}`,
            );
            return false;
        }

		return true;
    } catch (error) {
        // Log the error
        console.error("Post error:", error);
        return false;
    }
};

