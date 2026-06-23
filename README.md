# belowground.github.io

This site uses a **Flask-to-Static** workflow and is hosted on **GitHub Pages**.
In other words, this website is built using Python (Flask) to make managing the layout easy, but it gets converted into a basic static website before it goes live on GitHub Pages. Instead of a traditional "back end", we use google apps scrips and google drive to do a lot of the storage and heavy lifting. 

My goal is to make this introduction as easy to understand as possible, so anyone can get started! If you have zero programming experience, that's totally fine. I've added a list of resources down at the bottom to get you started and I'm hoping to add more (and more details) once I have a bit more time. 

IF YOU HAVE ANY QUESTIONS, please let me know!

### HTML, CSS & JavaScript (The Front-End)
These languages control how the website looks and feels in the browser.
* **[Khan Academy Computer programming - JavaScript and the web](https://www.khanacademy.org/computing/computer-programming)**: This is actually what I used to learn Javascript/HTML/CSS years ago!
* **[The Odin Project - Foundations](https://www.theodinproject.com/paths)**: Free course with HTML/CSS and Javascript lessons!
* **[HTML and CSS Cheat Sheet](https://htmlcheatsheet.com/css/)**: Probably what I use the most. 

### Python (The Engine)
We use Python (specifically the Flask framework) to stitch our templates together and build the site.
* **[Khan Academy Intro to CS: Python](https://www.khanacademy.org/computing/intro-to-python-fundamentals)**: Can't really go wrong with Khan academy really. 

### Git & GitHub (Version Control)
Git is how we save our work and collaborate without overwriting each other's changes.
* **[GitHub's "Hello World" Tutorial](https://docs.github.com/en/get-started/quickstart/hello-world)**: A 10-minute read directly from GitHub that explains how repositories, branches, and commits work.
* **[Learn Git Branching](https://learngitbranching.js.org/)**: A highly visual, interactive game that teaches you how Git works under the hood.

---

### 🛠 Setup & Prerequisites (First-Time Users)
You only need to do this once. 
Before you can edit the website, you need three pieces of software installed on your computer.

### 1. A Code Editor (VS Code)
You need a program designed for writing code. I recommend **Visual Studio Code (VS Code)** because it's free, industry-standard, and I could give you the most help with it.
* Download it here: [https://code.visualstudio.com/](https://code.visualstudio.com/)
* Install it like any normal application.

### 2. Python
This site uses Python to stitch the web pages together before we publish them.
* Download it here: [https://www.python.org/downloads/](https://www.python.org/downloads/)
* **CRITICAL FOR WINDOWS USERS:** When the installer pops up, you *must* check the box at the very bottom that says **"Add Python to PATH"** before clicking Install. If you miss this, nothing will work!

### 3. Git
Git is a version control system. It allows you to download our code, make a copy, and send your changes back to the main website without breaking anything.
* **Windows:** Download and install [Git for Windows](https://gitforwindows.org/).
* **Mac:** Open your "Terminal" app, type `git --version`, and press Enter. It will prompt you to install the Apple Developer Tools if you don't have them already.
* **Linux (Ubuntu):** Open terminal and run `sudo apt install git`.

---

### 1. Get the Code/Clone the Respository
Open your computer's terminal (Command Prompt/PowerShell on Windows, or Terminal on Mac/Linux) and download the repository:
```bash
git clone https://github.com/belowground-hub/belowground-hub.github.io.git
```

### 2. Create a Virtual Environment
is creates an isolated bubble on your computer so the project's tools don't interfere with anything else.
* **Windows:** ```python -m venv venv```
* **Mac/Linux:** ```python3 -m venv venv```

**3. Activate the Environment and Install Tools**
Turn the environment on and install the required Python packages (`requirements.txt`).
* **Windows:**
```bash
    venv\Scripts\activate
    pip install -r requirements.txt
    ```
* **Mac/Linux:**
```bash
    source venv/bin/activate
    pip install -r requirements.txt
    ```
```
---

## How to Run & Develop

To see your changes in real-time before deploying:

1. **Activate the Environment:**
   - Windows: `venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`

2. **Start the Local Server:**
   ```bash
   python app.py
   ```
3. **View the Site:** Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

---

## How to Update & Sync

If you need to pull the latest changes from other contributors:

1. **Pull changes:** `git pull origin main`
2. **Update dependencies:** `pip install -r requirements.txt`

---

## Building for Deployment

Since this site is hosted on GitHub Pages, we must convert the Flask templates into static HTML files before pushing.

1. **Build the static site:**
   ```bash
   python build.py
   ```
   *This will generate/update the `/build` directory with your static files.*

2. **Commit and Push:**
   ```bash
   git add .
   git commit -m "Update site content"
   git push origin main
   ```

---

## Project Structure
- `/static`: Contains the design and interactive elements.
   - `css/styles.css`: The colors, fonts, and layout spacing.
   - `js/corkboard.js` & `archive.js`: These scripts talk to a hidden Google Drive/Google Sheet to pull in the posters and archive links automatically.
- `/templates`: Jinja2 templates (`base.html` for layout, `index.html` for content).
   - `base.html`: The master layout (the navigation bar, the logo, the mobile menu). Edit this to change the header/footer across the whole site.
   - `index.html`: The homepage (the corkboard). 
   - `upload.html`: The form where users upload flyers.

- `app.py`: The map of the site. It tells the computer which template to load when someone clicks a specific link (like /upload/ or /directory/bands/).
- `build.py`: Script that exports the Flask app to static HTML for hosting.
- `requirements.txt`: Python library dependencies.