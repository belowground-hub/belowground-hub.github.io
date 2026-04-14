from flask_frozen import Freezer
from app import app

# This helps Frozen-Flask find your files in the GitHub environment
app.config['FREEZER_RELATIVE_URLS'] = True
app.config['FREEZER_DESTINATION'] = 'build'

freezer = Freezer(app)

if __name__ == '__main__':
    # We use 'ignore' so that if a tab link is weird, it doesn't kill the build
    freezer.freeze()