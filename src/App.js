import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  const calcAge = event => {
    event.preventDefault();
    const bday = new Date(event.target.querySelector('input[type="date"]').value);
    const age = Math.floor((new Date() - bday) / (1000 * 60 * 60 * 24 * 365.25));
    event.target.querySelector('span').innerText = "You are "+age+" years old";
  }
  return (
    <>
    <div class='container border border-dark bg-success'>
    <h1 class="text-light">Age Calculator</h1>
      <br />
      <h4>Enter your date of birth</h4>
      <form onSubmit={calcAge}>
        <input class='border rounded my-3' type="date" max="2023-01-01" />
        <input type="submit" value="Calculate Age" />
        <div class="py-3">
          <h2><span></span></h2>
        </div>
      </form>
    </div>
      
    </>
  );
}

export default App;
