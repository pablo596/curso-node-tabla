const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar, hasta) => {
  try {
    console.log("=================".green);
    console.log(`   Tabla del:`, colors.blue(base));
    console.log("=================".green);
    let salida,
      consola = "";
    for (let i = 1; i <= hasta; i++) {
      consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`;
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    listar && console.log(consola);

    await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = { crearArchivo };
