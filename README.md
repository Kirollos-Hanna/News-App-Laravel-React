# News-App-Laravel-React
A news app that retrieves news updates from newsapi.org and displays them to the user. 

## Technologies required
-   [PHP>=7.4](https://www.php.net/downloads)
-   [Composer>=2.0](https://getcomposer.org/)
-   [Laravel>=8.12](https://laravel.com/docs/8.x/installation)
-   [NPM>=6.14](https://nodejs.org/en/)
-   [Node>=12.18](https://nodejs.org/en/)
-   [Lighthouse>=4.18](https://lighthouse-php.com/4.18/getting-started/installation.html#install-via-composer)

Download the appropriate version for your own OS from the links. Once you've installed Composer and added it to your environment. *cd* into your project directory and run the following commands

```
composer global require laravel/installer  // This is to download laravel
```

## How to use locally
Step 1:
```
git clone https://github.com/Kirollos-Hanna/News-App-Laravel-React

cd News-App-Laravel-React/

composer install  // This is to download the required dependancies for laravel

npm install       // This is to download the required dependancies for the front-end
```

Step 2:

If you don't know how to set up a database with laravel follow this step. If you do, then skip this.

go to the **database** folder and create a file called **database.sqlite** inside.

Step 3:

Copy the **.env.example** file into another file and call it **.env**

Navigate to the DB section and remove the following...
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=newsappserver
DB_USERNAME=root
DB_PASSWORD=
```

Then add the following code...
```
DB_CONNECTION=sqlite
```

Step 4:

Generate your App Key

```
php artisan key:generate
```