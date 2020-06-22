About this project
------------------

This is a PoC project for D9 and React to explore the new features of D9 and extended research on Decoupled CMS concept.
Recommending to setup the local server on Lando.
Please follow the below link's instruction on how to setup D9 site on Lando:
https://docs.lando.dev/config/drupal9.html#getting-started


To start D9
-----------

1. install Lando
2. clone this repository to your local
3. run ```lando start```
4. install Nodejs if not already installed
5. you can access to http://utoronto-9.lndo.site/. if not run ```lando info```


To start React
----------------------

1. go to frontend directory
2. install yarn if not already installed
3. run ```yarn install```
4. run ```yarn start```
5. react cli should automatically opens browser with http://localhost:3000/


How to install modules
----------------------

Note. AVOID using drush dl for downloading module. instead use composer commend to download the modules so it can be managed in central place.
https://www.drupal.org/docs/develop/using-composer/using-composer-to-install-drupal-and-manage-dependencies
```lando composer require drupal/[module_name]```
eg) lando composer require drupal/admin_toolbar


How to run drush command
------------------------

https://docs.lando.dev/config/drupal9.html#using-drush
```lando drush ...```

