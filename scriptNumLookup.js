document.addEventListener('DOMContentLoaded', function() {
    const searchField = document.getElementById('searchField');
    const searchButton = document.getElementById('searchButton');
    const resultsTable = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];
    const statusLabel = document.getElementById('statusLabel');
    const resultsCount = document.getElementById('resultsCount');
    
    // --- IMPORTANT: Replace 'YOUR_ACTUAL_API_KEY_HERE' with your real Numlookupapi key ---
    const API_KEY = "num_live_2chmFSEtwBY2m47j5xoSpvhyOT5b2tj1DtowkYCZ"; 
    // Base URL for the /v1/validate/ endpoint
    const API_URL = "https://api.numlookupapi.com/v1/validate/"; 
    
    /**
     * Fetches phone number validation information from the Numlookupapi using the /v1/validate endpoint.
     * @param {string} phoneNumber The phone number to validate.
     * @returns {Promise<Object>} A promise that resolves to the API response data.
     */
    async function searchAPI(phoneNumber) {
        // Construct the URL with the phone number and API key
        const url = `${API_URL}${phoneNumber}?apikey=${API_KEY}`;
        
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({})); 
                const errorMessage = errorData.error || `Server returned status ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('API Error:', error);
            
            if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
                throw new Error('Could not connect to server. Check your internet connection or try again later.');
            }
            
            throw error;
        }
    }

    /**
     * Displays the validation results from the Numlookupapi in the table.
     * @param {Object} data The data returned from the Numlookupapi.
     */
    function displayResults(data) {
        resultsTable.innerHTML = ''; 
        
        // The /v1/validate endpoint returns different fields, primarily 'valid' and 'error'.
        if (!data || data.valid === undefined) { // Check if 'valid' field is present to indicate a valid response structure
            const row = resultsTable.insertRow();
            const cell = row.insertCell(0);
            cell.colSpan = 2;
            cell.textContent = data?.error || "No valid response or error from API.";
            cell.style.textAlign = "center";
            cell.style.padding = "20px";
            cell.style.color = "#666";
            resultsCount.textContent = "0 results";
            return;
        }
        
        // Display relevant validation information
        const fieldsToDisplay = [
            { label: "Number", key: "number" },
            { label: "Valid", key: "valid", formatter: (val) => val ? "Yes" : "No" },
            { label: "Local Format", key: "local_format" },
            { label: "International Format", key: "international_format" },
            { label: "Country Prefix", key: "country_prefix" },
            { label: "Country Code", key: "country_code" },
            { label: "Country Name", key: "country_name" },
            { label: "Location", key: "location" },
            { label: "Carrier", key: "carrier" },
            { label: "Line Type", key: "line_type" },
            { label: "Rechargeable", key: "rechargeable", formatter: (val) => val ? "Yes" : "No" },
            { label: "E.164 Format", key: "e164_format" },
            { label: "Dial Code", key: "dial_code" }
        ];

        fieldsToDisplay.forEach(field => {
            const row = resultsTable.insertRow();
            row.insertCell(0).textContent = field.label;
            const value = data[field.key];
            row.insertCell(1).textContent = field.formatter ? field.formatter(value) : (value || "N/A");
        });
        
        resultsCount.textContent = "1 result"; 
    }

    /**
     * Handles the search action when the button is clicked or Enter is pressed.
     */
    async function performSearch() {
        const searchText = searchField.value.trim();
        
        if (!searchText) {
            statusLabel.textContent = "Please enter a phone number to search";
            return;
        }

        try {
            searchButton.disabled = true;
            statusLabel.textContent = "Searching...";
            
            const data = await searchAPI(searchText);
            
            displayResults(data);
            statusLabel.textContent = "Search completed";
        } catch (error) {
            console.error("Search failed:", error);
            statusLabel.textContent = `Error: ${error.message}`;
            
            resultsTable.innerHTML = '';
            const row = resultsTable.insertRow();
            const cell = row.insertCell(0);
            cell.colSpan = 2;
            cell.textContent = error.message;
            cell.style.textAlign = "center";
            cell.style.padding = "20px";
            cell.style.color = "#d32f2f";
            
            resultsCount.textContent = "0 results";
        } finally {
            searchButton.disabled = false;
        }
    }

    searchButton.addEventListener('click', performSearch);
    searchField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
});