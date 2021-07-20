<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class inicioController extends Controller
{
    public function index(){
        return view('inicio');
    }
    
    public function zona(){
        return view('zona');
    }

    public function consulta(){
        return view('consulta');
    }
    
    
}
