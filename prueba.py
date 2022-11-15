# -*- coding: utf-8 -*-
"""
Created on Sun Oct 30 20:44:52 2022

@author: USUARIO
"""
from flask import Flask
import os
from twilio.rest import Client
from flask import request
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

app = Flask(__name__)

@app.route("/")
def inicio():
    test = os.environ.get("Test")
    return test


    
@app.route("/sms")
def sms ():
    try:
        # Find your Account SID and Auth Token at twilio.com/console
        # and set the environment variables. See http://twil.io/secure
        account_sid = os.environ['TWILIO_ACCOUNT_SID']
        auth_token = os.environ['TWILIO_AUTH_TOKEN']
        client = Client(account_sid, auth_token)
        contenido= request.args.get("mensaje")
        destino= request.args.get("telefono")
        message = client.messages \
                        .create(
                             body=contenido,
                             from_="+19035013423",
                             to="+57" + destino
                         )
        
        print(message.sid)
        return "Mensaje enviado correctamente"
    except Exception as e:
        print(e)
        return "Error al enviar el mensaje"  

@app.route("/envio-correos")
def email():
    
        destino= request.args.get("correo_destino") 
        asunto= request.args.get("asunto")
        Mensaje= request.args.get("contenido")
    
        message = Mail(
        from_email="stephaempleo@gmail.com",
        to_emails=destino,
        subject=asunto,
        html_content=Mensaje)
        try:
            sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
            response = sg.send(message)
            print(response.status_code)
            print(response.body)
            print(response.headers)
            return "correo enviado correctamente"
        except Exception as e:
            print(e.message)
            return "error al enviar el correo"

if __name__ == "__main__":
    app.run()
    