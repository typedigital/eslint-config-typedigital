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
  friendNames = friendNames.slice(0, -2); // Remove the trailing comma and space
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

productNames = productNames.slice(0, -2); // Remove the trailing comma and space

const averagePrice = totalPrice / products.length;

const output3 = `
Product names: ${productNames}
Total price: ${totalPrice.toFixed(2)}
Average price: ${averagePrice.toFixed(2)}

Product descriptions:
${productDescriptions}
`;

const three = () => output3;
// Generate random dataset of users and purchase history
const users = [];
for (let i = 0; i < 100; i++) {
  const user = {
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    purchases: [],
  };

  // Generate random purchase history for each user
  const numPurchases = Math.floor(Math.random() * 10) + 1;
  for (let j = 0; j < numPurchases; j++) {
    const purchase = {
      id: j + 1,
      date: new Date(Date.now() - Math.floor(Math.random() * 365 * 24 * 60 * 60 * 1000)),
      amount: Math.floor(Math.random() * 1000) / 100,
      items: [],
    };

    // Generate random items for each purchase
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

// Calculate total revenue and average order value
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

// Generate formatted output with user information and purchase history
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

// Generate multiplication table
const table = [];
for (let i = 1; i <= numRows; i++) {
  const row = [];
  for (let j = 1; j <= numCols; j++) {
    row.push(i * j);
  }
  table.push(row);
}

// Generate formatted output with multiplication table
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
}

const five = () => output5;

const jokes = [
  { setup: 'Why did the tomato turn red?', punchline: 'Because it saw the salad dressing!' },
  { setup: 'Why don\'t scientists trust atoms?', punchline: 'Because they make up everything.' },
  { setup: 'What do you call a fake noodle?', punchline: 'An impasta!' },
  { setup: 'Why don\'t seagulls fly by the bay?', punchline: 'Because then they\'d be bagels!' },
  { setup: 'What do you get when you cross a snowman and a shark?', punchline: 'Frostbite!' },
];

// Generate random joke
const randomIndex = Math.floor(Math.random() * jokes.length);
const joke = jokes[randomIndex];

// Output joke to console
const setup = () => `Setup: ${joke.setup}`;
const punchline = () => {
  setTimeout(() => `Punchline: ${joke.punchline}`, 2000);
};

const six = () => {
  setup();
  punchline();
};

one();
two();
three();
four();
five();
six();
