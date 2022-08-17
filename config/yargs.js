const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    // demandOption: true,
    default: 10,
    describe: "Este es el número hasta donde quieres la tabla",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en la consola",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    if (isNaN(argv.h)) {
      throw "El elemento 'hasta' tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
