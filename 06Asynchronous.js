// Simulating an asynchronous operation (e.g., fetching data from an API)
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully" };
            resolve(data); // Simulating successful data retrieval
            // If there's an error, reject it
            // reject(new Error("Failed to fetch data"));
        }, 2000); // Simulating a 2-second delay
    });
}

// Callback function example
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data = { message: "Data fetched successfully" };
        callback(data);
    }, 2000);
}

// Using promises
fetchData()
    .then(data => {
        console.log("Promise resolved:", data);
    })
    .catch(error => {
        console.error("Promise rejected:", error);
    });

// Using async/await
async function fetchDataAsync() {
    try {
        const data = await fetchData();
        console.log("Async/await resolved:", data);
    } catch (error) {
        console.error("Async/await rejected:", error);
    }
}

// Invoking fetchDataWithCallback with a callback function
fetchDataWithCallback(data => {
    console.log("Callback function:", data);
});

// Invoking fetchDataAsync with async/await
fetchDataAsync();
