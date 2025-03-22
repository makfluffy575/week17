const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
  },
	{
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: '<https://i.pinimg.com/originals/72/8e/20/728e20790602139bdb4a9fff40966665.jpg>'
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
  }
];
class Transport {
  constructor(type, brand, price, image) {
    this.type = type;
    this.brand = brand;
    this.price = price;
    this.image = image;
  }
  getInfo(){
    const info = `${this.type} ${this.brand}`;
    return info;
  }
  getPrice(){
    return this.price;
  }
}

class Car extends Transport {
  constructor(type, brand, price, doors, image) {
    super (type, brand, price, image);
    this.doors = doors;
  }

  getDoorCount() {
    return this.doors;
  }
}

class Bike extends Transport {
  constructor(type, brand, price, maxSpeed, image) {
    super (type, brand, price, image);
    this.maxSpeed = maxSpeed;
    }
  
  getMaxSpeed() {
    return this.maxSpeed;
  }
}

const array = data.map(item => {
  if (item.type === "car") {
    return new Car (item.type, item.brand, item.price, item.doors, item.image);
  } else {
    return new Bike (item.type, item.brand, item.price, item.maxSpeed, item.image);
  }
})

console.log(array);

const container = document.querySelector(".container");

for (let item of array) {
  const wrapper = document.createElement("div");
  container.append(wrapper);
  wrapper.setAttribute("class", "wrap");

  const image = document.createElement("img");
  wrapper.append(image);
  image.setAttribute("class", "image");
  image.src = item.image.replaceAll(`<`, "").replaceAll(`>`, "");

  const brandInfo = document.createElement("p");
  wrapper.append(brandInfo);
  brandInfo.setAttribute("class", "info");
  brandInfo.innerText = `${item.brand} \n${item.price.toLocaleString('ru-ru')} руб.`;

  if (item.type === "car") {
    const doorInfo = document.createElement("p");
    wrapper.append(doorInfo);
    doorInfo.textContent = `Количество дверей: ${item.doors}`;
  } else {
    const speedInfo = document.createElement("p");
    wrapper.append(speedInfo);
    speedInfo.textContent = `Максимальная скорость: ${item.maxSpeed}`;
  }
}