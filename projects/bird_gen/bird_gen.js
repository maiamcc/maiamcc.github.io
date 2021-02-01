window.onload = initAll;

Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
}

const BASE_BIRDS = [
    'woodpecker', 'wren', 'nuthatch', 'sparrow', 'dove', 'cardinal', 'robin', 'chickadee', 'junco', 'hawk', 'titmouse', 'starling', 'crow', 'flicker', 'blackbird', 'finch', 'grackle', 'jay', 'swallow', 'warbler', 'swift', 'tanager', 'meadowlark', 'lark', 'cowbird', 'crested', 'turkey vulture', 'vulture', 'grouse', 'prairie chicken', 'chicken', 'pheasant', 'egret', 'heron', 'ibis', 'sandpiper', 'plover', 'owl', 'crane', 'stork', 'gull', 'petrel', 'shearwater', 'duck', 'penguin', 'scoter', 'coot', 'bufflehead'
 ];
const SIMPLE_ADJS = [
    'downy', 'Carolina', 'hairy', 'song', 'mourning', 'Northern', 'American', 'European', 'purple', 'common', 'house', 'tufted', 'blue', 'Cooper\'s', 'Southern', 'Eastern', 'Western', 'chimney', 'horned', 'Harris\'s', 'Ruthie\'s', 'Ari\'s', 'greater', 'lesser', 'wild', 'reddish', 'sand', 'wood', 'earth', 'water', 'fire', 'air', 'rock', 'ruddy', 'spotted', 'solitary', 'Massachusetts', 'New York', 'mountain', 'river', 'killer', 'showy', 'snowy', 'piping', 'royal', 'laughing', 'hipster', 'sooty', 'surf', 'harlequin', 'whistling', 'hooded', 'Baltimore',
];

const COMPOUND_A1 = [
    'white', 'red', 'dark', 'black', 'blue', 'purple', 'yellow', 'golden', 'brown', 'pink', 'green', 'rufous', 'clay', 'five', 'broad', 'sharp', 'ring', 'glaucous', 'sooty', 'long', 'short'
];

const COMPOUND_A2 = [
    'throated', 'breasted', 'bellied', 'eyed', 'capped', 'winged', 'tailed', 'horned', 'haired', 'backed', 'sided', 'crowned', 'colored', 'striped', 'hooded', 'crested', 'necked'
];

const ADJ_PICKERS = [function() { return SIMPLE_ADJS.random() }, pick_compound];

function initAll() {
    if (document.getElementById) {
        insertBird();
    }
    else {
        alert("Sorry, your browser doesn't support this script");
    }
}

function pick_compound() {
    return COMPOUND_A1.random() + "-" + COMPOUND_A2.random()
}

function insertBird() {
    let bird = generateBird();
    document.getElementById("generated_bird").textContent = bird;
}

function generateBird() {
    return ADJ_PICKERS.random()() + ' ' + BASE_BIRDS.random()
}
