# **WEB GYM személyes edzést támogató alkalmazás**

### Fullstack API - Vizsgaremek

<br>

---
# ***User story - agilis felhasználói történet***
<br>

## 1. Edzéstípusok - főoldal

---
><u>***Navigáció***</u><br>

Az oldalon legyen lehetőség, hogy arra az oldalra navigálhassak, amin éppen dolgozni szeretnék.<br>

<u>*Elfogadási kritérium:*</u><br>
>Az oldalon jól értelmezhető menüpontok legyenek a teljes alkalmazás minden oldalához, és ezeket használva a megfelelő oldal töltődjön be a böngészőben.

<br>

---
><u>***Edzéstípusok***</u><br>

Az oldalon minden edzéstípus megjelenik.<br>
Egyet kiválasztva eljutunk az ehhez a típushoz kapcsolható gyakorlatokat tartalmazó oldalra.

<u>*Elfogadási kritérium:*</u><br>
>Az edzéstípusok következő adatait látjuk az oldalon:
>- kategória
>- rövid leírás
>- kép (ha van)

>Kattntásra navigáljon a választott típushoz tartozó gyakorlatokat megjelenítő oldalra.

<br>

---
><u>***Új edzéstípus felvétele***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó új edzéstípust vehet fel a meglévők mellé.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználók számára látható egy új edzéstípus hozzáadására szolgáló felület:
>- az új edzéstípus minden adata rögzíthető
>- a feladat végeztével az adatok az adatbázisba mentődnek
>- a edzéstípusok listája bővül az új elemmel

<br>

---
><u>***Edzéstípus módosítása***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó módosíthassa, karbantarthassa az egyes edzéstípusokat.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználók egy edzéstípust kiválasztva:
>- módosíthassák az edzéstípus adatait
>- a feladat végeztével az adatok az adatbázisba mentődnek
>- a edzéstípusok listája frissül a módosított adatokkal

<br>

---
><u>***Edzéstípus törlése***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó törölhessen edzéstípust.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználó egy edzéstípust kiválasztva:
>- törölhesse a edzéstípus
>- egy megerősítő üzenet jelenjen meg, hogy valóban törölni szerené-e a edzéstípust
>- véglegesen törölhesse a edzéstípust az adatbázisból vagy visszavonhassa a törlési szándékot
>- a feladat végeztével a edzéstípus az adatbázisból törlődjön
>- az edzéstípusok listája frissüljön

<br>

## 2. Kiválasztott edzéstípushoz kapcsolódó gyakorlatok oldal

---
><u>***Navigáció***</u><br>

Az oldalon legyen lehetőség, hogy arra az oldalra navigálhassak, amin éppen dolgozni szeretnék.<br>

<u>*Elfogadási kritérium:*</u><br>
>Az oldalon jól értelmezhető menüpontok legyenek a teljes alkalmazás minden oldalához, és ezeket használva a megfelelő oldal töltődjön be a böngészőben.

<br>

---
><u>***Gyakorlatok listája***</u><br>

A kiválasztott edzéstíptushoz tartozó gyakorlatok listája látható az oldalon.<br>

<u>*Elfogadási kritérium:*</u><br>
>A gyakorlatok következő adatait látjuk az oldalon:
>- megnevezés
>- rövid leírás
>- megdolgoztatott izomcsoport
>- kép (ha van)
>- szériaszám
>- ismétlésszám

<br>

---
><u>***Új gyakorlat felvétele***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó új gyakorlatot vehet fel a meglévők mellé.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználók számára látható egy új gyakorlat hozzáadására szolgáló felület:
>- az új gyakorlat minden adata rögzíthető
>- a feladat végeztével az adatok az adatbázisba mentődnek
>- a gyakorlatok listája bővül az új elemmel

<br>

---
><u>***Gyakorlat módosítása***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó módosíthassa, karbantarthassa az egyes gyakorlatokat.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználók egy gyakorlatot kiválasztva:
>- módosíthassák a gyakorlat adatait
>- a feladat végeztével az adatok az adatbázisba mentődnek
>- a gyakorlatok listája frissül a módosított adatokkal

<br>

---
><u>***Gyakorlat törlése***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó törölhessen gyakorlatot.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználó egy gyakorlatot kiválasztva:
>- törölhesse a gyakorlatot
>- egy megerősítő üzenet jelenjen meg, hogy valóban törölni szerené-e a gyakorlatot
>- véglegesen törölhesse a gyakorlatot az adatbázisból vagy visszavonhassa a törlési szándékot
>- a feladat végeztével a gyakorlat az adatbázisból törlődjön
>- a gyakorlatok listája frissüljön

<br>

---
><u>***Szűrés***</u><br>

A gyakorlatok között lehessen keresni.

<u>*Elfogadási kritérium:*</u><br>
>Egy listából kiválasztható, hogy milyen adat alapján történjen a szűrés (pl.: megnevezés, izomcsoport...).<br>

