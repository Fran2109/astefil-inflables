<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\inicioController;
use App\Http\Controllers\alquilerController;
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

Route::get('/', [inicioController::class, "index"]);

Route::get('/zona_de_atencion', [inicioController::class, "zona"]);

Route::get('/consulta', [inicioController::class, "consulta"]);



/* Alquiler */
Route::get('/alquiler', [alquilerController::class, "alquiler"]);

Route::get('/alquiler/{tipo}', [alquilerController::class, "categoria"]);