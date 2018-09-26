# Lightning Navigation API Demo

## Apex

### DemoController.apxc

Contorller to provide basic object data.

## Components

### Launcher

Named Paged view to launch users into the app

### LauncherButton

Each button and it's associated filter, pageReference, and URL are rendered within the LauncherButton

### MascotList

Tab Override for Mascot__c custom object. Page displays a grid of mascot cards that can be individually shown

### MascotCard

Card that displays the mascot's picture, bio, and links to view and edit the mascot.  This component is also URL addressable, and will change its behavior if it determines it has been navigated to directly.
