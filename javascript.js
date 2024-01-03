function fu(str){return str.toUpperCase();}

var taba = [], tabb = [];

function Obj(nazwa, waga, kolor, ia, ib)
{
    this.pid=-1;
    this.nazwa=nazwa;
    this.waga=waga;
    this.kolor=kolor;
    a = ia.indexOf('/');
    this.iaa = ia.substr(0, a);
    this.iab = ia.substr(a+1, ia.length);
    a = ib.indexOf('/');
    this.iba = ib.substr(0, a);
    this.ibb = ib.substr(a+1, ia.length);
    this.fa = function()
    {
        if(this.pid==-1){console.log("nie pszypisano"); return;}
        document.getElementsByClassName("obiekt")[this.pid].getElementsByClassName("interakcja")[0].innerHTML=this.iab;
    };
    this.fb = function()
    {
        if(this.pid==-1){console.log("nie pszypisano"); return;}
        document.getElementsByClassName("obiekt")[this.pid].getElementsByClassName("interakcja")[0].innerHTML=this.ibb;
    };
    this.pszypisz = function(id)
    {
        this.pid=id;
        document.getElementsByClassName("obiekt")[id].getElementsByClassName("nazwa")[0].innerHTML=this.nazwa;
        document.getElementsByClassName("obiekt")[id].getElementsByClassName("wysfietlacz")[0].innerHTML=this.waga+"t<br>"+this.kolor;
        document.getElementsByClassName("obiekt")[id].getElementsByTagName('input')[0].value=this.iaa;
        document.getElementsByClassName("obiekt")[id].getElementsByTagName('input')[1].value=this.iba;  
    };
    this.anuluj = function(){this.pid=-1;};
    
}

 

function p(a, b)
{
    if(b==0) taba[tabb[a]].fa();
    if(b==1) taba[tabb[a]].fb();
}

 

taba[0]=new Obj("Płyta Główna", 1998, "Asus H110M-R/C/SI", "Odtwórz/Odtwarzana", "Schowaj/Schowana");
taba[0].pszypisz(0);
tabb[0]=0;

 

taba[1]=new Obj("Kostki Ram", 9, "HyperX Pedator RGB", "Wyciągnij/Wyciągnięte", "Wymień/Kup nowe jak cię stać");
taba[1].pszypisz(1);
tabb[1]=1;

 

taba[2]=new Obj("Procesor", 1, "Procesor Intel I3 550", "Kup nowy/Produkt zakupiony", "Wymień/Rozwal o ścianę i kup nowy");
taba[2].pszypisz(2);
tabb[2]=2;

 

taba[3]=new Obj("Procesor Graficzny", 1337, "Nvidia Volta GV100", "Działający/Używaj aż padnie", "Niedziałający/Oddaj na gwarancje");
taba[3].pszypisz(3);
tabb[3]=3;

 

taba[4]=new Obj("Karta Graficza", 2020, "ASUS GTX 1060", "Intel/again 14nm :/ ", "AMD/7nm is good :p ");
taba[4].pszypisz(4);
tabb[4]=4;

 

class Klasa{}
 
var ctab = [];
var i = 0;

while(i<3){ctab[i]=new Klasa(); i++;}


 

class Zwierze
{    
    constructor(masa, wiek)
    {
        this.masa=masa;
        this.wiek=wiek;    
    }
    
    patrz(){}
    oddychaj(){}
    
}

 

class Ryba extends Zwierze
{   
    constructor(masa, wiek, pletwy)
    {
        super(masa, wiek);
        this.pletwy=pletwy;
    }
    
    plyn(){};

}

class Ssak extends Zwierze
{
    
    constructor(masa, wiek)
    {
        super(masa, wiek);   
    }
    
    biegnij(){};
    
}

class Pies extends Ssak
{
    
    constructor(masa, wiek, rasa, kolorSiersci)
    {
        super(masa, wiek);
        this.rasa=rasa;
        this.kolorSiersci=kolorSiersci;
    }
    
    szczekaj(){};
    dajLape(){};
    aportuj(){};
    
}

class Ptak extends Zwierze
{
    
    constructor(masa, wiek)
    {
        super(masa, wiek); 
    }
    
    lec(){};
    
}