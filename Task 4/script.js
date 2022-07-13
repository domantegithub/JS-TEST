/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */


const renderCars = (car) => {
    const { brand, models } = car;
    //Susikuriam naujus elementus (korteles)
    const carEl = document.createElement("div");
    const carBrand = document.createElement("h3");
    const modelsList = document.createElement("ul");
  //tortele tiesiog viename baltame fone pastilizuotas elementas
    carEl.className = "card";
    carBrand.textContent = brand;
    
    car.models.forEach(car => {
        const list = document.createElement("li");
        list.textContent = car;
        modelsList.append(list);
    });

    carEl.append(carBrand, modelsList);
    //itraukiam naujus elementus
    document.querySelector("#output").prepend(carEl);
  };

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((response) => {
    response.forEach((car) => renderCars(car)); //paima elementus ir juos islista i sarasa
  })
  .catch((error) => {
    console.error(error);
  });
