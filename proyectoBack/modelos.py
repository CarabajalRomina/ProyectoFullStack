from app import db,app

class Productos(db.Model):
    id_producto = db.Column(db.Integer, primary_key = True)
    nombre = db.Column(db.String(160))
    precio_unitario = db.Column(db.Float())
    stock = db.Column(db.Integer)


    def __init__(self,nombre,precio_unitario,stock):
        self.nombre = nombre
        self.precio_unitario = precio_unitario
        self.stock = stock

#resto de tablas

with app.app_context():
    db.create_all()#se crean todas las tablas