>Egy megadott érték (kulcsszó) alapján csak azok a gyakorlatok jelenjenek meg, amelyekre a megadott szűrési érték illik

<br>


## 2. Edzésterv összeállító

---
><u>***Navigáció***</u><br>

Az oldalon legyen lehetőség, hogy arra az oldalra navigálhassak, amin éppen dolgozni szeretnék.<br>

<u>*Elfogadási kritérium:*</u><br>
>Az oldalon jól értelmezhető menüpontok legyenek a teljes alkalmazás minden oldalához, és ezeket használva a megfelelő oldal töltődjön be a böngészőben.

<br>

---
><u>***Gyakorlatok listája***</u><br>

A kiválasztott edzéstíptushoz tartozó gyakorlatok listája látható az oldalon.<br>

<u>*Elfogadási kritérium:*</u><br>
>A gyakorlatok következő adatait látjuk az oldalon:
>- megnevezés
>- rövid leírás
>- megdolgoztatott izomcsoport
>- kép (ha van)
>- szériaszám
>- ismétlésszám

<br>

---
><u>***Új gyakorlat felvétele***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó új gyakorlatot vehet fel a meglévők mellé.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználók számára látható egy új gyakorlat hozzáadására szolgáló felület:
>- az új gyakorlat minden adata rögzíthető
>- a feladat végeztével az adatok az adatbázisba mentődnek
>- a gyakorlatok listája bővül az új elemmel

<br>

---
><u>***Gyakorlat módosítása***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó módosíthassa, karbantarthassa az egyes gyakorlatokat.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználók egy gyakorlatot kiválasztva:
>- módosíthassák a gyakorlat adatait
>- a feladat végeztével az adatok az adatbázisba mentődnek
>- a gyakorlatok listája frissül a módosított adatokkal

<br>

---
><u>***Gyakorlat törlése***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó törölhessen gyakorlatot.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználó egy gyakorlatot kiválasztva:
>- törölhesse a gyakorlatot
>- egy megerősítő üzenet jelenjen meg, hogy valóban törölni szerené-e a gyakorlatot
>- véglegesen törölhesse a gyakorlatot az adatbázisból vagy visszavonhassa a törlési szándékot
>- a feladat végeztével a gyakorlat az adatbázisból törlődjön
>- a gyakorlatok listája frissüljön

<br>

---
><u>***Szűrés***</u><br>

A gyakorlatok között lehessen keresni.

<u>*Elfogadási kritérium:*</u><br>
>Egy listából kiválasztható, hogy milyen adat alapján történjen a szűrés (pl.: megnevezés, izomcsoport...).<br>

>Egy megadott érték (kulcsszó) alapján csak azok a gyakorlatok jelenjenek meg, amelyekre a megadott szűrési érték illik

<br>


## 4. Kalóriatáblázat
---
><u>***Navigáció***</u><br>

Az oldalon legyen lehetőség, hogy arra az oldalra navigálhassak, amin éppen dolgozni szeretnék.<br>

<u>*Elfogadási kritérium:*</u><br>
>Az oldalon jól értelmezhető menüpontok legyenek a teljes alkalmazás minden oldalához, és ezeket használva a megfelelő oldal töltődjön be a böngészőben.

<br>

---
><u>***Kalóriatáblázat***</u><br>

Az oldalon látható egy táblázat, mely megjeleníti a különböző élelmiszerek tulajdonságait:
>- megnevezés
>- kalória tartalom
>- fehérje tartalom
>- szénhidrát tartalom
>- zsír tartalom
>- rost tartalom

<u>*Elfogadási kritérium:*</u><br>
>Az adatbázis összes élemiszerének meg lehessen nézni a fent felsorolt tulajdonságait.

<br>

---
><u>***Új élelmiszer felvétele***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó új élelmiszert vehet fel a meglévők mellé.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználók számára látható egy új élelmiszer hozzáadására szolgáló felület:
>- az új élelmiszer minden adata rögzíthető
>- a feladat végeztével az adatok az adatbázisba mentődnek
>- az élelmiszerek listája bővül az új elemmel

<br>

---
><u>***Élelmiszer módosítása***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó módosíthassa, karbantarthassa az egyes élelmiszereket.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználók egy élelmiszert kiválasztva:
>- módosíthassák a élelmiszer adatait
>- a feladat végeztével az adatok az adatbázisba mentődnek
>- az élelmiszerek listája frissül a módosított adatokkal

<br>

---
><u>***Élelmiszer törlése***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó törölhessen élelmiszert.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználó egy élelmiszert kiválasztva:
>- törölhesse az élelmiszert
>- egy megerősítő üzenet jelenjen meg, hogy valóban törölni szerené-e az élelmiszert
>- véglegesen törölhesse az élelmiszert az adatbázisból vagy visszavonhassa a törlési szándékot
>- a feladat végeztével az élelmiszer az adatbázisból törlődjön
>- az élelmiszerek listája frissüljön

