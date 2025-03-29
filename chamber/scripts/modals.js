const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxText = document.querySelector("#dialogBox div");

openButton0.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
    <h3>Non Profit Member</h3>
    <p><strong>Elegibility: </strong>Non-Profit organizations only</p>
    <p><strong>Price: </strong>Free (for verified non-profit organizations)</p>
    <p><strong>Benefits: </strong></p>
    <ul>
        <li>Listing in Chamber of Commerce directory</li>
        <li>1 member entrance to 2 Monthly Chamber Member Luncheon events per year</li>
        <li>Limited event invitations</li>
        <li>Ability to network with other Non-Profits</li>
    </ul>
    `;
});
openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
    <h3>Bronze Member</h3>
    <p><strong>Elegibility: </strong>Available to any type of organization</p>
    <p><strong>Price: </strong>$150 per year</p>
    <p><strong>Benefits: </strong></p>
    <ul>
        <li>Listing in Chamber of Commerce directory</li>
        <li>Access to regular chamber events</li>
        <li>Quarterly Newsletters</li>
        <li>1 member entrance to 6 Monthly Chamber Member Luncheon events per year</li>
        <li>5% discount on event registrations</li>
    </ul>
    `;
});
openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
    <h3>Silver Member</h3>
    <p><strong>Elegibility: </strong>Available to any type of organization</p>
    <p><strong>Price: </strong>$300 per year</p>
    <p><strong>Benefits: </strong></p>
    <ul>
        <li>Listing in Chamber of Commerce directory with silver distinction</li>
        <li>Access to regular chamber events</li>
        <li>Quarterly Newsletters</li>
        <li>3 member entance to 10 Monthly Chamber Member Luncheon events per year</li>
        <li>15% discount on event registrations</li>
        <li>2 free event tickets per year</li>
        <li>Spotlight in Chamber of Commerce Website</li>
    </ul>
    `;
});
openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML = `
    <h3>Gold Member</h3>
    <p><strong>Elegibility: </strong>Available to any type of organization</p>
    <p><strong>Price: </strong>$500 per year</p>
    <p><strong>Benefits: </strong></p>
    <ul>
        <li>Listing in Chamber of Commerce directory with gold distinction</li>
        <li>Access to regular chamber events</li>
        <li>Quarterly Newsletters</li>
        <li>Unlimited entrance to all Monthly Chamber Member Luncheon events</li>
        <li>25% discount on event registrations</li>
        <li>4 free event tickets per year</li>
        <li>Spotlight in Chamber of Commerce Website</li>
        <li>Exclusive invites to VIP events and galas</li>
    </ul>
    `;
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});
