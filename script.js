const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_cvW8n2Kj7JccWhGtctCUIhSuOfbrirpoEpd7Xo4ld0j48VwFeJme4Fy0LPRWreWL8w/exec";

document.getElementById("equipmentForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        employeeId: document.getElementById("employeeId").value,
        userName: document.getElementById("userName").value,
        mobile: document.getElementById("mobile").value,
        location: document.getElementById("location").value,
        equipmentNumber: document.getElementById("equipmentNumber").value,
        dateOfUse: document.getElementById("dateOfUse").value,
        inTime: document.getElementById("inTime").value,
        outTime: document.getElementById("outTime").value,
        inMeter: document.getElementById("inMeter").value,
        outMeter: document.getElementById("outMeter").value,
        fuel: document.getElementById("fuel").value,
        lubes: document.getElementById("lubes").value,
        remarks: document.getElementById("remarks").value
    };

    try {
        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            alert("Data submitted successfully!");
            document.getElementById("equipmentForm").reset();
        } else {
            alert("Submission failed.");
        }
    } catch (err) {
        alert("Error connecting to the server.");
        console.error(err);
    }
});[10:41 PM]const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby_cvW8n2Kj7JccWhGtctCUIhSuOfbrirpoEpd7Xo4ld0j48VwFeJme4Fy0LPRWreWL8w/exec";

document.getElementById("equipmentForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        employeeId: document.getElementById("employeeId").value,
        userName: document.getElementById("userName").value,
        mobile: document.getElementById("mobile").value,
        location: document.getElementById("location").value,
        equipmentNumber: document.getElementById("equipmentNumber").value,
        dateOfUse: document.getElementById("dateOfUse").value,
        inTime: document.getElementById("inTime").value,
        outTime: document.getElementById("outTime").value,
        inMeter: document.getElementById("inMeter").value,
        outMeter: document.getElementById("outMeter").value,
        fuel: document.getElementById("fuel").value,
        lubes: document.getElementById("lubes").value,
        remarks: document.getElementById("remarks").value
    };

    try {
        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (result.success) {
            alert("Data submitted successfully!");
            document.getElementById("equipmentForm").reset();
        } else {
            alert("Submission failed.");
        }
    } catch (err) {
        alert("Error connecting to the server.");
        console.error(err);
    }
});
Jot something down
