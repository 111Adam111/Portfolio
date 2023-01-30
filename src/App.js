import Navbar from './components/Navbar';
import HeroText from './components/HeroText';
import './scss/style.css';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import About from './components/About';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIDYMmOgKE2OHDphC3ka0AjWJTqxO56hQ",
  authDomain: "portfolio-bd754.firebaseapp.com",
  projectId: "portfolio-bd754",
  storageBucket: "portfolio-bd754.appspot.com",
  messagingSenderId: "666285350776",
  appId: "1:666285350776:web:835c1a8bf0fba5c63c728d",
  measurementId: "G-D1HMH3YEME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <div className='background'>
      <Navbar />
      <HeroText />
      <Projects />
      <About />
      <ContactForm />
      </div>

      
    </div>
  );
}

export default App;
