from flask import Flask,jsonify, request

#para la conexion con el front
from flask_cors import CORS

#para trabajar con la bd
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app =  Flask(__name__) #inicializamos flask, creamos el objeto flask que es el que nos va a permitir realizar la conexion con la bd, crear las tablas desde nuestro codigo,etc
CORS(app) #nos va a permitir consumir todo lo que realizamos aca desde el front

#-----CONFIG INICIALES------------

#Conexion a bbdd
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:@localhost/bd_factura'
#user:clave@URLBBDD/nombreBBDD
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False #none

db = SQLAlchemy(app) #crea el obj db de la clase SQLAlquemy
ma = Marshmallow(app) #crea el obj ma de la clase Marshmallow

from controladores import *


#programa principal

if __name__ == '__main__':
    app.run(debug = True , port = 5000)

