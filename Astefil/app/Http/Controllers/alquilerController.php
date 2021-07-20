<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class alquilerController extends Controller
{

    public function alquiler(){
        $inflable = \DB::table('sub_rubros')->where('sub_rubro_rubro', 1)->orderBy('sub_rubro_nombre')->get();
        $salon = \DB::table('sub_rubros')->where('sub_rubro_rubro', 2)->orderBy('sub_rubro_nombre')->get();
        $living = \DB::table('sub_rubros')->where('sub_rubro_rubro', 3)->orderBy('sub_rubro_nombre')->get();
        /* $a_categorias = \DB::table('categorias')->select('nombre_categoria')->orderBy('nombre_categoria')->get();
        $id_categoria = \DB::table('categorias')->where('nombre_categoria', $categoria)->value('id_categoria');
        $a_categoria1 = \DB::table('peliculas')->
                   where('cat1', $id_categoria)->
                 orwhere('cat2', $id_categoria)->
                 orwhere('cat3', $id_categoria)->
                 orwhere('cat4', $id_categoria)->
                 orwhere('cat5', $id_categoria)->get();
        return view('categoria')->with('a_categorias', $a_categorias)->with('id_categoria', $id_categoria)->with('a_categoria1', $a_categoria1); */
        return view('alquiler')->with('inflable', $inflable)->with('salon', $salon)->with('living', $living);
    }

    public function categoria( $tipo ){
        $inflable = \DB::table('sub_rubros')->where('sub_rubro_rubro', 1)->orderBy('sub_rubro_nombre')->get();
        $salon = \DB::table('sub_rubros')->where('sub_rubro_rubro', 2)->orderBy('sub_rubro_nombre')->get();
        $living = \DB::table('sub_rubros')->where('sub_rubro_rubro', 3)->orderBy('sub_rubro_nombre')->get();
        
        return view('alquiler')->with('inflable', $inflable)->with('salon', $salon)->with('living', $living);
    }

}
