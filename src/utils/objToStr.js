export default function objToStr(str) {
  return typeof str === "string" ? str : Object.values(str).join("");
}
