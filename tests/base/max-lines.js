const firstName = 'John';
const lastName = 'Doe';
const age = 30;
const email = 'johndoe@example.com';
const address = '123 Main St, Anytown USA';
const occupation = 'Web Developer';
const hobbies = ['reading', 'gaming', 'hiking'];
const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'University of Anytown',
};
const experience = [
  {
    title: 'Web Developer',
    company: 'ABC Company',
    startDate: '01/01/2018',
    endDate: '01/01/2020',
  },
  {
    title: 'Software Engineer',
    company: 'XYZ Corporation',
    startDate: '01/01/2020',
    endDate: 'Present',
  },
];

function displayPersonalData() {
  const message = `${firstName} ${lastName} is a ${occupation} and loves ${hobbies[0]}, ${hobbies[1]} and ${hobbies[2]}. Contact him at ${email} or visit hime on ${address}.`;
  return message;
}

function greet() {
  const message = `Hello, my name is ${firstName} ${lastName}. I am ${age} years old.`;
  return message;
}

function displayEducation() {
  const message = `I graduated from ${education.school} with a ${education.degree} degree.`;
  return message;
}

function displayExperience() {
  let message = '';
  experience.forEach((exp) => {
    message += `${exp.title} at ${exp.company} from ${exp.startDate} to ${exp.endDate}\n`;
  });
  return message;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomArray(length, min, max) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(getRandomNumber(min, max));
  }
  return arr;
}

function sumArray(arr) {
  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}

const randomArray = generateRandomArray(10, 1, 100);
const sum = sumArray(randomArray);

const message1 = greet();
const message2 = displayEducation();
const message3 = displayExperience();
const message4 = displayPersonalData();

const output = `
${message1}

${message2}

${message3}

${message4}

The randomly generated array is: ${randomArray.join(', ')}
The sum of the array is: ${sum}
`;

const one = () => output;

const person1 = {
  name: 'Alice',
  age: 26,
  occupation: 'Teacher',
  hobbies: ['reading', 'yoga', 'cooking'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345',
  },
  friends: [
    {
      name: 'Bob',
      age: 27,
      occupation: 'Software Engineer',
      hobbies: ['gaming', 'hiking', 'coding'],
    },
    {
      name: 'Charlie',
      age: 25,
      occupation: 'Marketing Specialist',
      hobbies: ['painting', 'traveling', 'photography'],
    },
  ],
};

const person2 = {
  name: 'Ben',
  age: 32,
  occupation: 'Writer',
  hobbies: ['writing', 'reading', 'listening to music'],
  address: {
    street: '456 Oak St',
    city: 'Sometown',
    state: 'NY',
    zip: '54321',
  },
  friends: [
    {
      name: 'Diana',
      age: 29,
      occupation: 'Doctor',
      hobbies: ['running', 'swimming', 'cooking'],
    },
    {
      name: 'Eva',
      age: 28,
      occupation: 'Lawyer',
      hobbies: ['playing tennis', 'traveling', 'reading'],
    },
  ],
};

function getFullName(person) {
  const fullName = `${person.name} ${person.lastName || ''}`;
  return fullName.trim();
}

function getHobbiesList(person) {
  const hobbiesList = person.hobbies.join(', ');
  return hobbiesList;
}

function getFriendNames(person) {
  let friendNames = '';
  person.friends.forEach((friend) => {
    friendNames += `${friend.name}, `;
  });
  friendNames = friendNames.slice(0, -2);
  return friendNames;
}

const person1FullName = getFullName(person1);
const person2FullName = getFullName(person2);
const person1Hobbies = getHobbiesList(person1);
const person2Hobbies = getHobbiesList(person2);
const person1FriendNames = getFriendNames(person1);
const person2FriendNames = getFriendNames(person2);

const output2 = `
${person1FullName} is ${person1.age} years old and works as a ${person1.occupation}.
Her hobbies are: ${person1Hobbies}.
She lives at ${person1.address.street}, ${person1.address.city}, ${person1.address.state} ${person1.address.zip}.
Her friends are: ${person1FriendNames}.

${person2FullName} is ${person2.age} years old and works as a ${person2.occupation}.
His hobbies are: ${person2Hobbies}.
He lives at ${person2.address.street}, ${person2.address.city}, ${person2.address.state} ${person2.address.zip}.
His friends are: ${person2FriendNames}.
`;

const two = () => output2;

