# FLASK FRAMEWORK NOTES

## Install Flask
```pip3 install flask```

## To import Flask in a script
```from flask import Flask, jsonify```




## FLASK CORS
To import Flask CORS
```from flask_cors import CORS```

## To create and configure the application you are creating.
```Python
def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__)
    setup_db(app)
```

## INITIALIZE CORS
```CORS(app)``` - **this is the basic initialization of CORS**

or

```cors = C0RS(app, resources = {r"/api/*": {"origins": "*"}})``` - this is a resource specific initialization


```@app.after_request``` - this decorator says that after request is received, run this method ...

```Python
def after_request(response): - this is the method
	response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Authorization, true')
	response.headers.add('Access-Control-Allow-Methods', 'GET, PATCH, POST, DELETE, OPTIONS')
	return response
```



CREATING AN ENDPOINT THAT ADDS NEW QUESTIONS AND SEARCHES QUESTIONS

 """
    @TODO:
    Create an endpoint to POST a new question,
    which will require the question and answer text,
    category, and difficulty score.
    """

    @app.route('/questions', methods=['POST'])
    def add_question():
        body = request.get_json()

    # New Data
        new_question = body.get('question', None)
        new_answer = body.get('answer', None)
        new_category = body.get('category', None)
        new_difficulty = body.get('difficulty', None)
        # search_term = body.get('searchTerm', None)

        try:
            question = Question(question=new_question, answer=new_answer, 
            category=new_category, difficulty=new_difficulty)
    # insert question into database
            question.insert()

            selection = Question.query.order_by(Question.id).all()
            current_questions = paginate_questions(request, selection)

            return jsonify({
                'success': True,
                'added': question.id,
                'questions': current_questions,
                'total_questions': len(Question.query.all())
            })
        except:
            abort(422)
            # print(sys.exec_info())



    """
    @TODO:
    Create a POST endpoint to get questions based on a search term.
    It should return any questions for whom the search term
    is a substring of the question.

    """ 

    @app.route("/questions/search", methods=['POST'])
    def search_for_questions():
        body = request.get_json()
        search_string = body.get("searchTerm", None)

        try:
            if search_string == '':
                questions = Question.query.all()
            else:
                questions = Question.query.filter(Question.question.ilike(f'%{search_string}%')).all()
                current_questions = paginate_questions(request, questions)
                if current_questions == None:
                    abort(404)
                return jsonify({
                    "success": True,
                    "questions": current_questions,
                    "total_questions": len(questions)
                })
          
        except:
            abort(404)
            # print(sys.exc_info())
	
	
	