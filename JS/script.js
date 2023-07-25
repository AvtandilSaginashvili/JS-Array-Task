var animals = ["Aardvark","Albatross","Alligator","Alpaca","Ant","Anteater","Antelope","Ape","Armadillo",
"Donkey","Baboon","Badger","Barracuda","Bat","Bear","Beaver","Bee","Bison","Boar","Buffalo","Butterfly",
"Camel","Capybara","Caribou","Cassowary","Cat","Caterpillar","Cattle","Chamois","Cheetah","Chicken","Chimpanzee",
"Chinchilla","Chough","Clam","Cobra","Cockroach","Cod","Cormorant","Coyote","Crab","Crane","Crocodile","Crow","Curlew",
"Deer","Dinosaur","Dog","Dogfish","Dolphin","Dotterel","Dove","Dragonfly","Duck","Dugong","Dunlin","Eagle","Echidna","Eel",
"Eland","Elephant","Elk","Emu","Falcon","Ferret","Finch","Fish","Flamingo","Fly","Fox","Frog","Gaur","Gazelle","Gerbil",
"Giraffe","Gnat","Gnu","Goat","Goldfinch","Goldfish","Goose","Gorilla","Goshawk","Grasshopper","Grouse","Guanaco","Gull",
"Hamster","Hare","Hawk","Hedgehog","Heron","Herring","Hippopotamus","Hornet","Horse","Human","Hummingbird","Hyena","Ibex",
"Ibis","Jackal","Jaguar","Jay","Jellyfish","Kangaroo","Kingfisher","Koala","Kookabura","Kouprey","Kudu","Lapwing","Lark",
"Lemur","Leopard","Lion","Llama","Lobster","Locust","Loris","Louse","Lyrebird","Magpie","Mallard","Manatee","Mandrill",
"Mantis","Marten","Meerkat","Mink","Mole","Mongoose","Monkey","Moose","Mosquito","Mouse","Mule","Narwhal","Newt","Nightingale",
"Octopus","Okapi","Opossum","Oryx","Ostrich","Otter","Owl","Oyster","Panther","Parrot","Partridge","Peafowl","Pelican","Penguin",
"Pheasant","Pig","Pigeon","Pony","Porcupine","Porpoise","Quail","Quelea","Quetzal","Rabbit","Raccoon","Rail","Ram","Rat","Raven", 
"R deer", "R panda","Reindeer","Rhinoceros","Rook","Salamander","Salmon", "Sa Dollar","Sandpiper","Sardine","Scorpion","Seahorse",
"Seal","Shark","Sheep","Shrew","Skunk","Snail","Snake","Sparrow","Spider","Spoonbill","Squid","Squirrel","Starling","Stingray",
"Stinkbug","Stork","Swallow","Swan","Tapir","Tarsier","Termite","Tiger","Toad","Trout","Turkey","Turtle","Viper","Vulture","Wallaby",
"Walrus","Wasp","Weasel","Whale","Wildcat","Wolf","Wolverine","Wombat","Woodcock","Woodpecker","Worm","Wren","Yak","Zebra"];



for (var index = 0; index < animals.length; index++) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = index;

    var td = document.createElement("td");

    td.textContent = animals[index];

    tr.appendChild(td1);
    tr.appendChild(td);

    document.getElementById("data").appendChild(tr);

}



document.addEventListener("DOMContentLoaded", function(){
    const progressBarInner = document.querySelector(".progress-bar");

    window.addEventListener('scroll', function(){
        let h = this.document.documentElement;

        let st = h.scrollTop || document.body.scrollTop;
        let sh = h.scrollHeight || document.body.scrollHeight;

        let percent = st / (sh - h.clientHeight) * 100;
        let roundedPercent = Math.round(percent);

        progressBarInner.style.width = roundedPercent + "%";
        progressBarInner.innerText = roundedPercent + "%";
    })
})