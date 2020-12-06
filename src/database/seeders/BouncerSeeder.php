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
        $adminUser = User::findOrFail(1);
        $adminUser->assign('admin');
        Bouncer::allow('admin')->to('*');
        Bouncer::allow('admin')->toManage(\Silber\Bouncer\Database\Role::class);
        Bouncer::allow('admin')->toManage(\Silber\Bouncer\Database\Ability::class);
        Bouncer::allow('admin')->everything();
    }
}
