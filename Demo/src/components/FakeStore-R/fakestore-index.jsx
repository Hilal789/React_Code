
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./fakestore-home";
import { FakestoreProducts } from "./fakestore-products";
import { FakestoreDetails } from "./fakestore-details";

export function FakestoreIndex(){
        return(
                <div className="container-fluid">
                        <BrowserRouter>
                              <header className="bg-dark text-white text-center p-2">
                                <div className="fs-2">Fakestore - Shopping Online</div>
                              </header>
                              <section className="mt-5">
                                    <Routes>
                                            <Route path="/" element={<FakestoreHome />} />
                                            <Route path="products/:category" element={<FakestoreProducts />}>
                                                        <Route path="details/:id" element={<FakestoreDetails />} />
                                            </Route>
                                            <Route path="*" element={<><h1>Requested Path Not Found</h1></>} />
                                    </Routes>
                              </section>
                        </BrowserRouter>
                </div>
        )
}

