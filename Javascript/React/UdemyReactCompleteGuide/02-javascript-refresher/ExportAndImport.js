// Exporting allows us to import modules from other files
export const baseData = 10;
// In another file we would import this like so:
// import { baseData } from './ExportAndImport.js'

// The default keyword means that we don't need to specify the exact identifier when importing
const person = {
  name: "Max",
};
export default person;
// In another file we could import like this (can name the identifier whatever we want)
// import prs from './ExportAndImport.js'
