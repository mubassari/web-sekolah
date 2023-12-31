<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArtikelTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('artikel', function (Blueprint $table) {
            $table->id();
            $table->string('judul');
            $table->text('isi')->nullable();
            $table->string('slug');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('artikel_kategori_id')->nullable();

            $table->foreign('user_id')->references('id')->on('user')->onDelete('no action');
            $table->foreign('artikel_kategori_id')->references('id')->on('artikel_kategori')->onDelete('no action');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('artikel');
    }
}
