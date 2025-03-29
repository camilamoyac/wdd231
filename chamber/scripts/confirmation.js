const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

function setTimestamp() {
    const currentDate = new Date();
    const timestamp = currentDate.toLocaleString();
    document.getElementById('timestamp').value = timestamp;
    console.log(timestamp);
    return true;
}

document.querySelector("#results").innerHTML = `<p><strong>${myInfo.get("firstName")} ${myInfo.get("lastName")}</strong>, thanks for completing the application form for the
    Peñalolén Chamber of Commerce Membership, your application will be reviewed and you will be contacted shortly.</p>
    <h2><strong>Application details:</strong></h2>
    <p><strong>Business/Organization Name:</strong> ${myInfo.get("orgName")}</p>
    <p><strong>Email Address:</strong> ${myInfo.get("email")}</p>
    <p><strong>Phone Number:</strong> ${myInfo.get("phone")}</p>
    <p><strong>Application Submitted:</strong> ${myInfo.get("timestamp")}</p>
`;