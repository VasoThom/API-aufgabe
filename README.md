# API-aufgabe

# Aufgabe 1

Wir wollen eine neue API erstellen, mit der unsere Kursinformationen abgerufen und verwaltet werden können. Zuerst müssen wir aber ein wenig planen.
Folgende Ressourcen-Typen benötigen wir:

- Kurse

- Teilnehmer
- Module/Inhalte
  Für alle drei Ressourcen-Typen sollen CRUD-Operationen über die API verfügbar sein. Außerdem soll jede einzelne Ressource erreichbar sein. Plane die entsprechenden Endpoints und überlege dir auch, welche Statuscodes in welchen Situationen zurückgesendet werden können.

## Kurse

/kurs
get /kurs status 200
get /kurs/:index
post /kurs status 201
put /kurs/:index status 204
delete /kurs/:index status 204

get status 200

## Teilnehmer

/teilnehmers
get status 200
post status 201

/telnehmers/:index
get status 200
put status 204
delete status 204

## Module/Inhalte

/modules/
get /modules/ 200
get /modules/:id 200
post /modules/ 201
put /modules/:id 204
delete /modules/:id 204

# Aufgabe 2

Plane eine API für einen Online-Shop. Wir betrachten die API nur aus Kundensicht, wir benötigen also keine Verwaltung des Angebots.
Folgende Ressourcen-Typen sollen dabei zur Verfügung stehen:

- Produkte
- Produkt-Details
- Benutzerkonten
- Bestellungen
  Folgende Anforderungen müssen berücksichtigt werden. Gib für jede Anforderung eine Beispielanfrage (Methode, Pfad, mögliche Statuscodes) an:

1. Produkte werden Kategorien zugeordnet und sollen nach der Kategorie gefiltert werden können.
2. Benutzer können sich ein eigenes Benutzerkonto anlegen.
3. Benutzer können ihr eigenes Benutzerkonto bearbeiten und löschen.
4. Bestellungen sollen nur für das eigene Benutzerkonto ausgelesen werden.
