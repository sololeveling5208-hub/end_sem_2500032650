# DriveEase — Ultimate Car Rental System (SDC Project)

A responsive car-rental frontend built with **HTML5, CSS3 and vanilla JavaScript**. It follows the academic constraint of using Local Storage for demo signup/login and data persistence; it does not require a framework or backend.

## Run the project

1. Extract the ZIP.
2. Open the `driveease-ultimate` folder in Visual Studio Code.
3. Open `index.html` with the VS Code Live Server extension, or open the file directly in a browser.
4. For a reliable demonstration, use the same browser profile so Local Storage data remains available.

## Demo admin account

- Email: `admin@driveease.com`
- Password: `admin123`

Create a regular user account through **Create account** to test customer features. These demo credentials are intentionally included for academic demonstration; do not reuse them for real accounts.

## Features

### Customer module
- Signup and login with Local Storage persistence.
- Session ID, login count, login timestamp and explicit logout timestamp.
- Browse seven starter vehicles with model-specific online photo sources and local SVG fallbacks.
- Search by vehicle/model/category/fuel/transmission; filter by category and rental dates.
- Sort by recommended order, price or name.
- Save/remove favorites and view them through the favorites filter.
- Compare up to three vehicles side-by-side (price, category, seats, transmission, fuel, year, fleet status and a three-day estimate).
- Reserve vehicles with pickup/return validation, date-overlap checks and automatic rental total calculation.
- View booking history, cancel confirmed bookings and download a text receipt.
- Editable display name, profile dashboard with preferences, booking totals, activity/session history and personal activity export.

### Admin module
- Fleet inventory: add, edit, remove and mark vehicles under maintenance.
- View reservation records and update booking status where applicable.
- View registered customers, registration dates, last login, preferences and booking counts.
- Dashboard metrics for fleet, reservations, customers and confirmed rental value.
- Export/import a JSON backup of the demo data.

### UI and accessibility
- Premium charcoal/ivory/champagne-gold visual theme.
- Responsive layouts using CSS Grid and Flexbox.
- Accessible labels, visible keyboard focus, Escape-to-close modals, reduced-motion support and status/toast feedback.
- Cross-tab Local Storage change refresh for demo data.

## Local Storage keys

- `driveease_users_v2` — demo users and preferences
- `driveease_session_v2` — current browser session
- `driveease_activity_v2` — activity events
- `driveease_cars_v2` — fleet inventory
- `driveease_bookings_v2` — reservations

## Important academic limitations

- This is a **frontend-only prototype**. Local Storage is per browser/origin and is not a shared database.
- Passwords and role data stored in Local Storage are not secure. Client-side checks can be modified by a user; the demo admin credentials are public by design.
- Availability checks prevent overlapping bookings within the current browser's stored records, but cannot coordinate concurrent reservations across different devices or browsers.
- Payment is simulated; no real payment is collected or processed.
- Explicit logout records a logout timestamp. Closing the browser or abruptly ending a session cannot be guaranteed to record a logout event.
- Vehicle photos use online image URLs and therefore need internet access. Each vehicle card falls back to a bundled local SVG illustration if its remote photo fails. The hero image also falls back to a local illustration.
- Exported JSON backups include demo account data. Keep backups private and do not publish them to GitHub.

## Suggested viva explanation

> “DriveEase is a responsive frontend car-rental management prototype built with HTML, CSS and vanilla JavaScript. Local Storage supports the required signup/login flow, user preferences, inventory and booking persistence. The application demonstrates search and filtering, date-based booking conflict checks, vehicle comparison, customer booking history and an admin dashboard. Since it has no backend, authentication, payment and cross-device synchronization are simulated rather than production-secure.”


## UI and inventory upgrade
- Expanded the starter inventory to 30 sample vehicles. Existing browser data is migrated once using `driveease_inventory_version` so old users see the expanded fleet without resetting existing bookings.
- Added a quick category rail, trust strip, “How it works” section, feature cards, and a final call-to-action to make the homepage feel complete.
- Some vehicle images use Wikimedia Commons URLs. If a source is unavailable, a local model-labelled illustration is shown; the illustrations are placeholders, not photographs of the exact trim.

## React Forgot Password learning demo
- Open the login modal and choose **Forgot password?** to open `forgot-password-react.html`.
- The recovery screen is built with React and uses a simulated local verification code. It updates the demo account record in Local Storage so the UI can be tested end-to-end.
- This is strictly a classroom demonstration. It does not send email, and Local Storage passwords are not secure. A production reset flow must use a backend or authentication provider, email delivery, and single-use expiring tokens.
- Run the main site using VS Code Live Server, not `file://`, so the main site and recovery page share the same origin and Local Storage.


### Image availability note
The bundled starter fleet now uses local SVG vehicle illustrations for all 30 cars and a local hero illustration. They are included in `assets/`, so the vehicle imagery remains visible without an internet connection. These are labelled vehicle illustrations, not manufacturer photographs. If an administrator adds an external image URL, that image still needs internet access and will fall back to the bundled artwork if it fails.


### Vehicle image update
The 30 built-in vehicle cards now use bundled, locally stored photographic-style catalog images under `assets/cars/`. These generated catalog images are visual illustrations in photographic style, not verified photographs of the exact manufacturer/year/trim. The site no longer depends on remote image hosts for built-in vehicle cards.
