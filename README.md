## To run the app

# make sure to have next js node version 20 or above

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Technlogies use

- Next js
- Tailwind css + shadcn ui
- React query

## Code strucutre

all the code resides in `src` folder in which

- api folder : holds code related to api calls
- app folder : hold code related to pages (folder to declare pages in)
- components folder : where reusable components are defined in there categoyr like cards, links ...
- hooks folder : contains hooks with there category like api hooks for react query hooks
- lib folder : contain helper function for defined by shadcn
- utils folder : contain helper functions and other codes, in which
  - constant folder: contain utils function
  - context folder : define context
  - providers folder : define d/t providers like context provider
  - types folder : contain type definitions
