# Single Page Application (SPA) Characteristics

Single Page Applications (SPAs) are web applications that load once and dynamically update content without full page reloads.

## Key Characteristics

1. **No Page Refreshes**: Navigation occurs without reloading the entire page. [DONE]
2. **Dynamic URL Changes**: URLs update to reflect the current view. [DONE]
3. **Browser History Maintenance**: Back/forward navigation works without page refreshes. [DONE]
4. **Persistent Layout Elements**: Header and footer remain loaded and do not reload. [DONE]
5. **Contextual Content Updates**: The main content area updates based on navigation. [DONE]
6. **Active Menu Highlighting**: Current menu item is visually highlighted.
7. **Dynamic Page Titles**: Page titles update to reflect the current view.

# Thinking Like an Angular Developer

When developing Angular applications, adopt the following mindset:

1. **Component Identification**: Determine the number and types of components needed.
2. **Component Hierarchy**: Understand the parent-child relationships and data flow between components.

# Angular Building Blocks

Angular applications are built using the following core elements:

- **Components**: Reusable UI building blocks with templates, styles, and logic.
  - **HTML Templates**: Define the structure and layout of components.
  - **CSS Styles**: Handle component-specific styling.
  - **TypeScript (TS)**: Provides type-safe logic and class definitions.
- **Directives**: Extend HTML with custom behavior (structural and attribute directives).
- **Services**: Handle business logic, data management, and cross-component communication.
- **Pipes**: Transform data for display in templates.
- **Guards**: Control navigation and access to routes.
- **Classes and Interfaces**: Define data models and type contracts.
- **Interceptors**: Handle HTTP requests and responses globally.

**Note**: Modules are not recommended in Angular v21; use standalone components instead.

# Key Angular Concepts

1. **Data Binding**: Synchronizes data between the component and its template.
2. **Routing**: Enables navigation between different views in the application.

---

# Angular Routing Implementation Guide

This guide outlines the steps to implement routing in an Angular application.

## Step 1: Define Routes and Menus

Identify the application's navigation structure:

- Home: `/`
- Concepts: `/concepts`
- Contact Manager: `/contact-manager`
- About: `/about`

## Step 2: Create Navigation Links

Implement the routes in the menu component using appropriate navigation elements.

## Step 3: Generate Components

Create the necessary components for each route:

```bash
ng g c home/components/home -t -s
ng g c concepts/components/concepts -t -s
ng g c contact-manager/components/contacts -t -s
ng g c about/components/about -t -s
```

## Step 4: Configure Routes

Set up the routing configuration in `app.routes.ts` to map URLs to components.

## Step 5: Add Router Outlet

In `app.component.html`, include `<router-outlet></router-outlet>` to render routed components.

## Step 6: Update Navigation Links

In the menu component, replace standard `<a>` tags with `<a routerLink="...">` to enable client-side routing.

With these steps completed, the Angular application will have fully functional routing with dynamic content updates.

====

## Data Binding [DONE]

- Keeping the data in component ts and displaying it in component html

* Interpolation
  - {{ }}
  - TS ==> HTML

* Property Binding
  - []
  - TS ==> HTML

* Event Binding
  - ()
  - TS <== HTML

* Two Way Binding
  - [()]
  - TS <==> HTML
  - must be in form elements
  * [(ngModel)]

* Custom Property Binding
* Custom Event Binding

## Directives

# Cross Component Communication

1. Parent Component to Child Component Communication [DONE]
   - using Custom Property Binding

2. Child Component to Parent Component Communication [DONE]
   - using Custom Event Binding

3. Any to Any Component Communication
   - Using Services, RxJS/Observables

=====

# Directives

- special instructions to the DOM

1. Attribute Directives
   Ex: routerLink, routerLinkActive, routerLinkActiveOptions
2. Structural Directives
   - @if (older version is \*ngIf)
   - @for (older version is \*ngFor)

=====