<br>

---
><u>***Szűrés***</u><br>

Az élelmiszerek között lehessen keresni.

<u>*Elfogadási kritérium:*</u><br>
>Az élelmiszer megnevezése alapján történjen a szűrés.<br>

>Egy megadott érték (kulcsszó) alapján csak azok az élelmiszerek jelenjenek meg, amelyekre a megadott szűrési érték illik

<br>

---
><u>***Rendezés***</u><br>

Az élelmiszerek legyenek rendezhetők a különböző adataik alapján.

<u>*Elfogadási kritérium:*</u><br>
>Az élelmiszerek rendezhetőek a különböző adataik alapján.<br>

>A rendezés lehet csökkenő, vagy növekvő irányú is.

<br>

## 5. Táplálékkiegészítők
---
><u>***Navigáció***</u><br>

Az oldalon legyen lehetőség, hogy arra az oldalra navigálhassak, amin éppen dolgozni szeretnék.<br>

<u>*Elfogadási kritérium:*</u><br>
>Az oldalon jól értelmezhető menüpontok legyenek a teljes alkalmazás minden oldalához, és ezeket használva a megfelelő oldal töltődjön be a böngészőben.

<br>

---

><u>***Táplálékkiegészítők listája***</u><br>

Az oldalon látható egy táblázat, mely megjeleníti a különböző táplálékkiegészítők tulajdonságait:
>- megnevezés
>- leírás
>- adagolási javaslat
>- kalória tartalom
>- fehérje tartalom
>- szénhidrát tartalom
>- zsír tartalom
>- allergén információ

<u>*Elfogadási kritérium:*</u><br>
>Az adatbázis összes táplálékkiegészítőjének meg lehessen nézni a fent felsorolt tulajdonságait.

<br>

---
><u>***Új táplálékkiegészítő felvétele***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó új táplálékkiegészítőt vehet fel a meglévők mellé.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználók számára látható egy új táplálékkiegészítő hozzáadására szolgáló felület:
>- az új táplálékkiegészítő minden adata rögzíthető
>- a feladat végeztével az adatok az adatbázisba mentődnek
>- a táplálékkiegészítők listája bővül az új elemmel

<br>

---
><u>***Táplálékkiegészítő módosítása***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó módosíthassa, karbantarthassa az egyes táplálékkiegészítőket.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználók egy élelmiszert kiválasztva:
>- módosíthassák a táplálékkiegészítő adatait
>- a feladat végeztével az adatok az adatbázisba mentődnek
>- a táplálékkiegészítők listája frissül a módosított adatokkal

<br>

---
><u>***Táplálékkiegészítő törlése***</u><br>

Adminisztrátori jogosultsággal rendelkező regisztrált felhasználó törölhessen táplálékkiegészítőt.

<u>*Elfogadási kritérium:*</u><br>
>Adminisztrátori jogosultsággal rendelkező felhasználó egy táplálékkiegészítőt kiválasztva:
>- törölhesse a táplálékkiegészítőt
>- egy megerősítő üzenet jelenjen meg, hogy valóban törölni szerené-e a táplálékkiegészítőt
>- véglegesen törölhesse a táplálékkiegészítőt az adatbázisból vagy visszavonhassa a törlési szándékot
>- a feladat végeztével a táplálékkiegészítő az adatbázisból törlődjön
>- a táplálékkiegészítők listája frissüljön

<br>

---
><u>***Szűrés***</u><br>

A táplálékkiegészítők között lehessen keresni.

<u>*Elfogadási kritérium:*</u><br>
>Egy listából kiválasztható, hogy milyen adat alapján történjen a szűrés (pl.: megnevezés, adagolási javaslat, allergén információ...).<br>

>Egy megadott érték (kulcsszó) alapján csak azok a táplálékkiegészítők jelenjenek meg, amelyekre a megadott szűrési érték illik

<br>

---
><u>***Rendezés***</u><br>

A táplálékkiegészítők legyenek rendezhetők a különböző adataik alapján.

<u>*Elfogadási kritérium:*</u><br>
>A táplálékkiegészítők rendezhetők a különböző adataik alapján.<br>

>A rendezés lehet csökkenő, vagy növekvő irányú is.

<br>
## További projektadatok
---

| Projektmegvalósítás |   |
| :------------ |:---------------:|
| prioritás      | magas |
| projekt időtartama  | 5 hét  |

**További fejlesztési lehetőségek**
- A listázási oldalakon lapozó készítése.
- Hibaüzenetek megjelenítése hibás adatmegadás esetén (validálás).
- Lista vagy kártyanézet.
- A főoldalon további hasznos információk megjelenítése.
- A listaoldalakon az adatok sorrendjének átrendezhetősége.