import { useContext } from "react";
import { LanguageContext } from "./LanguageContextObject";
export function useLanguage() {

return useContext(LanguageContext);

}