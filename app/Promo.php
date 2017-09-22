<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promo extends Model
{
    protected $table = 'promos';
    protected $primaryKey = 'id';
    public $incrementing = FALSE;
    public $timestamps = TRUE;
}
