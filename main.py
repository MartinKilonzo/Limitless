import subprocess
from flask import Flask, request, render_template
import requests
import json
import os
import uuid
app = Flask(__name__)


@app.route('/hello')
def home():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
  print(request)
  if request.method == 'POST':
    print("sduhfiushdfih")
    try:
      file = request.files['file']
      print("filename:")
      print(request.files)
      print(file)
      extension = os.path.splitext(file.filename)[1]
      f_name = str(uuid.uuid4()) + extension
      file.save(os.path.join(app.config['UPLOAD_FOLDER'], f_name))
      return json.dumps({'filename': f_name})
    except Exception as ex:
      return str(ex)


subprocess.call(["tesseract images/test.png out"], shell=True)

f = open("out.txt")

d = {}

for line in f.read().splitlines():
  for index, char in enumerate(line):
    if "$" == char:
      d[line[:index]] = line[index:]


print(d)


if __name__ == '__main__':
    app.run()
