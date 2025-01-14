module.exports = function (template, product) {
  let output = template.replace("{{%IMAGE%}}", product.productImage);
  output = output.replace("{{%NAME%}}", product.name);
  output = output.replace("{{%PRICE%}}", product.price);
  output = output.replace("{{%MODELNAME%}}", product.modeName);
  output = output.replace("{{%DESCRIPTION%}}", product.modelNumber);
  output = output.replace("{{%SIZE%}}", product.size);
  output = output.replace("{{%CAMERA%}}", product.camera);
  output = output.replace("{{%COLOR%}}", product.color);
  output = output.replace("{{%ID%}}", product.id);
  output = output.replace("{{%ROM%}}", product.rom);
  output = output.replace("{{%DESC%}}", product.Description);

  return output;
};
