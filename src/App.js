import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./img.svg";

const App = () => {
  const [result, setResult] = useState([]);

  const getData = async () => {
    const data = await fetch("https://api.covid19api.com/summary");
    const json = await data.json();
    setResult(json.Countries);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center mt-4 w-100 mb-2 font-weight-bold">
          Covid - 19 Tracker
        </h1>
        <p className="text-center text-danger">
          Note : Data might not be accurate. <br />
          <p className="text-dark mt-3">App By - Shinichi Izumi</p>
        </p>
        <div className="container">
          <img src={img} alt="Covid - 19" className="img-fluid" />
        </div>
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Country</th>
              <th scope="col">New Confirmed</th>
              <th scope="col">Total Confirmed</th>
              <th scope="col">New Deaths</th>
              <th scope="col">Total Deaths</th>
              <th scope="col">New Recovered</th>
              <th scope="col">Total Recovered</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item, key) => {
              return (
                <>
                  <tr>
                    <th scope="row">{key + 1}</th>
                    <td>{item.Country}</td>
                    <td>{item.NewConfirmed}</td>
                    <td>{item.TotalConfirmed}</td>
                    <td>{item.NewDeaths}</td>
                    <td>{item.TotalDeaths}</td>
                    <td>{item.NewRecovered}</td>
                    <td>{item.TotalRecovered}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [users, setUsers] = useState([]);

//   const getData = async () => {
//     const apidata = await fetch("https://jsonplaceholder.typicode.com/todos/");
//     const json = await apidata.json();
//     console.log(json);
//     setUsers(json);
//   };

//   useEffect(() => {
//     getData();
//   }, []);
//   return (
//     <div className="App">
//       {users.map((item) => {
//         return (
//           <>
//             <li>{item.title}</li>
//           </>
//         );
//       })}
//     </div>
//   );
// }
