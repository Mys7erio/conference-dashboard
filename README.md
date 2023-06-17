# Development Enviroment Setup

## Install Instructions:
- NodeJS:
  - Download node from the [official website](https://nodejs.org/en/download/)
  - Can be any version (preferrably `v18.16.0`)

- pnpm:
    - Windows: Run powershell as administrator and run `iwr https://get.pnpm.io/install.ps1 -useb | iex`
    - Linux: Open terminal and run `curl -fsSL https://get.pnpm.io/install.sh | sh -`


## Enable case sensitivity for the development folder in Windows:
- Create a blank folder and name it `conference-dashboard`
- Open powershell as administrator in the current directory and run `fsutil.exe file setCaseSensitiveInfo . enable`     
- Now finally clone the dashboard repo using `git clone https://github.com/Mys7erio/conference-dashboard.git .` 


# Tech Stack
 - ReactJS
 - Vanilla CSS along with **flexbox**
