import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { EMICalculator } from "../StateEvents/emi-calculator"
import { Weather } from "../Weather API/weather"        
export function Home(){
        return(
                <div className="container-fluid">
                        <BrowserRouter>
                        <header className="mt-3 p-3 border text-center border-1">
                                <h1>React Project - Home</h1>
                            
                                <nav>
                                        <span> <Link to="/emi">EMI Calculator</Link> </span>
                                        <span className="mx-4"> <Link to="/weather">Weather App</Link> </span>
                                        <span> <Link to="/carousel"> Carosuel App </Link> </span>
                                </nav>
                        </header>
                        <section className="mt-4">
                              
                                    <Routes>
                                            <Route path="/" element={<div>You can browse your projects here..</div>} />
                                            <Route path="emi" element={<EMICalculator />} />
                                            <Route path="weather" element={<Weather />} />
                                            <Route path="carousel" element={<CarouselDemo />} />
                                            <Route path="*" element={<div><h1>Sorry - Requested Component Not Found</h1></div>} />
                                    </Routes>
                              
                        </section>
                        </BrowserRouter>
                </div>
        )
}
