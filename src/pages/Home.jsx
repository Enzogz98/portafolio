import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'


const Home = () => {
  
  // const nombre ="alvaro"
  // const numeros=[29,2,3,5,56]
  // const alumno= {id:1}
  // const erros =[{id:1, nombre: "firu",edad:4},
  // {id:2, nombre: "black",edad:4},
  // {id:3, nombre: "bobi",edad:13} ]
  // const saludar = () => {
  //   return <h3>Biencenido a react</h3>
  // }
  return (

    <div className="container-black"> 
      <Header /*nombre={nombre} titulo="bienvenidos"*/ />
      <Main /*numeros={numeros}*/  />
      <Footer /*saludar ={saludar}*/ />
    </div>
  )
}

export default Home
