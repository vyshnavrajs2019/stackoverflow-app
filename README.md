# stackoverflow-app
A Stackoverflow API based application using React.js, Django and Django Rest Framework

### To setup the application
```bash
  $ cd stackoverflow/client
  $ npm install
  $ cd ..
  $ virtualenv env --python=python3
  $ . env/bin/activate
  $ pip install requirements.txt -r
  $ cd server
  $ python manage.py migrate
```

### To start the application
```bash
  $ cd stackoverlow/
  $ cd client/
  $ npm start
  $ cd ..
  $ . env/bin/activate
  $ cd server
  $ python manage.py runserver
```

### To see the webpage
Visit http://localhost:3000/