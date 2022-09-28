import { useState } from 'react'
import './App.css'
import { BsCompass, BsTrash, BsYoutube } from 'react-icons/bs'
import ModalDialog from './components/ModalDialog'

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
    setIsOpen(true)
  }
  const [visible, setIsOpen] = useState(false)
  return (
    <>
      <ModalDialog
        visible={visible}
        toggleModal={() => setIsOpen(!visible)}
        fuel={fuel}
        total={total}
        totalPerPassenger={totalPerPassenger}
      />
      {visible}
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
                      setKmToTravel(parseInt(kmToTravel) + 1)
                    }}
                  >
                    +
                  </button>
                  <button
                    className='btn-d'
                    onClick={() => {
                      setKmToTravel(
                        kmToTravel !== 0 ? parseInt(kmToTravel) - 1 : 0
                      )
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
                      setAvgFuelCons(parseInt(avgFuelCons) + 1)
                    }}
                  >
                    +
                  </button>
                  <button
                    className='btn-d'
                    onClick={() => {
                      setAvgFuelCons(
                        avgFuelCons !== 0 ? parseInt(avgFuelCons) - 1 : 0
                      )
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
                      setFuelPrice(parseInt(fuelPrice) + 1)
                    }}
                  >
                    +
                  </button>
                  <button
                    className='btn-d'
                    onClick={() => {
                      setFuelPrice(
                        fuelPrice !== 0 ? parseInt(fuelPrice) - 1 : 0
                      )
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
                      setPassenger(parseInt(passenger) + 1)
                    }}
                  >
                    +
                  </button>
                  <button
                    className='btn-d'
                    onClick={() => {
                      setPassenger(
                        passenger !== 0 ? parseInt(passenger) - 1 : 0
                      )
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
                  className='btn-clear d-flex'
                  onClick={() => {
                    setAvgFuelCons(0)
                    setFuel(0)
                    setKmToTravel(0)
                    setPassenger(0)
                    setTotal(0)
                    setTotalPerPassenger(0)
                    setFuelPrice(0)
                  }}
                >
                  <BsTrash style={{ color: 'rgb(43, 43, 43)' }} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
