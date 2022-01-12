import React, {useEffect, useState} from 'react';
import Flight from "./Flight";

const Flights = () => {

    let [flightsList, setFlightsList] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(flights => {
                setFlightsList(flights.filter(flight => flight.launch_year !== '2020'))
            });

    },[])


    return (
        <div>

            {
                flightsList.map(value => <Flight key={value.flights_number}
                item={value}
                />)
            }

        </div>
    );
};

export default Flights;