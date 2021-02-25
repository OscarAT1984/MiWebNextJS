import "tailwindcss/tailwind.css";
import Image from 'next/image'

function HomePage() {
    return <div>
{/* INICIA EL PANEL DE NAVEGACION */}
        
<body class="m-4" >
    <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-4 rounded-md">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className="font-semibold text-xl tracking-tight"> Oscar Armando Tellez Covarubias  <br />Frontend Developer | Python Dev</span> 
    </div>
    </nav>
            
{/* FINALIZA EL PANEL DE NAVEGACION */}
            
{/* PRINCIPIO WEB PRESENTACION */}
  <div className="w-full">
  <nav className="bg-white shadow-lg">
      <div className="md:flex items-center justify-between py-2 px-8 md:px-12">
          <div className="flex justify-between items-center">
             
              <div className="md:hidden">
                  <button type="button" className="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                          <path className="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"/>
                          <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                      </svg>
                  </button>
              </div>
          </div>
          {/* <div className="flex-col md:flex-row hidden md:block -mx-2">
              <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Inicio</a>
              <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">Acerca De.</a>
              <a href="#" className="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2">contacto</a>
          </div> */}
      </div>
  </nav>
  <div className="flex bg-white" style={{height:'600px;'}}>
      <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">Quien es <span className="text-indigo-600">Oscar Tellez?</span></h2>
              <p className="mt-2 text-sm text-gray-500 md:text-base">Comenze en el mundo de la  tecnologia en 2018 con la plataforma de platzi  cursos online, ahi fui adquiriendo nuevos conocimientos como  javascript e introduccion a machine learning entre otras tecnologias, posteriormente entre al programa platzi master en el 2020 y me especialize como frontend developer trabajando con css html javascript y react.js actualmente me encuentro estudiando para poder ser data science y python dev.</p>
          </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 rounded-l-lg">
            <div className="h-full object-cover ">
                         <Image className="rounded-tl-lg" src="/image1.jpg" alt="me" width="900" height="300" />
          </div>
      </div>
  </div>
</div>
{/* FINAL WEB PRESENTACION*/}
            
{/* EMPIEZA LAS CARDS*/}
            
{/* CARD 1*/}
<div className="container my-12 mx-auto px-4 md:px-12">
  <div className="flex flex-wrap -mx-1 lg:-mx-4">
{/*COLUMNA*/}
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
{/*ARTICULO*/}
          <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                  <img alt="Placeholder" class="block h-auto w-full" src="/web2.png"/>
              </a>
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-lg">
                      <a className="no-underline hover:underline text-black" href="#">
                          Mi Pagina Web
                      </a>
                  </h1>
                  <p className="text-grey-darker text-sm">
                      25/02/2021
                  </p>
             </header>
                            <article className="flex items-center justify-between leading-none p-2 md:p-4">
                                <p>Mi pagina web fue creada con tecnologias de html y css y javascript utilizando el framework de TAILWINDCSS y el framework de React Next.JS</p>
                            </article>               
              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a className="flex items-center no-underline hover:underline text-black" href="#">
                      <img alt="Placeholder" className="block rounded-full" src="/web.png"/>
                      <p className="ml-2 text-sm">
                          Oscar Armando Tellez Covarrubias
                      </p>
                  </a>
                  <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                      <span className="hidden">Like</span>
                      <i className="fa fa-heart"></i>
                  </a>
              </footer>
          </article>
</div>
                    
{/* CARD 2*/}
{/*COLUMNA*/}  
<div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
{/*ARTICULO*/}
        <article className="overflow-hidden rounded-lg shadow-lg">
            <a href="#">
                <img alt="Placeholder" className="block h-auto w-full" src="/booking.jpg" />
            </a>
            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                    <a className="no-underline hover:underline text-black" href="#">
                      file-system-booking
                    </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  21/09/2020
                </p>
                </header>
                            <article className="flex items-center justify-between leading-none p-2 md:p-4">
                                <p>Esta aplicacion web fue creada con tecnologias de React.js asi como una API  con flask fue creada para el proyecto final de platzi master junto a mi grupo de compañeros de cohort</p>
                            </article>  
            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                    <img alt="Placeholder" className="block rounded-full" src="/web.png" />
                    <p className="ml-2 text-sm">
                      Master platzi Cohort 5
                    </p>
                </a>
                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                </a>
            </footer>
        </article>
    </div>

{/* CARD 3*/}
{/*COLUMNA*/} 
<div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
{/*ARTICULO*/}                   
  <article className="overflow-hidden rounded-lg shadow-lg">
      <a href="#">
          <img alt="Placeholder" className="block h-auto w-full" src="/games.jpg"/>
      </a>
      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
              <a className="no-underline hover:underline text-black" href="#">
                Games
              </a>
          </h1>
          <p className="text-grey-darker text-sm">
            29/09/2020
          </p>
      </header>
          <article className="flex items-center justify-between leading-none p-2 md:p-4">
            <p>Esta pagina web fue creada con html y el framework boostrap y pretende crear una web sobre videojuegos fue un proyecto de platzi master</p>
          </article> 
      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a className="flex items-center no-underline hover:underline text-black" href="#">
              <img alt="Placeholder" className="block rounded-full" src="/web.png"/>
              <p className="ml-2 text-sm">
                Platzi Master Cohort 5
              </p>
          </a>
          <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
              <span className="hidden">Like</span>
              <i className="fa fa-heart"></i>
          </a>
      </footer>
  </article>
</div>
</div>
</div>
<article>
{/* TERMINA LAS CARDS*/}           
                
{/* INICIA TEXTO SOBRE TECNOLOGIAS*/} 
<div className="mt-10 text-center">
<p className="text-2xl">Que Tecnologias Conosco</p>
<p className="text-lg">Las tecnologias que trabajo actualmente son HTML | CSS | JAVASCRIPT | NEXT.JS | REACT.JS | TAILWINDCSS | PYTHON | DJANGO | FLASK |</p>
</div>
</article>
{/* TERMINA TEXTO SOBRE TECNOLOGIAS*/} 
            
{/*INICIA CARD INTERMEDIA DE LA PAGINA*/} 
<div>
  <div className="bg-gray-100 lg:py-12 lg:flex lg:justify-center">
      <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                <div className="lg:w-1/2">
                <img src="/oscar.jpg" alt=""/>   
              <div className="h-64 bg-cover lg:rounded-lg lg:h-full" style={{background_image:'url("https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80")'}}></div>
          </div>
                <div className="py-12 px-6 max-w-xl lg:max-w-5xl lg:w-1/2">
                         
              <h2 className="text-3xl text-gray-800 font-bold">Un Poco de  <span className="text-indigo-600">Mi</span></h2>
              <p className="mt-4 text-gray-600">Soy un apasionado de la Tecnologia  me gusta mucho aprender cosas nuevas. Me gusta leer y ademas jugar en la pc, mi deporte favorito es el futbol americano mi equipo los patriotas de nueva inglaterra, ademas de aprender todo sobre front una de mis metas a largo plazo es ser Data Science.</p>
              {/* <div className="mt-8">
                  <a href="#" className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Saber Mas..</a>
              </div> */}
          </div>
      </div>
  </div> 
</div>
{/*TERMINA CARD INTERMEDIA DE LA PAGINA*/} 

{/*INICIA EL FOOTER DE LA PAGINA*/} 
<footer>
<div className="w-full  bg-grey-lighter p-8 mt-10  bg-gray-700">
  <div className="sm:flex mb-4 text-white">
<div className="sm:w-1/4 h-auto">
    <div className="text-orange mb-2">Links a Tecnologias Web</div>
    <ul className="list-reset leading-normal">
        <li className="hover:text-orange text-grey-darker"><a href="https://es.reactjs.org/">React.JS</a></li>
        <li className="hover:text-orange text-grey-darker"><a href="https://tailwindcss.com/">TailwindCSS</a></li>
        <li className="hover:text-orange text-grey-darker"><a href="https://nextjs.org/">Next.Js</a></li>
        <li className="hover:text-orange text-grey-darker"><a href="https://htmlreference.io/">HTML</a></li>
    </ul>
</div>
<div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
    <div className="text-blue mb-2">Links a Tecnologias Data Science</div>
    <ul className="list-reset leading-normal">
        <li className="hover:text-blue text-grey-darker"><a href="https://scikit-learn.org/stable/">Scikit-learn</a></li>
        <li className="hover:text-blue text-grey-darker"><a href="https://www.tensorflow.org/?hl=es-419">TensorFlow</a></li>
        <li className="hover:text-blue text-grey-darker"><a href="https://spark.apache.org/">Spark apache</a></li>
    </ul>

  <div className="text-blue-light mb-2 mt-4">Links a Tecnologias Python</div>
    <ul className="list-reset leading-normal">
        <li className="hover:text-blue-light text-grey-darker"><a href="https://www.cocos.com/en/">Cocos2d</a></li>
        <li className="hover:text-blue-light text-grey-darker"><a href="https://pandas.pydata.org/">Pandas</a></li>
        <li className="hover:text-blue-light text-grey-darker"><a href="https://selenium-python.readthedocs.io/">Selenium</a></li>
    </ul>

</div>
<div className="sm:w-1/4 h-auto sm:mt-0 mt-8">
          <div className="text-green-dark mb-2">Link a mi repositorio de  Git Hub</div>
    <ul className="list-reset leading-normal">
        <li className="hover:text-green-dark text-grey-darker"><a href="https://github.com/OscarAT1984">Mi GitHub</a></li>
        
    </ul>


</div>
  <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
      <div className="text-red-light mb-2">Contactame</div>
        <p className="text-grey-darker leading-normal">Correo: zaroscar1984@gmail.com</p>
        <p className="text-grey-darker leading-normal">Cel: (52)5520908032</p>
  </div>
</div>
</div>
</footer>
{/*TERMINA EL FOOTER DE LA PAGINA*/} 
            
{/*INICIA SUBFOOTER*/} 
<div className="flex items-center justify-between my-4 bg-gray-800">
  <p className="text-white">Todos los Derechos Reservados</p>
  <p className="inline-flex text-white px-2 pt-6">
     Por Oscar Armando Tellez Covarrubias.</p>
  <div className="flex items-center">
      {/* <a href="https://www.facebook.com/oscararmando.tellezcovarrubias/">
          <svg className="h-6 w-6 fill-current text-white mr-6" viewBox="0 0 512 512">
              <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"/>
          </svg>
      </a> */}
      {/* <a href="#">
          <svg fill="none"  className="h-6 w-6 text-white mr-6" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
      </a> */}
      <a href="https://www.linkedin.com/in/oscar-armando-tellez-covarrubias/">
          <svg className="h-6 w-6 fill-current text-white mr-6" viewBox="0 0 512 512">
              <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"/>
          </svg>
      </a>
      <a href="https://twitter.com/OscarArmandoTe3">
          <svg className="h-6 w-6 fill-current text-white mr-6" viewBox="0 0 512 512">
              <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"/>
          </svg>
      </a>
  </div>
</div>
{/*TERMINA SUBFOOTER*/} 
</body>
</div>
}

export default HomePage