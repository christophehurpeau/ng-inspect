ng-inspect
=================

Inspect angular scopes with right click

I also wrote the same extension for firefox, and I found this difficulties that I didn't had for the firefox extension :

- The menu item is always visible, we can't display it for just some elements filtrable by a selector
- The element on which the user right-clicked is not easily recuperable (I had to inject a script to get it)
- The scope is logged using console.log, with firefox a special inspect properties is opened

Note: the screenshot bellow is old, now it just log the scope in the console

![properties](http://static.hurpeau.com/images/extensions/ng-inspect/ng-inspect-2.png)
