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

Then run the following command to migrate your database

```
php artisan migrate
```

Step 4:

Generate your App Key

```
php artisan key:generate
```

Step 5:

Next, you should run the passport:install command. This command will create the encryption keys needed to generate secure access tokens. In addition, the command will create "personal access" and "password grant" clients which will be used to generate access tokens:

```
php artisan passport:install
```

Add the **Client ID** and **Client secret** to the bottom of your **.env** file

```
PASSPORT_CLIENT_ID={YOUR CLIENT ID HERE}
PASSPORT_CLIENT_SECRET={YOUR CLIENT SECRET HERE}
```

Make sure to secure your **Client ID** and **Client secret** somewhere safe where you can access.

Step 6:

In your **.env** file go to the mail section

```
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"
```

and replace it with the following...

```
MAIL_MAILER=smtp
MAIL_HOST=smtp.googlemail.com
MAIL_PORT=465
MAIL_USERNAME={Your User Name}
MAIL_PASSWORD={Your Email Address' Password}
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS={Your Email Address}
MAIL_FROM_NAME="${APP_NAME}"
```

It is preferable to use a gmail account

Final Step:

Run the app locally
```
npm run watch

php artisan serve
```