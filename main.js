var ely = {
  name : "Elysian Sigil",
  id: 1,
  drops: 0,
  amount: 1,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){
      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"ely.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var arcane = {
  name : "Arcane Sigil",
  id: 2,
  drops: 0,
  amount: 1,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){
      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"arcane.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var spectral = {
  name : "Spectral Sigil",
  id: 3,
  drops: 0,
  amount: 1,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){
      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"spectral.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var shield = {
  name : "Spirit Shield",
  id: 4,
  drops: 0,
  amount: 1,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"shield.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var elixer = {
  name : "Holy Elixer",
  id: 5,
  drops: 0,
  amount: 1,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"elixer.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};

var ess = {
  name : "Pure Essence",
  id: 6,
  drops: 0,
  amount: 2500,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"ess.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var law = {
  name : "Law Runes",
  id: 7,
  drops: 0,
  amount: 250,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"law.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var cosmic = {
  name : "Cosmic Runes",
  id: 8,
  drops: 0,
  amount: 500,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"cosmic.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var death = {
  name : "Death Runes",
  id: 9,
  drops: 0,
  amount: 300,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"death.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var soul = {
  name : "Soul Runes",
  id: 10,
  drops: 0,
  amount: 250,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"soul.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};

var cball = {
  name : "Cannonballs",
  id: 11,
  drops: 0,
  amount: 2000,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"cball.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var air = {
  name : "Mystic Air Staff",
  id: 12,
  drops: 0,
  amount: 1,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"air.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var water = {
  name : "Mystic Water Staff",
  id: 13,
  drops: 0,
  amount: 1,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"water.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var earth = {
  name : "Mystic Earth Staff",
  id: 14,
  drops: 0,
  amount: 1,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"earth.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var fire = {
  name : "Mystic Fire Staff",
  id: 15,
  drops: 0,
  amount: 1,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"fire.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};

var aarrows = {
  name : "Adamant Arrows",
  id: 16,
  drops: 0,
  amount: 750,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"aarrows.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var rbolts = {
  name : "Runite Bolts",
  id: 17,
  drops: 0,
  amount: 250,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"rbolts.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var obolts = {
  name : "Onyx Bolts(e)",
  id: 18,
  drops: 0,
  amount: 175,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"obolts.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var mystictop = {
  name : "Mystic Robe Top",
  id: 19,
  drops: 0,
  amount: 1,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"mystictop.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var bottom = {
  name : "Mystic Robe Bottom",
  id: 20,
  drops: 0,
  amount: 1,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"bottom.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};

var aaore = {
  name : "Adamantite Ore",
  id: 21,
  drops: 0,
  amount: 125,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"aaore.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var rore = {
  name : "Runite Ore",
  id: 22,
  drops: 0,
  amount: 20,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"rore.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var abar = {
  name : "Adamantite Bar",
  id: 23,
  drops: 0,
  amount: 35,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"abar.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var tplank = {
  name : "Teak Planks",
  id: 24,
  drops: 0,
  amount: 100,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"tplank.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var dhides = {
  name : "Green Dragonhides",
  id: 25,
  drops: 0,
  amount: 100,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"dhides.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};

var mahog = {
  name : "Mahogany Logs",
  id: 26,
  drops: 0,
  amount: 150,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"mahog.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var magic = {
  name : "Magic Logs",
  id: 27,
  drops: 0,
  amount: 75,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"magic.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var rdt = {
  name : "Uncuts drop",
  id: 28,
  drops: 0,
  amount: 1,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"rdt.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var shark = {
  name : "Raw Sharks",
  id: 29,
  drops: 0,
  amount: 70,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"shark.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var tuna = {
  name : "Tuna Potatoes",
  id: 30,
  drops: 0,
  amount: 30,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"tuna.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};

var horns = {
  name : "Desert Goat Horns",
  id: 31,
  drops: 0,
  amount: 120,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"horns.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var berries = {
  name : "White Berries",
  id: 32,
  drops: 0,
  amount: 120,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"berries.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var wseeds = {
  name : "Watermelon Seeds",
  id: 33,
  drops: 0,
  amount: 24,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"wseeds.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var rseeds = {
  name : "Ranarr Seeds",
  id: 34,
  drops: 0,
  amount: 10,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"rseeds.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
var anti = {
  name : "Antidote++(4)",
  id: 35,
  drops: 0,
  amount: 10,
  add: function(){
    this.drops = this.drops + 1; this.list();
  },
  list: function(){
    if (this.drops > 0){


      document.getElementById(this.id).innerHTML = this.name + " x " + (this.drops * this.amount) + "<button class=\"remove\" onclick=\"anti.del()\">delete 1</button>";
    }
  },
  del: function(){
    if(this.drops > 1){
      this.drops = this.drops - 1; this.list();
    }
    else {
      this.drops = 0;
      document.getElementById(this.id).innerHTML = "";
    }
  }
};
