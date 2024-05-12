// Function to create a new transaction
function createTransaction() {
    const sender = document.getElementById('sender').value;
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;

    fetch('http://localhost:5000/transactions/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ sender, recipient, amount })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Error creating transaction.');
    })
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error(error.message);
        alert('Error creating transaction.');
    });
}

// Function to mine a new block
function mineBlock() {
    fetch('http://localhost:5000/mine')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Error mining block.');
    })
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error(error.message);
        alert('Error mining block.');
    });
}

// Function to retrieve the blockchain
function getChain() {
    fetch('http://localhost:5000/chain')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Error getting blockchain.');
    })
    .then(data => {
        document.getElementById('chain').textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error(error.message);
        alert('Error getting blockchain.');
    });
}