const products = [
  {
    name: 'Product 1',
    price: 10.99,
    description: 'This is product 1.',
  },
  {
    name: 'Product 2',
    price: 20.99,
    description: 'This is product 2.',
  },
  {
    name: 'Product 3',
    price: 5.99,
    description: 'This is product 3.',
  },
  {
    name: 'Product 4',
    price: 15.99,
    description: 'This is product 4.',
  },
  {
    name: 'Product 5',
    price: 25.99,
    description: 'This is product 5.',
  },
];

let totalPrice = 0;
let productNames = '';
let productDescriptions = '';

products.forEach((product) => {
  totalPrice += product.price;
  productNames += `${product.name}, `;
  productDescriptions += `${product.description}\n`;
});

productNames = productNames.slice(0, -2);

const averagePrice = totalPrice / products.length;

const output3 = `
Product names: ${productNames}
Total price: ${totalPrice.toFixed(2)}
Average price: ${averagePrice.toFixed(2)}

Product descriptions:
${productDescriptions}
`;

const three = () => output3;

const users = [];
for (let i = 0; i < 100; i++) {
  const user = {
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    purchases: [],
  };

  const numPurchases = Math.floor(Math.random() * 10) + 1;
  for (let j = 0; j < numPurchases; j++) {
    const purchase = {
      id: j + 1,
      date: new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)),
      amount: Math.floor(Math.random() * 1000) / 100,
      items: [],
    };

    const numItems = Math.floor(Math.random() * 5) + 1;
    for (let k = 0; k < numItems; k++) {
      const item = {
        id: k + 1,
        name: `Item ${k + 1}`,
        price: Math.floor(Math.random() * 100) / 100,
      };
      purchase.items.push(item);
    }

    user.purchases.push(purchase);
  }

  users.push(user);
}

let totalRevenue = 0;
let totalOrderValue = 0;
let numOrders = 0;

users.forEach((user) => {
  user.purchases.forEach((purchase) => {
    const orderValue = purchase.items.reduce((sum2, item) => sum2 + item.price, 0);
    totalRevenue += purchase.amount;
    totalOrderValue += orderValue;
    numOrders += 1;
  });
});

const averageOrderValue = totalOrderValue / numOrders;

let output4 = '';
users.forEach((user) => {
  output4 += `User ID: ${user.id}\n`;
  output4 += `Name: ${user.name}\n`;
  output4 += `Email: ${user.email}\n`;

  user.purchases.forEach((purchase) => {
    output4 += `\nPurchase ID: ${purchase.id}\n`;
    output4 += `Date: ${purchase.date.toISOString()}\n`;
    output4 += `Amount: ${purchase.amount.toFixed(2)}\n`;

    output4 += 'Items:\n';
    purchase.items.forEach((item) => {
      output4 += `- ${item.name}: ${item.price.toFixed(2)}\n`;
    });

    output4 += '\n';
  });

  output4 += '\n';
});

output4 += `Total revenue: ${totalRevenue.toFixed(2)}\n`;
output4 += `Average order value: ${averageOrderValue.toFixed(2)}`;

const four = () => output4;

const numRows = 10;
const numCols = 10;

const table = [];
for (let i = 1; i <= numRows; i++) {
  const row = [];
  for (let j = 1; j <= numCols; j++) {
    row.push(i * j);
  }
  table.push(row);
}

let output5 = '';
for (let i = 0; i <= numRows; i++) {
  for (let j = 0; j <= numCols; j++) {
    if (i === 0 && j === 0) {
      output5 += '  ';
    } else if (i === 0) {
      output5 += `${j} `;
    } else if (j === 0) {
      output5 += `${i} `;
    } else {
      output5 += `${table[i - 1][j - 1]} `;
    }
  }
  output5 += '\n';
  output5 += '\n';
}

const five = () => output5;

const jokes = [
  { setup: 'Why did the tomato turn red?', punchline: 'Because it saw the salad dressing!' },
  { setup: 'Why don\'t scientists trust atoms?', punchline: 'Because they make up everything.' },
  { setup: 'What do you call a fake noodle?', punchline: 'An impasta!' },
  { setup: 'Why don\'t seagulls fly by the bay?', punchline: 'Because then they\'d be bagels!' },
  { setup: 'What do you get when you cross a snowman and a shark?', punchline: 'Frostbite!' },
];

const randomIndex = Math.floor(Math.random() * jokes.length);
const joke = jokes[randomIndex];

