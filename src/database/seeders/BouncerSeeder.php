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
        // $adminUser = User::findOrFail(3);
        // Log::info('User failed to login.', ['id' => $adminUser->name]);
        // $adminUser->assign('admin');
        Bouncer::allow('admin')->to('access-resources');
    }
}
