##Project Title: Hosted Web App for Data Visualization

Description:
Developed a robust web application using React and Material UI to provide two distinct data visualization and analysis views: a dynamic table with a corresponding bar chart and a pivot table with a pivot chart. Both views are interactive and update in real-time as the underlying data changes.

Key Features:

Table View:
Pagination, column filters, sorting, and search functionality for easy navigation and data management.
Customizable column display, allowing users to adjust the size and order of columns.
Data validation applied to ensure correct data input, especially for datetime fields.
Editable data cells with persistence, ensuring data is saved even after closing the browser.
Integrated bar chart displaying the number of companies that went "Out of Service" per month, automatically updating as table data changes.
Pivot Table View:
Interactive pivot table allowing users to manipulate and analyze data from multiple perspectives.
Corresponding pivot chart that synchronizes with the pivot table, reflecting real-time data updates.
Technologies Used:

Frontend: React, Material UI
Data Handling: JavaScript, Context API/Redux for state management
Visualization: Chart.js, Recharts, or equivalent library for creating bar charts and pivot charts
Other Tools: Webpack, Babel for module bundling and transpiling, Git for version control
Achievements:

Streamlined complex data interactions into a user-friendly interface.
Implemented real-time updates and data persistence, enhancing user experience.
Ensured high-quality user input through rigorous data validation and error handling.
Challenges Overcome:

Managed state synchronization between the table view and charts.
Ensured smooth user interactions despite complex data manipulation requirements.
