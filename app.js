import Header from "./components/header";
import InternshipCard from "./components/InternshipCard";
import Dashboard from "./components/Dashboard";

function App() {
  const internships = [
    { role: "Frontend Developer", company: "Google", location: "Remote" },
    { role: "Backend Developer", company: "Amazon", location: "Bangalore" },
    { role: "UI Designer", company: "Adobe", location: "Remote" }
  ];

  return (
    <div>
      <Header />

      <h2>Available Internships</h2>
      {internships.map((item, index) => (
        <InternshipCard key={index} {...item} />
      ))}

      <hr />

      <Dashboard />
    </div>
  );
}

export default App;
