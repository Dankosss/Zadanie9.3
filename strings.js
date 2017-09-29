var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
dinosaur = dinosaur.toUpperCase();
var newText = text.replace('Velociraptor', dinosaur);
newText = newText.slice(0, newText.length/2);
console.log(newText);