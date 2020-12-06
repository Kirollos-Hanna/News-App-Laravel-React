<?php

namespace Database\Seeders;

use Bouncer;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class BouncerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $adminUser = User::where('name','admin') -> first();
        $adminUser->assign('admin');
        Bouncer::allow('admin')->everything();
    }
}
