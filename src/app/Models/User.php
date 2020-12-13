<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Silber\Bouncer\Database\HasRolesAndAbilities;
use \Venturecraft\Revisionable\RevisionableTrait;

class User extends Authenticatable
{
    use RevisionableTrait, HasRolesAndAbilities, HasApiTokens, HasFactory, Notifiable;

    protected $revisionEnabled = true;
    protected $revisionCleanup = true;
    protected $historyLimit = 50;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [];

    public function favorites()
    {
        return $this->hasMany('App\Models\Favorite');
    }
}
