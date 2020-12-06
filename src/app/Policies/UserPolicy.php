<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function viewAny(User $user){
        // return in_array('access-resources', $user->permissions);
        return $user->isAn('admin');
    }

    public function view(User $user){
        // return in_array('access-resources', $user->permissions);
        return $user->isAn('admin');
    }

    public function create(User $user){
        // return in_array('access-resources', $user->permissions);
        return $user->isAn('admin');
    }

    public function update(User $user){
        // return in_array('access-resources', $user->permissions);
        return $user->isAn('admin');
    }

    public function delete(User $user){
        // return in_array('access-resources', $user->permissions);
        return $user->isAn('admin');
    }
}
