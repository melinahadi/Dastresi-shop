import { Provider } from "react-redux";
import { store } from "./app/store";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
 
function App() {
  return  (
    <Provider store={store}>
      <div className="App flex flex-col min-h-screen">
        <Header />  {/* ✅ هدر باید همیشه بالای صفحه باشد */}
        <main className="flex-grow">  
          <HomePage />
        </main>
        <Footer />  {/* ✅ فوتر در پایین صفحه قرار می‌گیرد */}
      </div>
    </Provider>
  );
}

export default App;
