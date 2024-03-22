"use server";

export async function fetchAdvancedSearch(query: string, Nextindex: number) {
    try {
        if (!query.trim()) {
            // Wenn die Abfrage leer ist, returnieren Sie ein leeres Array
            return [];
        }

        const baseQuery = query.slice(0, -2);
        console.log(baseQuery);
        const response = await fetch(`${baseQuery}${Nextindex}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
        return data.data || [];
    } catch (error) {
        throw new Error('Error fetching data: ');
    }
}
