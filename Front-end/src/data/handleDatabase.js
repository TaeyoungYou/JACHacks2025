export const handleDatabase = async () => {
    try {
        const response = await fetch('https://jachacks2025.onrender.com/animals', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch animals: ${response.statusText}`);
        }

        const data = await response.json();
        return data.data || []; // Return array of pets
    } catch (error) {
        console.error('Error fetching animals from backend:', error.message);
        return []; // fallback to empty array if error
    }
};