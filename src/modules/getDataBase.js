'use strict';
const getDataBase = () => {
    const targetList = document.querySelector('.nav-list-popup-repair'),
        blockDate = document.querySelector('.popup-repair-types-content__head-date'),
        blockConent = document.querySelector('.popup-repair-types-content-table'),
        titleBlock = document.getElementById('switch-inner');

    let objData;

    const renderData = (dataBase) => {
        dataBase.forEach((element , index) => {
            if (index === 1) {
                titleBlock.textContent = element.title;
            }
            if (element.title) {
                const button = document.createElement('button');
                button.classList.add('button_o');
                button.classList.add('popup-repair-types-nav__item');
                if (index === 1) {
                    button.classList.add('active');
                }
                button.setAttribute('data-tab', index);
                button.textContent = element.title;
                targetList.append(button);
            } else if (element.date) {
                blockDate.textContent = element.date;
            }  
            
            const table = document.createElement('table');
            table.classList.add('popup-repair-types-content-table__list');
            if (element.priceList) {
                element.priceList.forEach((item, index) => {
                    const tr = document.createElement('tr');
                    tr.classList.add('mobile-row');
                    tr.innerHTML = `
                        <td class="repair-types-name">${item.typeService}</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                        <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                        <td class="repair-types-value">${item.units}</td>
                        <td class="repair-types-value">${item.cost}</td>
                    `;
                    table.append(tr);
                });
                if (index === 1) {
                    table.classList.add('active-tab');
                }
                table.setAttribute('data-tab-content', index);
                blockConent.append(table);

            }
        });
    };

    targetList.addEventListener('click' , (event) => {
        const target = event.target.closest('.popup-repair-types-nav__item'),
            navTabs = targetList.querySelectorAll('.button_o');
           
        if(target) {
            const value = target.getAttribute('data-tab'),
                text = target.textContent,
                blocks = document.querySelectorAll('.popup-repair-types-content-table__list');
            
            blocks.forEach((element, index) => {
                if (value.trim() === element.getAttribute('data-tab-content').trim()) {
                    element.classList.add('active-tab');
                    navTabs[index].classList.add('active');
                    titleBlock.textContent = text;
                } else {
                    element.classList.remove('active-tab');
                    navTabs[index].classList.remove('active');
                }
            });  
        }
    });


    fetch('./db/db.json')
        .then((response) => {
            if(response.status !== 200) {
                throw new Error('status network not 200');
            }
            return(response.text());                
        })
        .then((data) => {
            objData =JSON.parse(data); 
            renderData(objData);            
        })
        .catch((error) => console.error(error)); 

};

export default getDataBase;