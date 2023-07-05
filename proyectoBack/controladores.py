from flask import Flask,jsonify, request
from app import app,ma
from modelos import *

class ProductoSchema(ma.Schema):
    class Meta:
        fields=('id_producto', 'nombre','precio_unitario','stock')


producto_schema = ProductoSchema()  #sirve cuando queremos traer un producto
productos_schema = ProductoSchema(many = True) #trae todos  los productos de la bd


#crea los endpoint o rutas (json)
@app.route('/productos', methods=['GET'])#busca todo los registros
def getProductos():
    all_productos = Productos.query.all()
    result = productos_schema.dump(all_productos)
    return jsonify(result)#combierto el resultado en json


#el id es variable 
@app.route('/productos/<id>', methods=['GET'])#busca un objeto por id
def get_producto(id):
    producto = Productos.query.get(id)
    return producto_schema.jsonify(producto)#retorno el producto que recibo segun su id y lo combierto en json



@app.route('/productos/<id>', methods=['DELETE'])#borra un registro
def delete_producto(id):
    producto = Productos.query.get(id)
    db.session.delete(producto)
    db.session.commit() 
    return producto_schema.jsonify(producto)



@app.route('/productos', methods=['POST']) #crea un nuevo registro
def create_producto():

    nombre = request.json['nombre']
    precio_unitario = request.json['precio_unitario']
    stock = request.json['stock']

    nuevoProducto = Productos(nombre,precio_unitario,stock)
    db.session.add(nuevoProducto)
    db.session.commit()
    return producto_schema.jsonify(nuevoProducto)



@app.route('/productos/<id>', methods=['PUT'])#modificar un registro
def update_producto(id):
    producto = Productos.query.get(id)
    nombre = request.json['nombre']
    precio_unitario = request.json['precio_unitario']
    stock = request.json['stock']

    producto.nombre = nombre
    producto.precio_unitario = precio_unitario
    producto.stock = stock

    db.session.commit() 
    return producto_schema.jsonify(producto)


