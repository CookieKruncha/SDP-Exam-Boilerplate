import { useState, useEffect } from 'react'

function App() {
  const [status, setStatus] = useState<string>('Loading...')

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(res => res.json())
      .then(data => setStatus(data.message))
      .catch(err => setStatus('Error connecting to backend'))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Backend Status: {status}</p>
      </header>
      
      <main className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar for Filters */}
        <aside className="col-span-1 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          {/* Add filter controls here */}
        </aside>
        
        {/* Main Content Area */}
        <section className="col-span-1 md:col-span-3 bg-white p-4 rounded shadow min-h-[500px]">
           <h2 className="text-xl font-semibold mb-4">Data View</h2>
           {/* Add TanStack Table or Charts here */}
        </section>
      </main>
    </div>
  )
}

export default App
