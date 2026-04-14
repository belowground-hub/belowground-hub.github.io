# belowground.github.io

This site uses a **Flask-to-Static** workflow and is hosted on **GitHub Pages**.

---

## 🛠 Setup (First-Time Users)

Follow these steps to get the project running on your local machine.

### 1. Clone the repository
```bash
git clone [https://github.com/YOUR_USERNAME/belowground.github.io.git](https://github.com/YOUR_USERNAME/belowground.github.io.git)
cd belowground.github.io
```

### 2. Create a Virtual Environment
**Windows:**
```bash
python -m venv venv
```
**Mac / Linux:**
```bash
python3 -m venv venv
```

### 3. Activate and Install Dependencies
**Windows:**
```bash
venv\Scripts\activate
pip install -r requirements.txt
```
**Mac / Linux:**
```bash
source venv/bin/activate
pip install -r requirements.txt
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

## 🔄 How to Update & Sync

If you need to pull the latest changes from other contributors:

1. **Pull changes:** `git pull origin main`
2. **Update dependencies:** `pip install -r requirements.txt`

---

## 📦 Building for Deployment

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

## 📂 Project Structure
- `/static`: Assets like `styles.css` and `upload.js`.
- `/templates`: Jinja2 templates (`base.html` for layout, `index.html` for content).
- `app.py`: Python script for the local development server.
- `build.py`: Script that exports the Flask app to static HTML for hosting.
- `requirements.txt`: Python library dependencies.