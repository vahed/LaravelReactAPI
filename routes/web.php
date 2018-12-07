<?php

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

Route::get('/', function () {
    return view('welcome');
});

//Route::resource('metadata', 'MetadataController');
Route::get('metadata', 'MetadataController@index');
/*Route::post('postdata', ['middleware' => 'cors', function(){
    return 'Hello';
}]);*/
Route::post('postdata','MetadataController@store');
//Route::view('/{path?}', 'app');
