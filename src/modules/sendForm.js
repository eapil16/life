'use strict';
const sendForm = () => {
    let count = 0;

    const errorMessage = 'Что-то пошло не так...',
        loadMessage = document.querySelector('.popup-thank '),
        close =  document.querySelector('.close-thank');

    const statusMessage = document.createElement('div');
        statusMessage.style.cssText = `
        font-size: 14px;
        color: #ffb015;`;

    const preload = document.createElement('div');
        preload.classList.add('preloader');
        preload.innerHTML = '<div class="preloader__row">' +
            '<div class="preloader__item"></div>' +
            '<div class="preloader__item"></div>' +
            '</div>';

    const postData = (body) => {
        return fetch('./server.php' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(body)
        });
    };

    const sendData = (form) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        let flag = true;

        form.appendChild(preload);
        statusMessage.textContent = '';
        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
            if (val.trim() !== '') {
                body[key] = val;
            } else {
                flag = false;
            }
        });
        if (flag) {
            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('Error network not 200');
                    }
                    preload.remove();
                   loadMessage.classList.add('block-visibility');
                    form.reset();
                    setTimeout(function(){
                        loadMessage.classList.remove('block-visibility');
                    },3000);
                }, (error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                })
                .catch((error) => {
                    statusMessage.textContent = "Ошибка при отправке";
                        console.error(error);
                });

        } else {
            preload.remove();
            statusMessage.textContent = 'Заполните все поля формы';
        }          
    };

    document.body.addEventListener('submit', (event)=> {
        const target = event.target;
        const input = target.querySelector('.feedback-block__form-input_name');
        const checkedInputs = target.querySelector("input[type='checkbox']:checked");
        if (checkedInputs && count >= 2){
            input.classList.remove('error-input');
            sendData(target);
        } else {
            event.preventDefault();
            input.classList.add('error-input');
        }        
    });  

    close.addEventListener('click', (enevt) => {
        loadMessage.classList.remove('block-visibility');
    });
   
    const maskPhone = (selector, masked = '+7 (___) ___-__-__') => {
        const elems = document.querySelectorAll(`.${selector}`);
        
        function mask(event) {
            const keyCode = event.keyCode;
            const template = masked,
                def = template.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            let i = 0,
                newValue = template.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i !== -1) {
                newValue = newValue.slice(0, i);
            }
            let reg = template.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = newValue;
            }
            if (event.type === "blur" && this.value.length < 5) {
                this.value = "";
            }
    
        }
    
        for (const elem of elems) {
            elem.addEventListener("input", mask);
            elem.addEventListener("focus", mask);
            elem.addEventListener("blur", mask);
        }
        
    };    

    const validName = (item) => {
        item.value = item.value.replace(/[^а-я ]/gi, '');
        count = item.value.length;
    };
    
    document.body.addEventListener('input', (event)=> {
        const targetName = event.target.closest('.feedback-block__form-input_name');
        if (targetName) {
            validName(targetName);
        }
    });

    maskPhone('feedback__input-input');
    maskPhone('feedback-block__form-input_phone');

};

export default sendForm;
