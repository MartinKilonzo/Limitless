import os
import subprocess
from flask import Flask, request, redirect, url_for, render_template
from werkzeug.utils import secure_filename
import json

UPLOAD_FOLDER = './images'
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')


@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            print('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit a empty part without filename
        if file.filename == '':
            print('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            fln = filename
            subprocess.call(["tesseract images/" + fln + " out"], shell=True)

            f = open("out.txt")

            d = {}

            for line in f.read().splitlines():
              for index, char in enumerate(line):
                if "$" == char:
                  d[line[:index].strip()] = int(line[index+1:])
            d2 = {"Food": 0, "Travel": 0, "Equipment": 0}
            for item in d:
              for i in open("classify.csv").read().splitlines():
                for n in i.split(","):
                  if n in item:
                    d2[i.split(",")[0]] += int(d[item])
            final = {"Items":d, "Categories":d2}

            return render_template('receipt.html',
                                   final=final)


if __name__ == '__main__':
    app.run()
