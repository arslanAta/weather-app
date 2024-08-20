import { useState } from 'react'
import './App.css'
import HumidityIcon from './assets/icons/HumidityIcon'
import SearchIcon from './assets/icons/SearchIcon'
import WindIcon from './assets/icons/WindIcon'
import { useGetWeatherQuery } from './store/weather/weather.api'
import { useDebounce } from './hooks/debounce'

function App() {
  const [city, setCity] = useState<string>('')
  const selectedCity = useDebounce(city)
  const { data } = useGetWeatherQuery(selectedCity.length == 0 ? 'Ashgabat': selectedCity)
  
  console.log(data)
  // useEffect(()=>{

  // },[city])
  return (
    <div className='w-full bg-gradient-to-r from-gray-100 to-neutral-300 h-screen flex justify-center items-center '>
      <div className='p-5 max-md:p-3 max-md:py-8 py-7 w-[460px] h-[480px] max-md:h-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-xl  max-md:rounded-none rounded-3xl'>
        <nav className='flex justify-between items-center px-2 text-center text-white'>
          <div className='max-md:w-1/2 flex gap-2 items-center border-b'>
            <SearchIcon width={18} height={18} />
            <input
              type="text"
              className='max-md:w-3/4 p-1 placeholder:text-white transition-all duration-500 bg-transparent text-white outline-none '
              placeholder='Search'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

          </div>
          <h1 className='font-bold'>Location: {data?.name}</h1>
        </nav>
        <div className='text-center flex flex-col items-center gap-4 pt-9'>
          <div className='h-40'>
            <img className='h-full object-cover' src="https://arslanata.github.io/weather-app/img/sun.png" alt="" />
          </div>
          <h1 className='text-4xl text-white'>{data?.main.temp}&deg;C</h1>
          <h1 className='text-xl text-white'>{data?.weather[0].main}</h1>
          <div className='text-white space-y-3'>
            <div className='flex gap-2'>
              <WindIcon />
              <h1 className='mr-3'>Wind |</h1>
              <h1>{data?.wind.speed}km/h</h1>
            </div>
            <div className='flex gap-2'>
              <HumidityIcon />
              <h1 className='mr-3'>Hum |</h1>
              <h1>{data?.main.humidity}%</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
