import React,{ createContext,useState,useEffect} from "react";
import {addCar,updateCar,deleteCar,getAllCars} from '../api/api';
import {toast} from 'react-toastify';

export const CarContext = createContext(); 
export const CarProvider = ({children})=> {
    const [cars,setCars]= useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const [error,setError]= useState(null);

    const fetchCars = async ()=> {
        try {
           const carsData = await getAllCars();
           setCars(carsData);
           setIsLoading(false);
        } catch (err){
            setError(err.message);
            setIsLoading(false);
        }
    };
useEffect(()=>{ 
fetchCars();
},[]);

const addNewCar=async (car) => {
    try {
        const newCar = await addCar(car);
        setCars(prevCars => ([...prevCars,newCar]));
        showToast('Car added successfully');
    } catch (err){
        setError(err.message);
    }
};
const editCar = async (carData) => {
    try{
        const updatedCar = await updateCar(carData, carData.id);
        setCars((prevCars) => 
        prevCars.map((car)=> (car._id === carData.id ? updatedCar : car))
        );
        showToast('Car updated successfully');
    } catch (err){
        setError(err.message);
    }
};

const removeCar = async (id) => {
    try {
        await deleteCar(id);
        setCars((prevCars) => prevCars.filter((car) => (car.id !== id))
        );
        showToast('Car deleted successfully');
        }catch (err){
            setError(err.message);
    }
};

const clearError = () => {
    setError(null);
};

const showToast = (message) => {
    toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
}
return (
    <CarContext.Provider
    value={{
        cars,
        isLoading,
        error,
        addNewCar,
        editCar,
        removeCar,
        clearError
    }}>{children}</CarContext.Provider>
);
};