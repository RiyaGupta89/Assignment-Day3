import React from "react";
import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa';


const Icon = ({ choice }) => {
        switch(choice) {
            case "cross": 
                return <FaTimes />
            case "circle":
                return <FaRegCircle />
        }
}

export default Icon;