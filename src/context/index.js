import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const SchoolContext = createContext();

const SchoolProvider = ({ children }) => {
  const [storage, setStorage] = useLocalStorage("school-name", {
    courses: [],
    staff: [],
    students: [],
  });
  return (
    <SchoolContext.Provider value={{ storage, setStorage }}>
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolProvider;
export function SchoolData() {
  return useContext(SchoolContext);
}
