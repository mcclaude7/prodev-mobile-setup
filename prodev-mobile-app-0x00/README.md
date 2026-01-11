# Objective
The goal of this task is to set up a first mobile application using the **Expo Router template**, understand the generated file structure, modify the home screen, run the application on a physical device, and observe the effects of resetting the project.

## 🛠️ Project Setup and Scaffolding
* Initialize a New Expo Project using the latest expo router template: npx create-expo-app@latest .

*** Result: ***
* Expo generated a fully scaffolded React Native project
* Essential configuration files and folders were created automatically

### 1. Navigate to the Project Directory
* Opened the terminal and moved into the parent project directory: cd prodev-mobile-app-0x00

*** Modifying the Home Screen ***
* File Edited
app/(tabs)/index.tsx
* Change Made
Located the default text: Welcome!
Replaced it with: First App Created

***  Running and Testing the Application ***

* Started the Expo development server: npx expo start

*** Testing on Physical Devices ***
* Android: Scanned the QR code using the Expo Go app

*** Result:***
The app launched successfully
The updated home screen text “First App Created” was displayed

*** Resetting the Application ***

* Executed the reset command: npm run reset-project

*** Observations ***

* Expo removed generated files and caches related to the project
* The project returned to a clean, initial state

