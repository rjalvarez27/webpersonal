import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

function App() {
  return (
    <>
      <div>
        <Nav />
        <div className="w-full flex flex-col relative items-center justify-center">
          <div className="flex flex-col items-center sm:flex-row">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white">
                <span className="text-green-500 text-4xl">Soy</span> Raul
                Alvarez
              </h1>
              <h2 className="text-4xl font-bold text-green-500 mt-2">
                Developer
              </h2>
              <p className="text-white mt-4 max-w-xl">
                Bienvenido a mi sitio web personal. Espero que sea de su agrado!
              </p>
              <div className="mt-6 space-x-4">
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  <a href="#projects" className="bg-transparent">
                    Ver proyectos
                  </a>
                </button>
                <button className="border border-white text-white px-4 py-2 rounded">
                  <i className="fa-brands fa-linkedin"></i>{" "}
                  <a href="https://www.linkedin.com/in/raul-alvarez-497543144/">
                    Linkedin
                  </a>
                </button>
              </div>
            </div>
            <div className="m-6 p-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/prueba-1-1262b.appspot.com/o/portada.png?alt=media&token=cbeda5de-d6af-4f60-a949-ff394d2be7b8"
                alt="Portada"
                className="w-80 h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center sm:flex-row p-3" id="about">
          <div className=" flex flex-col rounded-lg text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row border-2 border-green-500 md:shadow-none items-center ">
            <img
              className="w-80 h-96 rounded-lg object-cover md:h-auto md:w-48 m-5"
              src="https://firebasestorage.googleapis.com/v0/b/prueba-1-1262b.appspot.com/o/raul.jpeg?alt=media&token=614f2c42-8d44-4b32-bfc3-5277196d8f5d"
              alt="Perfil"
            />
            <div className="flex flex-col justify-center m-2 p-2 ">
              <h5 className="text-3xl font-bold text-green-500 m-5">
                Acerca de mi
              </h5>
              <p className="text-white text-justify p-3">
                Desarrollador de software en constante aprendizaje, bueno para
                resolver problemas, soy persistente y estoy buscando siempre
                aprender nuevas tecnologías y hacer nuevos proyectos.
                Actualmente me encuentro en la búsqueda de nuevas oportunidades
                donde pueda aprender y desarrollar mis habilidades.
                <br />
                <br />
                Desde que comencé mi trayectoria en el mundo de la programación
                e disfrutado cada paso, me agrada la idea de trabajar en equipo
                de poder aportar mi conocimientos para crear algo maravilloso y
                ser un activo valioso en cualquier equipo en el que me
                desarrolle. Aunque estoy en la búsqueda trabajo actualmente,
                siempre estoy investigando y aprendiendo las nuevas tendencias
                en el mundo del desarrollo.
                <br />
                <br />
                Saludos!!!!
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-5">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-500 mb-6">Educación</h1>
            <div className="flex justify-center flex-wrap space-x-3">
              <div className="w-64 bg-transparent border-1 border-gray-600 p-4">
                <i className="fas fa-graduation-cap fa-3x text-green-500 text-2xl mb-4"></i>
                <h2 className="text-white">4Geeks Academy</h2>
                <p className="text-white">Curso de Full Stack</p>
              </div>
              <div className=" w-64 bg-transparent border-1 border-gray-600 p-4">
                <i className="fas fa-book fa-3x text-green-500 text-2xl mb-4"></i>
                <h2 className="text-white">Lexpin</h2>
                <p className="text-white">Curso de Full Stack</p>
              </div>
              <div className=" w-64 bg-transparent border-1 border-gray-600 p-4">
                <i className="fas fa-laptop-code fa-3x text-green-500 text-2xl mb-4"></i>
                <h2 className="text-white">Autodidacta</h2>
                <p className="text-white">Aprendizaje por propios medio incluyendo Udemy y otros,</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-500 mb-6">Software</h1>
            <div className="flex justify-center flex-wrap space-x-3 ">
              <div className="w-64 bg-transparent border-1 border-gray-600 p-4 m-2">
                <i className="fas fa-code fa-3x text-green-500 text-2xl mb-4"></i>
                <h2 className="text-white ">Visual Studio</h2>
                <p className="text-white">Editor de Código por preferencia.</p>
                <div className="text-green-500 ">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
              <div className="w-64 bg-transparent border-1 border-gray-600 p-4 m-2">
                <i className="fas fa-code-branch fa-3x text-green-500 text-2xl mb-4 "></i>
                <h2 className="text-white ">Git</h2>
                <p className="text-white ">Manejo de control de Versiones</p>
                <div className="text-green-500">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="w-64 bg-transparent border-1 border-gray-600 p-4 m-2">
                <i className="fas fa-pencil-ruler fa-3x text-green-500 text-2xl mb-4"></i>
                <h2 className="text-white">Figma</h2>
                <p className="text-white">Prototipos en figma</p>
                <div className="text-green-500">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center m-5">
          <h1 className="text-3xl font-bold text-green-500 mb-6">Herramientas de trabajo</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center bg-transparent border-1 border-gray-600">
              <i className="fab fa-github text-4xl mb-4 text-white"></i>
              <p className="text-green-500">Git Hub</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center bg-transparent border-1 border-gray-600">
              <i className="fa-brands fa-neos text-4xl mb-4 text-white"></i>
              <p className="text-green-500">Notion</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center bg-transparent border-1 border-gray-600">
              <i className="fab fa-stack-overflow text-4xl mb-4 text-white"></i>
              <p className="text-green-500">Stack Overflow</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center bg-transparent border-1 border-gray-600">
              <i className="fab fa-google text-4xl mb-4 text-white"></i>
              <p className="text-green-500">Google</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center bg-transparent border-1 border-gray-600">
              <i className="fab fa-slack text-4xl mb-4 text-white"></i>
              <p className="text-green-500">Slack</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center bg-transparent border-1 border-gray-600">
              <i className="fab fa-discord text-4xl mb-4 text-white"></i>
              <p className="text-green-500">Discord</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-green-500 text-3xl font-bold mb-6 ">Mis habilidades</h1>
          <div className="flex flex-col space-x-2  sm:flex-row  ">
            <div className="w-64 m-2 bg-gray-700 p-6 rounded-lg text-center ">
              <i className="fas fa-laptop-code text-green-400 text-5xl mb-4 bg-transparent"></i>
              <h2 className="bg-transparent text-2xl font-semibold mb-2 text-white">
                Front-end
              </h2>
              <p className="bg-transparent text-white text-center">
                Conocimiento en Diseño de interfaces, implementación lenguajes
                de programación como por ejemplo JavaScript, optimización de una
                página web o aplicación y expandibilidad.
              </p>
            </div>
            <div className="bg-gray-700 m-2  p-6 rounded-lg text-center w-64">
              <i className="fas fa-database text-green-400 text-5xl mb-4 bg-transparent"></i>
              <h2 className="bg-transparent text-2xl font-semibold mb-2 text-white">
                Back-end
              </h2>
              <p className="bg-transparent text-white text-center">
                Conocimiento de lenguajes como Python y PHP. Bases de datos
                relacionales y no relacionales. Implementación de un API para
                una web o aplicación.
              </p>
            </div>
            <div className="bg-gray-700 m-2 p-6 rounded-lg text-center w-64">
              <i className="fas fa-users text-green-400 text-5xl mb-4 bg-transparent"></i>
              <h2 className="bg-transparent text-2xl font-semibold mb-2 text-white">
                Soft-skills
              </h2>
              <p className="bg-transparent text-white text-center">
                Capacidad de trabajar en equipo, y comunicarse de manera
                efectiva con otros programadores. Resolución de problemas y
                adaptabilidad a situaciones.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center w-full">
          <h1 className="text-green-500 text-4xl mb-10 mt-10 font-bold" id="projects">
            Algunos de mis proyectos
          </h1>
          <div className="w-full">
            <div className="bg-yellow-500 p-10 rounded-lg py-8 mb-10">
              <h1 className="bg-transparent text-2xl font-bold text-green-500 m-3">
                Inventario Bot Telegram
              </h1>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/prueba-1-1262b.appspot.com/o/bot.jpg?alt=media&token=1a51dc0c-ba68-4fd8-851a-a022ad928219"
                alt="project 1"
                className="mx-auto mb-4 w-80 border-2 border-black rounded-md "
              />
              <button className="bg-black text-white px-4 py-3 rounded-full hover:bg-green-600">
                <a href="https://github.com/rjalvarez27/Inventario_Bot_Telegram" className="bg-transparent">
                  <i className="fa-brands fa-github bg-transparent"></i>
                </a>
              </button>
            </div>
          </div>
          <div className="bg-purple-500 p-10 rounded-lg py-8 mb-10">
            <h1 className="bg-transparent text-2xl font-bold text-green-500 m-3">
              Api para Red social
            </h1>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prueba-1-1262b.appspot.com/o/api.jpg?alt=media&token=e4ebfad5-6806-4fa6-934b-78821c13aed8"
              alt="project 1"
              className="mx-auto mb-4 w-72 border-2 border-black rounded-md"
            />
            <button className="bg-black text-white px-4 py-3 rounded-full hover:bg-green-600">
              <a href="https://github.com/rjalvarez27/Red_Social_Api" className="bg-transparent">
                <i className="fa-brands fa-github bg-transparent"></i>
              </a>
            </button>
          </div>
          <div className="bg-red-500 p-10 rounded-lg py-8 mb-10">
            <h1 className="bg-transparent text-2xl font-bold text-green-500 m-3">
              Red social (Desarrollo)
            </h1>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/prueba-1-1262b.appspot.com/o/red.jpg?alt=media&token=5f93b5ce-f0e7-443e-9dab-112cb04643ee"
              alt="project 1"
              className="mx-auto mb-4 w-80 border-2 border-black rounded-md"
            />
            <button className="bg-black text-white px-4 py-3 rounded-full hover:bg-green-600">
              <a href="https://github.com/rjalvarez27/Red_Social_Frontend" className="bg-transparent">
                <i className="fa-brands fa-github bg-transparent"></i>
              </a>
            </button>
          </div>
          <button className="bg-green-500 text-white py-2 px-4 rounded-full m-5 hover:bg-black">
            <a
              href="https://github.com/rjalvarez27?tab=repositories"
              className="bg-transparent"
            >
              Ver más en GitHub{" "}
              <i className="fas fa-arrow-right bg-transparent"></i>
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
