from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")

mail_settings = {
    "MAIL_SERVER": 'smtp.gmail.com',
    "MAIL_PORT": 465,
    "MAIL_USE_TLS": False,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": os.getenv("EMAIL"),
    "MAIL_PASSWORD": os.getenv("SENHA")
}

app.config.update(mail_settings)

mail = Mail(app)

class Contact:
    def __init__(self, name, email, mensagem):
        self.name = name
        self.email = email
        self.mensagem = mensagem



@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send', methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        formContato = Contact(
            request.form["fullname"],
            request.form["email"],
            request.form["message"]
        )

        msg = Message(
            subject = f'{formContato.name} te enviou uma mensagem!',
            sender = app.config.get("MAIL_USERNAME"),
            recipients= ['Fidel7zz21@gmail.com', app.config.get("MAIL_USERNAME")],
            body = f'''
               {formContato.name} com o email {formContato.email} te enviou a seguinte mensagem:

               {formContato.mensagem}
            '''
        )
        mail.send(msg)
        flash('Email enviado com sucesso.')
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)