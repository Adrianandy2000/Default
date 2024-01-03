CREATE TABLE Autor (
  id_Autor INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Nazwisko VARCHAR(45) NULL,
  Imie VARCHAR(20) NULL,
  Narodowosc VARCHAR(20) NULL,
  Okres twórczosci VARCHAR(45) NULL,
  PRIMARY KEY(id_Autor)
);

CREATE TABLE Klient (
  id_klienta INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Nazwisko VARCHAR(45) NULL,
  Imie VARCHAR(20) NULL,
  Adres VARCHAR(45) NULL,
  Telefon INTEGER UNSIGNED NULL,
  E-mail VARCHAR(45) NULL,
  PRIMARY KEY(id_klienta)
);

CREATE TABLE Ksiazka (
  id_Ksiazka INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Autor_id_Autor INTEGER UNSIGNED NOT NULL,
  Tytul VARCHAR(45) NULL,
  Cena ksiazki INTEGER UNSIGNED NULL,
  Wydawnictwo VARCHAR(20) NULL,
  Miejsce wydania VARCHAR(20) NULL,
  PRIMARY KEY(id_Ksiazka, Autor_id_Autor),
  INDEX Ksiazka_FKIndex1(Autor_id_Autor)
);

CREATE TABLE Zamówienia (
  id_zamówienia INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  Ksiazka_id_Ksiazka INTEGER UNSIGNED NOT NULL,
  Ksiazka_Autor_id_Autor INTEGER UNSIGNED NOT NULL,
  Klient_id_klienta INTEGER UNSIGNED NOT NULL,
  Data zamówienia DATE NULL,
  Data wyslania DATE NULL,
  Koszt wysylki INTEGER UNSIGNED NULL,
  PRIMARY KEY(id_zamówienia, Ksiazka_id_Ksiazka, Ksiazka_Autor_id_Autor, Klient_id_klienta),
  INDEX Zamówienia_FKIndex1(Klient_id_klienta),
  INDEX Zamówienia_FKIndex2(Ksiazka_id_Ksiazka, Ksiazka_Autor_id_Autor)
);


