import React, {useState} from 'react';

const Flight = ({item: value}) => {

    useState()

    return (
        <div className="textInfo">
            {value.mission_name} - {value.launch_year}
            <img src={value.links.mission_patch} alt="mission_patch"/>
        </div>
    );
}

export default Flight;