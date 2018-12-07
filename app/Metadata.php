<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Metadata extends Model
{
    protected $fillable = [
        'title', 'date', 'imdbID','type','poster','created_at','updated_at'
    ];
}

