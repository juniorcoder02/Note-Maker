# Simple File Management App with Express

This is a simple file management web application built using Express.js. It allows users to create, read, update, and delete text files stored on the server. The application utilizes the Express framework for handling HTTP requests and routing.

## Features

- **Create File**: Users can create new text files by providing a title and content.
- **View File**: Users can view the content of existing text files.
- **Edit File**: Users can rename existing text files.
- **Delete File**: Users can delete existing text files.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/juniorcoder02/Note-Maker

2. Navigate to the project directory:

   ```bash
   cd simple-file-management-app

3. install dependencies:

   ```bash
   npm install

4. start the server

    ```bash
    npm start

## Dependencies

- **Express.js**: Web framework for Node.js.
- **EJS**: Templating engine for generating HTML markup with JavaScript.
- **vNode**.js File System (fs): Module for interacting with the file system.
- **path**: Module for working with file paths.

## Usage

1. Create a new text file:

    Navigate to the homepage (/).
    Enter a title and content for the file in the provided form.
    Click the "Create" button.

2. View a file:

    Click on the title of the file from the list of files on the homepage.

3. Edit a file:

    Click on the "Edit" button next to the file you want to edit.
    Enter the new title for the file in the provided form.
    Click the "Save" button.

4. Delete a file:
    Click on the "Delete" button next to the file you want to delete.


## Contributing
**Contributions are welcome! If you'd like to contribute to this project, please follow the standard GitHub workflow:**

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature-name
3. Make your changes.
4. Commit your changes: git commit -am 'Add new feature'
5. Push to the branch: git push origin feature/your-feature-name
6. Submit a pull request.

## License
This project is licensed under the MIT License.