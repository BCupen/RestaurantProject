const body =  document.querySelector('body');

function createContactDiv(){
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div', 'div-style');

    const contactHeading = document.createElement('h2');
    contactHeading.classList.add('contact-heading');
    contactHeading.textContent = `Contact Us`;

    const contactDesc = document.createElement('span');
    contactDesc.classList.add('contact-descr');
    contactDesc.textContent = `Interested in paying us a visit? Book your reservation now!`;

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info-div');

    const phoneInfo = document.createElement('span');
    phoneInfo.classList.add('info');
    const phoneSVG = document.createElement('span');
    phoneSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="rgb(208, 12, 35)"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>`;
    phoneSVG.classList.add('contact-img');
    const phoneNum = document.createElement('span');
    phoneNum.classList.add('contact-num');
    phoneNum.textContent = `+1-(868)-123-4567`;
    phoneInfo.append(phoneSVG, phoneNum);

    const emailInfo = document.createElement('span');
    emailInfo.classList.add('info');
    const emailSVG = document.createElement('span');
    emailSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="rgb(208, 12, 35)"><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>`
    emailSVG.classList.add('contact-img');
    const email = document.createElement('span');
    email.classList.add('contact-email');
    email.textContent = `grammyskitchen@outlook.com`;
    emailInfo.append(emailSVG, email);

    const addressInfo = document.createElement('span');
    addressInfo.classList.add('info');
    const addressSVG = document.createElement('span');
    addressSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" fill="rgb(208, 12, 35)"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>`;
    addressSVG.classList.add('contact-img');
    const address = document.createElement('span');
    address.classList.add('contact-address');
    address.textContent = `11 4th Street, Beaulieu Avenue, Trincity`;
    addressInfo.append(addressSVG, address);

    contactInfo.append(phoneInfo, emailInfo, addressInfo);

    contactDiv.append(contactHeading, contactDesc, contactInfo);
    return contactDiv;

}

export default function loadContactPage(contentElement) {
    const contactDiv = createContactDiv();
    contentElement.append(contactDiv);
    body.append(contentElement);
}