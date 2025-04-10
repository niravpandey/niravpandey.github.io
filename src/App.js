import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div style={{ marginLeft: '220px', padding: '20px' }}>
        <h1>Welcome to Nirav's Site</h1>
        <p>Start building your content here...</p>
      </div>
    </div>
  );
}

export default Sidebar;