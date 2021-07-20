@extends("plantilla")

@section("title", "Astefil Inflables")

@section("body")
    <div class="alquiler">
        <div class="categorias">
            
            <div class="titulo">
                <b>Alquileres</b>
            </div>
            <div class="contenido">
                <div class="tipo">
                    Inflables
                </div>
                <div class="opciones">
                    @foreach ($inflable as $inflable)
                        <a href="{{ url('/alquiler/'.$inflable->sub_rubro_nombre)}}">{{$inflable->sub_rubro_nombre}}</a><br>
                    @endforeach
                </div>
                <div class="tipo">
                    Juegos de Salon
                </div>
                <div class="opciones">
                    @foreach ($salon as $salon)
                        <a href="{{ url('/alquiler/'.$salon->sub_rubro_nombre)}}">{{$salon->sub_rubro_nombre}}</a><br>
                    @endforeach
                </div>
                <div class="tipo">
                    Livings
                </div>
                <div class="opciones">
                    @foreach ($living as $living)
                        <a href="{{ url('/alquiler/'.$living->sub_rubro_nombre)}}">{{$living->sub_rubro_nombre}}</a><br>
                    @endforeach
                </div>
            </div>
        </div> {{-- Fin categorias --}}

        <div class="portadas">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem iste, minima quam unde similique aliquid deleniti repellat id fugit doloremque labore at incidunt hic officia dolores? Neque, voluptatem optio.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum sed tempore facere aperiam molestias obcaecati ipsam dolorem, fugit provident iusto distinctio assumenda dicta voluptatum sit, illo accusamus recusandae iure consectetur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat autem, ducimus voluptatem accusamus amet sed sunt expedita, veritatis repellat maiores voluptate quisquam quae dolores fuga. Modi, ipsa rem? Eveniet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem iste, minima quam unde similique aliquid deleniti repellat id fugit doloremque labore at incidunt hic officia dolores? Neque, voluptatem optio.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum sed tempore facere aperiam molestias obcaecati ipsam dolorem, fugit provident iusto distinctio assumenda dicta voluptatum sit, illo accusamus recusandae iure consectetur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat autem, ducimus voluptatem accusamus amet sed sunt expedita, veritatis repellat maiores voluptate quisquam quae dolores fuga. Modi, ipsa rem? Eveniet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem iste, minima quam unde similique aliquid deleniti repellat id fugit doloremque labore at incidunt hic officia dolores? Neque, voluptatem optio.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum sed tempore facere aperiam molestias obcaecati ipsam dolorem, fugit provident iusto distinctio assumenda dicta voluptatum sit, illo accusamus recusandae iure consectetur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat autem, ducimus voluptatem accusamus amet sed sunt expedita, veritatis repellat maiores voluptate quisquam quae dolores fuga. Modi, ipsa rem? Eveniet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem iste, minima quam unde similique aliquid deleniti repellat id fugit doloremque labore at incidunt hic officia dolores? Neque, voluptatem optio.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum sed tempore facere aperiam molestias obcaecati ipsam dolorem, fugit provident iusto distinctio assumenda dicta voluptatum sit, illo accusamus recusandae iure consectetur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quaerat autem, ducimus voluptatem accusamus amet sed sunt expedita, veritatis repellat maiores voluptate quisquam quae dolores fuga. Modi, ipsa rem? Eveniet.
            
        </div>
    </div>
@endsection