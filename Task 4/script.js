/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const ENDPOINT = "cars.json";

const renderCars = (car) => {
    const { brand, models } = car;
    //Susikuriam naujus elementus (korteles)
    const carEl = document.createElement("div");
    carEl.className = "card";
  const carBrand = document.createElement("h3");
  const modelsList = document.createElement("ul");
  // //tortele tiesiog viename baltame fone pastilizuotas elementas
  
  carBrand.textContent = brand;
    
    car.models.forEach(car => {
        const list = document.createElement("li");
        list.textContent = car;
        modelsList.append(list);
    });

    carEl.append(carBrand, modelsList);
    document.querySelector(".output").prepend(carEl);
  };


fetch(ENDPOINT)
  .then((resp) => resp.json())
  .then((response) => {
    const cars = response;
    cars.forEach((car) => renderCars(car));
  })
  .catch((error) => {
    console.error(error);
  });
