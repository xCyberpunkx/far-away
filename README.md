# Far Away Packing List 🐱‍🏍 🎿

A simple React app to manage a packing list for your travels. Add items to the list, mark items as packed or unpacked, and view your progress.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Add Items**: Specify quantity and description to add an item to the packing list.
- **Mark as Packed/Unpacked**: Toggle items as packed or unpacked.
- **Delete Items**: Remove unwanted items from the list.
- **Progress Tracking**: View how many items have been packed out of the total list.

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Application**:
    ```bash
    npm start
    ```
    The app should now be running at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Add Items**: Use the form to add new items to the packing list. Select the quantity and enter the item description.
2. **Mark as Packed**: Click on items to mark them as packed or unpacked.
3. **View Stats**: The app displays the total number of items and the number of packed items, showing the percentage packed.

## Components

### App
The main component that manages the state for the list of items and renders all other components.

### Logo
Displays the logo and title of the application.

### Form
Allows users to add items with a specified quantity and description. Calls `onAddItems` to add items to the main list.

### PackingList
Renders each item in the packing list using the `Item` component.

### Item
Displays individual item details, with a toggle for marking items packed/unpacked.

### Stats
Shows a summary of the packing progress, displaying the number of items packed and the percentage completed.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request to propose changes or enhancements.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License

This project is open-source and available under the MIT License.
