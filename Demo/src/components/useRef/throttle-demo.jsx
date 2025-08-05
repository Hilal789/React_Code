import { useEffect, useState } from "react";

export function ThrottleDemo() {
    const [timer, setTimer] = useState(null);

    function Clock() {
        var now = new Date();
        setTimer(now.toLocaleTimeString());
    }

    useEffect(() => {
        const intervalId = setInterval(Clock, 1000);
        return () => clearInterval(intervalId); // cleanup
    }, []);

    return (
        <div
            className="container-fluid"
            style={{ backgroundColor: "black", height: "100vh" }}
        >
            <h1 className="mt-4 text-center" style={{ color: "gray" }}>
                {timer}
            </h1>
        </div>
    );
}
