# Age Timer Desktop App

> A simple desktop app that counts your age in real-time.
___
![demo-image](https://github.com/dhextras/group-chat-firebase/assets/104954857/1b56d7d1-17de-4d6c-9711-5650c17c7698)
---

This desktop application is a Tauri-based project that calculates your age and displays it in real-time. It was originally cloned from [Jack Liang's GitHub repository](https://github.com/jacky-liang/age-timer), and it's available at GitHub page [here](https://jacky-liang.github.io/age-timer/). I've made a few modifications to enhance its functionality.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Building](#building)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/): You need Node.js to run the application.
- [npm](https://www.npmjs.com/): npm is the package manager for JavaScript. You can install it with Node.js.
- [Tauri](https://tauri.app/v1/guides/getting-started/setup/): Tauri is the framework used for building the desktop app.

## Installation

To get started, clone the repository from GitHub:

```bash
git clone https://github.com/dhextras/age-timer-tauri.git
```

Next, open the `main.js` file and change the date of birth (DOB) on the first line to reflect your own DOB.

Then, install the project dependencies:

```bash
npm install
```

Certainly, here's an enhanced building section in your README that includes the three options for building the Age Timer Desktop App:

## Building

1. **Using the Pre-built Version:** You can access the pre-built version in the `target` folder without installing any additional dependencies. Simply locate the version for your OS and run it.

2. **Hot Build (Real-time Reflection):** To make real-time changes to the source code and see the updates instantly, use the following command:

   ```bash
   npm run tauri dev
   ```

   This hot build option is perfect for development and testing as it reflects your edits as you make them.

3. **Build for Your OS:** If you're satisfied with your modifications and want to create an application for your specific operating system, run the following command:

   ```bash
   npm run tauri build
   ```

   This will package the application for your OS, and you can then use or publish it as needed.

## Contributing

You're welcome to contribute to this project. Follow these simple steps:

1. Fork the repository.
2. Make your changes or additions.
3. Create a pull request.

Your contributions will be greatly appreciated! If you have any suggestions, bug reports, or feature requests, please open an issue in the [issue section](https://github.com/dhextras/age-timer-tauri/issues).


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits

- Original Age Timer project by [Jack Liang](https://github.com/jacky-liang)
- Modified to Desktop by [Dhextras](https://github.com/dhextras)

> Enjoy using Age Timer Desktop App! Thank you for choosing to explore and play with it. Your support and contributions are greatly appreciated, and we hope this app serves you well. If you have any questions, feedback, or ideas, don't hesitate to reach out – we'd love to hear from you!
