// src/App.js
import './App.css';

function App() {
  const headingStyle = {
    textAlign: 'center',
    color: '#333',
    fontFamily: 'Arial'
  };

  const officeImage = "https://via.placeholder.com/600x300.png?text=Office+Space";

  const officeList = [
    { name: "Skyline Tower", rent: 75000, address: "Bangalore" },
    { name: "Sunset Plaza", rent: 58000, address: "Hyderabad" },
    { name: "Green Valley", rent: 65000, address: "Pune" },
    { name: "Tech Park", rent: 55000, address: "Chennai" }
  ];

  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? 'red' : 'green',
      fontWeight: 'bold'
    };
  };

  return (
    <div className="App">
      <h1 style={headingStyle}>🏢 Office Space Rental App</h1>

      <img src={officeImage} alt="Office Space" style={{ width: "80%", margin: "20px auto", display: "block" }} />

      <div style={{ padding: '20px' }}>
        {officeList.map((office, index) => (
          <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            <h2>{office.name}</h2>
            <p><strong>Address:</strong> {office.address}</p>
            <p>
              <strong>Rent:</strong> 
              <span style={getRentStyle(office.rent)}> ₹{office.rent}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
