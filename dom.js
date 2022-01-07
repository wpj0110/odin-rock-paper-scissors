const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.textContent = 'Paragraph text';
paragraph.style.cssText = 'color: red;'

content.appendChild(paragraph);

let user = {
    name: "John",
    surname: "Smith"
  };
  user.age = 25; // add one more
  
  // non-integer properties are listed in the creation order
  for (let prop in user) {
    console.log( prop ); // name, surname, age
  }

  let keyVal = Object.entries(user); //turn this into a key value pair by turning them into an array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  for (const [key, value] of keyVal) {
    console.log(`${key}: ${value}`);
  }

