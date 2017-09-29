var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
dinosaur = dinosaur.toUpperCase();
var nowyText = text.replace('Velociraptor', dinosaur);
nowyText = nowyText.slice(0, nowyText.length/2);
console.log(nowyText);