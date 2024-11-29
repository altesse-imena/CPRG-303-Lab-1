Installed on MacOS
**Installing React Native:**
      First, you may run React Native without a framework, but it is highly reccomended to use one if you are building a new application. 
      
Step 1: Install Dependancies
   For this you will need:
      Node
      Watchman
      React Native command line interface
      a JDK
      Android studio

Step 2: Node and Watchman
   Open the terminal and run the following commands after installing Homebrew:
      brew install node
      brew install watchman

Step 3: Java development kit
   Run the following commands:
      brew install --cask zulu@17
      brew info --cask zulu@17 to determine the path where cask was installed
   After this JDK Installation, use the following command:
      export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home

Step 4: Install android studio
   Download and install android studio and during the wizard installation ensure these are checked:
      - Android SDK
      - Android SDK platform
      - Android Virtual device

Step 5: expand android 14 (UpsideDownCake)
   ensure the following items are checked:
      - Android SDK platform 34
      - Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image or (for Apple M1             Silicon) Google APIs ARM 64 v8a System Image.

Step 6: Configure Android Home
   Add the following to your ~/.zprofile or ~/.zshrc:
      export ANDROID_HOME=$HOME/Library/Android/sdk
      export PATH=$PATH:$ANDROID_HOME/emulator
      export PATH=$PATH:$ANDROID_HOME/platform-tools

**Project Creation:**
   Now that your necessary tools and dependancies are installed, these steps will outline how create
   a new project using the framework we have just created.

   Step 1: open your terminal
      run the following command:
         npx create-expo-app@latest

      This will create a new project for you to get started off with.

   Step 2: run your android virtual device
      in the CLI (Command Line Interface) type the following:
         npm run android (for android) OR
         npm run IOS (for apple)


**Troubleshooting:**
   I ran into zero error messages during my installation and as a result, have no info to provide on the reolution of said error messages. 
   However, this is subject to change and this document will be updated and configured properly for whenever errors messages appear, and are resolved. 


**Resources for external help outside of this document:**
   For environment setup: https://reactnative.dev/docs/set-up-your-environment
   For spinning up a new project: https://reactnative.dev/docs/environment-setup
   For setting up dev environment: https://reactnative.dev/docs/0.71/environment-setup?         guide=quickstart&package-manager=npm
      
