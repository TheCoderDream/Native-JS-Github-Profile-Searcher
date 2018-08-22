function Toaster(appendableParent, message, type, time) {
    const validTypes = ['success','info', 'warning','danger','primary','secondary','dark','light'];
    const parent = document.querySelector(appendableParent);
    const alertDiv = document.createElement('div');
    const alertMessageP = document.createElement('p');
    const dismissLink = document.createElement('button');

    if(!(validTypes.indexOf(type) > -1)) {
        throw new Error('İnvalid Type');
    }


    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.setAttribute('role', 'alert');

    alertMessageP.innerText = message;


    dismissLink.setAttribute('type', 'button');
    dismissLink.setAttribute('data-dismiss', 'alert');
    dismissLink.setAttribute('aria-label', 'close');
    dismissLink.setAttribute('title', 'close');
    dismissLink.className = 'close';
    dismissLink.innerHTML = `<span aria-hidden="true">&times;</span>`;
    alertDiv.appendChild(dismissLink);


    alertDiv.appendChild(alertMessageP);



    parent.appendChild(alertDiv);



    return new Promise((resolve,reject) => {
        setTimeout(function () {
            while (parent.firstChild) {
                parent.firstChild.remove();
            }
            resolve(true);
        } , time*1000);
    })

}