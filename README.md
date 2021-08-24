# An exploration of models

The contrived problem is one of an online bookstore that sells both physical and digital books.

How should a mixed set of these books be modelled?

I.E. how do we define `Book` for the following kind of function:

```typescript
const getBooks = (): Book[] => [
  {
    title: "Catch-22 - Hardback",
    price: 899,
    weightG: 442
  },
  {
    title: "Catch-22 - EBook",
    price: 499,
    sizeKB: 2600
  }
];
```

## Our multiple choice options...

###  A: a single interface with optional attributes

```typescript
interface Book {
  title: string;
  price: number;
  weightG?: number;
  sizeKB?: number;
}
```

###  B: a single interface with a union attribute
(we'd reshape the output of `getBooks` above accordingly)

```typescript
interface DigitalSpecs {
  sizeKB: number;
}


interface PhysicalSpecs {
  weightG: number;
}

interface Book {
  title: string;
  price: number;
  specs: DigitalSpecs | PhysicalSpecs;
}
```

###  C: a union of entities, each extending a base interface

```typescript
interface BookBase {
  title: string;
  price: number;
}

interface PhysicalBook extends BookBase {
  weightG: number;
}

interface DigitalBook extends BookBase {
  sizeKB: number;
}

type Book = PhysicalBook | DigitalBook;
```

###  D: something else I haven't thought of

```typescript
// ????
```

## Questions

- What metrics can we use to discriminate between options?
- Is it possible to judge from an interface alone?
- Are different models 'right' at different life-cycles of our codebase?
- Do unions and optionals inevitably cause branches in consuming code? If so, can we minimize or flatten this effect?
- If we go for any kind of union, what's the best way to split them apart again: Type Guards, Type Codes, something else?
- Are any of these examples/solutions peculiar to TypeScript? If so, do other languages avoid the problem or offer better solutions?

&nbsp;

&nbsp;

&nbsp;

&nbsp;
---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
