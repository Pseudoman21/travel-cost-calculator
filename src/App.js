import { useState } from 'react'
import './App.css'
import { BsCompass, BsTrash, BsYoutube } from 'react-icons/bs'

function App () {
  const [total, setTotal] = useState(0)
  const [totalPerPassenger, setTotalPerPassenger] = useState(0)
  const [fuel, setFuel] = useState(0)
  const [avgFuelCons, setAvgFuelCons] = useState(0)
  const [fuelPrice, setFuelPrice] = useState(0)
  const [passenger, setPassenger] = useState(0)
  const [kmToTravel, setKmToTravel] = useState(0)

  const calculate = () => {
    let computed = (kmToTravel / avgFuelCons) * fuelPrice

    let fuel = kmToTravel / avgFuelCons

    if (
      (kmToTravel === 0) | (avgFuelCons === 0) ||
      fuelPrice === 0 ||
      passenger === 0
    )
      return
    setFuel(fuel)
    setTotal(computed)
    setTotalPerPassenger(computed / passenger)
  }
  return (
    <>
      <section className='App'>
        <div className='container'>
          <div className='header-area d-flex'>
            <BsYoutube />
            &nbsp;
            <a
              href='https://www.youtube.com/c/KasanggaVlogs'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              Kasangga Vlogs
            </a>
          </div>

          <header className='App-header'>
            <h2>Travel Cost Calculator</h2>
          </header>
          <div>
            <form
              onSubmit={e => {
                e.preventDefault()
              }}
            >
              <div className='form-group'>
                <label>Distance</label>
                <div className='d-flex'>
                  <span>Km</span>
                  <input
                    placeholder='Km'
                    value={kmToTravel}
                    type='number'
                    onChange={e => {
                      setKmToTravel(e.target.value)
                    }}
                  />
                  <button
                    className='btn-a'
                    onClick={() => {
                      setKmToTravel(kmToTravel + 1)
                    }}
                  >
                    +
                  </button>
                  <button
                    className='btn-d'
                    onClick={() => {
                      setKmToTravel(kmToTravel !== 0 ? kmToTravel - 1 : 0)
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className='form-group'>
                <label>Average Fuel Consumption</label>
                <div className='d-flex'>
                  <span>Km/L</span>

                  <input
                    placeholder='Km/L'
                    value={avgFuelCons}
                    type='number'
                    onChange={e => {
                      setAvgFuelCons(e.target.value)
                    }}
                  />
                  <button
                    className='btn-a'
                    onClick={() => {
                      setAvgFuelCons(avgFuelCons + 1)
                    }}
                  >
                    +
                  </button>
                  <button
                    className='btn-d'
                    onClick={() => {
                      setAvgFuelCons(avgFuelCons !== 0 ? avgFuelCons - 1 : 0)
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className='form-group'>
                <label>Fuel Price</label>
                <div className='d-flex'>
                  <span>Php</span>
                  <input
                    placeholder='Fuel Price'
                    value={fuelPrice}
                    type='number'
                    onChange={e => {
                      setFuelPrice(e.target.value)
                    }}
                  />
                  <button
                    className='btn-a'
                    onClick={() => {
                      setFuelPrice(fuelPrice + 1)
                    }}
                  >
                    +
                  </button>
                  <button
                    className='btn-d'
                    onClick={() => {
                      setFuelPrice(fuelPrice !== 0 ? fuelPrice - 1 : 0)
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className='form-group'>
                <label>Passengers</label>
                <div className='d-flex'>
                  <span>Pax</span>
                  <input
                    placeholder='Passengers'
                    value={passenger}
                    type='number'
                    onChange={e => {
                      setPassenger(e.target.value)
                    }}
                  />
                  <button
                    className='btn-a'
                    onClick={() => {
                      setPassenger(passenger + 1)
                    }}
                  >
                    +
                  </button>
                  <button
                    className='btn-d'
                    onClick={() => {
                      setPassenger(passenger !== 0 ? passenger - 1 : 0)
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className='d-flex'>
                <button className='btn-c' onClick={calculate}>
                  Calculate
                </button>
                <button
                  className='btn-c d-flex'
                  onClick={() => {
                    setAvgFuelCons(0)
                    setFuel(0)
                    setKmToTravel(0)
                    setPassenger(0)
                    setTotal(0)
                    setTotalPerPassenger(0)
                  }}
                >
                  <BsTrash style={{ color: 'rgb(43, 43, 43)' }} />
                </button>
              </div>
              <div className='d-lg-flex'>
                <div className='form-group'>
                  <h3>Total fuel:</h3>
                  <span className='result'>{fuel.toFixed(2)}L</span>
                </div>
                <div className='form-group'>
                  <h3>Total cost:</h3>
                  <span className='result'>Php {total.toFixed(2)}</span>
                </div>
                <div className='form-group'>
                  <h3>Per passenger:</h3>
                  <span className='result'>
                    Php {totalPerPassenger.toFixed(2)}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
