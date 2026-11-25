# DriveEase — React + Vite Car Rental System

A frontend academic car-rental management project migrated to **React + Vite**. The customer and admin application retains the existing DriveEase interface and browser-based demo workflows. The React entry point is `src/main.jsx`, the application shell and password recovery are React components in `src/App.jsx`, and Vite builds the app for deployment.

## Requirements
- Node.js 18+ (recommended current LTS)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```
The production output is generated in `dist/`.

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy. `vercel.json` includes an SPA rewrite so `/forgot-password` works on refresh.
5. Test the deployed URL, signup/login, Admin and User modules, bookings, and the recovery route.

## Modules and demo access
- **User module:** signup/login, browse/search/filter/sort fleet, favorites, compare up to three cars, booking/date-overlap checks, booking history/cancellation, profile and activity.
- **Admin module:** fleet CRUD, maintenance status, booking status management, customer activity, JSON backup export/import.
- **Password recovery:** React screen at `/forgot-password`, with a simulated classroom verification code `246810`.
- Demo admin: `admin@driveease.com` / `admin123`.

## Architecture note
The React + Vite application mounts the existing DriveEase customer/admin interface as a compatibility component while the React app shell and recovery workflow are implemented in React. The retained legacy interaction layer is in `public/legacy.js`; its markup is in `src/legacyMarkup.js`. This avoids losing the existing project workflows during migration. If your faculty expects every screen to be rewritten as React components (rather than a React/Vite application with a legacy compatibility layer), this version is a migration step and should be followed by a full component refactor.

## Local Storage keys
- `driveease_users_v2`
- `driveease_session_v2`
- `driveease_activity_v2`
- `driveease_cars_v2`
- `driveease_bookings_v2`

## Academic limitations
This is a frontend-only demonstration. Local Storage is scoped to a browser and origin; it is not a shared database. Passwords and role information in Local Storage are not secure, and client-side admin checks can be altered. Booking conflict checks only see records in that browser. Payment is simulated. The Forgot Password code is displayed for demonstration and no email is sent. A production system needs a trusted backend/authentication provider, server-side authorization, secure password hashing and reset tokens, a shared database, and a payment gateway.

## Images
Vehicle assets are bundled under `public/assets/`, so the provided fleet imagery works without remote image hosting. Some are generated illustrative/photo-style assets and are not guaranteed to be exact manufacturer photographs.


### Hero image update
The homepage hero uses the locally bundled high-resolution image at `public/assets/cars/c23.jpg`. It is loaded from `/assets/cars/c23.jpg` by Vite, so it does not depend on a third-party image URL.
