import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB2dVOHKPTEJy8yOKbNYt6fLw_MfiISATo",
  authDomain: "react-lautaro-vazquez.firebaseapp.com",
  projectId: "react-lautaro-vazquez",
  storageBucket: "react-lautaro-vazquez.appspot.com",
  messagingSenderId: "429368354528",
  appId: "1:429368354528:web:007648ed8db5a44de69285"
};

const app = initializeApp(firebaseConfig);

//Consultar a la BDD
const bdd = getFirestore()

/*
    Create
    Read
    Update
    Delete
*/

//Crear productos
const prods = [
    {
        
        "title": "botines negros",
        "size": "40",
        "price": 1500,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-lautaro-vazquez.appspot.com/o/1.jpg?alt=media&token=b14333d0-cd2f-4a3f-97ec-5a218eff4dad",
        "category": "Fotball"
    },
    {
        
        "title": "red jordan",
        "size": "38",
        "price": 2200,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-lautaro-vazquez.appspot.com/o/2.jpg?alt=media&token=7d48e4f3-caf4-440f-85c4-14097d8bdd90",
        "category": "Urban"
    },
    {
        
        "title": "adidas forum",
        "size": "42",
        "price": 2100,
        "stock": 9,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-lautaro-vazquez.appspot.com/o/3.jpg?alt=media&token=7e37ef71-4741-4e38-9c74-78493792f207",
        "category": "Urban"
    },
    {
        
        "title": "nike dunk",
        "size": "44",
        "price": 1800,
        "stock": 10,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-lautaro-vazquez.appspot.com/o/4.jpg?alt=media&token=1627c70c-cfa5-494d-8c9f-3f83287f5062",
        "category": "Basketball"
    },
    {
        
        "title": "dc",
        "size": "38,40",
        "price": 2700,
        "stock": 24,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-lautaro-vazquez.appspot.com/o/5.jpg?alt=media&token=71e7490c-1210-4eb0-aea2-291e6e894d4d",
        "category": "Skate"
    },
    {
        
        "title": "vans",
        "size": "40,42,44",
        "price": 1700,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-lautaro-vazquez.appspot.com/o/6.jpg?alt=media&token=1e8a280b-3509-48ba-a5b3-55e257b69ddb",
        "category": "Skate"
    },
    {
        
        "title": "lacoste",
        "size": "38,44,40",
        "price": 1800,
        "stock": 15,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-lautaro-vazquez.appspot.com/o/7.jpg?alt=media&token=bad4a98b-5020-4cdf-a789-f52a04e8cd53",
        "category": "Formal"
    },
    {
        
        "title": "gucci",
        "size": "40,42,44,48",
        "price": 2800,
        "stock": 12,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-lautaro-vazquez.appspot.com/o/8.jpg?alt=media&token=8e2b3c79-f7a7-4247-86eb-6d7896068223",
        "category": "Formal"
    },
    {
       
        "title": "nike black",
        "size": "36",
        "price": 1600,
        "stock": 17,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-lautaro-vazquez.appspot.com/o/9.jpg?alt=media&token=8903e0be-ca52-4980-9d9e-9e07e7e5ea4c",
        "category": "Urban"
    },
    {

        "title": "osiris",
        "size": "44",
        "price": 2500,
        "stock": 20,
        "img": "https://firebasestorage.googleapis.com/v0/b/react-lautaro-vazquez.appspot.com/o/10.jpg?alt=media&token=aeead8e4-b24b-445d-a4d5-29d2fa4a4857",
        "category": "Urban"
    }
]
export const createProducts = async () => {
    prods.forEach(async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            title: prod.title,
            size: prod.size,
            price: prod.price,
            stock: prod.stock,
            category: prod.category,
            img: prod.img
        })
    })

}

// Consultar productos
export const getProducts = async () => {
    const productos = await getDocs(collection(bdd, "productos"))
    const items = productos.docs.map(prod => { return { ...prod.data(), id: prod.id } })
    return items
}

//Consultar Producto
export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd, "productos", id))
    const item = { ...producto.data(), id: producto.id }
    return item
}

// Actualizar Producto

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

// Eliminar producto

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

//CREATE AND READ Ordenes de Compra

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenesCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}