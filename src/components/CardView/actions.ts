import { fetchGetCarData } from "../../api/getCars";
import { CarModel } from "./props";

//fazer uma solicitação para api
export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  const response = await fetchGetCarData(id);
  try {
    if (response) {
      setCarData(response);
    }
  } catch (error) {
    console.log("Erro ao buscar da API", error);
    setCarData(null);
  }
};

export const handlePreviosItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  let response = null;
  try {
    if (carData && carData?.id > 1) {
      response = await fetchGetCarData(carData.id - 1);
    }
    if (response) {
      setCarData(response);
    }
  } catch (error) {
    console.log("Erro ao chamar API", error);
    setCarData(null)
  }
};

export const handleNextItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
    let response = null;
    try {
      if (carData && carData?.id < 10 ) {
        response = await fetchGetCarData(carData.id + 1);
      }
      if (response) {
        setCarData(response);
      }
    } catch (error) {
      console.log("Erro ao chamar API", error);
      setCarData(null)
    }
  };
