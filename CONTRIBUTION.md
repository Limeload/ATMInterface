

# Contributing to ATMInterface

We appreciate your interest in contributing to the ATMInterface project. By participating, you help enhance this full-stack Java and React application designed to simulate an ATM interface. Please follow the guidelines below to ensure a smooth collaboration.

## Table of Contents

* [Code of Conduct](#code-of-conduct)
* [How to Contribute](#how-to-contribute)

  * [Reporting Bugs](#reporting-bugs)
  * [Suggesting Enhancements](#suggesting-enhancements)
  * [Submitting Code](#submitting-code)
* [Development Setup](#development-setup)
* [Code Style](#code-style)
* [Testing](#testing)
* [Licensing](#licensing)

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a welcoming and inclusive environment for all contributors.

## How to Contribute

### Reporting Bugs

If you encounter any issues, please:

1. **Check Existing Issues**: Ensure the bug hasn't been reported already.
2. **Provide Detailed Information**: Include steps to reproduce, expected vs. actual behavior, and any relevant logs or screenshots.

### Suggesting Enhancements

We welcome suggestions that improve the functionality or usability of the ATMInterface. Please:

* Clearly describe the enhancement.
* Explain the problem it solves or the benefit it provides.
* Provide any relevant context or examples.

### Submitting Code

To contribute code:

1. **Fork the Repository**: Create your own fork of the repository.
2. **Clone Your Fork**: Clone your fork to your local machine.
3. **Create a New Branch**: For each feature or bug fix, create a new branch.
4. **Make Changes**: Implement your changes in the new branch.
5. **Commit Changes**: Write clear, concise commit messages.
6. **Push to Your Fork**: Push your changes to your fork on GitHub.
7. **Open a Pull Request**: Submit a pull request to the main repository.

Please ensure your pull request:

* Addresses a single concern.
* Is based on the latest `main` branch.
* Passes all tests and checks.

## Development Setup

To set up the project locally:

### Backend (Java)

1. Clone the repository:

   ```bash
   git clone https://github.com/Limeload/ATMInterface.git
   cd ATMInterface/backend
   ```

2. Import the project into your preferred Java IDE (e.g., IntelliJ IDEA, Eclipse).

3. Ensure you have the necessary Java Development Kit (JDK) installed.

4. Build and run the backend application.

### Frontend (React)

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

Ensure both backend and frontend are running concurrently for full functionality.

## Code Style

Please adhere to the following coding conventions:

* **Java**: Follow the [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html).
* **JavaScript/React**: Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

Consistent code style helps maintain readability and reduces friction during code reviews.

## Testing

Before submitting your changes:

* **Backend**: Ensure all unit tests pass.
* **Frontend**: Run the React development server and verify UI functionality.

Testing your changes helps maintain the integrity of the project.

## Licensing

By contributing to this project, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
