<?php

use Illuminate\Support\Facades\Route;
use App\Mail\sendAutoGeneratedPassword;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/send-mail/{password}/{email}', function ($password, $email) {
    $user = DB::select('select * from users where email = :email', ['email' => $email]);

    Mail::to($email)->send(new \App\Mail\sendAutoGeneratedPassword($user[0]->name, $password));

    return "Email sent";
});

// Route::get('{slug}', function () {
//     return view('welcome');
// })->where('slug', '(?!api)([A-z\d\-\/_.]+)?');


Route::get('/login', function(){
    return view('welcome');
});

Route::get('/', function(){
    return view('welcome');
});

Route::get('/home', function(){
    return view('welcome');
});

Route::get('/register', function(){
    return view('welcome');
});

Route::get('/favorites', function(){
    return view('welcome');
});

// Auth::routes();
