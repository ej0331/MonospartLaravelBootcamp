<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Http\Request;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChirpController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);

Route::get('/chirps', [ChirpController::class, 'index']);
Route::middleware(['auth:api'])->group(function () {
    Route::get('/getUser', [AuthController::class, 'getUser']);
    Route::post('/chirps', [ChirpController::class, 'store']);
    Route::put('/chirps/{id}', [ChirpController::class, 'update']);
    Route::delete('/chirps/{id}', [ChirpController::class, 'destroy']);
});
