<?php

namespace Database\Seeders;

use Bouncer;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class BouncerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@newsapp.com',
            'password' => Hash::make('123456789'),
        ]);

        $adminUser = User::where('name','admin') -> first();
        $adminUser->assign('admin');
        Bouncer::allow('admin')->everything();
    }
}
