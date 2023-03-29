export const getData = async (filter) => {
    try {
      const data = await fetch(`http://localhost:3000/personajes?name=${filter}`);
      const dataToJson = await data.json();
      /* console.log(dataToJson) */
      return dataToJson;
    } catch (error){

      return TemplateError(error);
    }
  }
  
  const TemplateError = (error) => `<div>${error}</div>`