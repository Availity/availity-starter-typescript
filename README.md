# Availity Starter Typescript

> Template project for React web apps on the Availity Portal using TypeScript

## Getting Started

**Prerequisites:** Node.js 22+ (see `.nvmrc`)

```bash
yarn        # install dependencies
yarn start  # start dev server (opens with spaceId context)
```

## Scripts

| Command | Description |
|---------|-------------|
| `yarn start` | Start development server |
| `yarn build` | Build for default environment |
| `yarn build:production` | Production build |
| `yarn build:staging` | Staging build |
| `yarn test` | Run tests |
| `yarn test:watch` | Run tests in watch mode |
| `yarn test:coverage` | Run tests with coverage |
| `yarn lint` | Lint the project |
| `yarn format` | Format code with Prettier |
| `yarn format:check` | Check formatting |

## Project Structure

```
project/
├── app/
│   ├── index.tsx          # App entry — providers (Theme, QueryClient, Router)
│   ├── App.tsx            # Root component — routing and layout
│   ├── App.test.tsx       # Integration tests for the app
│   ├── Request/           # Form page (request submission)
│   ├── Response/          # Confirmation page (submission result)
│   └── components/        # Shared components (Footer)
├── config/
│   ├── workflow.js        # @availity/workflow configuration
│   └── routes.json       # Mock server route mappings
└── data/
    ├── me.json            # Mock user data
    └── spaces.json        # Mock spaces data
```

## Patterns & Architecture

### UI Components — Availity Element

All UI is built with [`@availity/element`](https://availity.github.io/element/?path=/docs/element--docs), Availity's MUI-based component library. Components used include `Container`, `PageHeader`, `Paper`, `Grid`, `TextField`, `Button`, `Alert`, `Stack`, and domain-specific autocompletes (`OrganizationAutocomplete`, `ProviderAutocomplete`).

The app is wrapped in `<ThemeProvider>` from Element for consistent styling.

### Forms — React Hook Form + Yup

Forms use [React Hook Form](https://react-hook-form.com/) with [`@hookform/resolvers`](https://github.com/react-hook-form/resolvers) for validation integration. Schema validation is handled by [Yup](https://github.com/jquense/yup) with [`@availity/yup`](https://github.com/Availity/sdk-js/tree/master/packages/yup) for Availity-specific validators.

Pattern:
1. Define a TypeScript type for form values
2. Define a Yup schema matching that type
3. Pass the schema to `useForm` via `yupResolver`
4. Use `register` for simple fields, `Controller` for complex components (autocompletes)

### Data Fetching — TanStack Query + Axios

Server state is managed with [`@tanstack/react-query`](https://tanstack.com/query). HTTP calls use [Axios](https://axios-http.com/) via [`@availity/api-axios`](https://availity.github.io/sdk-js/) which provides pre-configured API classes for Availity platform endpoints.

### Routing — React Router (HashRouter)

Client-side routing uses [`react-router-dom`](https://reactrouter.com/) with `HashRouter` (required for Availity Portal embedding). The `spaceId` query parameter is read from the URL for Spaces context.

### Spaces

The app uses [`Spaces`](https://availity.github.io/availity-react/) to load application metadata from the Availity platform using the `spaceId` parameter.

### Build & Dev Tooling — @availity/workflow

[`@availity/workflow`](https://availity.github.io/availity-workflow/) handles the build pipeline (Vite under the hood), dev server, testing (Vitest), and linting. Configuration lives in `project/config/workflow.js`.

### Mock Server

[`@availity/mock-server`](https://github.com/Availity/availity-workflow/tree/master/packages/mock-server) serves mock API responses during development. Routes are defined in `project/config/routes.json` and data files live in `project/data/`.

### Linting & Formatting

- ESLint via [`eslint-config-availity`](https://github.com/Availity/eslint-config-availity) (flat config format)
- Prettier with project-level config in `package.json` (120 print width, single quotes, ES5 trailing commas)

### TypeScript

Strict mode enabled. Path alias `@/*` maps to `./project/app/*`.

## Resources

- [Availity Element (Component Library)](https://availity.github.io/element/?path=/docs/element--docs)
- [Availity Workflow](https://availity.github.io/availity-workflow/)
- [Availity React Components](https://availity.github.io/availity-react/)
- [Availity JavaScript SDK](https://availity.github.io/sdk-js/)
- [Availity GitHub](https://github.com/Availity)
