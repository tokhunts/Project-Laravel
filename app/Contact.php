<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $table='contacts';
    protected $primaryKey = 'id';
    public $incrementing = true;
    public $timestamps = true;
}
