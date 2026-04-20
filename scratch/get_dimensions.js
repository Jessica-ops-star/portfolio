const sizeOf = require('image-size');
try {
  const dimensions = sizeOf('portfolio/public/proof_completion.png');
  console.log(dimensions.width, dimensions.height);
} catch (e) {
  console.error(e);
}