const setup = () => `Setup: ${joke.setup}`;
const punchline = () => {
  setTimeout(() => `Punchline: ${joke.punchline}`, 2000);
};

const six = () => {
  setup();
  punchline();
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(getRandomInt(min, max));
  }
  return array;
}

function sumArray1(array) {
  let sum1 = 0;
  for (let i = 0; i < array.length; i++) {
    sum1 += array[i];
  }
  return sum1;
}

function averageArray(array) {
  if (array.length === 0) {
    return null;
  }
  return sumArray1(array) / array.length;
}

class Person {
  constructor(name, age1) {
    this.name = name;
    this.age = age1;
  }

  static generateRandomPerson() {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emily', 'Frank', 'Gina', 'Henry', 'Isabelle', 'Jack'];
    const name = names[getRandomInt(0, names.length - 1)];
    const age1 = getRandomInt(18, 65);
    return new Person(name, age1);
  }
}

// Define a function to sort an array of objects by a given property
function sortByProperty(array, property) {
  array.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    }
    if (a[property] > b[property]) {
      return 1;
    }
    return 0;
  });
}

const people = createRandomArray(10, 0, 0).map(() => Person.generateRandomPerson());

sortByProperty(people, 'age');

const averageAge = averageArray(people.map((person) => person.age));

function sorted() {
  return (`Sorted list of people by age: ${JSON.stringify(people)}`);
}
function averageAges() {
  return (`Average age of people: ${averageAge}`);
}

const seven = () => {
  sorted();
  averageAges();
};

function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function factorial(n) {
  if (n < 0) {
    return null;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function fibonacci(n) {
  if (n < 0) {
    return null;
  }
  if (n <= 1) {
    return n;
  }
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
}
class Deck {
  constructor() {
    this.cards = [];
    const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push({ suit, rank });
      }
    }
  }

  shuffle() {
    shuffleArray(this.cards);
  }

  deal() {
    return this.cards.pop();
  }
}

const deck = new Deck();

deck.shuffle();

const topCard = deck.deal();

const randomString = generateRandomString(10);
const randomStringLength = randomString.length;
const randomStringFactorial = factorial(randomStringLength);

const fibonacci10 = fibonacci(10);

const topDeckCard = () => `Top card of shuffled deck: ${JSON.stringify(topCard)}`;
const randomString1 = () => `Random string: ${randomString}`;
const randomStringLength1 = () => `Length of random string: ${randomStringLength}`;
const factorialLength = () => `Factorial of length of random string: ${randomStringFactorial}`;
const fibonacciNumber = () => `10th Fibonacci number: ${fibonacci10}`;

const eight = () => {
  topDeckCard();
  randomString1();
  randomStringLength1();
  factorialLength();
  fibonacciNumber();
};

one();
two();
three();
four();
five();
six();
seven();
eight();

const onePointOne = () => {
  const firstName1 = 'John';
  const lastName1 = 'Doe';
  const age1 = 30;
  const email1 = 'johndoe@example.com';
  const address1 = '123 Main St, Anytown USA';
  const occupation1 = 'Web Developer';
  const hobbies1 = ['reading', 'gaming', 'hiking'];
  const education1 = {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Anytown',
  };
  const experience1 = [
    {
      title: 'Web Developer',
      company: 'ABC Company',
      startDate: '01/01/2018',
      endDate: '01/01/2020',
    },
    {
      title: 'Software Engineer',
      company: 'XYZ Corporation',
      startDate: '01/01/2020',
      endDate: 'Present',
    },
  ];

  function displayPersonalData1() {
    const message = `${firstName1} ${lastName1} is a ${occupation1} and loves ${hobbies1[0]}, ${hobbies1[1]} and ${hobbies1[2]}. Contact him at ${email1} or visit hime on ${address1}.`;
    return message;
  }

  function greet1() {
    const message = `Hello, my name is ${firstName1} ${lastName1}. I am ${age1} years old.`;
    return message;
  }

  function displayEducation1() {
    const message = `I graduated from ${education1.school} with a ${education1.degree} degree.`;
    return message;
  }

  function displayExperience1() {
    let message = '';
    experience1.forEach((exp) => {
      message += `${exp.title} at ${exp.company} from ${exp.startDate} to ${exp.endDate}\n`;
    });
    return message;
  }

  const message5 = greet1();
  const message6 = displayEducation1();
  const message7 = displayExperience1();
  const message8 = displayPersonalData1();

  return `${message5} ${message6} ${message7} ${message8}`;
};

onePointOne();
